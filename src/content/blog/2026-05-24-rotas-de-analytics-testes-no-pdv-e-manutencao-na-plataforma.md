---
titulo: "Rotas de analytics, testes no PDV e manutenção na plataforma de IA"
data: 2026-05-24
resumo: "Semana com entregas em três frentes: rotas de analytics no atendimento com IA, ambiente de testes com Docker Compose no PDV e ajustes na plataforma corporativa de IA."
tags: [ia, automacao, n8n, testes, docker, typescript]
projetos: ["Atendimento com IA para lanchonete", "Plataforma de IA corporativa", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2026-W21
---

A semana girou em torno de três frentes: o projeto pessoal de atendimento com IA para lanchonete, o sistema de pedidos e PDV e a plataforma de IA corporativa na empresa onde trabalho. Foram dias de adicionar funcionalidades, corrigir problemas e organizar o ambiente de desenvolvimento.

## Rotas de analytics no atendimento com IA

No projeto de atendimento com IA para lanchonete, adicionei rotas de analytics ao serviço escrito em Python. Foi uma entrega direta de API: definir os endpoints e integrá-los ao serviço que já roda os fluxos no n8n.

O aprendizado aqui foi de desenho de API: pensar em rotas de leitura como um módulo separado dentro do serviço, com responsabilidade própria, ajuda a manter o código organizado conforme o projeto cresce.

## Testes e ambiente no PDV

No sistema de pedidos e PDV para lanchonetes, dediquei tempo à base de qualidade do projeto:

1. Adicionei testes com Vitest cobrindo partes do backend em Express.
2. Criei um `docker compose` para o ambiente de testes, usando PostgreSQL com Sequelize.
3. Ajustei o `.gitignore` para ignorar diretórios de worktrees do git.

Ter um ambiente de testes definido por compose deixa claro como subir o banco e rodar a suíte de forma repetível, e o uso de worktrees com git facilita trabalhar em mais de uma branch ao mesmo tempo sem bagunçar o diretório principal.

## Manutenção na plataforma de IA corporativa

Na empresa onde trabalho, na plataforma de IA corporativa, a semana teve três frentes: uma nova funcionalidade, a correção de um problema e uma refatoração de código. Como se trata de trabalho corporativo, não entro em detalhes do sistema, mas o ciclo completo de feature, correção e refatoração no mesmo projeto mostra bem a rotina de manutenção de uma plataforma desse tipo: além de construir o novo, é preciso manter o existente saudável.

## Stack da semana

- Python e n8n no atendimento com IA
- TypeScript, React, Vite, Express, PostgreSQL, Sequelize e Vitest no PDV
- Docker Compose para o ambiente de testes
