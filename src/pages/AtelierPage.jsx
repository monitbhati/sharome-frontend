import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import './AtelierPage.css'

const BACKEND_URL = "https://sharome-api.onrender.com"

function AtelierPage() {
  useEffect(() => { document.title = "Sharomé | Atelier" }, [])

  const [formData, setFormData] = useState({
    customerName: '', phoneNumber: '',
    houseNumber: '', streetArea: '', landmark: '',
    city: 'Gurugram', state: 'Haryana', pincode: '',
    outfitType: 'Salwar Suit', userNotes: '', referenceImageUrl: '', socialLink: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef(null)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const processImage = (file) => {
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onloadend = () => setFormData(prev => ({ ...prev, referenceImageUrl: reader.result }))
    reader.readAsDataURL(file)
  }

  const handleImageUpload = (e) => processImage(e.target.files[0])
  const handleDrop = (e) => { e.preventDefault(); setDragOver(false); processImage(e.dataTransfer.files[0]) }
  const handleDragOver = (e) => { e.preventDefault(); setDragOver(true) }
  const handleDragLeave = () => setDragOver(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = { ...formData, city: `${formData.city}, ${formData.state}` }
      await axios.post(`${BACKEND_URL}/api/orders/submit`, payload)
      setSubmitted(true)
      window.scrollTo(0, 0)
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="atelier-page">
      <Navbar />

      {/* ── HERO ── */}
      <section className="atelier-hero">
        <div className="atelier-hero-inner">
          <span className="atelier-eyebrow">The Atelier</span>
          <h1 className="atelier-hero-heading">
            Tell us your<br /><em>vision.</em>
          </h1>
          <p className="atelier-hero-sub">
            This is where your idea becomes a garment. Fill in the details below — the more you share, the better we can craft.
          </p>
          <div className="atelier-hero-divider"></div>
        </div>
      </section>

      {/* ── FORM or CONFIRMATION ── */}
      <section className="atelier-form-section">
        <div className="atelier-form-wrapper">

          {submitted ? (
            <div className="atelier-confirmation">
              <div className="confirmation-mark">✓</div>
              <h2 className="confirmation-heading">Application Received.</h2>
              <div className="confirmation-line"></div>
              <p className="confirmation-name">Thank you, {formData.customerName}.</p>
              <p className="confirmation-sub">
                We will reach out via WhatsApp at<br />
                <strong>{formData.phoneNumber}</strong> within 24 hours.
              </p>
              <div className="confirmation-steps">
                {[
                  { n: '01', label: 'Application', status: 'done', desc: 'Received' },
                  { n: '02', label: 'Consultation', status: 'next', desc: 'WhatsApp · 24hrs' },
                  { n: '03', label: 'Craft', status: 'pending', desc: 'Begins after consult' },
                  { n: '04', label: 'Delivery', status: 'pending', desc: '14 days' },
                ].map(step => (
                  <div key={step.n} className={`conf-step conf-step--${step.status}`}>
                    <div className="conf-step-number">{step.n}</div>
                    <div className="conf-step-label">{step.label}</div>
                    <div className="conf-step-desc">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="atelier-form">

              {/* ── BLOCK 1: IDENTITY ── */}
              <div className="form-block">
                <div className="form-block-label">01 — Your Details</div>
                <div className="input-row">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input name="customerName" required onChange={handleChange} placeholder="As on your order" />
                  </div>
                  <div className="input-group">
                    <label>WhatsApp Number</label>
                    <input name="phoneNumber" required onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
              </div>

              {/* ── BLOCK 2: VISION UPLOAD ── */}
              <div className="form-block">
                <div className="form-block-label">02 — Drop Your Vision</div>

                <div
                  className={`vision-upload ${dragOver ? 'vision-upload--dragover' : ''} ${formData.referenceImageUrl ? 'vision-upload--filled' : ''}`}
                  onClick={() => fileInputRef.current.click()}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  {formData.referenceImageUrl && (
                    <img src={formData.referenceImageUrl} alt="Reference" className="upload-bg-preview" />
                  )}

                  <div className="upload-overlay"></div>

                  <div className="upload-content">
                    {formData.referenceImageUrl ? (
                      <>
                        <div className="upload-check">✓</div>
                        <p className="upload-status">Reference Attached</p>
                        <span className="upload-change">Click to change</span>
                      </>
                    ) : (
                      <>
                        <div className="upload-icon">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="16 16 12 12 8 16"></polyline>
                            <line x1="12" y1="12" x2="12" y2="21"></line>
                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                          </svg>
                        </div>
                        <p className="upload-title">
                          {dragOver ? 'Release to upload' : 'Drop your reference here'}
                        </p>
                        <p className="upload-hint">Screenshot, photo, or sketch · JPG, PNG · Max 10MB</p>
                        <span className="upload-browse">Browse Files</span>
                      </>
                    )}
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageUpload}
                  />
                </div>

                <div className="input-group" style={{ marginTop: '24px' }}>
                  <label>Or paste an Instagram / Pinterest link</label>
                  <input name="socialLink" placeholder="https://www.instagram.com/p/..." onChange={handleChange} />
                </div>
              </div>

              {/* ── BLOCK 3: DESIGN REQUEST ── */}
              <div className="form-block">
                <div className="form-block-label">03 — The Design</div>

                <div className="input-group">
                  <label>Category</label>
                  <select name="outfitType" onChange={handleChange} style={{ background: 'transparent' }}>
                    <option value="Salwar Suit">Salwar Kameez</option>
                    <option value="Kurti">Designer Kurti</option>
                    <option value="Blouse">Saree Blouse</option>
                    <option value="Plazo Set">Plazo Set</option>
                    <option value="Gown">Ethnic Gown</option>
                  </select>
                </div>

                <div className="input-group">
                  <label>Styling Notes</label>
                  <textarea
                    name="userNotes"
                    rows="5"
                    placeholder="Describe the fit, fabric preference, neckline, embroidery, colours — anything that matters to you..."
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {/* ── BLOCK 4: SHIPPING ── */}
              <div className="form-block">
                <div className="form-block-label">04 — Shipping Details</div>

                <div className="input-row">
                  <div className="input-group">
                    <label>House / Flat No.</label>
                    <input name="houseNumber" required onChange={handleChange} placeholder="e.g. Flat 302" />
                  </div>
                  <div className="input-group">
                    <label>Pincode</label>
                    <input name="pincode" required onChange={handleChange} />
                  </div>
                </div>

                <div className="input-group">
                  <label>Street / Society / Colony</label>
                  <input name="streetArea" required onChange={handleChange} placeholder="e.g. DLF Phase 3, Block U" />
                </div>

                <div className="input-group">
                  <label>Landmark</label>
                  <input name="landmark" onChange={handleChange} placeholder="e.g. Near Community Center" />
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label>City</label>
                    <input name="city" required onChange={handleChange} defaultValue="Gurugram" />
                  </div>
                  <div className="input-group">
                    <label>State</label>
                    <input name="state" required onChange={handleChange} defaultValue="Haryana" />
                  </div>
                </div>
              </div>

              {/* ── SUBMIT ── */}
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Submitting your application...' : 'Submit Application'}
              </button>

              <p className="form-note">
                We will contact you via WhatsApp within 24 hours of receiving your application.
              </p>

            </form>
          )}
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

      {/* WHATSAPP */}
      <a href="https://wa.me/919266390099?text=Hi%20Sharome,%20I%20would%20like%20to%20inquire%20about%20the%20beta%20program."
        className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
        </svg>
        with us
      </a>
    </div>
  )
}

export default AtelierPage
