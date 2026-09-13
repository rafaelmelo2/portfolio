# Posts do blog — contrato

Cada post é um arquivo Markdown nesta pasta. O site lê tudo em tempo de build
(`src/data/blog.js`); não há banco nem API. Posts novos chegam por Pull Request
(do bot semanal ou manual) e só vão ao ar depois do merge.

## Arquivo

- Caminho: `src/content/blog/AAAA-MM-DD-slug-curto.md`
- O nome do arquivo (sem `.md`) é a URL: `/blog/AAAA-MM-DD-slug-curto`
- Slug: minúsculas, sem acento, palavras separadas por `-`, até 60 caracteres
- Um post por arquivo. Nunca renomeie um arquivo já publicado (quebra o link)

## Frontmatter

Entre `---` no topo do arquivo. Sintaxe aceita (subconjunto de YAML):
`chave: valor`, strings entre aspas duplas e listas na mesma linha `[a, b, c]`.
Não use strings multilinha nem objetos aninhados.

| Campo       | Obrigatório | Regra |
|-------------|-------------|-------|
| `titulo`    | sim | até 90 caracteres, entre aspas |
| `data`      | sim | `AAAA-MM-DD` (data de publicação) |
| `resumo`    | sim | 1 ou 2 frases, até 220 caracteres, entre aspas |
| `tags`      | sim | de 3 a 6 slugs que existam em `tags.json` |
| `projetos`  | não | nomes públicos dos projetos citados, ex.: `["Botterage"]` |
| `origem`    | não | `bot-semanal`, `linkedin` ou `manual` |
| `semana`    | não | semana ISO coberta pelo post, ex.: `2026-W37` |
| `rascunho`  | não | `true` esconde o post do site |

Tag que não existe em `tags.json` é ignorada pelo site. Para criar uma tag nova,
adicione em `tags.json` no mesmo PR (e explique no corpo do PR).

## Markdown aceito

- `##` e `###` para seções (nunca `#`: o título vem do frontmatter)
- Parágrafos separados por linha em branco
- Listas com `- item` e numeradas com `1. item`
- `**negrito**`, `*itálico*`, `` `código` ``
- Blocos de código com três crases e a linguagem: ```` ```python ````
- Citação com `> texto`
- Separador `---`
- Links `[texto](https://...)` ou internos `[texto](/#projetos)`

Não suportado (aparece como texto puro): HTML, imagens, tabelas, notas de rodapé.

## Exemplo

```markdown
---
titulo: "Como parei de recalcular o mesmo relatório toda manhã"
data: 2026-09-20
resumo: "Cache em Parquet, agendamento e envio automático: o que mudou numa rotina de dados que rodava na mão."
tags: [automacao, engenharia-de-dados, python, dashboards]
projetos: ["Automações e dashboards industriais"]
origem: bot-semanal
semana: 2026-W38
---

Abertura curta, em primeira pessoa.

## O problema

...

## O que eu fiz

- ...

## Stack da semana

- Python, Polars, Plotly
```
