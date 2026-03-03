import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import './global.css' // Keeping your CSS linked!

import UnlockPage from './pages/UnlockPage'
import VisionPage from './pages/VisionPage'
import AtelierPage from './pages/AtelierPage'
import LedgerPage from './pages/LedgerPage'

const SESSION_KEY = "sharome_verified"

// The Navigation Bar (Only shows to verified users)
const Navbar = () => (
  <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 50px', borderBottom: '1px solid #eee', backgroundColor: '#fff' }}>
    <div style={{ fontFamily: 'serif', fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
      SHAROMÉ <span style={{ fontSize: '0.6rem', color: '#888', verticalAlign: 'top' }}>BETA</span>
    </div>
    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
      <Link to="/vision" style={{ color: '#111', textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '500' }}>The Vision</Link>
      <Link to="/atelier" style={{ color: '#111', textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '500' }}>Atelier</Link>
      <Link to="/ledger" style={{ color: '#111', textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '500' }}>Ledger</Link>
    </div>
  </nav>
);

// Guard — if not verified, redirect to /unlock
function Protected({ children }) {
  const verified = sessionStorage.getItem(SESSION_KEY) === 'true'
  return verified ? (
    <>
      <Navbar />
      {children}
    </>
  ) : <Navigate to="/unlock" replace />
}

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/unlock" element={<UnlockPage />} />

      {/* Protected */}
      <Route path="/"        element={<Protected><VisionPage /></Protected>}  />
      <Route path="/vision"  element={<Protected><VisionPage /></Protected>}  />
      <Route path="/atelier" element={<Protected><AtelierPage /></Protected>} />
      <Route path="/ledger"  element={<Protected><LedgerPage /></Protected>}  />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/unlock" replace />} />
    </Routes>
  )
}

export default App