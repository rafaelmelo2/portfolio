---
titulo: "Semana de avanços em automação, IA e PDV"
data: 2026-05-17
resumo: "Evolução de automações industriais, nova funcionalidade na plataforma de IA corporativa e avanços no sistema de pedidos com ponte de impressão e rotina de NFC."
tags: [automacao, ia, frontend, backend, typescript, postgresql]
projetos: ["Automações e dashboards industriais", "Plataforma de IA corporativa", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2026-W20
---

A semana passou por três frentes bem distintas: automações e dashboards no contexto da empresa onde trabalho, a plataforma de IA corporativa e o projeto pessoal de pedidos e PDV para lanchonetes. Mesmo com contextos diferentes, os três exigiram o mesmo cuidado de evoluir o que já existe sem quebrar o que está em uso.

## Automações e dashboards industriais

Na empresa onde trabalho, segui a evolução do projeto de automações e dashboards. Trabalhei em ajustes e melhorias incrementais nos fluxos e painéis, mantendo a rotina de evolução contínua que o projeto vem recebendo. Como o item desta semana foi de natureza geral, o foco foi acompanhar o desenvolvimento do projeto e garantir que as entregas seguissem consistentes com o que já estava construído.

## Plataforma de IA corporativa

Também na empresa, entreguei uma nova funcionalidade na plataforma de IA corporativa. Foi um trabalho de implementação de feature dentro de uma base já existente, o que sempre pede atenção para integrar o novo código aos padrões e às estruturas que a plataforma já adota.

## Sistema de pedidos e PDV para lanchonetes

No projeto pessoal de pedidos e PDV, avancei em duas frentes:

- **Ponte de impressão em Python**: adicionei um componente que faz a comunicação entre o sistema e a impressora, escrito em Python e funcionando como uma ponte ao lado da aplicação principal em TypeScript.
- **Rotina de NFC**: incluí na lista de pendências a implementação do fluxo de nota fiscal ao consumidor, organizando o que precisa ser feito para essa parte do sistema.

O aprendizado principal aqui foi sobre arquitetura de ponte: separar a impressão em um processo próprio em Python deixa a aplicação web mais simples e permite tratar o hardware de impressão de forma isolada, sem misturar responsabilidades no backend em Express.

## Stack da semana

- TypeScript
- React
- Vite
- Express
- PostgreSQL
- Sequelize
- Vitest
- Python
