---
titulo: "Emissão de notas, organizações e revisão de TCC"
data: 2026-03-15
resumo: "Semana dividida entre o sistema de PDV pessoal, a plataforma web de um parceiro e a reta final do TCC, além de uma entrega pontual no lakehouse da empresa."
tags: [integracoes, frontend, react, typescript, series-temporais, backend]
projetos: ["Lakehouse de dados", "Plataforma web de um parceiro", "Sistema de pedidos e PDV para lanchonetes", "TCC: previsão de preços de ações"]
origem: bot-semanal
semana: 2026-W11
---

A semana misturou frentes bem diferentes: uma integração de emissão fiscal no sistema de pedidos, melhorias de organizações e utilitários em uma plataforma de parceiro, uma entrega no lakehouse da empresa e a revisão final do TCC.

## Sistema de pedidos e PDV para lanchonetes

O trabalho principal foi a integração com a Focus NFe no backend, para viabilizar a emissão de documentos fiscais a partir do fluxo de pedidos. Isso envolveu mudanças no backend para acomodar o novo serviço.

Também corrigi um problema de modelagem: os códigos NCM estavam tratados como um código único, quando o correto é permitir múltiplos valores por item. Foi um lembrete de que decisões de modelagem tomadas no início do projeto aparecem de novo quando a regra fiscal entra em cena.

## Plataforma web de um parceiro

Na plataforma web de um parceiro, avancei em melhorias na área de organizations, ajustei rotas e adicionei novos utilitários no frontend. Nada de grande complexidade isoladamente, mas o tipo de trabalho que deixa a base mais consistente para as próximas funcionalidades.

## Lakehouse de dados

Na empresa onde trabalho, entreguei uma nova funcionalidade no lakehouse de dados. O item não pede mais detalhe do que isso, então fica o registro da entrega.

## TCC: previsão de preços de ações

No TCC de previsão de preços de ações, fiz correções de português e inglês e melhorias na estrutura do texto. Revisão de forma é trabalho menos glamouroso que modelagem, mas é o que faz o conteúdo técnico ser lido como foi escrito para ser lido.

## Stack da semana

- Python, FastAPI, PostgreSQL, React, TypeScript, TanStack, Tailwind CSS e Vite na plataforma do parceiro
- TypeScript, React, Vite, Express, PostgreSQL, Sequelize e Vitest no PDV
