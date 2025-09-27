#!/usr/bin/env python3
"""
Gravação de pontos faciais neon com alpha + timestamps.
Salva PNGs BGRA em 'frames/' e um preview MP4 sem alpha.
Gera 'frames_list.txt' com durações entre frames para ffmpeg.
"""

import os
import time
import cv2
import mediapipe as mp
import numpy as np

# ===========================
# == CONFIGURAÇÃO (edite) ==
# ===========================
OUT_DIR = "frames"             # pasta para PNGs
PREVIEW_FILE = "face_preview.mp4"
FPS = 120                      # taxa alvo de gravação (alta para suavidade)
WIDTH, HEIGHT = 1280, 720      # resolução de captura/saída
HEX_COLOR = "#3A86FF"          # cor dos pontos em HEX
POINT_RADIUS = 1               # raio do ponto nítido
POINT_RADIUS_GLOW = 5         # raio base do glow (maior)
GLOW_BLUR_SIGMA = 20           # sigma para GaussianBlur (controle do spread)
GLOW_INTENSITY = 0.8           # intensidade do glow (0..1)
LINE_THICKNESS = 2             # espessura da linha entre ombros

# === CONFIGURAÇÕES DE CÂMERA LENTA ===
SLOW_MOTION_FACTOR = 1.0       # fator de câmera lenta (1.0 = velocidade normal)
PLAYBACK_FPS = 30              # FPS de reprodução (para câmera lenta)
ULTRA_SLOW_FPS = 7.5           # FPS para super câmera lenta (4x mais lento)
HIGH_QUALITY_FPS = 60          # FPS para alta qualidade sem câmera lenta

SAVE_PNG = True                # salva PNGs com alpha
SAVE_PREVIEW_MP4 = True        # salva MP4 de preview (sem alpha)
MAX_FRAMES = 99999             # limite de segurança (alto por padrão)
# ===========================

def hex_to_bgr(hex_color: str):
    h = hex_color.lstrip("#")
    if len(h) != 6:
        raise ValueError("HEX deve ter 6 dígitos, ex: #00faff")
    r = int(h[0:2], 16)
    g = int(h[2:4], 16)
    b = int(h[4:6], 16)
    return (b, g, r)

NEON_BGR = hex_to_bgr(HEX_COLOR)

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

# Abre câmera
cap = cv2.VideoCapture(0)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, WIDTH)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, HEIGHT)
# tenta forçar FPS (nem sempre funciona)
cap.set(cv2.CAP_PROP_FPS, FPS)

# Prepara VideoWriter de preview (sem alpha)
if SAVE_PREVIEW_MP4:
    fourcc = cv2.VideoWriter_fourcc(*"mp4v")
    # Usa FPS original para o vídeo (sem slow motion)
    out_preview = cv2.VideoWriter(PREVIEW_FILE, fourcc, FPS, (WIDTH, HEIGHT))
else:
    out_preview = None

# Controle de tempo para garantir FPS desejado (gravação em alta FPS)
target_dt = 1.0 / float(FPS)

frame_idx = 0
timestamps = []  # lista de timestamps (em segundos, epoch time) por frame gravado

print(f"Iniciando gravação em {FPS} FPS (alta qualidade).")
print(f"Para câmera lenta, use PLAYBACK_FPS = {PLAYBACK_FPS} nos comandos ffmpeg.")
print("Pressione 'q' na janela para parar.")

try:
    while frame_idx < MAX_FRAMES:
        iter_start = time.perf_counter()

        ret, frame = cap.read()
        if not ret:
            print("Erro lendo frame da câmera. Saindo.")
            break

        # normaliza tamanho
        frame = cv2.resize(frame, (WIDTH, HEIGHT))
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = holistic.process(rgb)

        # camada para desenhar (BGR)
        overlay_bgr = np.zeros((HEIGHT, WIDTH, 3), dtype=np.uint8)
        point_list = []

        # Face landmarks -> pontos
        if results.face_landmarks:
            for lm in results.face_landmarks.landmark:
                x = int(lm.x * WIDTH)
                y = int(lm.y * HEIGHT)
                point_list.append((x, y))
                # desenha ponto nítido (centro)
                cv2.circle(overlay_bgr, (x, y), POINT_RADIUS, NEON_BGR, -1)

            # Se quiser habilitar linhas da malha (pode reduzir performance),
            # descomente o bloco abaixo:
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

        # Pose landmarks -> ombros e linha entre eles (pescoço visual)
        if results.pose_landmarks:
            try:
                pts = results.pose_landmarks.landmark
                left = pts[11]
                right = pts[12]
                x1, y1 = int(left.x * WIDTH), int(left.y * HEIGHT)
                x2, y2 = int(right.x * WIDTH), int(right.y * HEIGHT)
                point_list.append((x1, y1))
                point_list.append((x2, y2))
                # pontos dos ombros
                cv2.circle(overlay_bgr, (x1, y1), POINT_RADIUS + 1, NEON_BGR, -1)
                cv2.circle(overlay_bgr, (x2, y2), POINT_RADIUS + 1, NEON_BGR, -1)
                # linha entre ombros (comente esta linha para remover a "linha do pescoço")
                # cv2.line(overlay_bgr, (x1, y1), (x2, y2), NEON_BGR, LINE_THICKNESS)
            except Exception:
                pass

        # ---- Glow / halo ----
        glow_layer = np.zeros_like(overlay_bgr)
        for (x, y) in point_list:
            cv2.circle(glow_layer, (x, y), POINT_RADIUS_GLOW, NEON_BGR, -1)

        glow_blurred = cv2.GaussianBlur(glow_layer, (0, 0), sigmaX=GLOW_BLUR_SIGMA, sigmaY=GLOW_BLUR_SIGMA)
        overlay_bgr = cv2.addWeighted(overlay_bgr, 1.0, glow_blurred, GLOW_INTENSITY, 0)

        # ---- Alpha mask e BGRA ----
        alpha_mask = (np.any(overlay_bgr != 0, axis=2).astype(np.uint8) * 255)
        overlay_bgra = cv2.cvtColor(overlay_bgr, cv2.COLOR_BGR2BGRA)
        overlay_bgra[:, :, 3] = alpha_mask

        # SALVA PNG com alpha (BGRA)
        if SAVE_PNG:
            png_path = os.path.join(OUT_DIR, f"frame_{frame_idx:05d}.png")
            cv2.imwrite(png_path, overlay_bgra)
            timestamps.append(time.time())  # registra o tempo *quando* salvou o PNG

        # grava preview mp4 (sem alpha)
        if SAVE_PREVIEW_MP4 and out_preview is not None:
            out_preview.write(overlay_bgr)

        # mostra composição overlay sobre imagem original para visualizar
        alpha_norm = (alpha_mask.astype(np.float32) / 255.0)[:, :, None]
        composite = (frame.astype(np.float32) * (1 - alpha_norm) + overlay_bgr.astype(np.float32) * alpha_norm).astype(np.uint8)
        cv2.imshow("Neon Face Points - Press 'q' to stop", composite)

        # controle de FPS: dorme o restante do tempo para manter target_dt
        iter_elapsed = time.perf_counter() - iter_start
        to_sleep = target_dt - iter_elapsed
        if to_sleep > 0:
            time.sleep(to_sleep)

        # check tecla (usar pequeno waitKey para captar GUI events)
        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

        frame_idx += 1

finally:
    cap.release()
    if SAVE_PREVIEW_MP4 and out_preview is not None:
        out_preview.release()
    cv2.destroyAllWindows()

    # grava frames_list.txt com durations entre frames (necessário para timing exato)
    if SAVE_PNG and len(timestamps) > 0:
        list_path = os.path.join(OUT_DIR, "frames_list.txt")
        # calcula durações entre timestamps
        durations = []
        for i in range(len(timestamps) - 1):
            durations.append(timestamps[i+1] - timestamps[i])
        # se não houver variação (ex: constante), usa 1/FPS por segurança
        if len(durations) == 0:
            durations = [1.0 / FPS]
        # escreve o arquivo (formato do concat demuxer)
        with open(list_path, "w") as f:
            for i, d in enumerate(durations):
                fname = f"frame_{i:05d}.png"
                f.write(f"file '{fname}'\n")
                # garante pelo menos 1e-4
                f.write(f"duration {max(d, 0.0001):.6f}\n")
            # repete a última imagem (requisito do concat demuxer)
            last_index = len(durations)
            f.write(f"file 'frame_{last_index:05d}.png'\n")
        print(f"Arquivo '{list_path}' gerado com {len(durations)+1} entradas.")
    else:
        print("Nenhum PNG foi salvo; pulando geração de frames_list.txt")

    # estatísticas
    total_time = timestamps[-1] - timestamps[0] if len(timestamps) >= 2 else 0.0
    print(f"Frames gravados: {frame_idx}")
    if total_time > 0:
        print(f"Duração real (aprox): {total_time:.3f}s, média FPS real: {len(timestamps)/total_time:.2f}")

    print("\n=== COMANDOS FFMPEG PARA ALTA QUALIDADE ===")
    if SAVE_PNG and len(timestamps) > 0:
        print("\n🎬 CÂMERA LENTA EM ALTA QUALIDADE:")
        print("1) Câmera lenta suave (recomendado para qualidade):")
        print(f"   ffmpeg -framerate {PLAYBACK_FPS} -i {OUT_DIR}/frame_%05d.png -c:v libvpx-vp9 -pix_fmt yuva420p -crf 15 -b:v 0 face_points_smooth_slow.webm")
        print("")
        print("2) Super câmera lenta (4x mais lento, máxima qualidade):")
        print(f"   ffmpeg -framerate {ULTRA_SLOW_FPS} -i {OUT_DIR}/frame_%05d.png -c:v libvpx-vp9 -pix_fmt yuva420p -crf 10 -b:v 0 face_points_ultra_slow.webm")
        print("")
        print("3) Câmera lenta com timing exato (preserva durações originais):")
        print(f"   ffmpeg -f concat -safe 0 -i {OUT_DIR}/frames_list.txt -vsync vfr -c:v libvpx-vp9 -pix_fmt yuva420p -crf 15 face_points_exact_timing.webm")
        
        print("\n🚀 ALTA QUALIDADE SEM CÂMERA LENTA:")
        print("4) Vídeo normal em alta qualidade:")
        print(f"   ffmpeg -framerate {HIGH_QUALITY_FPS} -i {OUT_DIR}/frame_%05d.png -c:v libvpx-vp9 -pix_fmt yuva420p -crf 10 -b:v 0 face_points_high_quality.webm")
        print("")
        print("5) Máxima qualidade (FPS original):")
        print(f"   ffmpeg -framerate {FPS} -i {OUT_DIR}/frame_%05d.png -c:v libvpx-vp9 -pix_fmt yuva420p -crf 8 -b:v 0 face_points_max_quality.webm")
        
        print("\n📱 COMPATIBILIDADE (MP4 sem alpha):")
        print("6) MP4 para compatibilidade máxima:")
        print(f"   ffmpeg -framerate {PLAYBACK_FPS} -i {OUT_DIR}/frame_%05d.png -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow face_points_compatible.mp4")
        print("")
        print("7) MP4 super câmera lenta:")
        print(f"   ffmpeg -framerate {ULTRA_SLOW_FPS} -i {OUT_DIR}/frame_%05d.png -c:v libx264 -pix_fmt yuv420p -crf 15 -preset slow face_points_ultra_slow.mp4")
        
        print("\n💡 DICAS DE QUALIDADE:")
        print("   • CRF menor = maior qualidade (8-10 = máxima, 15-18 = boa)")
        print("   • WEBM com VP9 = melhor compressão com alpha")
        print("   • MP4 com H.264 = melhor compatibilidade")
        print("   • -preset slow = melhor qualidade (mais lento para processar)")
    else:
        print("Nenhum PNG gerado; use o preview MP4 'face_preview.mp4' para checar.")
