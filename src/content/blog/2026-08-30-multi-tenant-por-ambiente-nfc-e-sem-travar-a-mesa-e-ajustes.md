---
titulo: "Multi-tenant por ambiente, NFC-e sem travar a mesa e ajustes pontuais"
data: 2026-08-30
resumo: "Semana focada no sistema de pedidos e PDV: configuração por tenant, branding em runtime, emissão de nota em segundo plano e validações. Ajustes menores no app de finanças e entregas na empresa."
tags: [backend, postgresql, react, typescript, apis, testes]
projetos: ["Aplicativo de finanças", "Automações e dashboards industriais", "Plataforma de IA corporativa", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2026-W35
---

A semana foi dominada pelo sistema de pedidos e PDV, onde avancei na base multi-tenant e na parte fiscal. No restante, entregas mais pontuais: um ajuste de interface no app de finanças e trabalho nos projetos da empresa onde atuo.

## Base multi-tenant e configuração em runtime

No sistema de pedidos e PDV, o foco foi tornar a configuração de cada loja mais flexível. Criei uma migration de baseline para que o schema do banco seja reproduzível inteiramente por migrations, e quebrei o seed em três partes: estrutural, fiscal e cardápio de demonstração. Assim, cada tipo de dado pode ser aplicado de forma independente conforme o ambiente.

A base ficou tenant-aware, com override por variável de ambiente, e o provisionamento e a atualização do arquivo de configuração da loja passaram a ser tratados como parte do fluxo. O branding da loja também deixou de ser fixo: agora pode vir tanto de variáveis de ambiente quanto de uma consulta em runtime, e ajustei a landing page para receber valores via build args.

O aprendizado aqui foi sobre separar o que é estrutural do que é específico de cada tenant: quando essa fronteira fica clara, migrations, seeds e configuração de runtime conversam sem conflito.

## NFC-e e fechamento de mesa

Na parte fiscal, implementei a escolha de quais métodos de pagamento emitem NFC-e e a emissão da nota em segundo plano, sem travar o fechamento da mesa. O histórico de pedidos passou a mostrar o estado fiscal e o link do cupom, e os pedidos fechados agora expõem os dados da NFC-e.

Também fechei lacunas de validação com Joi nas rotas mutantes e corrigi um problema de mesclagem de serviços relacionado a includes. O ponto técnico que ficou: emissão assíncrona exige que a interface consiga refletir estados intermediários, então o histórico precisa ser uma fonte de verdade sobre o andamento fiscal.

## Ajustes e correções

Fora isso, corrigi o alinhamento da pasta do cardápio com a realidade atual, removi uma marca fixa da migration de configurações de impressão e versionei os testes de branding. No aplicativo de finanças, do parceiro, removi um texto de ajuda da página administrativa. Na empresa onde trabalho, entreguei uma correção de problema nas automações e dashboards industriais e uma nova funcionalidade na plataforma de IA corporativa.

## Stack da semana

- TypeScript
- React
- Vite
- Tailwind CSS
- Zod
- Express
- PostgreSQL
- Sequelize
- Vitest
