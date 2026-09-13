import { perfil } from '../data'
import { Reveal, SectionHeading } from './ui'

export function About() {
  const fatos = [
    { rotulo: 'Hoje', valor: `${perfil.cargoAtual} na ${perfil.empresaAtual}` },
    { rotulo: 'Foco atual', valor: perfil.foco },
    { rotulo: 'Formação', valor: perfil.formacao },
    { rotulo: 'Base', valor: perfil.local },
  ]

  return (
    <section id="sobre" className="relative border-t border-line py-24 md:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <figure className="mr-3 lg:sticky lg:top-28">
            <div className="relative">
              <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-signal/40" />
              <img
                src={perfil.fotoTrabalho}
                alt={`${perfil.nome} programando em seu setup com dois monitores`}
                width="1184"
                height="864"
                loading="lazy"
                decoding="async"
                className="relative aspect-[4/5] w-full rounded-[2rem] object-cover object-[72%_center]"
              />
            </div>
            <figcaption className="kicker mt-8 text-faint">— Mão na massa, todo dia.</figcaption>
          </figure>
        </Reveal>

        <div className="lg:col-span-7 lg:pl-10">
          <SectionHeading
            index="03"
            kicker="Sobre"
            title={
              <>
                Técnico <span className="text-outline">e</span> criativo.
              </>
            }
          />

          <Reveal delay={80}>
            <p className="text-2xl font-medium leading-snug text-paper md:text-3xl">
              Sou bacharel em Ciência da Computação e gosto de transformar problemas do dia a dia em soluções
              práticas, na empresa e em projetos próprios.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-muted">
              Na {perfil.empresaAtual} (Mitsubishi), onde entrei como estagiário e hoje sou {perfil.cargoAtual},
              trabalho com administração e evolução de plataformas de IA, integração de sistemas e automação de
              rotinas e dashboards, e lidero tecnicamente a frente de arquitetura de dados (Lakehouse) com uma
              equipe parceira. Tenho base em desenvolvimento full stack (React, Node.js, TypeScript, Python) e venho
              me aprofundando em engenharia de dados e infraestrutura de IA.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <dl className="mt-14 grid border-t border-line sm:grid-cols-2">
              {fatos.map((f) => (
                <div key={f.rotulo} className="border-b border-line py-6 sm:odd:pr-6 sm:even:border-l sm:even:pl-6">
                  <dt className="kicker text-faint">{f.rotulo}</dt>
                  <dd className="mt-2 font-display text-xl font-semibold leading-snug">{f.valor}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
