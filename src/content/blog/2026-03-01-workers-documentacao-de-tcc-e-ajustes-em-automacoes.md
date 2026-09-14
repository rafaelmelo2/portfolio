---
titulo: "Workers, documentação de TCC e ajustes em automações industriais"
data: 2026-03-01
resumo: "Semana com avanços em três frentes: nova forma de workers no projeto de transcrição de reuniões, documentação e comentários de apresentação no TCC e uma funcionalidade nova mais correções nas automações industriais."
tags: [python, fastapi, machine-learning, series-temporais, automacao, backend]
projetos: ["Automações e dashboards industriais", "TCC: previsão de preços de ações", "Transcrição e resumo de reuniões"]
origem: bot-semanal
semana: 2026-W09
---

A semana foi de fechamento e refinamento em vários frentes ao mesmo tempo. No TCC, o foco foi documentação e preparação da apresentação. No projeto de transcrição de reuniões, uma mudança estrutural na forma de processar trabalho em segundo plano. E nas automações industriais da empresa onde trabalho, uma funcionalidade nova e correções pontuais.

## Transcrição e resumo de reuniões

Adicionei uma nova forma de workers no projeto de transcrição e resumo de reuniões. O sistema usa Python com FastAPI, SQLAlchemy e PostgreSQL no backend, React com TypeScript no frontend, e faster-whisper para a transcrição em si.

A mudança foi na arquitetura de processamento: em vez de concentrar todo o trabalho pesado no ciclo de requisição, o processamento passa a rodar de forma separada, como workers dedicados. Isso deixa a API mais leve para responder e permite que tarefas longas, como transcrever áudio, avancem sem bloquear o resto da aplicação.

O aprendizado aqui é que separar o processamento em workers muda a forma de pensar o ciclo de vida da aplicação: o estado do trabalho precisa ser acompanhado de outro lugar, e a persistência passa a ser o ponto de coordenação entre o que a API recebe e o que os workers executam.

## TCC: previsão de preços de ações

No TCC de previsão de preços de ações, a semana foi de consolidação:

1. Escrevi um README completo, cobrindo o que o projeto faz e como rodá-lo.
2. Produzi um novo artigo seguindo o padrão SBC de formatação, o que exigiu reorganizar o texto para as convenções da estrutura.
3. Preparei novos comentários para a apresentação, pensando na narrativa de como explicar o trabalho.

Escrever o README depois do código pronto foi um bom exercício de enxergar o projeto de fora: o que parece óbvio para quem desenvolveu raramente está documentado.

## Automações e dashboards industriais

Na empresa onde trabalho, avancei o projeto de automações e dashboards industriais com uma nova funcionalidade, uma correção de problema e a evolução geral do projeto. Sem entrar em detalhes do contexto interno, o trabalho seguiu o padrão de melhorar rotinas automatizadas e painéis de acompanhamento.

## Stack da semana

- Python
- FastAPI
- SQLAlchemy
- PostgreSQL
- faster-whisper
- React
- TypeScript
