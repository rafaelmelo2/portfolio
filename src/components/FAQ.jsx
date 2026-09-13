import { Plus } from 'lucide-react'
import { contatos, faq } from '../data'
import { Reveal, SectionHeading } from './ui'

export function FAQ() {
  if (!faq?.length) return null

  const email = contatos.find((c) => c.tipo === 'email')?.url
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: item.resposta },
    })),
  }

  return (
    <section id="faq" className="border-t border-line py-24 md:py-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="shell grid gap-4 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading index="08" kicker="FAQ" title="Perguntas frequentes." />
            <Reveal delay={80} className="-mt-6 hidden lg:block">
              <p className="text-muted">Não achou o que procurava?</p>
              <a
                href={email}
                className="mt-2 inline-flex min-h-[44px] items-center font-display text-lg font-semibold text-signal transition-colors hover:text-paper"
              >
                Pergunte por e-mail →
              </a>
            </Reveal>
          </div>
        </div>

        <div className="faq border-t border-line lg:col-span-8">
          {faq.map((item, i) => (
            <Reveal key={item.pergunta} delay={Math.min(i, 5) * 50}>
              <details className="group border-b border-line">
                <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-6 py-6 transition-colors duration-300 hover:text-signal md:py-7">
                  <span className="flex gap-4 md:gap-6">
                    <span className="kicker pt-1.5 text-faint">{String(i + 1).padStart(2, '0')}</span>
                    <span className="font-display text-lg font-semibold leading-snug tracking-tight md:text-2xl">
                      {item.pergunta}
                    </span>
                  </span>
                  <span className="faq-icon grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line transition-all duration-300">
                    <Plus size={18} />
                  </span>
                </summary>
                <p className="pb-8 pl-9 pr-4 leading-relaxed text-muted md:pl-[3.25rem] md:pr-16 md:text-lg">
                  {item.resposta}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
