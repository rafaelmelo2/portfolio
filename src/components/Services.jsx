import { entregas } from '../data'
import { Reveal, SectionHeading } from './ui'

const svgProps = {
  width: 48,
  height: 48,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

// Glifos próprios (um por tipo de entrega), no lugar de ícones de linha genéricos
const GLIFOS = {
  ia: (
    <svg {...svgProps}>
      <path d="M14 13.5 32 21M14 34.5 32 27M10 16v16" />
      <circle cx="10" cy="12" r="4" />
      <circle cx="10" cy="36" r="4" />
      <circle cx="38" cy="24" r="6" fill="currentColor" />
    </svg>
  ),
  automacao: (
    <svg {...svgProps}>
      <path d="M38 20a15 15 0 0 0-27.5-5M10 28a15 15 0 0 0 27.5 5" />
      <path d="M10 8v7h7M38 40v-7h-7" />
      <circle cx="24" cy="24" r="4" fill="currentColor" />
    </svg>
  ),
  dados: (
    <svg {...svgProps}>
      <path d="M8 40h32" />
      <rect x="11" y="26" width="6" height="10" rx="1" />
      <rect x="21" y="18" width="6" height="18" rx="1" />
      <rect x="31" y="10" width="6" height="26" rx="1" fill="currentColor" />
    </svg>
  ),
  web: (
    <svg {...svgProps}>
      <rect x="6" y="9" width="36" height="30" rx="4" />
      <path d="M6 17h36M19 24l-5 4.5 5 4.5M29 24l5 4.5-5 4.5" />
      <circle cx="11" cy="13" r="1" fill="currentColor" />
    </svg>
  ),
}

// Bento assimétrico: largo/estreito, depois estreito/largo
const SPANS = ['md:col-span-4', 'md:col-span-2', 'md:col-span-2', 'md:col-span-4']

export function Services() {
  if (!entregas?.length) return null

  return (
    <section id="entregas" className="relative py-24 md:py-36">
      <div className="shell">
        <SectionHeading index="01" kicker="O que eu entrego" title="Da ideia ao sistema rodando.">
          Quatro frentes em que já entreguei resultado de verdade, no estágio e em projetos próprios.
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-6">
          {entregas.map((item, i) => (
            <Reveal key={item.id} delay={i * 90} className={SPANS[i % SPANS.length]}>
              <article className="group relative flex h-full min-h-[20rem] flex-col justify-between overflow-hidden rounded-[1.75rem] border border-line bg-ink-2 p-7 transition-colors duration-500 hover:border-signal/50 md:p-9">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-28 -right-28 h-64 w-64 rounded-full bg-signal/0 blur-3xl transition-colors duration-700 group-hover:bg-signal/10"
                />
                <div className="flex items-start justify-between">
                  <span className="text-signal transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    {GLIFOS[item.id] ?? GLIFOS.web}
                  </span>
                  <span className="kicker text-faint">/{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="relative mt-12">
                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{item.titulo}</h3>
                  <p className="mt-3 max-w-lg leading-relaxed text-muted">{item.descricao}</p>
                  {item.prova?.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2" aria-label="Na prática">
                      {item.prova.map((p) => (
                        <li key={p} className="chip">
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
