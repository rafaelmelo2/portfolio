import { Menu, X } from 'lucide-react'

const navLinks = ['Sobre', 'Experiência', 'Projetos', 'Skills', 'Depoimentos', 'Contato']

export function Navbar({ isMenuOpen, setIsMenuOpen, scrolled, scrollTo }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold tracking-tighter text-emerald-400 cursor-pointer z-50" onClick={() => scrollTo('home')}>
          DEV<span className="text-slate-100">.AI</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))}
              className="hover:text-emerald-400 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>

        <button className="md:hidden text-slate-100 z-50 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {navLinks.map((item) => (
          <button
            key={item}
            onClick={() => scrollTo(item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))}
            className="text-2xl font-bold text-slate-300 hover:text-emerald-400 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  )
}
