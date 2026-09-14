---
titulo: "Ajustes fiscais e refinamentos no PDV de lanchonete"
data: 2026-06-14
resumo: "Semana dedicada ao sistema de pedidos e PDV: correção de emissão de NFC-e rejeitada, mapeamento de colunas para produção e configurações de comportamento da tela fiscal."
tags: [typescript, react, nodejs, postgresql, frontend, backend]
projetos: ["Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2026-W24
---

A semana foi toda no sistema de pedidos e PDV para lanchonetes, um projeto pessoal. O fio condutor foi o módulo fiscal: emissão de NFC-e, configurações de comportamento da tela e ajustes finos de infraestrutura do banco.

## Corrigindo emissão de NFC-e rejeitada

Uma NFC-e estava sendo rejeitada por NCM inválido. Fui atrás da causa no preenchimento dos dados do item e ajustei o envio para que o código passasse na validação. Aprendizado prático: em notas fiscais, a rejeição costuma apontar exatamente o campo problemático, e vale tratar a validação o mais perto possível da origem dos dados.

## Mapeamento de colunas para produção

Corrigi o mapeamento das colunas do model de NFC-e para o formato snake_case usado no banco de produção. O Sequelize permite definir esse mapeamento por atributo, e quando o ambiente tem convenções diferentes do padrão do ORM, ser explícito evita surpresas só visíveis em produção.

## Configurações de comportamento da tela fiscal

Adicionei uma variável para controlar se a página da NFC-e abre automaticamente ao fechar a comanda, além de ajustes em variáveis e volume do sistema. São detalhes pequenos de experiência de uso no balcão, mas que fazem diferença no fluxo de quem opera o PDV o dia inteiro.

## Documentação fiscal em dia

Atualizei os tutoriais fiscais internos do projeto, revisei os padrões internos e removi regras desatualizadas. Manter essa documentação alinhada com a legislação e com o código evita que decisões antigas confundam implementações futuras.

## Stack da semana

- TypeScript
- React
- Vite
- Express
- PostgreSQL
- Sequelize
- Vitest
