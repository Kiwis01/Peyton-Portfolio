import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <button onClick={() => scrollToSection('hero')}>
            Peyton's Portfolio
          </button>
        </div>
        
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button onClick={() => scrollToSection('hero')} className="nav-link">
              Home
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About Me
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('resume')} className="nav-link">
              Résumé
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('projects')} className="nav-link">
              Experiences
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('blog')} className="nav-link">
              Blog Reports
            </button>
          </li>
          <li className="nav-item">
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </li>
        </ul>

        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
