import { Github, Globe, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks } from '../config/nav'
import { contatos, perfil } from '../data'
import { Logo } from './ui'

const ICONES = {
  Mail,
  Linkedin,
  Github,
  Globe,
}

export function Footer() {
  const ano = new Date().getFullYear()
  const links = contatos.filter((c) => c.tipo !== 'site')

  return (
    <footer className="relative overflow-hidden border-t border-line bg-[#070807]">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Link to="/" className="group inline-block" aria-label="Rafael Melo — início">
            <Logo />
          </Link>
          <p className="mt-5 max-w-xs leading-relaxed text-muted">
            IA aplicada, automação e dados, construídos com cuidado em {perfil.local}.
          </p>
        </div>

        <nav aria-label="Rodapé" className="md:col-span-3">
          <p className="kicker text-faint">Navegação</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-1">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.isRoute ? '/blog' : `/#${item.scrollId}`}
                  className="inline-flex min-h-[36px] items-center text-paper/80 transition-colors hover:text-signal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/#contato"
                className="inline-flex min-h-[36px] items-center text-paper/80 transition-colors hover:text-signal"
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="kicker text-faint">Contato</p>
          <ul className="mt-5 space-y-2">
            {links.map((c) => {
              const Icon = ICONES[c.icone] ?? Globe
              const externo = c.tipo !== 'email'
              return (
                <li key={c.id}>
                  <a
                    href={c.url}
                    {...(externo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="group/link inline-flex min-h-[44px] items-center gap-3 break-all text-paper/80 transition-colors hover:text-signal"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line transition-all duration-300 group-hover/link:-rotate-12 group-hover/link:border-signal">
                      <Icon size={16} />
                    </span>
                    {c.tipo === 'email' ? c.url.replace(/^mailto:/, '') : c.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="kicker text-faint">Este site</p>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Feito com React, Vite e Tailwind CSS. Sem cookies e sem rastreamento.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="kicker mt-4 inline-flex min-h-[44px] items-center text-signal transition-colors hover:text-paper"
          >
            Voltar ao topo ↑
          </button>
        </div>
      </div>

      <div aria-hidden className="shell select-none overflow-hidden">
        <p className="text-outline whitespace-nowrap font-display text-[clamp(3.5rem,14vw,12.5rem)] font-extrabold leading-[0.8] tracking-[-0.05em] opacity-30">
          rafael melo
        </p>
      </div>

      <div className="border-t border-line">
        <div className="shell flex flex-col gap-2 py-6 text-sm text-faint md:flex-row md:justify-between">
          <p>
            &copy; {ano} {perfil.nome}. Todos os direitos reservados.
          </p>
          <p>{perfil.local}, Brasil</p>
        </div>
      </div>
    </footer>
  )
}
