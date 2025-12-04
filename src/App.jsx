import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import heroImageImage from './assets/heroImage.jpeg'

function App() {
  useEffect(() => { document.title = "Sharomé | Modern Ethnic"; }, []);

  const [formData, setFormData] = useState({
    customerName: '', phoneNumber: '', 
    houseNumber: '', streetArea: '', city: 'Gurugram', pincode: '',
    outfitType: 'Salwar Suit', userNotes: '', referenceImageUrl: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setFormData({ ...formData, referenceImageUrl: reader.result });
      reader.readAsDataURL(file);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const BACKEND_URL ="https://sharome-api.onrender.com";
      await axios.post(`${BACKEND_URL}/api/orders/submit`, formData);
      setSubmitted(true);
      window.scrollTo(0, 0); 
    } catch (error) { alert("System Error."); } finally { setLoading(false); }
  }

  return (
    <div>
      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="brand-logo">Sharomé</div>
        <div className="beta-tag">Private Beta</div>
      </nav>

      {/* 2. HERO SECTION (With Parallax Effect) */}
      <header className="hero" style={{ overflow: 'hidden' }}>
        <div className="hero-img-container" style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0
        }}>
            <img 
              src={heroImageImage} 
              alt="Sharome Model" 
              style={{
                width: '100%', height: '100%', objectFit: 'cover', 
                transform: 'scale(1.1)', // Slight zoom for effect
                transition: 'transform 10s ease'
              }} 
            />
        </div>
        <div className="hero-content" style={{ zIndex: 1, position: 'relative' }}>
          <h1>Modern.<br/>Bespoke.<br/>Yours.</h1>
          <p>The new language of Indian Ethnic Wear.</p>
        </div>
      </header>

      {/* 3. MANIFESTO */}
      <section className="manifesto-section">
        <p className="manifesto-text">
          "Fashion shouldn't just fit your body, it should fit your <span className="highlight">soul</span>. 
          Sharomé is inviting 50 muses to experience the luxury of true custom tailoring."
        </p>
      </section>

      {/* 3.5. REVIEWS (Social Proof - NEW SECTION) */}
      <section style={{padding: '60px 20px', background: '#F5F5F5', textAlign: 'center'}}>
        <h3 style={{fontFamily: 'Cormorant Garamond', fontSize: '2rem', marginBottom: '40px', color: '#2C3E50'}}>Early Impressions</h3>
        <div style={{display: 'flex', gap: '20px', overflowX: 'auto', padding: '10px', justifyContent: 'center', flexWrap: 'wrap'}}>
          
          {/* Review Card 1 */}
          <div style={{background: 'white', padding: '30px', maxWidth: '300px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderRadius: '8px'}}>
            <p style={{fontStyle: 'italic', color: '#555'}}>"Finally, a brand that understands modern Indian aesthetics. The fit was perfect."</p>
            <p style={{marginTop: '20px', fontWeight: 'bold', color: '#2C3E50'}}>- Ananya S., Delhi</p>
          </div>

          {/* Review Card 2 */}
          <div style={{background: 'white', padding: '30px', maxWidth: '300px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderRadius: '8px'}}>
            <p style={{fontStyle: 'italic', color: '#555'}}>"The fabric quality for the beta test was surprising. Felt very premium."</p>
            <p style={{marginTop: '20px', fontWeight: 'bold', color: '#2C3E50'}}>- Meera K., Mumbai</p>
          </div>

        </div>
      </section>

      {/* 4. FORM SECTION */}
      <section className="form-section">
        <div className="form-wrapper">
          
          {submitted ? (
             <div style={{textAlign: 'center', padding: '40px 20px', minHeight: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h2 style={{fontFamily: 'Cormorant Garamond', fontSize: '2.5rem', color: '#2C3E50', lineHeight: '1.2'}}>Application Received.</h2>
                <div style={{width: '50px', height: '1px', background: '#A5A58D', margin: '20px auto'}}></div>
                <p style={{fontSize: '1.1rem', color: '#555'}}>Thank you, {formData.customerName}.</p>
                <p style={{fontSize: '0.9rem', color: '#888', marginTop: '10px'}}>We will contact you via WhatsApp at {formData.phoneNumber}.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="form-title">The Application</h2>

              {/* Personal */}
              <div className="input-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input name="customerName" required onChange={handleChange} />
                </div>
                <div className="input-group">
                  <label>WhatsApp Number</label>
                  <input name="phoneNumber" type="tel" required onChange={handleChange} />
                </div>
              </div>

              {/* Address */}
              <div className="input-row">
                <div className="input-group">
                   <label>City</label>
                   <input name="city" defaultValue="Gurugram" required onChange={handleChange} />
                </div>
                <div className="input-group">
                   <label>Pincode</label>
                   <input name="pincode" required onChange={handleChange} />
                </div>
              </div>
              <div className="input-group">
                  <label>Delivery Address</label>
                  <input name="streetArea" placeholder="House No, Street, Landmark" required onChange={handleChange} />
              </div>

              {/* Outfit */}
              <div className="input-group">
                <label>Desired Outfit</label>
                <select name="outfitType" onChange={handleChange} style={{background: 'transparent'}}>
                  <option value="Salwar Suit">Contemporary Salwar Suit</option>
                  <option value="Co-ord Set">Ethnic Co-ord Set</option>
                  <option value="Saree">Concept Saree</option>
                  <option value="Lehenga">Minimalist Lehenga</option>
                  <option value="Blouse">Designer Blouse</option>
                </select>
              </div>

              <div className="input-group">
                <label>Design Reference</label>
                <div className={`upload-trigger ${formData.referenceImageUrl ? 'active-upload' : ''}`} onClick={() => document.getElementById('fileInput').click()}>
                   <input id="fileInput" type="file" accept="image/*" hidden onChange={handleImageUpload} />
                   <span style={{fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', color: '#555'}}>
                     {formData.referenceImageUrl ? "✓ Image Selected" : "+ Upload Moodboard / Photo"}
                   </span>
                </div>
              </div>

              <div className="input-group">
                <label>Notes</label>
                <textarea name="userNotes" rows="2" placeholder="Tell us about your vision..." onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Processing...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 5. FOOTER DISCLAIMER */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            <strong>Sharomé is currently in its Initial Launch Phase.</strong>
          </p>
          <p>
            Please treat this site as an invitation request portal. We are currently inviting people to test our bespoke service. 
            So if you care to refer us, please mail us first. Your feedback is invaluable in shaping our future collections.
          </p>
          <div className="copyright">
            © 2025 Sharomé Clothing. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* 6. FLOATING WHATSAPP BUTTON (NEW ADDITION) */}
      <a 
        href="https://wa.me/918816952235?text=Hi%20Sharome,%20I%20want%20to%20know%20more%20about%20the%20beta%20program." 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed', width: '60px', height: '60px', bottom: '30px', right: '30px',
          backgroundColor: '#25d366', color: '#FFF', borderRadius: '50px', textAlign: 'center',
          fontSize: '30px', boxShadow: '2px 2px 3px #999', zIndex: 1000, display: 'flex',
          alignItems: 'center', justifyContent: 'center', textDecoration: 'none'
        }}
      >
        {/* Simple SVG WhatsApp Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592z"/>
        </svg>
      </a>

    </div>
  )
}

export default App