import { useState, useEffect } from 'react'
import './Projects.css'

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')
  const [lightboxAlt, setLightboxAlt] = useState('')

  const photos = [
    {
      id: 1,
      image: "/experiences/first.jpeg",
      alt: "Plaza Mayor",
      description: "Exploring the iconic Plaza Mayor in the heart of Madrid"
    },
    {
      id: 2,
      image: "/experiences/second.jpeg",
      alt: "Retiro Park",
      description: "Relaxing in the beautiful Retiro Park during a study break"
    },
    {
      id: 3,
      image: "/experiences/third.jpeg",
      alt: "Local Cuisine",
      description: "Discovering authentic Spanish tapas and local flavors"
    },
    {
      id: 4,
      image: "/experiences/fourth.jpg",
      alt: "University Life",
      description: "Campus life and academic experiences in Madrid"
    },
    {
      id: 5,
      image: "/experiences/fifth.jpeg",
      alt: "Cultural Sites",
      description: "Visiting museums and cultural landmarks around the city"
    },
    {
      id: 6,
      image: "/experiences/sixth.jpg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    },
    {
      id: 7,
      image: "/experiences/seventh.jpeg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    },
    {
      id: 8,
      image: "/experiences/eight.jpeg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    },
    {
      id: 9,
      image: "/experiences/ninth.jpeg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    },
    {
      id: 10,
      image: "/experiences/tenth.jpeg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    },
    {
      id: 11,
      image: "/experiences/eleventh.jpeg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    },
    {
      id: 12,
      image: "/experiences/twelfth.jpeg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    },
    {
      id: 13,
      image: "/experiences/13.jpeg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    }, 
    {
      id: 14,
      image: "/experiences/14.jpeg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    },
    {
      id: 15,
      image: "/experiences/15.jpeg",
      alt: "City Views",
      description: "Stunning views of Madrid's architecture and skyline"
    }
  ]

  // Group photos into slides of 3 with captions
  const slideData = [
    {
      photos: photos.slice(0, 3),
      caption: "Exploring Madrid's Historic Heart"
    },
    {
      photos: photos.slice(3, 6),
      caption: "Lisbon"
    },
    {
      photos: photos.slice(6, 9),
      caption: "Art"
    },
    {
      photos: photos.slice(9, 12),
      caption: "Valencia"
    },
    {
      photos: photos.slice(12, 15),
      caption: "Mallorca"
    }
  ]

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [slideData.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const openLightbox = (imageSrc: string, imageAlt: string) => {
    setLightboxImage(imageSrc)
    setLightboxAlt(imageAlt)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage('')
    setLightboxAlt('')
    document.body.style.overflow = 'unset' // Restore scrolling
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
              {slideData.map((slideItem, slideIndex) => (
                <div key={slideIndex} className="carousel-slide">
                  <div className="slide-caption">
                    <h3 className="caption-title">{slideItem.caption}</h3>
                  </div>
                  <div className="slide-images-grid">
                    {slideItem.photos.map((photo) => (
                      <div key={photo.id} className="slide-image-item">
                        <div 
                          className="slide-image"
                          onClick={() => openLightbox(photo.image, photo.alt)}
                        >
                          <img src={photo.image} alt={photo.alt} />
                          <div className="image-overlay">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
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
            {slideData.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img src={lightboxImage} alt={lightboxAlt} className="lightbox-image" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
