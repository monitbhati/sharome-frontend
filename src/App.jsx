import { Routes, Route, Navigate } from 'react-router-dom'
import UnlockPage from './pages/UnlockPage'
import HomePage from './pages/HomePage'
import VisionPage from './pages/VisionPage'
import AtelierPage from './pages/AtelierPage'
import LedgerPage from './pages/LedgerPage'

const SESSION_KEY = "sharome_verified"

// Guard — if not verified, redirect to /unlock
function Protected({ children }) {
  const verified = sessionStorage.getItem(SESSION_KEY) === 'true'
  return verified ? children : <Navigate to="/unlock" replace />
}

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/unlock" element={<UnlockPage />} />

      {/* Protected */}
      <Route path="/"             element={<Protected><HomePage /></Protected>}       />
      <Route path="/vision"       element={<Protected><VisionPage /></Protected>}     />
      <Route path="/atelier"      element={<Protected><AtelierPage /></Protected>}    />
      <Route path="/ledger"       element={<Protected><LedgerPage /></Protected>}     />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/unlock" replace />} />
    </Routes>
  )
}

export default App
