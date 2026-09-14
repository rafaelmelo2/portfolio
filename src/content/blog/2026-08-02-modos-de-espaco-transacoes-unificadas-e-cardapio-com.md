---
titulo: "Modos de espaço, transações unificadas e cardápio com destaque"
data: 2026-08-02
resumo: "Semana com foco no app de finanças, que ganhou modos de espaço, metas e orçamento, além de avanços em automações industriais, plataforma de IA e o PDV de lanchonetes."
tags: [react, typescript, postgresql, frontend, backend, arquitetura]
projetos: ["Aplicativo de finanças", "Automações e dashboards industriais", "Plataforma de IA corporativa", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2026-W31
---

A semana girou em torno de modelagem de domínio: o app de finanças ganhou uma reestruturação importante de como lançamentos e espaços funcionam, enquanto os projetos da empresa seguiram com entregas de funcionalidades e correções. No projeto pessoal de PDV, o cardápio passou a ser gerado automaticamente e ganhou recursos visuais.

## Modos de espaço no app de finanças

O maior bloco de trabalho foi introduzir modos para os espaços do aplicativo. Um espaço agora pode ser de casal, pessoal ou grupo, e cada modo muda o comportamento do sistema. O onboarding passou a perguntar o modo logo na criação, espaços pessoais podem ser criados sem convite, e a troca de modo fica na tela de Conta, restrita ao dono do espaço.

Alguns detalhes que exigiram cuidado:

- o modo do espaço passou a ser exposto no endpoint de leitura, para o frontend saber como renderizar cada tela;
- em modo pessoal, o sistema recusa tentativas de rateio, e lançamentos feitos por um número ficam restritos a um único espaço;
- quem está sozinho num espaço de casal recebe um aviso;
- funcionalidades específicas de casal ficam escondidas em modo pessoal.

Aprendi que um conceito aparentemente simples, como "de quem é esse lançamento", muda de forma conforme o contexto do espaço. Modelar isso explicitamente evita espalhar condicionais pelo código.

## Unificando lançamentos e aportes

Outra mudança estrutural foi unificar gastos e aportes em uma única entidade de transações, com um campo de tipo. Os aportes existentes foram copiados para o novo modelo como investimentos, e constraints no banco garantem a integridade de tipo, split e consistência entre espaços.

Com essa base pronta, avancei nas funcionalidades de uso: metas de investimento, orçamento por categoria e uma tela de evolução que mostra receitas, despesas e o quanto foi guardado. O dashboard ganhou quatro cards e a tela de Transações entrou no ar.

Fazer a migração de dados junto com constraints no banco reforçou que regras de domínio pertencem o mais perto possível da persistência: o banco vira uma rede de proteção contra estados inválidos.

## Trabalho na empresa

Na empresa onde trabalho, entreguei uma nova funcionalidade e uma correção de problema nas automações e dashboards industriais. Na plataforma de IA corporativa, o ritmo foi parecido: uma funcionalidade nova, uma correção e atualização de documentação. São frentes de naturezas diferentes, mas as duas passam por garantir que o que roda em produção continue confiável enquanto novas partes entram.

## Cardápio no sistema de pedidos e PDV

No projeto pessoal de lanchonetes, adicionei um gerador de cardápio e, em seguida, um ajuste visual com destaque e selo para itens do cardápio. Ter testes com Vitest no projeto ajuda a mexer no gerador sem medo de quebrar a leitura dos itens na hora de montar o pedido.

## Stack da semana

- TypeScript
- React
- Zod
- Tailwind CSS
- Vite
- Express
- PostgreSQL
- Sequelize
- Vitest
