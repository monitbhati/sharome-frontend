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
      await axios.post('http://localhost:8080/api/orders/submit', formData);
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

      {/* 2. HERO SECTION */}
      <header className="hero">
        <div className="hero-img-container">
            <img src={heroImageImage} alt="Sharome Model" />
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

      {/* 5. FOOTER DISCLAIMER (NEW ADDITION) */}
      <footer className="footer">
        <div className="footer-content">
          <p>
            <strong>Sharomé is currently in its Initial Launch Phase.</strong>
          </p>
          <p>
            Please treat this site as an invitation request portal. We are currently inviting the people to test our bespoke service. 
            So if you care to refer us,s please mail us first.Your feedback is invaluable in shaping our future collections.
          </p>
          <div className="copyright">
            © 2025 Sharomé Clothing. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  )
}

export default App