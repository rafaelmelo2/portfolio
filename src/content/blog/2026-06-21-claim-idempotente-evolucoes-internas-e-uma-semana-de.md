---
titulo: "Claim idempotente, evoluções internas e uma semana de consistência"
data: 2026-06-21
resumo: "Semana marcada por entregas em três frentes: um fluxo de entrega de kit com QR code na plataforma de um parceiro, além de evoluções na plataforma de IA corporativa e nos dashboards industriais da empresa onde trabalho."
tags: [backend, fastapi, postgresql, seguranca, apis]
projetos: ["Automações e dashboards industriais", "Plataforma de IA corporativa", "Plataforma web de um parceiro"]
origem: bot-semanal
semana: 2026-W25
---

A semana girou em torno de um tema comum: garantir que operações críticas se comportem bem mesmo sob condições imperfeitas. Na plataforma web de um parceiro, isso significou desenhar um fluxo de entrega de kit por QR code com garantias de atomicidade. Na empresa onde trabalho, foi continuar evoluindo a plataforma de IA corporativa e os automações e dashboards industriais.

## Entrega de kit por QR com claim atômico

Na plataforma web de um parceiro, implementei uma nova funcionalidade de entrega de kit via QR code. O ponto central do desenho foi o *claim* do kit: quando alguém escaneia o código para retirar o item, a operação precisa ser **atômica e idempotente**.

Atômica porque a entrega não pode ficar pela metade — ou o kit é reclamado por completo, com todos os efeitos persistidos, ou nada acontece. Idempotente porque um segundo escaneamento, uma requisição repetida ou uma retentativa de rede não podem gerar entrega duplicada.

A implementação ficou no backend em Python com FastAPI, com a garantia de consistência apoiada no PostgreSQL. O aprendizado que levo daqui: quando uma operação de escrita é disparada por algo fora do controle do servidor (como um QR code escaneado por qualquer pessoa), desenhar para idempotência desde o início é mais simples do que tentar deduplicar depois.

## Plataforma de IA corporativa

Na empresa onde trabalho, avancei em duas frentes na plataforma de IA corporativa: uma nova funcionalidade e a correção de um problema. São itens de contexto interno, então fico no nível do tipo de trabalho — uma entrega nova no produto e um ajuste de comportamento que precisava ser corrigido.

O que fica de aprendizado geral é que plataformas de IA em ambiente corporativo exigem o mesmo rigor de engenharia que qualquer outro sistema: funcionalidades novas entrando por um lado e correções saindo pelo outro, com o produto em uso contínuo.

## Automações e dashboards industriais

Também na empresa onde trabalho, segui a evolução do projeto de automações e dashboards industriais. Foi um trabalho de continuidade, mantendo o projeto avançando — sem detalhes que eu possa detalhar aqui além disso.

## Stack da semana

- Python
- FastAPI
- PostgreSQL
- React
- TypeScript
- TanStack
- Tailwind CSS
- Vite
