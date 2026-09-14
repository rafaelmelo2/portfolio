---
titulo: "Refatoração no PDV, organizações e um começo em Rust"
data: 2026-03-22
resumo: "Semana dividida entre o sistema de pedidos e PDV, melhorias na plataforma web de um parceiro, o início de uma ferramenta pessoal em Rust e uma correção nas automações industriais."
tags: [react, typescript, backend, rust]
projetos: ["Automações e dashboards industriais", "Ferramenta pessoal em Rust", "Plataforma web de um parceiro", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2026-W12
---

A semana girou em torno de organização de código e evolução incremental: refatorei o coração do sistema de pedidos, melhorei a gestão de organizações na plataforma de um parceiro e dei o pontapé inicial em uma ferramenta pessoal escrita em Rust. Nas automações industriais da empresa onde trabalho, o foco foi corrigir um problema pontual.

## Sistema de pedidos e PDV para lanchonetes

O maior volume de trabalho foi aqui. No backend, reestruturei o `OrderController` para ganhar legibilidade e organização, separei melhor os tipos e os fluxos relacionados ao fechamento da mesa e aos itens já pagos, e adicionei suporte a categorias nos adicionais dos produtos — o que dá mais flexibilidade na montagem do cardápio.

No frontend, refatorei vários componentes para deixá-los mais coesos. Também corrigi o método de autenticação da emissão de NFC-e, que passou a usar Basic Auth da forma correta, e criei um script rápido para pagamento por mesa, útil para agilizar a operação. Por fim, gerei um dump do banco de dados.

O aprendizado da semana: quando um controller acumula responsabilidades de vários fluxos (mesa, itens pagos, fechamento), refatorar tipos e estrutura junto costuma revelar acoplamentos que não aparecem olhando arquivo por arquivo.

## Plataforma web de um parceiro

Na plataforma construída com FastAPI, PostgreSQL, React e TypeScript, dediquei o tempo a melhorias na área de organizations, tanto no backend quanto na interface.

## Ferramenta pessoal em Rust

Comecei um projeto novo em Rust: criei a estrutura inicial do repositório com configuração, um guia rápido e os módulos base, e em seguida adicionei um módulo com funcionalidades relacionadas a IA. É um projeto em começo de vida, mas já com a base organizada para crescer.

## Automações e dashboards industriais

Na empresa onde trabalho, a semana teve uma correção de problema nas automações e dashboards industriais — um ajuste pontual em meio às demais frentes.

## Stack da semana

- Rust
- TypeScript
- React
- Vite
- Express
- PostgreSQL
- Sequelize
- Vitest
- Python
- FastAPI
- TanStack
- Tailwind CSS
