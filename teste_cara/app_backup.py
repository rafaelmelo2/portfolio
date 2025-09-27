import os
import cv2
import mediapipe as mp
import numpy as np
import time

# ===========================
# == CONFIGURAÇÃO (edite) ==
# ===========================
OUT_DIR = "frames"             # pasta para salvar PNGs com alpha
PREVIEW_FILE = "face_preview.mp4"
FPS = 120                       # <-- Aumente/Reduza aqui (ex: 30, 60)
WIDTH, HEIGHT = 1280, 720      # resolução de captura/saída
HEX_COLOR = "#3A86FF"          # <-- cor dos pontos em HEX (ex: "#00faff", "#ff00ff")
POINT_RADIUS = 3               # raio do ponto nítido
POINT_RADIUS_GLOW = 10         # raio usado para desenhar a base do glow (maior)
GLOW_BLUR_SIGMA = 25           # sigma do GaussianBlur para espalhar o glow
GLOW_INTENSITY = 0.75          # peso do glow na composição (0..1)
LINE_THICKNESS = 2             # espessura das linhas (ombros, etc)
SAVE_PNG = True                # salvar PNGs com alpha (True)
SAVE_PREVIEW_MP4 = True        # salvar MP4 de preview (sem alpha)
MAX_FRAMES = 99999             # limite (apenas por segurança), deixe alto para gravação longa
# ===========================

# Converte HEX para BGR (OpenCV usa BGR)
def hex_to_bgr(hex_color: str):
    h = hex_color.lstrip("#")
    if len(h) != 6:
        raise ValueError("HEX deve ter 6 dígitos, ex: #00faff")
    r = int(h[0:2], 16)
    g = int(h[2:4], 16)
    b = int(h[4:6], 16)
    return (b, g, r)

NEON_BGR = hex_to_bgr(HEX_COLOR)

# Prepara pasta de saída
os.makedirs(OUT_DIR, exist_ok=True)

# Inicializa MediaPipe Holistic
mp_holistic = mp.solutions.holistic
holistic = mp_holistic.Holistic(
    static_image_mode=False,
    model_complexity=1,
    refine_face_landmarks=True,
    min_detection_confidence=0.5,
    min_tracking_confidence=0.5
)

# Inicializa captura
cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, WIDTH)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, HEIGHT)
# tenta forçar FPS na câmera (nem sempre suportado)
cap.set(cv2.CAP_PROP_FPS, FPS)

# VideoWriter de preview (sem alpha) — fundo preto
if SAVE_PREVIEW_MP4:
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    out_preview = cv2.VideoWriter(PREVIEW_FILE, fourcc, FPS, (WIDTH, HEIGHT))
else:
    out_preview = None

frame_idx = 0
t0 = time.time()
print("Gravando... pressione 'q' para parar. PNGs serão salvos em:", OUT_DIR)

try:
    while frame_idx < MAX_FRAMES:
        ret, frame = cap.read()
        if not ret:
            print("Não foi possível ler a frame da câmera. Saindo.")
            break

        # garante o tamanho
        frame = cv2.resize(frame, (WIDTH, HEIGHT))
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = holistic.process(rgb)

        # camada onde desenharemos os pontos (BGR)
        overlay_bgr = np.zeros((HEIGHT, WIDTH, 3), dtype=np.uint8)

        # Lista de pontos desenháveis (x,y) para uso no glow & nítido
        point_list = []

        # ----- FACE LANDMARKS -----
        if results.face_landmarks:
            for lm in results.face_landmarks.landmark:
                # lm.x/lm.y são normalizados (0..1)
                x = int(lm.x * WIDTH)
                y = int(lm.y * HEIGHT)
                # guardamos ponto para desenhar depois
                point_list.append((x, y))
                # desenha ponto nítido já (a parte nítida ficará por cima do glow)
                cv2.circle(overlay_bgr, (x, y), POINT_RADIUS, NEON_BGR, -1)

            # opcional: desenhar linhas do mesh (pode deixar lento em máquinas fracas)
            # para ativar, descomente o bloco abaixo:
            """
            try:
                mesh_connections = mp.solutions.face_mesh.FACEMESH_TESSELATION
                for (a, b) in mesh_connections:
                    a_lm = results.face_landmarks.landmark[a]
                    b_lm = results.face_landmarks.landmark[b]
                    xa, ya = int(a_lm.x * WIDTH), int(a_lm.y * HEIGHT)
                    xb, yb = int(b_lm.x * WIDTH), int(b_lm.y * HEIGHT)
                    cv2.line(overlay_bgr, (xa, ya), (xb, yb), NEON_BGR, 1)
            except Exception:
                pass
            """

        # ----- POSE LANDMARKS (ombros/pescoço) -----
        if results.pose_landmarks:
            pts = results.pose_landmarks.landmark
            # IDs úteis: 11 = left_shoulder, 12 = right_shoulder
            try:
                left = pts[11]
                right = pts[12]
                x1, y1 = int(left.x * WIDTH), int(left.y * HEIGHT)
                x2, y2 = int(right.x * WIDTH), int(right.y * HEIGHT)
                # adiciona pontos de ombro
                point_list.append((x1, y1))
                point_list.append((x2, y2))
                # desenha os pontos e a linha do pescoço
                cv2.circle(overlay_bgr, (x1, y1), POINT_RADIUS + 1, NEON_BGR, -1)
                cv2.circle(overlay_bgr, (x2, y2), POINT_RADIUS + 1, NEON_BGR, -1)
                # cv2.line(overlay_bgr, (x1, y1), (x2, y2), NEON_BGR, LINE_THICKNESS)
            except Exception:
                pass

        # ----- GLOW / HALO -----
        # 1) desenha pontos grossos numa camada separada (base do glow)
        glow_layer = np.zeros_like(overlay_bgr)
        for (x, y) in point_list:
            cv2.circle(glow_layer, (x, y), POINT_RADIUS_GLOW, NEON_BGR, -1)

        # 2) blur para espalhar o brilho
        # Kernel size automático: (0,0) com sigma controla
        glow_blurred = cv2.GaussianBlur(glow_layer, (0, 0), sigmaX=GLOW_BLUR_SIGMA, sigmaY=GLOW_BLUR_SIGMA)

        # 3) mistura o glow com a camada nítida
        overlay_bgr = cv2.addWeighted(overlay_bgr, 1.0, glow_blurred, GLOW_INTENSITY, 0)

        # ----- CRIA CANAL ALPHA -----
        # alpha onde houver qualquer pixel não-zero (seja do glow ou dos pontos)
        alpha_mask = (np.any(overlay_bgr != 0, axis=2).astype(np.uint8) * 255)
        # combina BGR + A -> BGRA
        overlay_bgra = cv2.cvtColor(overlay_bgr, cv2.COLOR_BGR2BGRA)
        overlay_bgra[:, :, 3] = alpha_mask

        # ----- SALVA PNG COM TRANSPARÊNCIA -----
        if SAVE_PNG:
            png_path = os.path.join(OUT_DIR, f"frame_{frame_idx:05d}.png")
            # cv2.imwrite preserva o canal alpha quando BGRA
            cv2.imwrite(png_path, overlay_bgra)

        # ----- SALVA PREVIEW MP4 (sem alpha) -----
        if SAVE_PREVIEW_MP4 and out_preview is not None:
            # out_preview espera BGR 3 canais
            out_preview.write(overlay_bgr)

        # ----- MOSTRA PREVIEW AO VIVO (composto sobre câmera para visual) -----
        # Faz composição simples do overlay sobre a frame original para ver o efeito
        alpha_norm = (alpha_mask.astype(np.float32) / 255.0)[:, :, None]
        composite = (frame.astype(np.float32) * (1 - alpha_norm) + overlay_bgr.astype(np.float32) * alpha_norm).astype(np.uint8)
        cv2.imshow("Neon Face Points - Press 'q' to stop", composite)

        # controle de FPS via waitKey
        key = cv2.waitKey(int(1000 / FPS)) & 0xFF
        if key == ord("q"):
            break

        frame_idx += 1

finally:
    cap.release()
    if SAVE_PREVIEW_MP4 and out_preview is not None:
        out_preview.release()
    cv2.destroyAllWindows()
    t1 = time.time()
    elapsed = t1 - t0
    print(f"Frames gravados: {frame_idx}, tempo: {elapsed:.2f}s, média FPS real: {frame_idx / max(elapsed,1e-6):.2f}")

    print("\nPróximo passo (opcional):")
    print(" - Para gerar um vídeo com transparência (WEBM com alpha), rode no terminal:")
    print(f"   ffmpeg -framerate {FPS} -i {OUT_DIR}/frame_%05d.png -c:v libvpx-vp9 -pix_fmt yuva420p face_points_alpha.webm")
    print(" - Ou para gerar MP4 sem alpha (a partir dos PNGs):")
    print(f"   ffmpeg -r {FPS} -i {OUT_DIR}/frame_%05d.png -c:v libx264 -pix_fmt yuv420p face_points_from_png.mp4")
