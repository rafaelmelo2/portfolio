import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../config/nav'

const LABEL_TO_ID = {
  Sobre: 'sobre',
  Projetos: 'projetos',
  Trajetória: 'experiencia',
  Skills: 'skills',
  Cursos: 'cursos',
  Livros: 'livros',
  Depoimentos: 'depoimentos',
  Contato: 'contato',
  Blog: 'blog',
}

export function Navbar({ isMenuOpen, setIsMenuOpen, scrolled }) {
  const location = useLocation()

  const handleNavClick = () => setIsMenuOpen(false)

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-xl md:text-2xl font-bold tracking-tighter text-emerald-400 cursor-pointer z-50 hover:text-emerald-300 transition-colors"
          onClick={handleNavClick}
        >
          DEV<span className="text-slate-100">.AI</span>
        </Link>

        <div className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((item) =>
            item.isRoute ? (
              <Link
                key={item.label}
                to="/blog"
                onClick={handleNavClick}
                className={`hover:text-emerald-400 transition-colors ${location.pathname === '/blog' ? 'text-emerald-400' : ''}`}
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.label}
                to={`/#${LABEL_TO_ID[item.label] ?? item.scrollId}`}
                onClick={handleNavClick}
                className="hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        <button
          className="md:hidden text-slate-100 z-50 p-3 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-1 touch-manipulation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 md:hidden flex flex-col items-center justify-center gap-6 py-20 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {navLinks.map((item) =>
          item.isRoute ? (
            <Link
              key={item.label}
              to="/blog"
              onClick={handleNavClick}
              className={`min-h-[48px] flex items-center justify-center px-6 py-3 text-xl sm:text-2xl font-bold transition-colors touch-manipulation ${location.pathname === '/blog' ? 'text-emerald-400' : 'text-slate-300 hover:text-emerald-400 active:text-emerald-400'}`}
            >
              {item.label}
            </Link>
          ) : (
            <Link
              key={item.label}
              to={`/#${LABEL_TO_ID[item.label] ?? item.scrollId}`}
              onClick={handleNavClick}
              className="min-h-[48px] flex items-center justify-center px-6 py-3 text-xl sm:text-2xl font-bold text-slate-300 hover:text-emerald-400 active:text-emerald-400 transition-colors touch-manipulation"
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </nav>
  )
}
