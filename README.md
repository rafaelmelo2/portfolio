# DEV.AI — Portfolio

Portfólio pessoal focado em **Engenharia de Inteligência Artificial**, com seções de sobre, experiência, projetos, skills, depoimentos e contato.

## Stack

- **React 18** + **Vite**
- **Tailwind CSS**
- **Lucide React** (ícones)
- **Docker** (build e execução)

## Pré-requisitos

- **Node.js** 18+ (ou [Bun](https://bun.sh)) para desenvolvimento local
- **Docker** e **Docker Compose** para rodar em container

## Desenvolvimento local

### Com Bun (recomendado)

```bash
bun install
bun run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

### Com npm

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview   # preview do build em localhost:4173
```

## Docker

### Build e execução (produção)

Gera a imagem, faz o build do front e serve com nginx na porta **3000**:

```bash
docker compose up -d
```

Acesse: [http://localhost:3000](http://localhost:3000)

### Modo desenvolvimento com Docker

Sobe o app em modo dev com hot-reload na porta **5173**:

```bash
docker compose --profile dev up dev
```

## Estrutura do projeto

```
portfolio/
├── public/           # assets estáticos, favicon
├── src/
│   ├── components/   # componentes React modularizados
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── index.js  # barrel export
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css     # Tailwind
├── Dockerfile        # multi-stage: Node build + nginx
├── docker-compose.yml
├── nginx.conf        # config do nginx para SPA
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Personalização

- **Nome e foto:** edite os placeholders `[Seu Nome]` e as URLs de imagem em `Hero.jsx`, `About.jsx`, `Testimonials.jsx` e `Footer.jsx`.
- **Links:** atualize os `href="#"` em `Contact.jsx` (e-mail, LinkedIn, GitHub) e o botão "Download CV" em `Hero.jsx`.
- **Conteúdo:** textos, experiências e projetos estão nos respectivos componentes em `src/components/`.

## Scripts

| Comando        | Descrição                    |
|----------------|------------------------------|
| `bun run dev`  | Servidor de desenvolvimento  |
| `bun run build`| Build para produção          |
| `bun run preview` | Preview do build          |
| `bun run lint` | Lint do projeto              |

## Licença

Uso livre para fins pessoais e portfólio.
