---
titulo: "Migrações no PDV, módulos em Rust e novidades no lakehouse"
data: 2026-04-05
resumo: "Semana com avanços no sistema de pedidos, refatoração da ferramenta em Rust e entregas de funcionalidade e correção nos projetos da empresa."
tags: [backend, postgresql, rust, react, typescript, lakehouse]
projetos: ["Automações e dashboards industriais", "Ferramenta pessoal em Rust", "Lakehouse de dados", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2026-W14
---

A semana misturou trabalho em projetos pessoais e entregas na empresa onde trabalho. No sistema de pedidos, o foco foi organizar o backend com migrações e ajustar detalhes de usabilidade; na ferramenta em Rust, continuei a reorganização em módulos; e nos projetos internos saíram uma funcionalidade nova e uma correção.

## Sistema de pedidos e PDV para lanchonetes

No backend, adotei o Sequelize CLI e criei o suporte a migrações, incluindo uma migration que remove a restrição de unicidade do campo de código fiscal dos itens de menu. A versão anterior da migration precisou de correção, e o processo reforçou a importância de revisar migrações com o mesmo cuidado do código de aplicação, já que elas definem o estado do banco.

No frontend, atualizei o dashboard administrativo para usar um novo utilitário na exportação de relatórios, centralizando essa lógica em um só lugar. Também melhorei a usabilidade da seleção de categorias no menu do pedido.

## Ferramenta pessoal em Rust

Continuei o trabalho de estruturação do projeto: refatorei o overlay em módulos separados, adicionei um novo módulo no código e atualizei os assets com um novo ícone. Dividir o overlay em módulos deixou cada responsabilidade mais clara e facilita evoluir as partes de forma independente.

## Trabalho na empresa

Na empresa onde trabalho, entreguei uma funcionalidade nova tanto nas automações e dashboards industriais quanto no lakehouse de dados, além de uma correção de problema no lakehouse. São os tipos de entrega que fazem parte da rotina: evoluir o que existe e corrigir o que apareceu no caminho.

## Stack da semana

- Rust
- TypeScript
- React
- Vite
- Express
- PostgreSQL
- Sequelize
- Vitest
