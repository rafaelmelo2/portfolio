import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Livros,
  Cursos,
  // Testimonials,
  Contact,
  Footer,
  Blog,
} from './components'

function HomePage({ scrollTo }) {
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
      <Hero scrollTo={scrollTo} />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Cursos />
      <Livros />
      {/* <Testimonials /> */}
      <Contact />
    </>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setIsMenuOpen(false)
    if (id === 'blog') return // Navbar trata rota
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage scrollTo={scrollTo} />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
