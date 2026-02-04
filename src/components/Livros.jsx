import { BookOpen } from 'lucide-react'
import { livros } from '../data'

const STATUS_ORDEM = ['lendo', 'li', 'ler']
const STATUS_LABEL = {
  lendo: 'Lendo',
  li: 'Lido',
  ler: 'Quero ler',
}
const STATUS_COLOR = {
  lendo: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  li: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  ler: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
}

const MAX_VISIVEIS_SEM_ROLAGEM = 4

function agruparPorStatus(lista) {
  const grupos = { lendo: [], li: [], ler: [] }
  lista.forEach((livro) => {
    const status = STATUS_ORDEM.includes(livro.status) ? livro.status : 'ler'
    if (grupos[status]) grupos[status].push(livro)
  })
  return STATUS_ORDEM.map((status) => ({ status, livros: grupos[status] })).filter(
    (g) => g.livros.length > 0
  )
}

function LivroCard({ livro, compacto }) {
  const statusClass = STATUS_COLOR[livro.status] ?? STATUS_COLOR.ler

  return (
    <div
      className={`rounded-xl border border-slate-700 bg-slate-800/40 transition-colors hover:border-slate-600 ${
        compacto ? 'p-3' : 'p-5 md:p-6'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-slate-100 ${compacto ? 'text-base' : 'text-lg'} mb-0.5`}>
            {livro.titulo}
          </h3>
          <p className="text-emerald-400 text-sm">{livro.autor}</p>
          {!compacto && livro.observacoes && (
            <p className="text-slate-400 text-sm mt-1">{livro.observacoes}</p>
          )}
        </div>
        <div className="flex flex-wrap gap-2 shrink-0">
          {livro.nota != null && (
            <span className="text-xs font-mono text-slate-500 bg-slate-900 px-2.5 py-1 rounded-full border border-slate-700">
              ⭐ {livro.nota}/5
            </span>
          )}
          <span className="text-xs text-slate-500 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700">
            {livro.categoria}
          </span>
        </div>
      </div>
      {livro.link && (
        <a
          href={livro.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-emerald-400 hover:text-emerald-300 transition-colors ${compacto ? 'mt-2 inline-block text-xs' : 'mt-4 inline-block text-sm'}`}
        >
          Ver mais →
        </a>
      )}
    </div>
  )
}

function GrupoLivros({ status, livros: livrosDoGrupo }) {
  const label = STATUS_LABEL[status] ?? status
  const usaRolagem = livrosDoGrupo.length > MAX_VISIVEIS_SEM_ROLAGEM
  const compacto = status === 'li' && livrosDoGrupo.length > 2

  return (
    <div className="mb-10 last:mb-0">
      <h3 className="text-lg font-semibold text-slate-200 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        {label}
        <span className="text-slate-500 font-normal text-sm">({livrosDoGrupo.length})</span>
      </h3>
      <div
        className={`grid gap-4 md:grid-cols-2 ${usaRolagem ? 'livros-rolagem max-h-[320px] overflow-y-auto pr-2' : ''}`}
        style={usaRolagem ? { scrollbarGutter: 'stable' } : undefined}
      >
        {livrosDoGrupo.map((livro) => (
          <LivroCard key={livro.id} livro={livro} compacto={compacto} />
        ))}
      </div>
    </div>
  )
}

export function Livros() {
  if (!livros?.length) return null

  const grupos = agruparPorStatus(livros)

  return (
    <section id="livros" className="py-16 md:py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
          <BookOpen className="text-emerald-400" /> Livros
        </h2>
        <div className="max-w-4xl">
          {grupos.map((grupo) => (
            <GrupoLivros key={grupo.status} status={grupo.status} livros={grupo.livros} />
          ))}
        </div>
      </div>
    </section>
  )
}
