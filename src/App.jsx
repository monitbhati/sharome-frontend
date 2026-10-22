import { Routes, Route, Navigate } from 'react-router-dom'
import UnlockPage from './pages/UnlockPage'
import HomePage from './pages/HomePage'
import VisionPage from './pages/VisionPage'
import AtelierPage from './pages/AtelierPage'
import LedgerPage from './pages/LedgerPage'
import BusinessPage from './pages/BusinessPage'
import PrivacyPage from './pages/PrivacyPage'

const SESSION_KEY = "sharome_verified"

// Guard — if not verified, redirect to /unlock
function Protected({ children }) {
  const verified = sessionStorage.getItem(SESSION_KEY) === 'true'
  return verified ? children : <Navigate to="/unlock" replace />
}

function App() {
  return (
    <Routes>
      {/* Public — SHAROME business site */}
      <Route path="/"               element={<BusinessPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />}  />
      <Route path="/unlock"         element={<UnlockPage />}   />

      {/* Protected — Sharomé store (private beta) */}
      <Route path="/store"          element={<Protected><HomePage /></Protected>}    />
      <Route path="/store/vision"   element={<Protected><VisionPage /></Protected>}  />
      <Route path="/store/atelier"  element={<Protected><AtelierPage /></Protected>} />
      <Route path="/store/ledger"   element={<Protected><LedgerPage /></Protected>}  />

      {/* Old store links → new /store paths */}
      <Route path="/vision"  element={<Navigate to="/store/vision" replace />}  />
      <Route path="/atelier" element={<Navigate to="/store/atelier" replace />} />
      <Route path="/ledger"  element={<Navigate to="/store/ledger" replace />}  />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
