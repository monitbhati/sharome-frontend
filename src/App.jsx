import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

// --- SWIPER IMPORTS (The Engine) ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import heroImageImage from './assets/heroImage.jpeg'

const slides = [
  heroImageImage, 
];

function App() {
  useEffect(() => { document.title = "Sharomé | Modern Ethnic"; }, []);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    customerName: '', phoneNumber: '', 
    houseNumber: '', streetArea: '', landmark: '', city: 'Gurugram', state: 'Haryana', pincode: '',
    outfitType: 'Salwar Suit', userNotes: '', referenceImageUrl: '', socialLink: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // --- LOCK SCREEN STATE ---
  const [inviteCode, setInviteCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleUnlock = (e) => {
    e.preventDefault();
    if (inviteCode.toUpperCase() === 'SHAROME2026') {
      setIsVerified(true);
    } else {
      setErrorMsg("Invalid Invite Code.");
    }
  }

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
      const payload = { ...formData, city: `${formData.city}, ${formData.state}` };
      const BACKEND_URL ="https://sharome-api.onrender.com";
      await axios.post(`${BACKEND_URL}/api/orders/submit`, payload);
      setSubmitted(true);
      window.scrollTo(0, 0); 
    } catch (error) { alert("System Error."); } finally { setLoading(false); }
  }

  // --- WALLPAPER COMPONENT ---
  const globalWallpaperStyle = {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    backgroundImage: `url(${heroImageImage})`, 
    backgroundSize: 'cover', backgroundPosition: 'center', zIndex: -10,
    filter: 'grayscale(100%) brightness(1.2) opacity(0.08)', 
    pointerEvents: 'none'
  };
  const Wallpaper = () => <div style={globalWallpaperStyle}></div>;

  if (!isVerified) {
    return (
      <>
        <Wallpaper />
        <div style={{
          height: '100vh', display: 'flex', flexDirection: 'column', 
          justifyContent: 'center', alignItems: 'center', background: 'transparent', padding: '20px'
        }}>
          <h1 style={{fontFamily: 'Cormorant Garamond', fontSize: '3rem', color: '#2C3E50', marginBottom: '10px'}}>SHAROMÉ</h1>
          <p style={{fontFamily: 'Jost', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.8rem', marginBottom: '40px', color: '#888'}}>Private Beta Access</p>
          <form onSubmit={handleUnlock} style={{textAlign: 'center', width: '100%', maxWidth: '300px'}}>
            <input 
              type="text" placeholder="ENTER INVITE CODE" 
              value={inviteCode} onChange={(e) => setInviteCode(e.target.value)}
              style={{textAlign: 'center', letterSpacing: '3px', borderBottom: '1px solid #2C3E50', marginBottom: '20px', textTransform: 'uppercase', background: 'transparent', border: 'none', borderBottom: '1px solid #333', width: '100%', padding: '10px'}}
            />
            {errorMsg && <p style={{color: 'red', fontSize: '12px', marginBottom: '20px'}}>{errorMsg}</p>}
            <button type="submit" style={{background: '#2C3E50', color: 'white', padding: '15px 30px', border: 'none', letterSpacing: '2px', fontSize: '10px', cursor: 'pointer', textTransform: 'uppercase'}}>Unlock Stitch</button>
          </form>
        </div>
      </>
    )
  }

  return (
    <> 
      <Wallpaper />
      <div className="app-container" style={{width: '100%'}}>
        
        <nav className="navbar">
          <div className="brand-logo">Sharomé</div>
          <div className="beta-tag">Private Beta</div>
        </nav>

        {/* HERO SECTION WITH SWIPEABLE SLIDER */}
        <header className="hero">
          <div className="hero-img-container">
              <Swiper
                modules={[Autoplay, EffectFade, Pagination]}
                effect={'fade'} // Use 'slide' if you prefer sliding over fading
                speed={1500}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }} // Adds dots at the bottom
                loop={true}
                style={{ width: '100%', height: '100%' }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <img src={slide} alt={`Sharome Look ${index}`} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </SwiperSlide>
                ))}
              </Swiper>
              
              {/* Overlays remain on top */}
              <div className="brand-filter"></div>
              <div className="watermark">Sharomé</div>
          </div>
          <div className="hero-content">
            <h1>Modern.<br/>Bespoke.<br/>Yours.</h1>
            <p>The new language of Indian Ethnic Wear.</p>
          </div>
        </header>

        {/* ... (The rest of your Manifesto, Form, Footer code remains exactly the same) ... */}
        
        {/* Paste the rest of your sections here (Manifesto, Reviews, Form, Footer, WhatsApp) from previous code */}
        {/* I am omitting them here to save space, but DO NOT DELETE THEM in your file */}
         <section className="manifesto-section">
          <p className="manifesto-text">
            "Fashion shouldn't just fit your body, it should fit your <span className="highlight">soul</span>. 
            Sharomé is inviting 50 muses to experience the luxury of true custom tailoring."
          </p>
        </section>
        <section className="process-section">
  <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: '2rem', color: '#2C3E50' }}>The Journey</h2>
  <div className="process-grid">
    <div className="process-step">
      <div className="step-number">01</div>
      <div className="step-title">The Vision</div>
      <p className="step-desc">Submit your references or sketch via our secure portal.</p>
    </div>
    <div className="process-step">
      <div className="step-number">02</div>
      <div className="step-title">The Consult</div>
      <p className="step-desc">We connect via WhatsApp to finalize fabrics and measurements.</p>
    </div>
    <div className="process-step">
      <div className="step-number">03</div>
      <div className="step-title">The Craft</div>
      <p className="step-desc">Your bespoke piece is hand-stitched and shipped to your door.</p>
    </div>
  </div>
</section>

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

                <div className="input-row">
                  // In your JSX, replace the existing "Design Reference" input-group with this:

  <div className="input-group">
  <label>Design Reference / Sketch</label>
  
  <div 
    className={`upload-trigger ${formData.referenceImageUrl ? 'active-upload' : ''}`} 
    onClick={() => document.getElementById('fileInput').click()}
    style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      minHeight: '120px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    {formData.referenceImageUrl ? (
      // SHOW PREVIEW IF IMAGE EXISTS
      <>
        <img 
          src={formData.referenceImageUrl} 
          alt="Preview" 
          style={{ 
            position: 'absolute', 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            opacity: '0.3', // Fade it out slightly so text is visible
            zIndex: 1
          }} 
        />
        <div style={{ zIndex: 2, position: 'relative' }}>
          <i className="ri-check-line" style={{ fontSize: '1.5rem', color: '#2C3E50' }}></i>
          <p style={{ fontSize: '0.8rem', fontWeight: 'bold', margin: '5px 0' }}>Image Attached</p>
          <span style={{ fontSize: '0.6rem', textDecoration: 'underline' }}>Click to change</span>
        </div>
      </>
    ) : (
      // SHOW DEFAULT STATE
      <>
        <i className="ri-upload-cloud-line" style={{ fontSize: '1.5rem', color: '#888' }}></i>
        <p style={{ fontSize: '0.8rem', marginTop: '5px', color: '#888' }}>+ Upload Moodboard</p>
      </>
    )}
    
    <input id="fileInput" type="file" accept="image/*" hidden onChange={handleImageUpload} />
  </div>
</div>
                </div>

                <h3 style={{fontSize: '13px', textTransform: 'uppercase', color: '#2C3E50', marginBottom: '20px', letterSpacing: '2px', borderBottom: '1px solid #eee', paddingBottom: '10px', marginTop: '40px'}}>Shipping Details</h3>
                
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
                    <label>Landmark (Near...)</label>
                    <input name="landmark" onChange={handleChange} placeholder="e.g. Near Community Center" />
                </div>

                <div className="input-row">
                  <div className="input-group">
                     <label>City</label>
                     <input name="city" required onChange={handleChange} />
                  </div>
                  <div className="input-group">
                     <label>State</label>
                     <input name="state" required onChange={handleChange} />
                  </div>
                </div>

                <h3 style={{fontSize: '13px', textTransform: 'uppercase', color: '#2C3E50', marginBottom: '20px', letterSpacing: '2px', borderBottom: '1px solid #eee', paddingBottom: '10px', marginTop: '40px'}}>Design Request</h3>

                <div className="input-group">
                  <label>Category</label>
                  <select name="outfitType" onChange={handleChange} style={{background: 'transparent'}}>
                    <option value="Salwar Suit">Salwar Kameez</option>
                    <option value="Kurti">Designer Kurti</option>
                    <option value="Blouse">Saree Blouse</option>
                    <option value="Plazo Set">Plazo Set</option>
                    <option value="Gown">Ethnic Gown</option>
                  </select>
                </div>

                <div className="input-group">
                    <label>Instagram / Pinterest Link (Optional)</label>
                    <input name="socialLink" placeholder="Paste link to the dress..." onChange={handleChange} />
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
                  <label>Styling Notes</label>
                  <textarea name="userNotes" rows="4" placeholder="Describe the fit, fabric preference, or specific details..." onChange={handleChange}></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Submitting...' : 'Complete Application'}
                </button>
              </form>
            )}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-content">
            <p><strong>Sharomé is currently in its Initial Launch Phase.</strong></p>
            <p>Please treat this site as an invitation request portal.</p>
            <div className="copyright">© 2025 Sharomé Clothing. All Rights Reserved.</div>
          </div>
        </footer>
        <a 
  href="https://wa.me/919266390099?text=Hi%20Sharom%C3%A9%20Team,%20I%20just%20visited%20your%20website.%20I%20have%20a%20query%20regarding%20a%20custom%20design."
  className="whatsapp-pill" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#2C3E50',
    color: '#FFF',
    padding: '12px 25px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontSize: '0.9rem',
    letterSpacing: '1px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    transition: 'transform 0.3s'
  }}
  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.backgroundColor = '#1a252f'; }}
  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = '#2C3E50'; }}
>
  <i className="ri-whatsapp-line" style={{ fontSize: '1.2rem' }}></i>
  <span>Chat with us</span>
</a>
        

      </div>
    </>
  )
}

export default App
