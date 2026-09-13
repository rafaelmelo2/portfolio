import { depoimentos } from '../data'
import { Reveal, SectionHeading } from './ui'

export function Testimonials() {
  if (!depoimentos?.length) return null

  return (
    <section id="depoimentos" className="border-t border-line bg-ink-2/40 py-24 md:py-36">
      <div className="shell">
        <SectionHeading kicker="Depoimentos" title="O que dizem sobre mim.">
          Recomendações que recebi no LinkedIn, de professores e colegas.{' '}
          {depoimentos[0].fonte && (
            <a
              href={depoimentos[0].fonte}
              target="_blank"
              rel="noopener noreferrer"
              className="text-signal transition-colors hover:text-paper"
            >
              Ver no LinkedIn ↗
            </a>
          )}
        </SectionHeading>

        <div className="columns-1 gap-6 md:columns-2">
          {depoimentos.map((dep, i) => (
            <Reveal key={dep.id} delay={i * 80} className="mb-6 break-inside-avoid">
              <figure className="relative overflow-hidden rounded-[1.75rem] border border-line bg-ink-2 p-8 transition-colors duration-500 hover:border-signal/40 md:p-10">
                <span aria-hidden className="absolute -top-8 right-6 font-display text-[10rem] leading-none text-signal/15">
                  “
                </span>
                <blockquote className="relative text-lg leading-relaxed text-paper/90 md:text-xl">{dep.texto}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-signal to-accent p-[2px]">
                    <span className="grid h-full w-full place-items-center rounded-full bg-ink font-display font-bold text-signal">
                      {dep.iniciais}
                    </span>
                  </span>
                  <span>
                    <span className="block font-display font-bold">{dep.autor}</span>
                    <span className="kicker mt-1 block text-muted">
                      {[dep.cargo, dep.empresa].filter(Boolean).join(' · ')}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
