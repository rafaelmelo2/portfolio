---
titulo: "Divisão de gastos, painel administrativo e deploy atrás de proxy no app de finanças"
data: 2026-07-19
resumo: "Semana dedicada ao app de finanças em parceria: splits de despesas entre membros, área de conta, painel administrativo provisório e publicação da aplicação com nginx e Docker Compose configurado por variáveis de…"
tags: [frontend, react, typescript, docker, infraestrutura, pwa]
projetos: ["Aplicativo de finanças", "Automações e dashboards industriais"]
origem: bot-semanal
semana: 2026-W29
---

A semana girou em torno de duas frentes bem diferentes: no app de finanças, um volume grande de funcionalidades de produto e de infraestrutura de publicação; na empresa onde trabalho, evoluções pontuais em automações e dashboards industriais.

## Splits, planos e área de conta

O grosso do trabalho no app de finanças foi implementar divisão de despesas entre múltiplos membros, com suporte a rateios n-way, além de planos e carregamento de memberships compartilhadas. Isso envolveu schemas de validação com Zod, migrações de dados para rótulos de catálogo e rotas de conta cobrindo perfil, avatar e espaço ativo.

Na Central, adicionei as abas de Convite, Categorias & Formas e Conta, com renovação de convite, saída de espaço e rotas de exportação e exclusão de dados no espírito da LGPD. Também fiz o backfill de cores de categorias e refinamentos de layout, gráficos centrais e ícones.

O aprendizado técnico aqui é sobre modelar permissões e dados compartilhados quando uma despesa deixa de pertencer a uma pessoa e passa a pertencer a um grupo: a validação de entrada e as migrações precisam acompanhar essa mudança de modelo, senão o schema e o banco divergem.

## Painel administrativo e publicação

Criei um painel administrativo provisório, com autenticação e rotas de gestão, ainda em estágio inicial. No lado de infraestrutura, publiquei a aplicação atrás de nginx, com portas do Docker Compose controladas por variáveis de ambiente, o que facilita reaproveitar a mesma composição em ambientes diferentes.

Também entreguei ícones reais de PWA e tooltips com Radix, além de trocar a tipografia para Cabinet Grotesk e General Sans. A documentação de fase foi atualizada para marcar uma frente como concluída.

> Publicar atrás de um proxy reverso com configuração por ambiente é o tipo de trabalho que não aparece na interface, mas define como todo deploy seguinte vai funcionar.

## Automações e dashboards industriais

Na empresa onde trabalho, a semana teve uma nova funcionalidade, uma correção de problema e uma evolução geral do projeto de automações e dashboards industriais. São entregas de manutenção e evolução contínua, sem detalhes que eu possa detalhar publicamente.

## Stack da semana

- TypeScript
- React
- Zod
- Tailwind CSS
- nginx
- Docker Compose
