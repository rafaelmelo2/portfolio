import { ArrowUpRight, Download } from 'lucide-react'
import { Link } from 'react-router-dom'
import { anoInicioCarreira, contatos, cursos, empresas, perfil, projetos } from '../data'
import { Stat } from './ui'

// Título animado palavra a palavra. br: quebra de linha depois · colado: sem espaço antes
const PALAVRAS = [
  { t: 'Onde' },
  { t: 'código', br: true },
  { t: 'encontra', c: 'text-outline', br: true },
  { t: 'inteligência.', c: 'bg-gradient-to-r from-signal to-accent bg-clip-text pb-[0.12em] text-transparent' },
]

export function Hero() {
  const email = contatos.find((c) => c.tipo === 'email')?.url

  const stats = [
    { value: new Date().getFullYear() - anoInicioCarreira, suffix: '+', label: 'anos na área de TI' },
    { value: projetos.length, label: 'projetos no portfólio' },
    { value: cursos.length, label: 'cursos certificados' },
    { value: empresas.length, label: 'empresas e instituições' },
  ]

  // Repetido 4x para o letreiro nunca mostrar buraco em telas largas
  const letreiro = [...empresas, ...empresas, ...empresas, ...empresas]

  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-48 -top-48 h-[38rem] w-[38rem] rounded-full bg-signal/10 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-24 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="shell relative">
        <div className="flex animate-rise flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
          {perfil.status && (
            <p className="kicker flex items-center gap-2.5 text-paper">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
              </span>
              {perfil.status}
            </p>
          )}
          <p className="kicker text-faint">{perfil.local} · Brasil</p>
        </div>

        <div className="grid items-end gap-14 py-12 md:py-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <h1 className="text-[clamp(3rem,8.4vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.045em]">
              <span className="sr-only">Rafael Melo — IA aplicada, automação e dados. </span>
              {PALAVRAS.map((p, i) => (
                <span key={p.t}>
                  {!p.colado && i > 0 && ' '}
                  <span
                    className={`inline-block animate-rise ${p.c ?? 'text-paper'}`}
                    style={{ animationDelay: `${140 + i * 90}ms` }}
                  >
                    {p.t}
                  </span>
                  {p.br && <br />}
                </span>
              ))}
            </h1>

            <p
              className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-muted md:text-xl"
              style={{ animationDelay: '560ms' }}
            >
              Sou <strong className="font-semibold text-paper">{perfil.nome}</strong>, {perfil.cargoAtual} na{' '}
              {perfil.empresaAtual} (Mitsubishi) e bacharel em Ciência da Computação. Construo sistemas com IA,
              automações e dashboards que resolvem problemas reais.
            </p>

            <div
              className="mt-10 flex animate-rise flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
              style={{ animationDelay: '680ms' }}
            >
              <a
                href={email}
                className="group inline-flex min-h-[60px] items-center justify-between gap-6 rounded-full bg-signal py-2 pl-7 pr-2 font-display text-lg font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-12px_rgb(var(--signal)/0.55)]"
              >
                Vamos conversar
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-signal transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={20} />
                </span>
              </a>
              <Link
                to="/#projetos"
                className="group inline-flex min-h-[60px] items-center justify-center gap-2 rounded-full border border-line px-7 font-display text-lg font-semibold text-paper transition-colors duration-300 hover:border-paper"
              >
                Ver projetos
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              {perfil.cv && (
                <a
                  href={perfil.cv}
                  download
                  className="kicker inline-flex min-h-[44px] items-center justify-center gap-2 text-muted transition-colors hover:text-signal"
                >
                  <Download size={16} /> Baixar CV
                </a>
              )}
            </div>
          </div>

          <div className="animate-rise lg:col-span-4" style={{ animationDelay: '320ms' }}>
            <figure className="group relative mx-auto max-w-sm lg:max-w-none">
              <div className="relative -rotate-2 overflow-hidden rounded-[2rem] border border-line bg-ink-2 shadow-[0_40px_90px_-40px_rgb(0_0_0/0.9)] transition-transform duration-700 ease-out group-hover:rotate-0">
                <img
                  src={perfil.foto}
                  alt={`Retrato de ${perfil.nome}`}
                  width="800"
                  height="800"
                  fetchpriority="high"
                  className="aspect-[4/5] w-full object-cover grayscale-[40%] transition duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink via-ink/75 to-transparent p-5 pt-20">
                  <span>
                    <span className="block font-display text-xl font-bold">{perfil.nome}</span>
                    <span className="kicker mt-1 block text-signal">
                      {perfil.cargoAtual} @ {perfil.empresaAtual}
                    </span>
                  </span>
                  <span aria-hidden className="kicker text-faint">
                    RM—01
                  </span>
                </figcaption>
              </div>
              <span
                aria-hidden
                className="absolute -left-3 top-8 -rotate-[8deg] rounded-full bg-accent px-4 py-2 font-mono text-xs font-medium text-ink shadow-xl transition-transform duration-500 group-hover:-rotate-[4deg] sm:-left-6"
              >
                IA · dados · automação
              </span>
            </figure>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden border-y border-line bg-line md:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} {...s} className="bg-ink py-8 pr-3 md:px-6 md:first:pl-0" />
          ))}
        </div>

        <div className="flex items-center gap-6 py-7">
          <p className="kicker shrink-0 text-faint">Já atuei em</p>
          <div className="marquee relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <ul className="marquee-track flex w-max animate-marquee">
              {letreiro.map((empresa, i) => (
                <li
                  key={`${empresa}-${i}`}
                  aria-hidden={i >= empresas.length}
                  className="flex items-center gap-6 whitespace-nowrap pr-6 font-display text-xl font-semibold text-paper/80 md:text-2xl"
                >
                  {empresa}
                  <span aria-hidden className="text-signal">
                    ✦
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
