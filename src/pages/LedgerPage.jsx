import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import './LedgerPage.css'

const BACKEND_URL = "https://sharome-api.onrender.com"

const TIMELINE = [
  {
    day: '01',
    label: 'Application Received',
    desc: 'Your order has been submitted and is in our system.',
    range: [1, 1],
  },
  {
    day: '02–03',
    label: 'Stylist Consultation',
    desc: 'Our stylist will reach out via WhatsApp to confirm measurements and finalize your design.',
    range: [2, 3],
  },
  {
    day: '04',
    label: 'Fabric Confirmed',
    desc: 'Fabric selection is locked in. Your garment is ready to be cut.',
    range: [4, 4],
  },
  {
    day: '05–10',
    label: 'Crafting in Progress',
    desc: 'Your garment is being hand-stitched with care. This is where the magic happens.',
    range: [5, 10],
  },
  {
    day: '11–12',
    label: 'Quality Check',
    desc: 'Every seam, every detail is reviewed before we let it leave our hands.',
    range: [11, 12],
  },
  {
    day: '13',
    label: 'Packed & Dispatched',
    desc: 'Your order is packed and handed to our delivery partner.',
    range: [13, 13],
  },
  {
    day: '14',
    label: 'Delivered',
    desc: 'Your Sharomé piece has arrived. Wear it with intention.',
    range: [14, 14],
  },
]

function getStageIndex(createdAt) {
  const created = new Date(createdAt)
  const now = new Date()
  const diffMs = now - created
  const daysPassed = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1
  const clampedDay = Math.min(Math.max(daysPassed, 1), 14)

  for (let i = 0; i < TIMELINE.length; i++) {
    const [min, max] = TIMELINE[i].range
    if (clampedDay >= min && clampedDay <= max) return i
  }
  return TIMELINE.length - 1
}

function LedgerPage() {
  useEffect(() => { document.title = "Sharomé | Ledger" }, [])

  const [phone, setPhone] = useState('')
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searched, setSearched] = useState(false)

  const handleTrack = async (e) => {
    e.preventDefault()
    if (!phone.trim()) return
    setLoading(true)
    setError('')
    setOrder(null)
    setSearched(false)

    try {
      const res = await axios.get(`${BACKEND_URL}/api/orders/track/${phone.trim()}`)
      setOrder(res.data)
      setSearched(true)
    } catch (err) {
      if (err.response?.status === 404) {
        setError('No order found for this number. Please check and try again.')
      } else {
        setError('Something went wrong. Please try again in a moment.')
      }
      setSearched(true)
    } finally {
      setLoading(false)
    }
  }

  const currentStage = order ? getStageIndex(order.createdAt) : -1

  return (
    <div className="ledger-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="ledger-hero">
        <div className="ledger-hero-inner">
          <span className="ledger-eyebrow">The Ledger</span>
          <h1 className="ledger-hero-heading">
            Where is your<br /><em>order?</em>
          </h1>
          <p className="ledger-hero-sub">
            Enter the WhatsApp number you used when placing your order.
          </p>

          {/* ── SEARCH ── */}
          <form className="ledger-search" onSubmit={handleTrack}>
            <div className="ledger-search-inner">
              <input
                type="text"
                className="ledger-search-input"
                placeholder="+91 XXXXX XXXXX"
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
              <button type="submit" className="ledger-search-btn" disabled={loading}>
                {loading ? '...' : 'Track'}
              </button>
            </div>
          </form>

          {/* ERROR */}
          {error && <p className="ledger-error">{error}</p>}
        </div>
      </section>

      {/* ── TIMELINE ── */}
      {order && (
        <section className="ledger-result">

          {/* ORDER META */}
          <div className="ledger-meta">
            <div className="ledger-meta-item">
              <span className="meta-label">Customer</span>
              <span className="meta-value">{order.customerName}</span>
            </div>
            <div className="ledger-meta-item">
              <span className="meta-label">Category</span>
              <span className="meta-value">{order.outfitType}</span>
            </div>
            <div className="ledger-meta-item">
              <span className="meta-label">Order Placed</span>
              <span className="meta-value">
                {new Date(order.createdAt).toLocaleDateString('en-IN', {
                  day: 'numeric', month: 'long', year: 'numeric'
                })}
              </span>
            </div>
            <div className="ledger-meta-item">
              <span className="meta-label">Current Stage</span>
              <span className="meta-value meta-value--accent">
                {TIMELINE[currentStage]?.label}
              </span>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="ledger-timeline">
            {TIMELINE.map((stage, i) => {
              const isDone = i < currentStage
              const isActive = i === currentStage
              const isPending = i > currentStage

              return (
                <div
                  key={stage.day}
                  className={`timeline-step 
                    ${isDone ? 'timeline-step--done' : ''} 
                    ${isActive ? 'timeline-step--active' : ''} 
                    ${isPending ? 'timeline-step--pending' : ''}`
                  }
                >
                  {/* Left: day + line */}
                  <div className="timeline-left">
                    <div className="timeline-day">Day {stage.day}</div>
                    {i < TIMELINE.length - 1 && <div className="timeline-connector"></div>}
                  </div>

                  {/* Centre: dot */}
                  <div className="timeline-dot-col">
                    <div className="timeline-dot">
                      {isDone && <span className="dot-check">✓</span>}
                      {isActive && <span className="dot-pulse"></span>}
                    </div>
                    {i < TIMELINE.length - 1 && <div className="timeline-line"></div>}
                  </div>

                  {/* Right: content */}
                  <div className="timeline-content">
                    <div className="timeline-label">{stage.label}</div>
                    <p className="timeline-desc">{stage.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* BOTTOM CTA */}
          <div className="ledger-bottom">
            <p className="ledger-bottom-text">
              Have a question about your order?
            </p>
            <a
              href={`https://wa.me/919266390099?text=Hi Sharome, I am tracking my order for ${order.customerName}`}
              className="ledger-wa-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message Us on WhatsApp
            </a>
          </div>

        </section>
      )}

      {/* ── EMPTY STATE — before search ── */}
      {!searched && !order && (
        <section className="ledger-empty">
          <div className="ledger-journey">
            <span className="ledger-eyebrow" style={{ textAlign: 'center', display: 'block' }}>
              The 14-Day Journey
            </span>
            <div className="journey-grid">
              {TIMELINE.map((stage, i) => (
                <div key={stage.day} className="journey-card">
                  <div className="journey-day">Day {stage.day}</div>
                  <div className="journey-label">{stage.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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

      <a href="https://wa.me/919266390099" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
        </svg>
        with us
      </a>
    </div>
  )
}

export default LedgerPage
