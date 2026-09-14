---
titulo: "Ajustes de rotas e autenticação no PDV e evolução do TCC"
data: 2026-02-08
resumo: "Semana de correções no sistema de pedidos e PDV, com limpeza de redirecionamentos, liberação de rotas e ajustes de login, além de avanços no TCC de previsão de preços de ações."
tags: [backend, frontend, react, seguranca, series-temporais, typescript]
projetos: ["Sistema de pedidos e PDV para lanchonetes", "TCC: previsão de preços de ações"]
origem: bot-semanal
semana: 2026-W06
---

A semana girou em torno de dois frentes: estabilizar o sistema de pedidos e PDV, corrigindo rotas e autenticação, e seguir evoluindo o TCC de previsão de preços de ações. Foram ajustes pontuais, mas que exigiram revisar o caminho completo entre frontend e backend.

## Sistema de pedidos e PDV: rotas e autenticação

Comecei removendo um redirecionamento que apontava para uma API que não é mais utilizada. Depois, liberei uma rota do backend para permitir o consumo dos itens do cardápio pelo frontend.

No lado da autenticação, ajustei as rotas de login, o dashboard administrativo e os fluxos de acesso. O aprendizado da semana aqui é que mudanças em rotas de API precisam ser acompanhadas de perto em todos os pontos que as consomem, porque um endpoint desatualizado ou bloqueado quebra a interface de forma silenciosa.

## TCC: previsão de preços de ações

No TCC, fiz ajustes na inclusão de novos dados e na comparação entre eles. Também configurei um compilador de LaTeX dentro do VS Code, o que facilita a escrita do documento acadêmico sem sair do editor. Além disso, produzi um guia de uso do projeto.

O que levo dessa parte: preparar o ambiente de escrita científica dentro da própria ferramenta de desenvolvimento reduz a fricção entre código e texto, e documentar o uso de um projeto ajuda a consolidar o próprio entendimento sobre ele.

## Stack da semana

- TypeScript, React e Vite no frontend
- Express no backend
- PostgreSQL com Sequelize
- Vitest nos testes
