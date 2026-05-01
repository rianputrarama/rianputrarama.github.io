// components/Navbar.jsx
// Navbar dengan hamburger menu di mobile

import { useState } from 'react'

function Navbar() {
  // State untuk buka/tutup hamburger menu
  const [menuOpen, setMenuOpen] = useState(false)

  // Tutup menu saat link diklik
  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <nav>
      {/* Logo */}
      <a href="/" className="logo">&lt;Rian /&gt;</a>

      {/* Nav links — desktop */}
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger button — hanya muncul di mobile */}
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about"      onClick={handleLinkClick}>About</a>
          <a href="#projects"   onClick={handleLinkClick}>Projects</a>
          <a href="#experience" onClick={handleLinkClick}>Experience</a>
          <a href="#contact"    onClick={handleLinkClick}>Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
