import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './HomePage.css'

function HomePage() {
  useEffect(() => { document.title = "Sharomé | Modern Ethnic Wear" }, [])

  return (
    <div className="home-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="home-hero">

        {/* LEFT — image */}
        <div className="home-hero-image">
          <img
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop"
            alt="Sharomé Editorial"
          />
          <div className="home-hero-overlay"></div>
          <div className="home-image-label">Private Beta · Limited to 50</div>
        </div>

        {/* RIGHT — content */}
        <div className="home-hero-content">
          <p className="home-hero-for">For the woman who knows exactly what she wants.</p>
          <h1 className="home-hero-heading">
            <span className="home-word" style={{ animationDelay: '0.1s' }}>Modern.</span>
            <span className="home-word" style={{ animationDelay: '0.35s' }}>Bespoke.</span>
            <span className="home-word home-word--accent" style={{ animationDelay: '0.6s' }}>Yours.</span>
          </h1>
          <div className="home-hero-line"></div>
          <Link to="/atelier" className="home-btn-primary">Request a Commission</Link>
        </div>

      </section>

      {/* ── PROCESS ── */}
      <section className="home-process">
        <div className="home-process-grid">
          {[
            { n: '01', title: 'Share Your Vision', desc: 'Send us your references — a screenshot, a sketch, a Pinterest link. Tell us exactly what you see in your head.' },
            { n: '02', title: 'We Consult',        desc: 'Our stylist reaches out via WhatsApp. Every detail — fabric, fit, finish — is confirmed before a single stitch.' },
            { n: '03', title: 'We Craft & Deliver', desc: 'Your piece is hand-stitched and delivered to your door within 14 days. Bespoke from start to finish.' },
          ].map((step, i) => (
            <div key={step.n} className="home-process-step">
              <div className="home-step-number">{step.n}</div>
              <div className="home-step-divider"></div>
              <h3 className="home-step-title">{step.title}</h3>
              <p className="home-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DARK STRIP ── */}
      <section className="home-strip">
        <p className="home-strip-text">
          "Fashion shouldn't just fit your body.<br />
          It should fit your <em>soul.</em>"
        </p>
        <div className="home-strip-actions">
          <Link to="/atelier" className="home-btn-primary">Request a Commission</Link>
          <Link to="/vision" className="home-strip-link">Our Story →</Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="fat-footer">
        <div className="footer-grid">
          <div className="footer-col" style={{ flex: 2 }}>
            <div className="brand-logo" style={{ color: '#fff', fontSize: '1.5rem' }}>SHAROMÉ</div>
            <p style={{ color: '#888', marginTop: '20px', maxWidth: '300px' }}>
              Currently operating as an invitation-only portal. The full experience launches soon.
            </p>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            <ul><li>Beta Program</li><li>Our Story</li><li>Fabric Guide</li></ul>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <ul><li>+91 9266390099</li><li>Gurugram, India</li></ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '60px', color: '#555', fontSize: '0.8rem', borderTop: '1px solid #333', paddingTop: '20px' }}>
          © 2025 Sharomé Clothing. All Rights Reserved.
        </div>
      </footer>

      <a
        href="https://wa.me/919266390099?text=Hi%20Sharome,%20I%20would%20like%20to%20inquire%20about%20the%20beta%20program."
        className="whatsapp-float" target="_blank" rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
        </svg>
        with us
      </a>

    </div>
  )
}

export default HomePage
