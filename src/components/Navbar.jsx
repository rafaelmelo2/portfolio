import { Menu, X } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../config/nav'
import { contatos } from '../data'
import { Logo } from './ui'

const destino = (item) => (item.isRoute ? '/blog' : `/#${item.scrollId}`)

export function Navbar({ isMenuOpen, setIsMenuOpen, scrolled }) {
  const location = useLocation()
  const email = contatos.find((c) => c.tipo === 'email')?.url
  const fechar = () => setIsMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false)
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [isMenuOpen, setIsMenuOpen])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled && !isMenuOpen ? 'border-line bg-ink/80 py-3 backdrop-blur-xl' : 'border-transparent py-5'
        }`}
      >
        <div className="shell flex items-center justify-between gap-6">
          <Link to="/" onClick={fechar} className="group relative z-50 animate-rise" aria-label="Rafael Melo — início">
            <Logo />
          </Link>

          <nav aria-label="Principal" className="hidden xl:block">
            <ul className="flex items-center gap-7">
              {navLinks.map((item) => {
                const ativo = item.isRoute && location.pathname.startsWith('/blog')
                return (
                  <li key={item.label}>
                    <Link
                      to={destino(item)}
                      className={`relative py-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-signal after:transition-transform after:duration-300 hover:text-paper hover:after:scale-x-100 ${
                        ativo ? 'text-paper after:scale-x-100' : 'text-muted after:scale-x-0'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="relative z-50 flex items-center gap-2">
            <Link
              to="/#contato"
              onClick={fechar}
              className="hidden min-h-[44px] items-center gap-2 rounded-full bg-paper px-5 font-display text-sm font-bold text-ink transition-colors duration-300 hover:bg-signal sm:inline-flex"
            >
              Contato <span aria-hidden>→</span>
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-paper transition-colors hover:border-signal xl:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMenuOpen}
              aria-controls="menu-mobile"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fora do <header>: backdrop-filter no header quebraria o position: fixed do menu */}
      <div
        id="menu-mobile"
        className={`fixed inset-0 z-40 flex flex-col bg-ink px-5 pb-8 pt-24 transition-[transform,visibility] duration-500 ease-out xl:hidden ${
          isMenuOpen ? 'visible translate-y-0' : 'invisible -translate-y-full'
        }`}
      >
        <nav aria-label="Menu" className="relative flex-1 overflow-y-auto">
          <ul className="border-t border-line">
            {navLinks.map((item, i) => (
              <li key={item.label} className="border-b border-line">
                <Link
                  to={destino(item)}
                  onClick={fechar}
                  className="flex min-h-[56px] items-baseline gap-4 py-3 font-display text-3xl font-bold tracking-tight text-paper transition-colors hover:text-signal active:text-signal"
                >
                  <span className="kicker text-faint">{String(i + 1).padStart(2, '0')}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={email}
          className="relative mt-6 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-signal font-display text-lg font-bold text-ink"
        >
          Vamos conversar <span aria-hidden>→</span>
        </a>
      </div>
    </>
  )
}
