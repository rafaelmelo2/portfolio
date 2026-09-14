---
titulo: "Vínculo por código, lançamentos por mensagem e ajustes de rota no app de finanças"
data: 2026-07-26
resumo: "Semana com foco no aplicativo de finanças: vínculo de usuário por código, integração de mensagens com Evolution API e OpenRouter, tema claro e correções de telefone e roteamento, além de um ajuste pontual na empresa."
tags: [react, typescript, integracoes, llm, frontend]
projetos: ["Aplicativo de finanças", "Automações e dashboards industriais"]
origem: bot-semanal
semana: 2026-W30
---

A semana girou em torno do aplicativo de finanças, com novas funcionalidades de integração e um conjunto de correções de comportamento. No trabalho na empresa onde trabalho, houve um ajuste pontual de problema em automações e dashboards.

## Vínculo por código e lançamentos por mensagem

No aplicativo de finanças, implementei o vínculo por código enviado pelo usuário, uma nova forma de associar a conta da pessoa ao aplicativo. Também integrei a Evolution API e o OpenRouter para permitir lançamentos financeiros por mensagem: a mensagem enviada é interpretada por um modelo de linguagem e convertida em lançamento.

Foi um exercício interessante de combinar duas peças: a camada de mensagens, que recebe e entrega o conteúdo, e a camada de interpretação, que transforma texto livre em dados estruturados.

## Identidade visual e tema claro

Adicionei o tema claro e atualizei a identidade visual das páginas do aplicativo, usando Tailwind CSS para manter a consistência dos estilos. Também documentei o redesign da landing page, registrando a proposta em texto.

## Correções de telefone e roteamento

Três correções na semana:

1. Casamento de números de telefone com e sem o nono dígito brasileiro, para tratar as duas formas do mesmo número.
2. Ajuste na montagem da rota antes dos routers na raiz do aplicativo, corrigindo a ordem de registro das rotas.
3. Revisão da migration para incluir apenas as tabelas relacionadas ao WhatsApp.

A correção do roteamento reforçou algo que já tinha visto em outros projetos: a ordem em que rotas são registradas muda o comportamento da aplicação, e nem sempre isso fica evidente até algo parar de funcionar.

## Automações e dashboards industriais

Na empresa onde trabalho, corrigi um problema em automações e dashboards industriais. Trabalho de manutenção rotineira, sem detalhes que possam ser compartilhados publicamente.

## Stack da semana

- TypeScript
- React
- Zod
- Tailwind CSS
- Evolution API
- OpenRouter
