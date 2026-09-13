---
titulo: "Dado sujo faz a IA chutar com confiança"
data: 2026-09-07
resumo: "Quando o mesmo registro vive em quatro sistemas, a IA devolve um número bonito e errado. Três perguntas que valem mais do que qualquer POC."
tags: [ia, qualidade-de-dados, engenharia-de-dados, governanca-de-ia]
origem: linkedin
---

Pergunte pra IA de um hospital: "quantos pacientes únicos nós atendemos no último mês?"

Ela vai te dar um número. Bem formatado, bem explicado, com gráfico se você pedir.

E provavelmente errado.

Não porque o modelo de IA é ruim, mas sim porque o mesmo paciente está cadastrado quatro vezes: no prontuário, no faturamento, no laboratório e na agenda. Com o nome escrito de três jeitos e um CPF faltando.

## O puxadinho

Um hospital de médio porte opera, em média, mais de oito sistemas diferentes e a maioria não troca informação entre si. A pesquisa TIC Saúde mostra o tamanho do buraco: 92% dos estabelecimentos hospitalares já registram informação de paciente em sistema eletrônico, mas só 44% conseguem enviar ou receber um encaminhamento eletrônico.

E o que a maioria faz quando bate nesse muro? Puxadinho.

Junta a base A com a base B, porque juntas ficam "mais completas" do que separadas. E fica assim. O problema é que A tem erro, B tem erro, e o `JOIN` não limpa nada. Ele só entrega um número maior, mais convincente e igualmente errado, porém agora com cara de dado consolidado.

Já vi dado sujo virar dashboard, virar meta e virar decisão. Nessa ordem.

Não trabalho com saúde. Trabalho com dado em operação distribuída, onde muda o nome da tabela mas não muda o problema.

## Três perguntas que valem mais do que qualquer POC de IA

- Alguém consegue dizer, sem abrir sistema, qual é a definição oficial de "paciente ativo" na sua operação?
- Essa definição está escrita em algum lugar que não seja a cabeça de uma pessoa?
- Se essa pessoa sair amanhã, o número muda?

Limpar dado é chato, não rende HTML bonito e ninguém aplaude. Mas é a única coisa que faz a IA parar de chutar com confiança.

> O modelo deixou de ser o diferencial. O contexto é.

E contexto não pode morar dentro da ferramenta de IA que você usa hoje. Ele precisa morar na empresa: centralizado, estruturado, versionado, acessível pra qualquer pessoa ou agente que perguntar.

Me conta uma coisa: qual foi aquele puxadinho mais criativo que você já viu virar fonte oficial da verdade?
