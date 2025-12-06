import './Hero.css'

const Hero = () => {

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <img 
          src="./images/plaza-mayor.jpeg" 
          alt="Study abroad experience" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="highlight">Semester in Spain</span>
          </h1>
          <p className="hero-subtitle">A Global Studies Major's Study Abroad Experience </p>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
