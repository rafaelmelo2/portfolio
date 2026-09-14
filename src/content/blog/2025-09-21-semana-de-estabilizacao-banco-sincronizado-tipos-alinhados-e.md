---
titulo: "Semana de estabilização: banco sincronizado, tipos alinhados e navegação por perfil no PDV"
data: 2025-09-21
resumo: "Semana dedicada a corrigir inicialização de banco, erros de tipagem e navegação no sistema de pedidos, além de ajustes em automações industriais."
tags: [typescript, react, postgresql, docker, frontend, backend]
projetos: ["Automações e dashboards industriais", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2025-W38
---

A semana foi marcada por trabalho de estabilização: de um lado, ajustes em automações e dashboards na empresa onde trabalho; do outro, uma sequência de correções no sistema de pedidos e PDV para lanchonetes, que é um projeto pessoal. Foram muitos bugs de banco de dados, tipagem e navegação, e cada um deles deixou uma lição concreta.

## Sincronização de banco e seeders sob controle

O ponto mais recorrente no PDV foi a inicialização do banco de dados. Descobri que alguns erros de comportamento vinham da falta de sincronização entre os modelos e o schema real, então corrigi a inicialização dos modelos no processo de sincronização do banco. Também ajustei o projeto para que os seeders que eu não queria mais fossem retirados, e removi dados de exemplo do contêiner do Docker, incluindo um conjunto de dados que não deveria estar lá.

O aprendizado aqui é direto: quando modelos e banco ficam dessincronizados, os sintomas aparecem longe da causa, em telas e fluxos que parecem não ter relação com persistência. Manter a inicialização determinística evita caçar o problema no lugar errado.

## Tipagem e fluxo de pedidos

Outra frente foi um erro de tipagem em que a propriedade de itens não existia no tipo de pedido, o que exigiu alinhar o modelo com o que a interface realmente usa. Além disso, corrijo problemas na abertura de mesa, que não estava funcionando, e passei por ajustes em addons, que ainda estavam instáveis ao longo da semana.

Trabalhar com TypeScript em uma base que evolui rápido mostra que o compilador é um aliado: quando o tipo não reflete o modelo, o erro aparece em tempo de desenvolvimento, e não em produção.

## Navegação direta por perfil

Na interface, implementei uma mudança de navegação: ao trocar a view para Garçom, o sistema vai direto para a tela de comandas; ao trocar para KDS, vai direto para o KDS; e ao trocar para Admin, vai direto para o dashboard. Cada perfil agora cai no contexto que usa.

## Automações e dashboards industriais

Na empresa onde trabalho, entreguei uma nova funcionalidade e corrigi um problema em automações e dashboards industriais. O trabalho seguiu o caminho usual de evoluir o fluxo e ajustar o que não estava se comportando como esperado.

## Stack da semana

- TypeScript
- React
- Vite
- Express
- PostgreSQL
- Sequelize
- Vitest
- Docker
