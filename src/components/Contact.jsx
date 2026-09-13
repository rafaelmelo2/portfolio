import { ArrowUpRight, Check, Copy, Github, Globe, Linkedin, Mail } from 'lucide-react'
import { useState } from 'react'
import { contatoFormulario, contatos, perfil } from '../data'
import { Reveal } from './ui'

const ICONES = {
  Mail,
  Linkedin,
  Github,
  Globe,
}

export function Contact() {
  const { titulo, subtitulo } = contatoFormulario
  const emailItem = contatos.find((c) => c.tipo === 'email')
  const email = emailItem?.url.replace(/^mailto:/, '')
  const redes = contatos.filter((c) => c.tipo !== 'email' && c.tipo !== 'site')
  const [copiado, setCopiado] = useState(false)

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2200)
    } catch {
      window.location.href = emailItem.url
    }
  }

  const beneficios = ['Aberto a projetos e parcerias', 'Desafios técnicos são bem-vindos', `Base em ${perfil.local}`]

  return (
    <section id="contato" className="relative overflow-hidden bg-signal text-ink [&_:focus-visible]:outline-ink">

      <div className="shell relative py-24 md:py-36">
        <Reveal>
          <p className="kicker flex items-center gap-3 text-ink/70">
            <span>09</span>
            <span aria-hidden className="h-px w-10 bg-ink/50" />
            Contato
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-8 max-w-5xl text-[clamp(2.75rem,7.5vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            {titulo}
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/75 md:text-xl">{subtitulo}</p>
        </Reveal>

        {emailItem && (
          <Reveal delay={240} className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-center">
            <a
              href={emailItem.url}
              className="group inline-flex min-h-[72px] items-center justify-between gap-4 rounded-full bg-ink py-3 pl-6 pr-3 font-display text-base font-bold text-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgb(var(--ink)/0.6)] sm:gap-6 sm:pl-8 sm:text-2xl md:text-3xl"
            >
              <span className="truncate">{email}</span>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-signal text-ink transition-transform duration-300 group-hover:rotate-45 md:h-16 md:w-16">
                <ArrowUpRight size={26} />
              </span>
            </a>
            <button
              type="button"
              onClick={copiar}
              className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full border-2 border-ink/80 px-7 font-mono text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:bg-ink hover:text-signal"
            >
              {copiado ? <Check size={18} /> : <Copy size={18} />}
              <span aria-live="polite">{copiado ? 'Copiado!' : 'Copiar e-mail'}</span>
            </button>
          </Reveal>
        )}

        <Reveal delay={320} className="mt-16 grid gap-10 border-t border-ink/20 pt-10 md:grid-cols-2">
          <ul className="grid gap-3 font-medium">
            {beneficios.map((b) => (
              <li key={b} className="flex items-center gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-signal">
                  <Check size={14} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3 md:justify-end md:self-end">
            {redes.map((rede) => {
              const Icon = ICONES[rede.icone] ?? Globe
              return (
                <a
                  key={rede.id}
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[52px] items-center gap-3 rounded-full border-2 border-ink/80 px-6 font-display text-lg font-semibold transition-colors duration-300 hover:bg-ink hover:text-signal"
                >
                  <Icon size={20} />
                  {rede.label}
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
