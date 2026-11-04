import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Wordmark } from '../components/SharomeLogo'
import { CONTACT_EMAIL, LOCATION, SERVICES } from './data'
import { SplitWords } from './motion'
import { useSiteMotion } from './useSiteMotion'
import './site.css'

const NAV = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/survey-tools', label: 'Survey tools' },
  { to: '/about', label: 'About' },
]

/* Small arrow that slides on hover inside buttons and links. */
export const Arrow = () => <span className="sh-arrow" aria-hidden="true">→</span>

/* Dark title band at the top of every inner page. Wrap a word in *asterisks* for the italic accent. */
export function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="sh-dark sh-hero-band">
      <div className="sh-glow sh-parallax" style={{ '--speed': 0.12 }} aria-hidden="true" />
      <div className="sh-grid-lines" aria-hidden="true" />
      <div className="sh-wrap sh-pagehero">
        {eyebrow && <p className="sh-eyebrow sh-fade-in">{eyebrow}</p>}
        <SplitWords text={title} />
        {lead && <p className="sh-lead sh-fade-in" style={{ '--i': 6 }}>{lead}</p>}
        {children && <div className="sh-fade-in" style={{ '--i': 8 }}>{children}</div>}
      </div>
    </section>
  )
}

/* Closing call to action, shown above the footer on most pages. */
export function CtaBand({ title = 'Tell us what is *slowing* your team down.', body = 'Send a few lines about your project and we will set up a short call.' }) {
  return (
    <section className="sh-cta">
      <div className="sh-wrap sh-cta-inner">
        <h2 data-reveal className="sh-cta-title">
          {title.split(' ').map((w, i) => (
            <span key={i} className={w.startsWith('*') ? 'sh-accent' : undefined}>{w.replace(/\*/g, '')}{' '}</span>
          ))}
        </h2>
        <div data-reveal style={{ '--d': 2 }}>
          <p>{body}</p>
          <div className="sh-actions">
            <Link to="/contact" className="sh-btn">Start a project <Arrow /></Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="sh-btn sh-btn--ghost-light">{CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* Project card used on Home. */
export function WorkCard({ w, to, i = 0 }) {
  return (
    <article className="sh-card sh-spot" data-reveal style={{ '--d': i }}>
      <p className="sh-card-kicker">{w.client}</p>
      <h3>{w.kind}</h3>
      <p>{w.summary}</p>
      <ul className="sh-tags">{w.tags.map(t => <li key={t}>{t}</li>)}</ul>
      {to && <Link to={to} className="sh-link">Read the case study <Arrow /></Link>}
    </article>
  )
}

export default function SiteLayout() {
  const { pathname, hash } = useLocation()
  const [open, setOpen] = useState(false)
  const scrolled = useSiteMotion(pathname)

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { el.scrollIntoView(); return }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className={`sh${open ? ' sh--menu-open' : ''}`}>
      <a href="#main" className="sh-skip">Skip to content</a>
      <div className={`sh-topbar${scrolled ? ' is-scrolled' : ''}`}>
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
            {NAV.map((n, i) => <NavLink key={n.to} to={n.to} style={{ '--i': i }}>{n.label}</NavLink>)}
            <NavLink to="/contact" className="sh-nav-cta" style={{ '--i': NAV.length }}>Contact</NavLink>
          </nav>
        </header>
      </div>

      <main id="main">
        <div className="sh-page" key={pathname}>
          <Outlet />
        </div>
      </main>

      <footer className="sh-dark sh-sitefooter">
        <div className="sh-wrap sh-footer-big" aria-hidden="true">
          <Wordmark className="sh-footer-wordmark" />
        </div>
        <div className="sh-wrap sh-footer-grid">
          <div className="sh-footer-brand">
            <p>SHAROME builds tools for market research teams, growing businesses and creators, from Haryana, India.</p>
          </div>
          <div>
            <h4>Company</h4>
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
          <a href="#main" className="sh-totop">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}
