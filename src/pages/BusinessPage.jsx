import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './BusinessPage.css'

const CONTACT_EMAIL = "contact@sharome.in"
const WHATSAPP_LINK = "https://wa.me/919266390099?text=Hi%20SHAROME,%20I%20would%20like%20to%20discuss%20a%20project."

function BusinessPage() {
  useEffect(() => { document.title = "SHAROME | Websites & Android Apps" }, [])

  return (
    <div className="biz-page">

      {/* ── HEADER ── */}
      <header className="biz-header">
        <Link to="/" className="biz-logo">SHAROME</Link>
        <nav className="biz-nav">
          <a href="#services">Services</a>
          <a href="#apps">Apps</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="biz-hero">
        <p className="biz-eyebrow">Software studio · Haryana, India</p>
        <h1 className="biz-title">
          We build websites and <em>Android apps</em> that people actually use.
        </h1>
        <p className="biz-lead">
          SHAROME designs and develops full-stack web platforms for clients around the world,
          and publishes its own apps on Google Play.
        </p>
        <div className="biz-hero-actions">
          <a href="#contact" className="biz-btn">Start a project</a>
          <a href="#apps" className="biz-link">See our apps →</a>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="biz-section">
        <h2 className="biz-section-title">Services</h2>
        <div className="biz-grid">
          <article className="biz-card">
            <span className="biz-card-num">01</span>
            <h3>Web development</h3>
            <p>Fast, responsive websites and web apps, from landing pages to complete platforms with dashboards and order flows.</p>
          </article>
          <article className="biz-card">
            <span className="biz-card-num">02</span>
            <h3>Full-stack platforms</h3>
            <p>React front ends with Spring Boot and PostgreSQL back ends, deployed and kept running for you.</p>
          </article>
          <article className="biz-card">
            <span className="biz-card-num">03</span>
            <h3>Android apps</h3>
            <p>Native Kotlin and Jetpack Compose apps, built and published on Google Play.</p>
          </article>
        </div>
      </section>

      {/* ── APPS ── */}
      <section id="apps" className="biz-section">
        <h2 className="biz-section-title">Our apps</h2>
        <div className="biz-app">
          <div className="biz-app-badge">RC</div>
          <div className="biz-app-body">
            <div className="biz-app-head">
              <h3>Reelity Check</h3>
              <span className="biz-tag">Coming soon on Google Play</span>
            </div>
            <p>
              A digital wellbeing app that counts how many reels and shorts you scroll on
              Instagram, YouTube and Snapchat, and how much time you spend there, so you can
              see your habits clearly.
            </p>
            <Link to="/privacy-policy" className="biz-link">Privacy policy →</Link>
          </div>
        </div>

        <div className="biz-app">
          <div className="biz-app-badge biz-app-badge--alt">S</div>
          <div className="biz-app-body">
            <div className="biz-app-head">
              <h3>Sharomé</h3>
              <span className="biz-tag">Private beta</span>
            </div>
            <p>
              A bespoke Indian ethnic wear platform with commissions, order tracking and an
              invite-only beta, built end to end by SHAROME.
            </p>
            <Link to="/unlock" className="biz-link">Enter with invite code →</Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="biz-section biz-contact">
        <h2 className="biz-section-title">Contact</h2>
        <p className="biz-lead">Have a project in mind, or a question about one of our apps? Get in touch.</p>
        <ul className="biz-contact-list">
          <li>
            <span>Email</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </li>
          <li>
            <span>WhatsApp</span>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">+91 92663 90099</a>
          </li>
          <li>
            <span>Location</span>
            <p>Jhajjar, Haryana, India</p>
          </li>
        </ul>
      </section>

      {/* ── FOOTER ── */}
      <footer className="biz-footer">
        <p>© {new Date().getFullYear()} SHAROME · MSME registered sole proprietorship, Haryana, India</p>
        <nav>
          <Link to="/privacy-policy">Privacy policy</Link>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </nav>
      </footer>

    </div>
  )
}

export default BusinessPage
