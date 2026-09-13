/**
 * Posts do blog: arquivos Markdown em src/content/blog/ (contrato em src/content/blog/README.md).
 * Os posts chegam por Pull Request; este módulo só lê, valida e ordena em tempo de build.
 */

import tagsData from '../content/blog/tags.json'

const arquivos = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default', eager: true })

const PALAVRAS_POR_MINUTO = 200
const tagsConhecidas = tagsData.tags

function limparValor(valor) {
  const v = valor.trim()
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) return v.slice(1, -1)
  return v
}

/** Frontmatter no subconjunto documentado: `chave: valor`, listas `[a, b]` ou itens `- a`. */
function lerFrontmatter(texto) {
  const m = texto.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!m) return { dados: {}, corpo: texto }

  const dados = {}
  let listaAtual = null
  for (const linha of m[1].split(/\r?\n/)) {
    if (!linha.trim() || linha.trim().startsWith('#')) continue
    const item = linha.match(/^\s*-\s+(.*)$/)
    if (item && listaAtual) {
      dados[listaAtual].push(limparValor(item[1]))
      continue
    }
    const par = linha.match(/^([A-Za-z_][\w-]*):\s*(.*)$/)
    if (!par) continue
    const [, chave, valor] = par
    if (valor === '') {
      dados[chave] = []
      listaAtual = chave
      continue
    }
    listaAtual = null
    dados[chave] =
      valor.startsWith('[') && valor.endsWith(']')
        ? valor.slice(1, -1).split(',').map(limparValor).filter(Boolean)
        : limparValor(valor)
  }
  return { dados, corpo: m[2] }
}

const lista = (valor) => (Array.isArray(valor) ? valor : [])

export const posts = Object.entries(arquivos)
  .filter(([caminho]) => !caminho.endsWith('/README.md'))
  .map(([caminho, texto]) => {
    const slug = caminho.split('/').pop().replace(/\.md$/, '')
    const { dados, corpo } = lerFrontmatter(texto)
    const tags = lista(dados.tags).filter((tag) => {
      if (tagsConhecidas[tag]) return true
      if (import.meta.env.DEV) console.warn(`[blog] tag "${tag}" em ${slug}.md não existe em tags.json`)
      return false
    })
    return {
      slug,
      titulo: dados.titulo ?? slug,
      resumo: dados.resumo ?? '',
      data: dados.data ?? '',
      tags,
      projetos: lista(dados.projetos),
      origem: dados.origem ?? '',
      rascunho: dados.rascunho === 'true',
      leitura: Math.max(1, Math.round(corpo.split(/\s+/).filter(Boolean).length / PALAVRAS_POR_MINUTO)),
      corpo,
    }
  })
  .filter((p) => !p.rascunho && /^\d{4}-\d{2}-\d{2}$/.test(p.data))
  .sort((a, b) => b.data.localeCompare(a.data))

/** Tags que aparecem em pelo menos um post, com contagem. */
export const tagsBlog = Object.entries(tagsConhecidas)
  .map(([slug, info]) => ({ slug, ...info, total: posts.filter((p) => p.tags.includes(slug)).length }))
  .filter((t) => t.total > 0)
  .sort((a, b) => b.total - a.total || a.label.localeCompare(b.label))

export function rotuloTag(slug) {
  return tagsConhecidas[slug]?.label ?? slug
}

export function formatarData(iso) {
  const [ano, mes, dia] = iso.split('-').map(Number)
  if (!ano) return iso
  return new Date(ano, mes - 1, dia).toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
}
