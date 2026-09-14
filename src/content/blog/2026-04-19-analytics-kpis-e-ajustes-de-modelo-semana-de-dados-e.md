---
titulo: "Analytics, KPIs e ajustes de modelo: semana de dados e interfaces"
data: 2026-04-19
resumo: "Semana com entregas em três frentes: uma nova funcionalidade na plataforma de IA corporativa, uma seção de analytics e KPIs na plataforma web de um parceiro e ajustes no modelo de itens do cardápio do PDV."
tags: [frontend, dashboards, react, postgresql, typescript, backend]
projetos: ["Plataforma de IA corporativa", "Plataforma web de um parceiro", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2026-W16
---

A semana girou em torno de dados virando interface: uma seção de analytics com KPIs na plataforma web de um parceiro, uma nova funcionalidade na plataforma de IA corporativa e ajustes no modelo de itens do cardápio do meu projeto de PDV.

## Plataforma web de um parceiro

O destaque foi a implementação da seção de analytics para organizações, com KPIs e estatísticas de eventos no dashboard. No backend, os dados vêm de endpoints em FastAPI sobre PostgreSQL; no frontend, construí a visualização com React e TypeScript usando TanStack, mantendo o padrão visual com Tailwind CSS e o build com Vite.

Além do analytics, trabalhei na home: melhorias no layout, ajustes visuais na landing page e o destaque da seção "about", agora com imagem de corredores. São mudanças de apresentação, mas exigiram cuidado para manter a consistência com o restante da aplicação.

O aprendizado aqui foi de modelagem de métricas: definir KPIs e estatísticas de eventos envolve decidir o que agregar e como expor isso na API antes de pensar em qualquer gráfico.

## Plataforma de IA corporativa

Na empresa onde trabalho, entreguei uma nova funcionalidade na plataforma de IA corporativa. O item não detalha o escopo, então fico no que ele sustenta: mais uma peça adicionada à plataforma.

## Sistema de pedidos e PDV para lanchonetes

No meu projeto pessoal de pedidos e PDV, ajustei o modelo dos itens do cardápio e a forma como eles são consumidos pela aplicação. Mudanças nesse modelo afetam tanto a persistência com Sequelize sobre PostgreSQL quanto o consumo no frontend React, então o ajuste precisou considerar os dois lados.

Foi um lembrete de que o modelo de dados de um cardápio tende a evoluir junto com o uso: o que parece suficiente no início pede refinamento quando as telas de pedido começam a consumir os dados de verdade.

## Stack da semana

- Python e FastAPI
- PostgreSQL e Sequelize
- React, TypeScript, TanStack, Tailwind CSS e Vite
- Express e Vitest
