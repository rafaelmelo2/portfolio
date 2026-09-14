---
titulo: "Semana de correções no PDV e uma novidade nos dashboards"
data: 2025-09-07
resumo: "Semana marcada por ajustes no ambiente do sistema de pedidos e PDV e por uma nova funcionalidade nas automações e dashboards da empresa."
tags: [docker, frontend, typescript, react, automacao]
projetos: ["Automações e dashboards industriais", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2025-W36
---

A semana teve dois ritmos bem diferentes: de um lado, uma entrega nova no trabalho com automações e dashboards; do outro, uma sequência de correções no meu projeto pessoal de pedidos e PDV para lanchonetes, quase todas ligadas a ambiente e execução.

## Nova funcionalidade nas automações e dashboards industriais

Na empresa onde trabalho, entreguei uma nova funcionalidade no projeto de automações e dashboards industriais. O item da semana não detalha o escopo, então fico no que ele sustenta: foi uma entrega de funcionalidade dentro desse projeto.

## Sistema de pedidos e PDV: semana de ajustes finos

No meu projeto pessoal de pedidos e PDV para lanchonetes, a semana foi de correções. Nada de funcionalidades novas: o foco foi fazer o projeto rodar de forma consistente em diferentes contextos.

As correções passaram por:

1. Ajustes no pipeline de CI, incluindo o script de `npm run ci`.
2. Correção no Vite, que estava resolvendo dependências do Node quando o comportamento esperado era outro.
3. Trabalho no Docker: limpeza do que era desnecessário na configuração e correção de erros que apareceram no processo.
4. Um ajuste de porta que estava causando erro na execução.

### O que aprendi

- Configuração de build e bundler merece atenção específica: o Vite resolvendo módulos de um contexto errado é o tipo de problema que só aparece quando se entende como ele separa o que roda no navegador do que roda no Node.
- Configurações de Docker acumulam excessos com o tempo; revisar e remover o desnecessário deixa a imagem mais simples de manter.
- Ter um script de CI funcionando de ponta a ponta ajuda a pegar esse tipo de inconsistência de ambiente antes de virar surpresa.

## Stack da semana

- TypeScript
- React
- Vite
- Express
- PostgreSQL
- Sequelize
- Vitest
- Docker
