import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Wordmark } from '../components/SharomeLogo'
import './BusinessPage.css'

const CONTACT_EMAIL = "contact@sharome.in"
const WHATSAPP_LINK = "https://wa.me/919266390099?text=Hi%20SHAROME,%20I%20would%20like%20to%20discuss%20a%20project."

const WORK = [
  {
    kind: 'Survey operations tool',
    client: 'Two market research agencies, India',
    body: 'Replaced an ageing PHP script with one tool for vendor redirect links (complete, terminate, quota-full), live response counts and client-ready reports. Delivered to both agencies with ongoing monthly support.',
    tags: ['PHP', 'MySQL', 'Reporting'],
  },
  {
    kind: 'Corporate websites',
    client: 'Two market research firms, India',
    body: 'Fast, clean company sites covering services, panel and coverage details, and enquiry capture, built and deployed end to end.',
    tags: ['React', 'Responsive', 'Deployment'],
  },
  {
    kind: 'Sharomé',
    client: 'Bespoke ethnic wear platform',
    body: 'A full-stack commission platform: custom order requests, order tracking by phone number, visit analytics and an invite-only private beta.',
    tags: ['React', 'Spring Boot', 'PostgreSQL'],
    link: { to: '/unlock', label: 'Enter with invite code' },
  },
  {
    kind: 'Reelity Check',
    client: 'Android app · coming soon on Google Play',
    body: 'Counts the reels and shorts you scroll on Instagram, YouTube and Snapchat, with daily stats, history and share cards.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room'],
    link: { to: '/privacy-policy', label: 'Privacy policy' },
  },
]

const SERVICES = [
  { title: 'Survey operations tools', body: 'Redirect links per vendor, live quota and IR/LOI dashboards, duplicate and speeder checks, recruitment databases and automatic client reports for market research teams.' },
  { title: 'Business management systems', body: 'One system for customers, orders or jobs, team tasks, invoices and reports, so a growing business is not run from WhatsApp and spreadsheets.' },
  { title: 'Android apps', body: 'Native Kotlin and Jetpack Compose apps, designed, built and published on Google Play.' },
  { title: 'Websites and web apps', body: 'Company sites and full-stack web apps with React, Spring Boot and PostgreSQL, deployed and kept running.' },
]

const STEPS = [
  { title: 'Workflow call', body: 'A free 20-minute call to map how your team works today and where time is lost.' },
  { title: 'Fixed scope and quote', body: 'A short written proposal: what gets built, the price and the timeline.' },
  { title: 'Build with weekly demos', body: 'You see working software every week and steer it as it takes shape.' },
  { title: 'Launch and monthly care', body: 'Hosting, fixes and small changes on a simple monthly plan.' },
]

function BusinessPage() {
  useEffect(() => { document.title = "SHAROME | Custom software studio" }, [])

  return (
    <div className="sh">

      {/* ── HEADER + HERO (navy band) ── */}
      <div className="sh-dark">
        <header className="sh-wrap sh-header">
          <Link to="/" className="sh-logo" aria-label="SHAROME home"><Wordmark /></Link>
          <nav className="sh-nav" aria-label="Main">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="sh-wrap sh-hero">
          <div className="sh-hero-copy">
            <p className="sh-eyebrow">Software studio · Haryana, India</p>
            <h1>Custom software for teams that have outgrown spreadsheets.</h1>
            <p className="sh-lead">
              SHAROME builds survey operations tools for market research companies, management
              systems for growing businesses, and Android apps. Each one is built around how your
              team already works.
            </p>
            <div className="sh-actions">
              <a href="#contact" className="sh-btn">Start a project</a>
              <a href="#work" className="sh-btn sh-btn--ghost">See our work</a>
            </div>
          </div>

          {/* Example of the kind of tool we build */}
          <figure className="sh-panel" aria-label="Example live quota view">
            <figcaption>Example · live quota view</figcaption>
            <div className="sh-panel-head">
              <span>Vendor</span><span>Complete</span><span>Term</span><span>Quota-full</span>
            </div>
            {[
              ['Vendor A', 142, 38, 6],
              ['Vendor B', 96, 51, 2],
              ['Vendor C', 61, 19, 0],
            ].map(([v, c, t, q]) => (
              <div className="sh-panel-row" key={v}>
                <span>{v}</span><span className="sh-num">{c}</span><span className="sh-num">{t}</span><span className="sh-num">{q}</span>
              </div>
            ))}
            <div className="sh-panel-foot">
              <div><span>IR</span><strong>31%</strong></div>
              <div><span>LOI</span><strong>12 min</strong></div>
              <div><span>Quota</span><strong>299 / 400</strong></div>
            </div>
            <div className="sh-bar"><div style={{ width: '75%' }} /></div>
          </figure>
        </section>
      </div>

      {/* ── WORK ── */}
      <section id="work" className="sh-section">
        <div className="sh-wrap">
          <h2>Our work</h2>
          <p className="sh-sub">Recent projects for clients and our own products.</p>
          <div className="sh-work">
            {WORK.map(w => (
              <article className="sh-card" key={w.kind}>
                <p className="sh-card-kicker">{w.client}</p>
                <h3>{w.kind}</h3>
                <p>{w.body}</p>
                <ul className="sh-tags">{w.tags.map(t => <li key={t}>{t}</li>)}</ul>
                {w.link && <Link to={w.link.to} className="sh-link">{w.link.label} →</Link>}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="sh-section sh-section--tint">
        <div className="sh-wrap">
          <h2>What we build</h2>
          <div className="sh-services">
            {SERVICES.map(s => (
              <div className="sh-service" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="sh-section">
        <div className="sh-wrap">
          <h2>How a project runs</h2>
          <ol className="sh-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="sh-step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CONTACT (navy band) ── */}
      <section id="contact" className="sh-dark">
        <div className="sh-wrap sh-contact">
          <div>
            <h2>Tell us what is slowing your team down.</h2>
            <p className="sh-lead">Send a few lines about your project and we will set up a short call.</p>
          </div>
          <ul className="sh-contact-list">
            <li><span>Email</span><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><span>WhatsApp</span><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">+91 92663 90099</a></li>
            <li><span>Location</span><p>Jhajjar, Haryana, India</p></li>
          </ul>
        </div>
        <footer className="sh-wrap sh-footer">
          <Wordmark className="sh-footer-logo" />
          <p>© {new Date().getFullYear()} SHAROME · MSME registered sole proprietorship, Haryana, India</p>
          <nav aria-label="Footer">
            <Link to="/privacy-policy">Privacy policy</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </nav>
        </footer>
      </section>

    </div>
  )
}

export default BusinessPage
