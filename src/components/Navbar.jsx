import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { to: '/',        label: 'Home'    },
    { to: '/vision',  label: 'Vision'  },
    { to: '/atelier', label: 'Atelier' },
    { to: '/ledger',  label: 'Ledger'  },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>

      {/* BRAND */}
      <Link to="/" className="brand-logo">Sharomé</Link>

      {/* DESKTOP LINKS */}
      <ul className="nav-links">
        {links.map(link => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'nav-link--active' : ''}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* BETA TAG — desktop only */}
      <div className="beta-tag">Private Beta</div>

      {/* HAMBURGER — mobile only */}
      <button
        className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`}>
        <ul className="mobile-links">
          {links.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`mobile-link ${location.pathname === link.to ? 'mobile-link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer-footer">Private Beta · Gurugram, India</div>
      </div>

      {/* OVERLAY */}
      {menuOpen && <div className="drawer-overlay" onClick={() => setMenuOpen(false)} />}

    </nav>
  )
}

export default Navbar