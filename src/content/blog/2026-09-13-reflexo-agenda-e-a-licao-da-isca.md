---
titulo: "Reflexo, agenda e a lição da isca"
data: 2026-09-13
resumo: "Semana dividida entre agentes autônomos num jogo, a agenda de uma plataforma web e automações na empresa onde trabalho."
tags: [agentes, bots, react, fastapi, postgresql, testes]
projetos: ["Agentes autônomos com IA para jogo", "Automações e dashboards industriais", "Plataforma web de um parceiro"]
origem: bot-semanal
semana: 2026-W37
---

A semana girou em torno de sistemas que precisam funcionar sem alguém olhando o tempo todo: agentes autônomos num jogo, uma agenda que se conecta ao ciclo de orçamentos numa plataforma web e automações na empresa onde trabalho. Em todos, o padrão foi o mesmo: tirar decisões de caminhos onde ninguém confere se a decisão foi boa.

## O bot que reage em vez de narrar

No projeto de agentes autônomos para jogo, o maior avanço foi estrutural: em vez de o agente narrar o que pretende fazer, ele agora reage. Montei um barramento com árbitro, monitoramento de vitais, noção de urgência e um rastro do que aconteceu. Fome e noite viraram reflexo: o bot resolve os dois sem passar pelo modelo de linguagem e sem depender de humano. Isso tirou do LLM decisões que são puramente mecânicas.

O loop autônomo também parou de girar em falso — e ganhou uma forma de sair do próprio buraco quando trava. Outra correção importante: a nota de uma ação de craft estava errada, e errada com confiança. O agente atribuía blocos ao jogador por raio fixo; agora a atribuição é por comparação, o que elimina falsos positivos de proximidade.

Também medi o prompt que crescia, em vez de torcer que estava sob controle, e podrei requisitos em cadeias de tarefas: o que já está pronto é pulado, o craft é conferido antes de seguir. A lição da isca foi a mais interessante: trocar perseguição por criação de condições fez o rebanho crescer sozinho — e o princípio vale além dela. Para validar tudo, um bot entra no servidor e conversa com o outro, cobrindo toda espécie criável, não só um caso. E o mapa do código voltou a bater com o que existe de verdade.

## Agenda, orçamentos e histórico na plataforma

Na plataforma web do parceiro, o foco foi conectar a agenda ao ciclo do orçamento: a agenda agora espelha as fases do orçamento, com vista de calendário, links entre os dois módulos e uma tela dedicada no Cronometrista, que também ganhou tela de configurações e entrada na navegação.

No lado dos orçamentos, adicionei a aba de histórico com as versões, marcação de versão vigente e data de criação na lista, além da proposta em PDF gerada pela impressão do navegador. Na entrada de dados, importei catálogo, modelos e clientes do sistema de origem via script, usando um identificador de legado no cliente para que a importação seja repetível sem duplicar registros. No frontend, organizei tipos, hooks e utilitários que sustentam essas telas.

O aprendizado aqui foi sobre modelagem de integração: quando um registro carrega a referência do sistema de origem, migrar deixa de ser evento único e vira operação idempotente, que pode rodar de novo sem susto.

## Automações na empresa

Na empresa onde trabalho, avancei em uma nova funcionalidade e corrigi um problema nas automações e dashboards industriais. Sem entrar em detalhes do contexto, o padrão é o mesmo dos outros projetos: rotinas que precisam ser confiáveis mesmo quando ninguém está assistindo.

## Stack da semana

- TypeScript e Bun com Mineflayer nos agentes do jogo
- Python, FastAPI e PostgreSQL no backend da plataforma
- React, TypeScript, TanStack, Tailwind CSS e Vite no frontend
