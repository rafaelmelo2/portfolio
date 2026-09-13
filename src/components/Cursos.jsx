import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { cursos } from '../data'
import { CertificatePreview } from './CertificatePreview'
import { Reveal, SectionHeading } from './ui'

const VISIVEIS_INICIALMENTE = 6

function CursoCard({ curso, onPreviewCertificado }) {
  const { titulo, instituicao, periodo, cargaHoraria, link, linkValidacao, observacoes } = curso
  const abrir = () => onPreviewCertificado?.(link, titulo, linkValidacao)

  return (
    <article className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-ink-2 p-2.5 transition-colors duration-500 hover:border-signal/40">
      {/* Miniatura desenhada em CSS (bem mais leve que carregar cada PDF num iframe) */}
      <button
        type="button"
        onClick={abrir}
        disabled={!link}
        aria-label={`Ver certificado: ${titulo}`}
        className="relative block aspect-[16/10] w-full overflow-hidden rounded-[1.1rem] bg-ink-3 disabled:cursor-default"
      >
        <span className="absolute inset-5 flex flex-col justify-between rounded-md bg-paper p-4 text-left text-ink shadow-[0_24px_50px_-20px_rgb(0_0_0/0.8)] transition-transform duration-500 ease-out [transform:rotate(-2.5deg)] group-hover:[transform:rotate(0deg)_translateY(-4px)]">
          <span className="flex items-start justify-between gap-3">
            <span className="truncate font-mono text-[0.6rem] uppercase tracking-[0.18em] text-ink/60">
              {instituicao}
            </span>
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-ink/70">
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
          </span>
          <span className="line-clamp-2 font-display text-base font-bold leading-tight">{titulo}</span>
          <span className="flex items-end justify-between font-mono text-[0.6rem] text-ink/60">
            <span>{periodo}</span>
            <span>{cargaHoraria}</span>
          </span>
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="kicker text-signal">{instituicao}</p>
        <h3 className="mt-2 text-lg font-bold leading-snug">{titulo}</h3>
        <p className="mt-1 font-mono text-xs text-faint">{[periodo, cargaHoraria].filter(Boolean).join(' · ')}</p>
        {observacoes && <p className="mt-3 text-sm leading-relaxed text-muted">{observacoes}</p>}
        <div className="mt-auto flex flex-wrap items-center gap-x-5 pt-5">
          {link && (
            <button
              type="button"
              onClick={abrir}
              className="inline-flex min-h-[44px] items-center font-display font-semibold text-paper transition-colors hover:text-signal"
            >
              Ver certificado →
            </button>
          )}
          {linkValidacao && (
            <a
              href={linkValidacao}
              target="_blank"
              rel="noopener noreferrer"
              className="kicker inline-flex min-h-[44px] items-center gap-1 text-muted transition-colors hover:text-signal"
            >
              Validar <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function Cursos() {
  const [preview, setPreview] = useState(null)
  const [todos, setTodos] = useState(false)

  if (!cursos?.length) return null

  const lista = todos ? cursos : cursos.slice(0, VISIVEIS_INICIALMENTE)

  return (
    <section id="cursos" className="border-t border-line bg-ink-2/40 py-24 md:py-36">
      <div className="shell">
        <SectionHeading index="06" kicker="Cursos" title="Estudo contínuo, com certificado.">
          Os certificados abrem aqui mesmo. Quando a plataforma permite, dá para validar a autenticidade.
        </SectionHeading>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((curso, i) => (
            <Reveal as="li" key={curso.id} delay={(i % 3) * 80}>
              <CursoCard
                curso={curso}
                onPreviewCertificado={(url, title, linkValidacao) => setPreview({ url, title, linkValidacao })}
              />
            </Reveal>
          ))}
        </ul>

        {cursos.length > VISIVEIS_INICIALMENTE && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setTodos((v) => !v)}
              aria-expanded={todos}
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full border border-line px-7 font-display font-semibold transition-colors duration-300 hover:border-signal hover:text-signal"
            >
              {todos ? 'Mostrar menos' : `Ver todos os ${cursos.length} cursos`}
            </button>
          </div>
        )}
      </div>

      {preview && (
        <CertificatePreview
          url={preview.url}
          title={preview.title}
          linkValidacao={preview.linkValidacao}
          onClose={() => setPreview(null)}
        />
      )}
    </section>
  )
}
