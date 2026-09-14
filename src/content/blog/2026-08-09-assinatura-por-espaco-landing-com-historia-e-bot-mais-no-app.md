---
titulo: "Assinatura por espaço, landing com história e bot mais configurável no app de finanças"
data: 2026-08-09
resumo: "Semana focada no aplicativo de finanças: assinatura vinculada ao espaço, captura de leads pelo bot, página institucional com prerender e novas funções de orçamento por mensagem, além de avanços nos projetos da empresa."
tags: [bots, arquitetura, frontend, react, typescript, ia]
projetos: ["Aplicativo de finanças", "Automações e dashboards industriais", "Plataforma de IA corporativa"]
origem: bot-semanal
semana: 2026-W32
---

A semana girou em torno do aplicativo de finanças que mantenho com um parceiro: modelagem de assinatura, presença na web e evolução do bot de conversa. Nos projetos da empresa onde trabalho, avancei em automações com dashboards e corrigi um problema na plataforma de IA corporativa.

## Assinatura passa a ser do espaço

Refiz a modelagem para que o teto de uso venha da assinatura do espaço, e não do plano individual de cada pessoa. Isso envolveu três tabelas novas para sustentar a assinatura no nível do espaço, um teto padrão com possibilidade de exceção por mês e ajustes na máquina de estados, que agora não tem conhecimento algum sobre gateway de pagamento — a integração fica isolada atrás de uma porta, com um adaptador falso completo para uso em testes.

O aprendizado aqui foi de arquitetura: separar a máquina de estados do meio de cobrança deixa o fluxo de assinatura testável sem depender de serviço externo.

## Landing page que conta uma história

A página pública deixou de ser uma lista de recursos e passou a contar a história do casal que usa o app. No aspecto técnico, o conteúdo agora é pré-renderizado e existe no HTML entregue ao crawler, além de configuração de indexação, sitemap e preview de link em uma primeira fase. Também incluí dados estruturados, ícones leves e um vigia que acusa regressão.

## Bot: leads, orçamento e configuração

Diversas evoluções no bot desta semana:

1. Quem conversa sem ter conta agora é registrado como lead, e o vínculo é desfeito automaticamente quando a pessoa cria a conta.
2. O bot passou a anunciar e rotear dois novos pedidos: comparar meses e definir orçamento e meta por mensagem.
3. O número do bot foi colocado no ar a partir de uma fonte única, validada no build.
4. Um limite que era booleano virou interruptor configurável, e o modelo de IA usado pelo bot ficou configurável.

Também escrevi um script que propõe o changelog a partir do histórico de commits do git, servindo como ponto de partida para a descrição das versões.

## Trabalho na empresa

Na empresa onde trabalho, entreguei uma nova funcionalidade e uma evolução no projeto de automações e dashboards industriais, além de corrigir um problema na plataforma de IA corporativa.

## Stack da semana

- TypeScript
- React
- Zod
- Tailwind CSS
