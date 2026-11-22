---
titulo: "Cartão de benefício, teste com cartão e calculadoras que lembram"
data: 2026-11-01
resumo: "Semana dedicada ao Aplicativo de finanças: a modelagem e o fluxo completo do cartão de benefício, o checkout com cartão em modo de teste e ajustes de usabilidade na importação de fatura e nos grupos."
tags: [frontend, backend, typescript, react, pagamentos, qualidade-de-dados]
projetos: ["Aplicativo de finanças"]
origem: bot-semanal
semana: 2026-W44
---

Essa semana foi inteira no Aplicativo de finanças, girando em torno de um tema só: cartões de benefício. Do modelo de dados ao extrato, passando por recarga e checkout, foi um trabalho de ponta a ponta com TypeScript, React, Zod e Tailwind CSS.

## Cartão de benefício de ponta a ponta

A maior parte da semana foi construída em torno do cartão de benefício. Comecei pelo modelo do cartão e pela regra da recarga, que serviu de base para todo o resto. Com isso resolvido, avancei para o cadastro do cartão, sua exibição na lista e o extrato vinculado a ele.

No serviço, o cartão de benefício ficou integrado sem fatura, o que exigiu tratar o saldo de forma própria. O fluxo de recarga automática complementou o conjunto, junto com a exibição de saldo e extrato. Também corrigi o saldo do cartão.

Na parte de emissores, passei a tratar iFood Benefícios e uma categoria de "Outros", ampliando a cobertura do recurso.

O que ficou de aprendizado: quando um recurso atravessa várias camadas (modelo, cadastro, listagem, extrato, recarga), é mais barato definir a regra central primeiro e depois derivar cada tela dela, em vez de ajustar cada superfície isoladamente.

## Teste com cartão no checkout

Outra frente foi o modo de teste pagando no cartão. Trabalhei as colunas e a constante necessárias para o fluxo, marquei o teste com cartão e expus essa marcação para a tela, de modo que o estado do teste esteja visível na interface. O checkout passou a suportar o teste com cartão, e a opção de teste ficou disponível na tela de assinatura.

Também implementei um aviso por e-mail antes da primeira cobrança do teste.

O que ficou de aprendizado: expor no frontend a marcação de que um teste é feito no cartão evita espalhar a lógica de identificação pela interface, centralizando a decisão de como o teste aparece.

## Calculadoras, faturas e grupos

Nas calculadoras, elas passaram a lembrar o que a pessoa digitou no navegador, recuperando o estado entre usos.

Na importação de fatura, adicionei um perfil Nubank, o que deixou o fluxo de importação mais completo para quem usa esse emissor.

No módulo de grupos, um convite único passou a ser capaz de criar um grupo, e a comparação com o mês anterior ganhou a taxa de economia como informação exibida.

O que ficou de aprendizado: reaproveitar dados já coletados (como os do mês anterior) para computar indicadores derivados, como a taxa de economia, dispensa que a pessoa busque a informação em outro lugar.

## Stack da semana

- TypeScript
- React
- Zod
- Tailwind CSS
