import { useState } from 'react'
import './Resume.css'

const Resume = () => {
  const [showResumeImage, setShowResumeImage] = useState(false)

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume/Peyton-Resume.pdf'
    link.download = 'Peyton-Rubenstein-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleShowResume = () => {
    setShowResumeImage(!showResumeImage)
  }

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Résumé</h2>
          <p className="section-subtitle">Professional qualifications and experience</p>
        </div>
        
        <div className="resume-content">
          {/* Resume Buttons */}
          <div className="resume-buttons">
            <button 
              className="btn btn-primary resume-btn"
              onClick={handleShowResume}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {showResumeImage ? 'Hide Resume' : 'Show Resume'}
            </button>
            
            <button 
              className="btn btn-secondary resume-btn"
              onClick={handleDownloadResume}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7,10 12,15 17,10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Full Resume (PDF)
            </button>
          </div>

          {/* Resume Image Display */}
          {showResumeImage && (
            <div className="resume-image-container">
              <div className="resume-image-wrapper">
                <img 
                  src="./resume/resume.png" 
                  alt="Peyton's Resume" 
                  className="resume-image"
                />
              </div>
            </div>
          )}

          {/* Career Objective */}
          <div className="resume-section">
            <h3 className="resume-section-title">Career Objective</h3>
            <p className="objective-text">
              Motivated Global Studies graduate seeking a role that leverages strong research, writing, and cross-cultural communication
              skills. Interested in contributing to organizations focused on media, culture, and social justice through collaborative, critical,
              and culturally aware work.
            </p>
          </div>

         
          {/* Skills */}
          <div className="resume-section">
            <h3 className="resume-section-title">Skills</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h5>Writing and Communication</h5>
                <p>Editorial writing, interviewing, limited Spanish proficiency</p>
              </div>
              <div className="skill-category">
                <h5>Software</h5>
                <p>Microsoft Office, Adobe Creative, Excel, Markdown</p>
              </div>
              <div className="skill-category">
                <h5>Interpersonal</h5>
                <p>Collaboration, communication, cultural awareness</p>
              </div>
              <div className="skill-category">
                <h5>Critical Thinking</h5>
                <p>Efficient problem-solving, analytical examination, time management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
