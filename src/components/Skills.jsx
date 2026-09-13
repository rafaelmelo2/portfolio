import { skills } from '../data'
import { useInView } from '../hooks/motion'
import { Reveal, SectionHeading } from './ui'

/** Medidor de 10 segmentos que acende em sequência quando entra na tela. */
export function SkillBar({ skill, porcentagem, ativo = true }) {
  const nivel = Math.round(porcentagem / 10)

  return (
    <li className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line py-4">
      <span className="font-display text-lg font-semibold md:text-xl">{skill}</span>
      <span role="img" aria-label={`${skill}: nível ${nivel} de 10`} className="flex gap-1">
        {Array.from({ length: 10 }, (_, i) => (
          <span
            key={i}
            className={`h-5 w-2 rounded-[3px] transition-colors duration-500 sm:w-2.5 ${
              ativo && i < nivel ? 'bg-signal' : 'bg-line'
            }`}
            style={{ transitionDelay: `${i * 45}ms` }}
          />
        ))}
      </span>
    </li>
  )
}

function GrupoChips({ titulo, itens }) {
  return (
    <div className="rounded-[1.75rem] border border-line bg-ink-2 p-7 md:p-8">
      <h3 className="kicker text-faint">{titulo}</h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {itens.filter(Boolean).map((item) => (
          <li
            key={item}
            className="rounded-full border border-line px-4 py-2 text-sm text-paper/85 transition-colors duration-300 hover:border-signal hover:text-signal"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  const { core, frameworks, ferramentas } = skills
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="border-t border-line py-24 md:py-36">
      <div className="shell">
        <SectionHeading index="05" kicker="Skills" title="Arsenal técnico.">
          Autoavaliação honesta do meu nível hoje, e o que uso de verdade no dia a dia.
        </SectionHeading>

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="kicker mb-2 text-faint">Linguagens e competências</p>
            <ul ref={ref} className="border-t border-line">
              {core.map(({ skill, porcentagem }) => (
                <SkillBar key={skill} skill={skill} porcentagem={porcentagem} ativo={inView} />
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="space-y-5 lg:col-span-5">
            <GrupoChips titulo="Frameworks & libs" itens={frameworks} />
            <GrupoChips titulo="Ferramentas & DevOps" itens={ferramentas} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
