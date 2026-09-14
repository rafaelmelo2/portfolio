---
titulo: "Semana de atendimento com IA, ajustes no PDV e evolução dos dashboards"
data: 2025-11-23
resumo: "Reestruturei o projeto de atendimento com IA, adicionei parser de pedidos e ajustes de cardápio, e corrigi rotas e dados no sistema de pedidos e PDV."
tags: [ia, typescript, backend, react, testes]
projetos: ["Atendimento com IA para lanchonete", "Automações e dashboards industriais", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2025-W47
---

A semana girou em torno dos meus projetos pessoais de lanchonete: de um lado, o atendimento com IA ganhou uma estrutura nova e funcionalidades de pedido; de outro, o sistema de pedidos e PDV recebeu uma bateria de correções nas rotas do menu e nos dados de saída. Na empresa onde trabalho, o projeto de automações e dashboards industriais seguiu em evolução contínua.

## Atendimento com IA: reestruturação e parser de pedidos

O projeto de atendimento com IA passou por uma mudança de estrutura do repositório inteiro. Reorganizar a base abriu espaço para as novidades da semana: um parser de pedidos com gerenciamento de estado, ajustes no fluxo de entrega e no tratamento de adicionais, além da atualização das instruções para o novo cardápio.

Trabalhar com TypeScript, Bun e Zod ajuda bastante nesse tipo de recurso: validar a entrada antes de montar o estado do pedido reduz a chance de o agente seguir com dados incompletos ou malformados.

## Sistema de pedidos e PDV: rotas mais claras e correções

No sistema de pedidos e PDV, o destaque foi a rota do menu, que agora retorna o nome da categoria em vez do ID. Foi um ajuste que passou por algumas iterações até ficar redondo, e o ganho é direto: quem consome a API não precisa resolver o ID para exibir a informação.

Outros trabalhos da semana:

- Rota de saída para os dados cadastrados no banco.
- Correção de um ponto que estava buscando informação do lado do frontend quando deveria vir do backend.
- Ajuste no seed de dados para respeitar a flag de exibição no site.
- Testes envolvendo a exportação de adicionais.

O stack desse projeto é TypeScript com React e Vite no frontend, Express com PostgreSQL e Sequelize no backend, e Vitest nos testes.

## Automações e dashboards industriais

Na empresa onde trabalho, a semana teve a evolução do projeto de automações e dashboards industriais, seguindo o ritmo de melhorias contínuas que vem sendo feito.

## Stack da semana

- TypeScript
- Bun
- Zod
- React
- Vite
- Express
- PostgreSQL
- Sequelize
- Vitest
