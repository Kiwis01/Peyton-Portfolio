import './About.css'

const About = () => {

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My journey through global studies and cultural exploration</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="/about-me/IMG_7375.jpeg" 
              alt="Peyton Rubenstein" 
              className="profile-image"
            />
          </div>
          
          <div className="about-text">
            <p className="about-description">
              Hi! I'm Peyton Rubenstein, and I am spending Fall 2025 in Madrid, Spain! As a Global Studies student, my courses largely focus on global processes and institutions. From this perspective, I have cultivated an interest in environmental justice, as well as intersectional feminist and media theoretical frameworks.
            </p>
            <p className="about-description">
              I have a passion for issues related to human rights, international institutions, and cultural diversity. I have always wanted to travel widely and am extremely excited to broaden my horizons overseas! In previous travel experiences, I have honed the skills of adaptability, collaboration, and curiosity, all of which I view as integral to the core of a global citizen.
            </p>
            <p className="about-description">
              Moreover, my academic background has heightened my cultural awareness, analytical skillset, and understanding of global issues. I look forward to nurturing my curiosity through lived experience and furthering my understanding of global issues while in Madrid.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
