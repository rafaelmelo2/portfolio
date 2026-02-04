# Dados do Portfólio

Os arquivos JSON nesta pasta alimentam o site. Edite-os para atualizar o conteúdo sem mexer nos componentes.

## Estrutura

| Arquivo | Conteúdo |
|---------|----------|
| `projetos.json` | Projetos técnicos |
| `livros.json` | Livros lidos/lendo |
| `cursos.json` | Cursos e certificações |
| `skills.json` | Arsenal tecnológico |
| `contatos.json` | Links de contato e configuração do formulário |
| `trajetoria.json` | Experiência profissional |
| `depoimentos.json` | Depoimentos de colegas/gestores |

## Imagens dos projetos

Coloque as imagens em `public/imgs/projects/`. No JSON, use só o nome do arquivo em `imagem`:

```json
"imagem": "tradebot.png"
```

## Certificados (cursos)

Coloque os arquivos em **`public/certificados/`**. Formatos: **PDF** ou **imagem** (jpg, png, gif, webp, svg).

No `cursos.json`, use o caminho do certificado e, se quiser, o link de validação na plataforma:

```json
"link": "/certificados/nome-do-curso.pdf",
"linkValidacao": "https://platforma.com/verificar/codigo-123"
```

- **link** = arquivo local (`/certificados/arquivo.pdf` ou `.jpg`) ou URL do certificado.
- **linkValidacao** = URL da página onde o certificado pode ser validado (ex.: link da Alura, Udemy, Coursera).

Detalhes em `public/certificados/README.md`.

## valorAprendizado (projetos)

- **5** = Card em destaque (ocupa 2 colunas no grid)
- **4** = Card médio
- **1–3** = Card normal

## Adicionar/remover itens

Abra o JSON, edite o array e salve. O site reflete as mudanças ao recarregar.
