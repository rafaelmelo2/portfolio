---
titulo: "Painel financeiro, landing pública e detalhes de interface"
data: 2026-09-27
resumo: "Semana dedicada a um único projeto: montei o painel financeiro da organização de ponta a ponta, construí a landing pública e passei por ajustes finos de interface e performance."
tags: [frontend, backend, dashboards, performance, react, fastapi]
projetos: ["Plataforma web de um parceiro"]
origem: bot-semanal
semana: 2026-W39
---

A semana foi toda concentrada em um projeto só: a plataforma web de um parceiro. O fio condutor foi dar forma a duas frentes grandes — o painel financeiro da organização e a landing pública — com vários refinamentos de interface e performance no caminho.

## Painel financeiro da organização

Construí o painel financeiro de ponta a ponta. No backend, criei os endpoints com FastAPI e as consultas em PostgreSQL que alimentam os KPIs, a visão geral com série diária e a receita por evento. No frontend, defini os tipos e as queries com TanStack, e organizei a navegação: o painel ganhou rota própria, item na sidebar e os KPIs na entrada.

Dentro desse mesmo movimento, o extrato deixou de ser uma tela isolada e virou uma aba, com filtro por evento e exportação. Também criei a aba de repasses pagos, complementando a visão financeira.

O aprendizado aqui foi de modelagem de painel: separar bem o que é agregação (séries, totais por evento) do que é listagem paginável (extrato, repasses) muda o desenho das queries e do cache no frontend. Cada tipo de dado pede uma estratégia própria de busca e exibição.

## Landing pública

Do zero, montei a landing pública da plataforma: tokens de design, tipografia e primitivas como base; depois cabeçalho, menu mobile em Dialog e rodapé; e por fim a home com hero, seção de como funciona, organizadores, FAQ e CTA final. As páginas de Sobre e Contato seguiram o mesmo sistema visual.

Também apliquei a marca da plataforma do parceiro em todo o aplicativo, com identidade nova no cabeçalho e no hero. Ter as primitivas prontas antes de montar as telas fez diferença: as páginas públicas saíram consistentes entre si, e a aplicação interna absorveu a marca sem retrabalho de estilo.

## Refinamentos de interface e performance

Trabalhei em detalhes que melhoram a percepção da aplicação:

- **DataList com carga por botão e fade de continuidade**: o carregamento incremental ganhou um feedback visual que mantém a sensação de continuidade da lista.
- **Busca de município pelo nome, sem exigir a UF**: simplifiquei o formulário ao remover uma exigência que o próprio dado já resolve.
- **Export por keyset e import de resultados em lote**: troquei a paginação por offset por keyset na exportação, o que mantém o desempenho estável em bases grandes, e agrupei a importação de resultados em lote para reduzir o número de operações.

O ponto técnico da semana foi o keyset pagination: para exportações que percorrem muitas linhas, estabilidade de tempo por página importa mais do que a familiaridade do número de página.

## Stack da semana

- Python
- FastAPI
- PostgreSQL
- React
- TypeScript
- TanStack
- Tailwind CSS
- Vite
