import { useState } from 'react'
import './Essay.css'

const Essay = () => {
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/essay/essay.pdf'
    link.download = '/essay/essay.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="essay" className="essay">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Reflective Essay</h2>
          <p className="section-subtitle">Reflections on my study abroad journey and global perspectives</p>
        </div>
        
        <div className="essay-content">
          {/* PDF Controls */}
          <div className="pdf-controls">
            <button 
              className="btn btn-primary pdf-btn"
              onClick={toggleFullscreen}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
              </svg>
              {isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
            </button>
            
            <button 
              className="btn btn-secondary pdf-btn"
              onClick={handleDownload}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7,10 12,15 17,10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Essay (PDF)
            </button>
          </div>

          {/* PDF Viewer */}
          <div className={`pdf-viewer-container ${isFullscreen ? 'fullscreen' : ''}`}>
            {isFullscreen && (
              <button 
                className="close-fullscreen"
                onClick={toggleFullscreen}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
            
            <div className="pdf-viewer">
              <object
                data="/essay/essay.pdf"
                type="application/pdf"
                className="pdf-iframe"
              >
                <div className="pdf-error">
                  <p>Your browser doesn't support PDF viewing.</p>
                  <button onClick={handleDownload} className="btn btn-primary">
                    Download PDF to View
                  </button>
                </div>
              </object>
            </div>
            
            {/* Fallback message */}
            <div className="pdf-fallback">
              <p>
                If the PDF doesn't display properly, you can{' '}
                <button onClick={handleDownload} className="download-link">
                  download it here
                </button>
                {' '}or view it in a new tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Essay
