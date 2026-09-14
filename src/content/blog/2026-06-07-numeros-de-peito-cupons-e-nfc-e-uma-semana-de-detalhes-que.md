---
titulo: "Números de peito, cupons e NFC-e: uma semana de detalhes que importam"
data: 2026-06-07
resumo: "Na plataforma web de um parceiro, trabalhei atribuição sequencial de números de peito, preenchimento automático de estado e cidade e regras de cupom. No sistema de pedidos e PDV para lanchonetes, adicionei a emissão de N"
tags: [backend, frontend, react, typescript, integracoes, postgresql]
projetos: ["Plataforma web de um parceiro", "Sistema de pedidos e PDV para lanchonetes"]
origem: bot-semanal
semana: 2026-W23
---

A semana girou em torno de detalhes que parecem pequenos, mas sustentam a experiência de quem usa o sistema: numeração sequencial, validação de dados de entrada e emissão de documentos fiscais. Foram dois projetos, cada um com seu tipo de desafio.

## Plataforma web de um parceiro

Na plataforma web de um parceiro, o foco foi o fluxo de inscrição em modalidades. Implementei a atribuição de números de peito sequenciais por modalidade, garantindo que cada participante receba um número único dentro da sua modalidade, sem colisões. Isso envolveu pensar em como a sequência é controlada no backend e como o resultado é apresentado no frontend.

Outra funcionalidade foi o preenchimento automático de estado e cidade a partir do número de telefone. A ideia é reduzir o esforço de digitação no cadastro: a partir do telefone, o sistema sugere ou preenche os campos de localização, e o usuário confirma ou corrige. Trabalhei isso na camada de formulário, com React, TypeScript e TanStack, mantendo o comportamento previsível quando o dado inferido não é confiável.

Também implementei a normalização e as regras de validação de códigos de cupom. Códigos digitados por pessoas chegam em formatos variados: espaços extras, maiúsculas e minúsculas misturadas, caracteres indesejados. A normalização padroniza a entrada antes da validação, e as regras de validação decidem se o cupom pode ser aplicado. O aprendizado aqui é que validar dados de entrada em duas camadas, normalizando primeiro e aplicando regras de negócio depois, evita que o mesmo código seja tratado de formas diferentes em pontos distintos do fluxo.

Além das funcionalidades, passei pelo código com correções de linter, o que ajuda a manter o padrão consistente no repositório.

## Sistema de pedidos e PDV para lanchonetes

No meu projeto pessoal de pedidos e PDV para lanchonetes, adicionei a funcionalidade de emissão de NFC-e. Isso envolve integrar o fluxo de fechamento do pedido com a emissão do documento fiscal, cuidando dos dados que precisam ser enviados e do retorno da emissão para informar o resultado na interface.

O aprendizado principal foi sobre integrações com sistemas externos: quando uma parte do fluxo depende de um serviço fora do meu controle, o desenho interno precisa isolar essa dependência, para que o resto do fluxo de venda não fique acoplado aos detalhes da emissão.

## Stack da semana

- Python e FastAPI no backend da plataforma do parceiro
- PostgreSQL como banco nos dois projetos
- React, TypeScript, TanStack, Tailwind CSS e Vite nos frontends
- Express, Sequelize e Vitest no sistema de pedidos e PDV
