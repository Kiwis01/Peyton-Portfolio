import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import Projects from './components/Projects'
import BlogReports from './components/BlogReports'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <BlogReports />
      <Contact />
    </div>
  )
}

export default App
