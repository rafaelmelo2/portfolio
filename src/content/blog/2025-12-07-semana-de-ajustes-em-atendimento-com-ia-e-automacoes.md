---
titulo: "Semana de ajustes em atendimento com IA e automações industriais"
data: 2025-12-07
resumo: "Evolução do prompt do assistente de atendimento, retorno ao modelo R1 e novas entregas nas automações e dashboards industriais."
tags: [ia, llm, automacao, dashboards, typescript]
projetos: ["Atendimento com IA para lanchonete", "Automações e dashboards industriais"]
origem: bot-semanal
semana: 2025-W49
---

A semana girou em torno de dois frentes: o assistente de atendimento com IA do projeto pessoal da lanchonete e as automações com dashboards industriais na empresa onde trabalho. Nos dois casos, o trabalho foi de refinamento: ajustar o que já existe para que se comporte melhor.

## Atendimento com IA para lanchonete

No assistente de atendimento, dediquei parte da semana a adicionar novas funcionalidades no prompt. Trabalhar no prompt é um exercício de especificação: cada instrução nova precisa conviver com as existentes sem gerar ambiguidade no comportamento do modelo.

Também fiz uma correção envolvendo o modelo: voltei a usar o R1. Trocar de modelo não é só uma questão de preferência; cada modelo reage de forma diferente ao mesmo prompt, e o comportamento do assistente precisa ser reavaliado a cada mudança.

### O que isso ensinou

- Prompts são código de alta dimensão: mudanças pequenas podem alterar comportamentos em cadeia.
- A escolha do modelo faz parte do design da aplicação, não é um detalhe de infraestrutura.

## Automações e dashboards industriais

Na empresa onde trabalho, entreguei uma nova funcionalidade nas automações e dashboards industriais e corrigi um problema que havia surgido. Por se tratar de contexto de trabalho, fico no nível do problema técnico: foram ajustes de evolução e manutenção em rotinas automatizadas e painéis de visualização.

### O que isso ensinou

- Manutenção em automações exige entender o fluxo inteiro antes de mexer em um ponto específico.
- Correções em dashboards industriais pedem atenção ao contexto dos dados que alimentam os painéis.

## Stack da semana

- TypeScript
- Bun
- Zod
