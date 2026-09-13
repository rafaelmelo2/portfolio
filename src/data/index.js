/**
 * Central de dados do portfólio.
 * Edite os arquivos .json em src/data/ para atualizar o conteúdo do site.
 */

import perfilData from './perfil.json'
import entregasData from './entregas.json'
import projetosData from './projetos.json'
import livrosData from './livros.json'
import cursosData from './cursos.json'
import skillsData from './skills.json'
import contatosData from './contatos.json'
import trajetoriaData from './trajetoria.json'
import depoimentosData from './depoimentos.json'
import faqData from './faq.json'

export const perfil = perfilData
export const entregas = entregasData.entregas
export const projetos = projetosData.projetos
export const livros = livrosData.livros
export const cursos = cursosData.cursos
export const skills = skillsData
export const contatos = contatosData.contatos
export const contatoFormulario = contatosData.formulario
export const experiencias = trajetoriaData.experiencias
export const depoimentos = depoimentosData.depoimentos.filter((d) => d.publicado === true)
export const faq = faqData.perguntas

/** Empresas/instituições únicas da trajetória, sem sufixo jurídico. */
export const empresas = [
  ...new Set(experiencias.map((e) => e.empresa.replace(/\s+(do Brasil\s+)?Ltda\.?$/i, '').trim())),
]

/** Primeiro ano encontrado nos períodos da trajetória. */
export const anoInicioCarreira = Math.min(
  ...experiencias.flatMap((e) => (e.periodo.match(/\d{4}/g) ?? []).map(Number))
)
