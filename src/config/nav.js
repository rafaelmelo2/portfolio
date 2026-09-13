/**
 * Configuração do menu de navegação (topo e rodapé).
 * Adicione ou remova itens para alterar o menu.
 * scrollId: id da seção na home · isRoute: item é uma rota (ex.: /blog)
 * "Contato" não entra aqui: ele tem botão de destaque próprio no topo.
 */

export const navLinks = [
  { label: 'Entregas', scrollId: 'entregas' },
  { label: 'Projetos', scrollId: 'projetos' },
  { label: 'Sobre', scrollId: 'sobre' },
  { label: 'Trajetória', scrollId: 'experiencia' },
  { label: 'Skills', scrollId: 'skills' },
  { label: 'Cursos', scrollId: 'cursos' },
  { label: 'Livros', scrollId: 'livros' },
  // { label: 'Depoimentos', scrollId: 'depoimentos' },
  { label: 'FAQ', scrollId: 'faq' },
  { label: 'Blog', scrollId: 'blog', isRoute: true },
]
