---
titulo: "Cortesias no painel e um site novo com cardápio ao vivo"
data: 2026-11-15
resumo: "Duas frentes da semana: amadurecer o fluxo de planos no aplicativo de finanças e renovar por inteiro o site público do sistema de pedidos para lanchonetes."
tags: [frontend, typescript, react, pagamentos, integracoes, nodejs]
projetos: ["Aplicativo de finanças", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2026-W46
---

A semana girou em torno de duas frentes: no aplicativo de finanças, refinar a experiência em volta dos planos; no sistema de pedidos e PDV para lanchonetes, reconstruir a parte pública do site com o cardápio do caixa aparecendo em tempo real.

## Plano cortesia e o painel de cortesias

No aplicativo de finanças, construí o conceito de *plano cortesia*: um espaço num plano pago sem cobrança. Junto disso, o painel passou a permitir dar uma cortesia a alguém e também encerrá-la, e a cortesia aparece para a pessoa na tela de uso do aplicativo.

Acompanharam dois ajustes de coerência na interface: quem já paga não vê mais o convite para assinar, e o seletor de plano da pessoa agora mostra o período de cobrança escolhido.

O aprendizado aqui foi de modelagem: um benefício concedido não é o mesmo que uma assinatura, e tratar isso como um estado próprio, com começo e fim explícitos, deixa a interface muito mais simples de raciocinar. A regra "quem paga não vê convite de assinatura" é o tipo de correção que só aparece quando você percorre o fluxo de ponta a ponta em vez de olhar cada tela isolada.

## Site novo com cardápio ao vivo e pedido pelo WhatsApp

No sistema de pedidos e PDV para lanchonetes, troquei o site antigo em React por uma landing nova, seguindo a paleta do brandbook. Além da landing, construí um site novo com duas peças centrais: o cardápio refletindo ao vivo o que sai do caixa, e a possibilidade de fazer o pedido pelo WhatsApp.

Também publiquei o cardápio e o branding de um jeito que fiquem legíveis a partir de outro domínio, o que abriu o conteúdo para quem chega por fora.

Na parte de correções, ordenei os lanches do mais caro para o mais barato e corrigi o destino dos pedidos, que agora vão para o WhatsApp do bot.

O que isso ensinou: quando a fonte de verdade do cardápio é o caixa, o site deixa de ser uma vitrine estática e passa a ser uma leitura do estado atual do negócio. E o pedido via WhatsApp funciona bem como canal de integração, desde que o destino e o formato da mensagem sejam tratados com o mesmo cuidado que uma API.

## Stack da semana

- **TypeScript e React** nas duas frentes
- **Zod** e **Tailwind CSS** no aplicativo de finanças
- **Vite**, **Express**, **PostgreSQL** e **Sequelize** no sistema de lanchonetes
- **Vitest** cobrindo o projeto pessoal
