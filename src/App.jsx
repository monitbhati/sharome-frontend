import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import heroImageImage from './assets/heroImage.jpeg'

function App() {
  useEffect(() => { document.title = "Sharomé | Private Access"; }, []);

  // --- STATE FOR LOCK SCREEN ---
  const [inviteCode, setInviteCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // --- EXISTING STATE ---
  const [formData, setFormData] = useState({
    customerName: '', phoneNumber: '', 
    houseNumber: '', streetArea: '', city: 'Gurugram', pincode: '',
    outfitType: 'Salwar Suit', userNotes: '', referenceImageUrl: '', socialLink: '' // Added socialLink
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // --- LOCK SCREEN LOGIC ---
  const handleUnlock = (e) => {
    e.preventDefault();
    // THE SECRET PASSWORD (Change this if you want)
    if (inviteCode.toUpperCase() === 'SHAROME2025') {
      setIsVerified(true);
    } else {
      setErrorMsg("Invalid Invite Code. Please request access via Instagram.");
    }
  }

  // ... (Rest of your existing handlers) ...
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

  // --- IF NOT VERIFIED, SHOW LOCK SCREEN ---
  if (!isVerified) {
    return (
      <div style={{
        height: '100vh', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignItems: 'center', background: '#FDFBF7', padding: '20px'
      }}>
        <h1 style={{fontFamily: 'Cormorant Garamond', fontSize: '3rem', color: '#2C3E50', marginBottom: '10px'}}>SHAROMÉ</h1>
        <p style={{fontFamily: 'Jost', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '40px', color: '#888'}}>Private Beta Access</p>
        
        <form onSubmit={handleUnlock} style={{textAlign: 'center', width: '100%', maxWidth: '300px'}}>
          <input 
            type="text" 
            placeholder="ENTER INVITE CODE" 
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
            style={{
              textAlign: 'center', letterSpacing: '3px', borderBottom: '1px solid #2C3E50', 
              marginBottom: '20px', textTransform: 'uppercase'
            }}
          />
          {errorMsg && <p style={{color: 'red', fontSize: '12px', marginBottom: '20px'}}>{errorMsg}</p>}
          
          <button type="submit" style={{
            background: '#2C3E50', color: 'white', padding: '15px 30px', 
            border: 'none', letterSpacing: '2px', fontSize: '10px', cursor: 'pointer', textTransform: 'uppercase'
          }}>
            Unlock Site
          </button>
        </form>
        
        <p style={{marginTop: '50px', fontSize: '11px', color: '#aaa'}}>
          Don't have a code? DM us on Instagram @SharomeOfficial
        </p>
      </div>
    )
  }

  // --- MAIN WEBSITE (Only shows if verified) ---
  return (
    <div className="app-container" style={{width: '100%'}}>
      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="brand-logo">Sharomé</div>
        <div className="beta-tag">Private Beta</div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="hero">
        <div className="hero-img-container">
            <img src={heroImageImage} alt="Sharome Model" />
            <div className="brand-filter"></div>
            <div className="watermark">Sharomé</div>
        </div>
        <div className="hero-content">
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
              
              {/* NEW FEATURE: PASTE LINK */}
              <div className="input-group">
                  <label>Instagram / Pinterest Link (Optional)</label>
                  <input name="socialLink" placeholder="Paste link to the dress..." onChange={handleChange} />
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
                <label>Design Reference (Image)</label>
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

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <p><strong>Sharomé is currently in its Initial Launch Phase.</strong></p>
          <p>Please treat this site as an invitation request portal. We are currently inviting people to test our bespoke service.</p>
          <div className="copyright">© 2025 Sharomé Clothing. All Rights Reserved.</div>
        </div>
      </footer>
      
      {/* WHATSAPP */}
      <a 
        href="https://wa.me/919876543210?text=Hi%20Sharome" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326z"/>
        </svg>
      </a>

    </div>
  )
}

export default App