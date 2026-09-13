import { useState } from 'react'
import { experiencias } from '../data'
import { Reveal, SectionHeading } from './ui'

const DESTAQUES_VISIVEIS = 4

const limpar = (texto) => texto.trim().replace(/[;.]$/, '')

export function ExperienceCard({ experiencia, atual = false }) {
  const [aberto, setAberto] = useState(false)
  const { cargo, empresa, periodo, destaques } = experiencia
  const ocultos = destaques.length - DESTAQUES_VISIVEIS
  const lista = aberto ? destaques : destaques.slice(0, DESTAQUES_VISIVEIS)

  return (
    <article className="group grid gap-5 border-b border-line py-10 md:grid-cols-12 md:gap-8 md:py-14">
      <div className="md:col-span-3">
        <p className="kicker text-muted">{periodo}</p>
        {atual && (
          <p className="chip mt-4 gap-2 border-signal/50 text-signal">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
            Atual
          </p>
        )}
      </div>
      <div className="md:col-span-9">
        <h3 className="text-2xl font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-signal md:text-4xl">
          {cargo}
        </h3>
        <p className="mt-2 text-muted md:text-lg">{empresa}</p>
        <ul className="mt-7 grid gap-x-10 gap-y-3 md:grid-cols-2">
          {lista.map((item, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-paper/80">
              <span aria-hidden className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-signal" />
              {limpar(item)}
            </li>
          ))}
        </ul>
        {ocultos > 0 && (
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            className="kicker mt-6 inline-flex min-h-[44px] items-center text-signal transition-colors hover:text-paper"
          >
            {aberto ? '− Mostrar menos' : `+ ${ocultos} atividades`}
          </button>
        )}
      </div>
    </article>
  )
}

export function Experience() {
  return (
    <section id="experiencia" className="border-t border-line bg-ink-2/40 py-24 md:py-36">
      <div className="shell">
        <SectionHeading index="04" kicker="Trajetória" title="Da infraestrutura à inteligência artificial.">
          De plantões de TI em hospital a sistemas com IA na indústria automotiva: cada etapa somou uma camada.
        </SectionHeading>

        <ol className="border-t border-line">
          {experiencias.map((exp) => (
            <Reveal as="li" key={exp.id}>
              <ExperienceCard experiencia={exp} atual={/o momento|atual/i.test(exp.periodo)} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
