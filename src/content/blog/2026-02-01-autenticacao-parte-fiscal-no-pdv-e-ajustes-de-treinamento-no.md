---
titulo: "Autenticação, parte fiscal no PDV e ajustes de treinamento no TCC"
data: 2026-02-01
resumo: "Semana dedicada ao sistema de pedidos e PDV: autenticação JWT, cache de pedidos temporários, emissão de NFC-e e várias correções."
tags: [backend, seguranca, integracoes, machine-learning, react, postgresql]
projetos: ["Automações e dashboards industriais", "Sistema de pedidos e PDV para lanchonetes", "TCC: previsão de preços de ações"]
origem: bot-semanal
semana: 2026-W05
---

A semana ficou concentrada no sistema de pedidos e PDV para lanchonetes, com avanços em autenticação, emissão fiscal e uma sequência de correções no ambiente e nos dados. No meio disso, ainda ajustei o treinamento do modelo do meu TCC e resolvi uma correção nos dashboards industriais da empresa onde trabalho.

## Autenticação e gestão de usuários

Adicionei autenticação com JWT ao sistema e a gestão de usuários administradores. No caminho, precisei corrigir as rotas de login, que apresentavam problemas após a implementação inicial. Foi um bom exercício de fechar o ciclo: implementar o fluxo de autenticação e logo em seguida estabilizar as rotas que o expõem.

## Parte fiscal e cache de pedidos

O sistema ganhou suporte a emissão de NFC-e via integração com a Focus NFe. Isso exigiu trabalho em várias frentes:

1. Adicionar códigos fiscais aos itens do menu e aos adicionais.
2. Corrigir o carregamento de NCM, que não estava sendo feito corretamente.
3. Incluir o nome da categoria na parte fiscal.
4. Adicionar logs na camada fiscal para facilitar o acompanhamento das emissões.

Também implementei cache de pedidos temporários no site principal, guardando o pedido enquanto ele ainda não foi finalizado.

## Limpeza do ambiente e do repositório

Reservei parte da semana para organização: removi um Docker que não era mais utilizado, coloquei o app legado em backup e limpei o repositório para preparar a chegada de novas funcionalidades. Ajustei também o projeto para rodar no WSL, além de preparar a configuração de roteamento com nginx, o arquivo de ambiente de produção e o ajuste para não versionar mais o arquivo de segredos de produção. Corrigi ainda o seed, que havia parado de funcionar.

## TCC e dashboards

No TCC de previsão de preços de ações, fiz correções no processo de treinamento do modelo. Na empresa onde trabalho, atendi a uma correção de problema nas automações e dashboards industriais.

## Stack da semana

- TypeScript
- React
- Vite
- Express
- PostgreSQL
- Sequelize
- Vitest
- Docker
- nginx
