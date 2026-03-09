import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './VisionPage.css'

function VisionPage() {
  useEffect(() => { document.title = "Sharomé | Our Story" }, [])

  const observerRef = useRef(null)
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.fade-up').forEach(el => observerRef.current.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="vision-page">
      <Navbar />

      {/* ── OPENING ── */}
      <section className="vision-opening">
        <div className="vision-opening-inner fade-up">
          <span className="vision-eyebrow">The Vision</span>
          <h1 className="vision-opening-heading">
            Our <em>Story.</em>
          </h1>
          <div className="vision-opening-line"></div>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section className="vision-why">
        <div className="vision-why-inner fade-up">
          <span className="vision-eyebrow light">Why We Exist</span>
          <blockquote className="vision-why-quote">
            "There are millions of women in India with a Pinterest board full of outfits
            they love but can never find — not in the right fit, not in the right fabric,
            not made with any real care. Sharomé was built for <em>her.</em>"
          </blockquote>
          <div className="vision-why-attribution">— The Sharomé Founding Belief</div>
        </div>
      </section>

      {/* ── FOUNDER NOTE ── */}
      <section className="vision-founder">
        <div className="vision-founder-inner fade-up">
          <span className="vision-eyebrow">A Note From The Founder</span>
          <p className="vision-founder-quote">
            "I built this after seeing people I care about fall in love with beautiful ideas — and never find them brought to life properly. That felt like a gap worth closing."
          </p>
          <div className="vision-founder-sig">— Sharomé, Gurugram</div>
        </div>
      </section>

      {/* ── THE SHAROMÉ WOMAN ── */}
      <section className="vision-woman">
        <div className="vision-woman-header fade-up">
          <span className="vision-eyebrow">The Sharomé Woman</span>
          <h2 className="vision-section-heading">
            She already knows what she wants.<br />
            She just hasn't found anyone who can make it.
          </h2>
        </div>
        <div className="vision-woman-grid">
          {[
            {
              n: '01', title: 'She has taste.',
              body: 'Her references are precise. She doesn\'t say "something nice" — she says "I want this neckline, this silhouette, this drape." She\'s been called particular. She calls it knowing what she wants.'
            },
            {
              n: '02', title: 'She is done settling.',
              body: 'She\'s returned too many kurtis that looked nothing like the photo. She\'s paid tailors who didn\'t listen. She\'s worn things that fit but never felt right. That ends here.'
            },
            {
              n: '03', title: 'She wears her identity.',
              body: 'For her, getting dressed is not routine. It is intention. Every piece she chooses says something about who she is. She deserves a brand that understands that weight.'
            }
          ].map((card, i) => (
            <div key={card.n} className="vision-woman-card fade-up" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className="woman-card-number">{card.n}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT MAKES IT DIFFERENT ── */}
      <section className="vision-difference">
        <div className="vision-difference-left fade-up">
          <span className="vision-eyebrow">What Makes Sharomé Different</span>
          <h2 className="vision-section-heading">
            Not a tailor.<br />Not a brand.<br /><em>A collaborator.</em>
          </h2>
          <p className="vision-difference-body">
            Most tailors execute instructions. Most brands sell inventory.
            Sharomé does neither. We sit with your vision — your references,
            your rough sketches, your vague feeling of "I'll know it when I see it" —
            and we make it real. Entirely bespoke. Entirely yours.
          </p>
          <Link to="/atelier" className="vision-cta-btn">Request a Commission</Link>
        </div>
        <div className="vision-difference-right fade-up">
          {[
            { label: 'No Catalogue', body: 'Every piece starts as a blank canvas. We don\'t sell what exists. We make what doesn\'t.' },
            { label: 'No Guesswork', body: 'We consult before we cut. Your measurements, your references, your approval — before anything is stitched.' },
            { label: 'No Compromise', body: 'If it isn\'t right, we make it right. A Sharomé piece leaves only when it\'s ready to be worn.' },
          ].map(p => (
            <div key={p.label} className="vision-pillar">
              <span className="pillar-label">{p.label}</span>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
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

export default VisionPage
