import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Wordmark } from '../components/SharomeLogo'
import { CONTACT_EMAIL, LOCATION, SERVICES } from './data'
import './site.css'

const NAV = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/survey-tools', label: 'Survey tools' },
  { to: '/about', label: 'About' },
]

/* Navy title band used at the top of every inner page. */
export function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="sh-dark">
      <div className="sh-wrap sh-pagehero">
        {eyebrow && <p className="sh-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="sh-lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}

/* Closing call to action, shown above the footer on most pages. */
export function CtaBand({ title = 'Tell us what is slowing your team down.', body = 'Send a few lines about your project and we will set up a short call.' }) {
  return (
    <section className="sh-cta">
      <div className="sh-wrap sh-cta-inner">
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className="sh-actions">
          <Link to="/contact" className="sh-btn">Start a project</Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="sh-btn sh-btn--ghost">{CONTACT_EMAIL}</a>
        </div>
      </div>
    </section>
  )
}

/* Project card used on Home and Work. */
export function WorkCard({ w, to }) {
  return (
    <article className="sh-card">
      <p className="sh-card-kicker">{w.client}</p>
      <h3>{w.kind}</h3>
      <p>{w.summary}</p>
      <ul className="sh-tags">{w.tags.map(t => <li key={t}>{t}</li>)}</ul>
      {to && <Link to={to} className="sh-link">Read the case study →</Link>}
    </article>
  )
}

export default function SiteLayout() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="sh">
      <a href="#main" className="sh-skip">Skip to content</a>
      <div className="sh-dark sh-topbar">
        <header className="sh-wrap sh-header">
          <Link to="/" className="sh-logo" aria-label="SHAROME home"><Wordmark /></Link>
          <button
            className="sh-menu-btn" aria-expanded={open} aria-controls="sh-nav"
            onClick={() => setOpen(o => !o)}
          >
            <span className="sh-menu-icon" aria-hidden="true" />
            <span className="sh-visually-hidden">Menu</span>
          </button>
          <nav id="sh-nav" className={`sh-nav${open ? ' is-open' : ''}`} aria-label="Main" onClick={() => setOpen(false)}>
            {NAV.map(n => <NavLink key={n.to} to={n.to}>{n.label}</NavLink>)}
            <NavLink to="/contact" className="sh-nav-cta">Contact</NavLink>
          </nav>
        </header>
      </div>

      <main id="main">
        <Outlet />
      </main>

      <footer className="sh-dark sh-sitefooter">
        <div className="sh-wrap sh-footer-grid">
          <div className="sh-footer-brand">
            <Wordmark className="sh-footer-logo" />
            <p>A small software studio in Haryana, India, building tools for market research teams, growing businesses and creators.</p>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy policy</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {SERVICES.map(s => (
                <li key={s.id}><Link to={s.link || `/services#${s.id}`}>{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              <li>{LOCATION}</li>
            </ul>
          </div>
        </div>
        <div className="sh-wrap sh-footer">
          <p>© {new Date().getFullYear()} SHAROME · MSME registered sole proprietorship, Haryana, India</p>
        </div>
      </footer>
    </div>
  )
}
