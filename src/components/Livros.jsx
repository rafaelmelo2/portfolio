import { ArrowUpRight } from 'lucide-react'
import { livros } from '../data'
import { Reveal, SectionHeading } from './ui'

const COLUNAS = [
  { status: 'lendo', rotulo: 'Lendo agora' },
  { status: 'li', rotulo: 'Lidos' },
  { status: 'ler', rotulo: 'Na fila' },
]
const STATUS_VALIDOS = COLUNAS.map((c) => c.status)

function Nota({ nota }) {
  return (
    <span role="img" aria-label={`Nota ${nota} de 5`} className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`h-2 w-2 rotate-45 ${n <= nota ? 'bg-signal' : 'bg-line'}`} />
      ))}
    </span>
  )
}

function LivroItem({ livro }) {
  return (
    <li className="group border-b border-line py-5">
      <p className="font-display text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-signal">
        {livro.titulo}
      </p>
      <p className="mt-1 text-sm text-muted">{livro.autor}</p>
      {livro.observacoes && <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-faint">{livro.observacoes}</p>}
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <span className="chip">{livro.categoria}</span>
        {livro.nota > 0 && <Nota nota={livro.nota} />}
      </div>
      {livro.link && (
        <a
          href={livro.link}
          target="_blank"
          rel="noopener noreferrer"
          className="kicker mt-3 inline-flex min-h-[44px] items-center gap-1 text-signal hover:text-paper"
        >
          Ver mais <ArrowUpRight size={14} />
        </a>
      )}
    </li>
  )
}

export function Livros() {
  if (!livros?.length) return null

  return (
    <section id="livros" className="border-t border-line py-24 md:py-36">
      <div className="shell">
        <SectionHeading index="07" kicker="Livros" title="Estante aberta.">
          O que estou lendo, o que já li e o que vem na fila, entre técnica e desenvolvimento pessoal.
        </SectionHeading>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {COLUNAS.map((coluna, i) => {
            const lista = livros.filter(
              (l) => (STATUS_VALIDOS.includes(l.status) ? l.status : 'ler') === coluna.status
            )
            if (!lista.length) return null
            return (
              <Reveal key={coluna.status} delay={i * 90}>
                <h3 className="kicker flex items-center justify-between border-b border-paper/70 pb-4 text-paper">
                  {coluna.rotulo}
                  <span className="text-faint">{String(lista.length).padStart(2, '0')}</span>
                </h3>
                <ul>
                  {lista.map((livro) => (
                    <LivroItem key={livro.id} livro={livro} />
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
