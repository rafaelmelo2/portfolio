# Visão geral do repositório — Portfolio DEV.AI

Documento em Markdown com a descrição do projeto, estrutura e uso.

---

## O que é

Repositório do **portfólio pessoal** (Rafael Melo), focado em **Engenharia de Inteligência Artificial** e desenvolvimento de software. Site estático em SPA (Single Page Application) com seções de apresentação, experiência, projetos, habilidades, depoimentos e contato.

---

## Stack

| Camada      | Tecnologia        |
|------------|--------------------|
| Frontend   | React 18, Vite     |
| Estilos    | Tailwind CSS       |
| Ícones     | Lucide React       |
| Roteamento | React Router DOM   |
| Deploy     | Docker + nginx, Netlify |

---

## Estrutura do projeto

```
portfolio/
├── public/                 # Assets estáticos
│   ├── certificados/       # PDFs de certificados
│   ├── demos/             # Demos (ex.: cutover dashboard)
│   └── favicon.svg
├── src/
│   ├── components/        # Componentes React
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Blog.jsx
│   │   ├── Cursos.jsx
│   │   ├── Livros.jsx
│   │   ├── CertificatePreview.jsx
│   │   ├── DemoPreview.jsx
│   │   └── index.js
│   ├── config/
│   │   └── nav.js
│   ├── data/              # Conteúdo em JSON
│   │   ├── contatos.json
│   │   ├── cursos.json
│   │   ├── depoimentos.json
│   │   ├── livros.json
│   │   ├── projetos.json
│   │   ├── skills.json
│   │   └── trajetoria.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── imgs/                  # Imagens (foto, projetos)
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── netlify.toml
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── content-portfolio.md   # Referência de conteúdo
└── projetos.md
```

---

## Conteúdo (seções do site)

- **Hero** — Apresentação e CTA (ex.: Download CV).
- **Sobre** — Resumo, foco (Computer Vision, Edge AI), objetivo e local.
- **Experiência** — Trajetória profissional (dados em `trajetoria.json`).
- **Projetos** — Projetos técnicos, full stack, acadêmicos, jogos (dados em `projetos.json`).
- **Skills** — Competências (dados em `skills.json`).
- **Depoimentos** — Testemunhos (dados em `depoimentos.json`).
- **Contato** — E-mail, LinkedIn, GitHub (dados em `contatos.json`).
- **Cursos / Livros / Certificados / Demos** — Conteúdo complementar.

Para alterar textos e listas, edite os JSON em `src/data/`; não é obrigatório mexer nos componentes.

---

## Como rodar

### Desenvolvimento (Bun)

```bash
bun install
bun run dev
```

Acesso: [http://localhost:5173](http://localhost:5173)

### Desenvolvimento (npm)

```bash
npm install
npm run dev
```

### Build de produção

```bash
bun run build
bun run preview   # http://localhost:4173
```

### Docker (produção)

```bash
docker compose up -d
```

Acesso: [http://localhost:3000](http://localhost:3000)

### Docker (dev com hot-reload)

```bash
docker compose --profile dev up dev
```

---

## Scripts

| Comando           | Descrição               |
|-------------------|-------------------------|
| `bun run dev`     | Servidor de desenvolvimento |
| `bun run build`   | Build para produção     |
| `bun run preview`| Preview do build        |
| `bun run lint`   | Lint (ESLint)           |

---

## Personalização

- **Nome e foto:** `Hero.jsx`, `About.jsx`, `Testimonials.jsx`, `Footer.jsx`.
- **Links e contato:** `Contact.jsx`, `src/data/contatos.json`.
- **Projetos e experiência:** `src/data/projetos.json`, `src/data/trajetoria.json`.
- **Referência de textos:** arquivo `content-portfolio.md`.

---

## Licença

Uso livre para fins pessoais e portfólio.
