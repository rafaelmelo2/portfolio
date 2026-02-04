# Certificados (cursos)

Coloque aqui os arquivos dos certificados usados na seção **Cursos** do portfólio.

## Formatos suportados

- **Imagens:** `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`
- **PDF:** `.pdf`

## Como usar

1. Salve o arquivo nesta pasta (ex.: `alura-react.pdf`, `udemy-node.png`).
2. No `src/data/cursos.json`, no campo `link` do curso, use o caminho a partir da raiz do site:

```json
"link": "/certificados/alura-react.pdf"
```

ou, se preferir só o caminho relativo:

```json
"link": "/certificados/meu-curso.jpg"
```

Os caminhos são sempre relativos ao site: `/certificados/nome-do-arquivo.ext`.

## Nomenclatura

Use nomes sem espaços (ex.: `curso-de-java-2024.pdf`) para evitar problemas em alguns navegadores.
