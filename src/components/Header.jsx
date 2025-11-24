import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header-container">
      <img src="/images/logosof2.png" alt="logo" className="logo" />
      
      <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-container ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/produtos" onClick={closeMenu}>Produtos</Link></li>
          <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
          <li><Link to="/contato" onClick={closeMenu}>Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

