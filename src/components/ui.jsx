import { useCountUp, useInView } from '../hooks/motion'

/** Revela o conteúdo com fade-up quando entra na tela. `delay` em ms cria o efeito escalonado. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--d': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/** Cabeçalho padrão das seções: número + rótulo em mono, título grande e descrição opcional à direita. */
export function SectionHeading({ index, kicker, title, children }) {
  return (
    <Reveal className={`mb-14 md:mb-20 ${children ? 'grid items-end gap-6 md:grid-cols-12 md:gap-10' : ''}`}>
      <div className={children ? 'md:col-span-7' : ''}>
        <p className="kicker flex items-center gap-3 text-signal">
          {index && <span className="text-faint">{index}</span>}
          <span aria-hidden className="h-px w-10 bg-signal/60" />
          {kicker}
        </p>
        <h2 className="mt-6 text-[clamp(2.4rem,5.4vw,4.5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-paper">
          {title}
        </h2>
      </div>
      {children && (
        <p className="text-lg leading-relaxed text-muted md:col-span-5 md:pb-2">{children}</p>
      )}
    </Reveal>
  )
}

/** Número grande com contagem animada (prova social). */
export function Stat({ value, suffix = '', label, className = '' }) {
  const [ref, inView] = useInView()
  const current = useCountUp(value, inView)

  return (
    <div ref={ref} className={className}>
      <p className="font-display text-5xl font-extrabold tracking-[-0.04em] md:text-6xl lg:text-7xl">
        <span aria-hidden>
          {current}
          <span className="text-signal">{suffix}</span>
        </span>
        <span className="sr-only">
          {value}
          {suffix}
        </span>
      </p>
      <p className="kicker mt-3 text-muted">{label}</p>
    </div>
  )
}

/** Marca "RM" — vira seta ao passar o mouse (precisa de um ancestral com a classe `group`). */
export function Logo() {
  return (
    <span className="inline-flex items-center gap-3">
      <span
        aria-hidden
        className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[0.7rem] bg-signal font-display text-sm font-extrabold text-ink"
      >
        <span className="transition-transform duration-500 group-hover:-translate-y-9">RM</span>
        <span className="absolute translate-y-9 text-base transition-transform duration-500 group-hover:translate-y-0">
          ↗
        </span>
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-paper">
        rafael<span className="text-signal">.</span>melo
      </span>
    </span>
  )
}
