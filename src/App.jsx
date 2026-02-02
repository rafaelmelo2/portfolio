import { useState, useEffect } from 'react'
import {
  Navbar,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Testimonials,
  Contact,
  Footer,
} from './components'

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
        scrollTo={scrollTo}
      />

      <main>
        <Hero scrollTo={scrollTo} />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
