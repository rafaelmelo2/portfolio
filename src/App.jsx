import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import {
  Navbar,
  Hero,
  Services,
  Projects,
  About,
  Experience,
  Skills,
  Cursos,
  Livros,
  Testimonials,
  FAQ,
  Contact,
  Footer,
  Blog,
  BlogPost,
} from './components'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const hash = location.hash.slice(1)
    if (hash) {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Experience />
      <Skills />
      <Cursos />
      <Livros />
      {/* Só aparece quando houver depoimentos com "publicado": true em src/data/depoimentos.json */}
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Troca de rota sem âncora: volta ao topo
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <a
        href="#conteudo"
        className="sr-only z-[90] rounded-full bg-signal px-5 py-3 font-display font-bold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrolled={scrolled} />

      <main id="conteudo">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
