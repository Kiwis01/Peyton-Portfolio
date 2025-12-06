import { useState, useEffect } from 'react'
import './Projects.css'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const photos = [
    {
      id: 1,
      image: "./images/madrid-1.jpg",
      alt: "Plaza Mayor",
      description: "Exploring the iconic Plaza Mayor in the heart of Madrid"
    },
    {
      id: 2,
      image: "./images/madrid-2.jpg",
      alt: "Retiro Park",
      description: "Relaxing in the beautiful Retiro Park during a study break"
    },
    {
      id: 3,
      image: "./images/madrid-3.jpg",
      alt: "Local Cuisine",
      description: "Discovering authentic Spanish tapas and local flavors"
    },
    {
      id: 4,
      image: "./images/madrid-4.jpg",
      alt: "University Life",
      description: "Campus life and academic experiences in Madrid"
    },
    {
      id: 5,
      image: "./images/madrid-5.jpg",
      alt: "Cultural Sites",
      description: "Visiting museums and cultural landmarks around the city"
    },
    {
      id: 6,
      image: "./images/madrid-6.jpg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    }
  ]

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [photos.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Study Abroad Experiences</h2>
        </div>
        
        <div className="carousel-container">
          <div className="carousel">
            <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {photos.map((photo) => (
                <div key={photo.id} className="carousel-slide">
                  <div className="slide-image">
                    <img src={photo.image} alt={photo.alt} />
                  </div>
                  <div className="slide-content">
                    <h3 className="slide-title">{photo.alt}</h3>
                    <p className="slide-description">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,6 15,12 9,18"></polyline>
              </svg>
            </button>
          </div>
          
          {/* Dots Indicator */}
          <div className="carousel-dots">
            {photos.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
