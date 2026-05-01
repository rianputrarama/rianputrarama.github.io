// App.jsx
// Ini file utama yang menyatukan semua komponen jadi satu halaman

import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />

      <footer>
        <p>© 2026 Febriansyah Putra Ramadhan. Built with ❤️ in Jakarta.</p>
        <div className="social-links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
      <BackToTop />
    </div>
  )
}

export default App
