import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './UnlockPage.css'
import heroImage from '../assets/heroImage.jpeg'

const BACKEND_URL = "https://sharome-api.onrender.com"
const CORRECT_CODE = "SHAROMEFORYOU"
const SESSION_KEY = "sharome_verified"

function UnlockPage() {
  useEffect(() => { document.title = "Sharomé | Private Access" }, [])

  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // If already verified this session, skip straight to vision
  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      navigate('/vision', { replace: true })
    }
  }, [navigate])

  const handleUnlock = async (e) => {
    e.preventDefault()
    setError('')

    if (code.toUpperCase() !== CORRECT_CODE) {
      setError('Invalid invite code. Please try again.')
      setCode('')
      return
    }

    setLoading(true)

    // Mark verified
    sessionStorage.setItem(SESSION_KEY, 'true')

    // Silent analytics — don't block the UI
    axios.post(`${BACKEND_URL}/api/analytics/unlock`, {
      code: CORRECT_CODE,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      referrer: document.referrer || 'Direct',
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }).catch(() => {})

    // Small pause for feel, then navigate
    setTimeout(() => {
      navigate('/vision', { replace: true })
    }, 600)
  }

  return (
    <div className="unlock-page">

      {/* Faint wallpaper */}
      <div
        className="unlock-wallpaper"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Content */}
      <div className="unlock-content">

        <div className="unlock-inner">
          <h1 className="unlock-wordmark">Sharomé</h1>
          <span className="unlock-eyebrow">Private Beta Access</span>

          <form className="unlock-form" onSubmit={handleUnlock}>
            <input
              type="text"
              className="unlock-input"
              placeholder="Enter invite code"
              value={code}
              onChange={(e) => { setCode(e.target.value); setError('') }}
              autoComplete="off"
              autoFocus
            />

            {error && <p className="unlock-error">{error}</p>}

            <button
              type="submit"
              className="unlock-btn"
              disabled={loading}
            >
              {loading ? '...' : 'Unlock'}
            </button>
          </form>

          <p className="unlock-hint">
            By invitation only. No code? <a href="https://wa.me/919266390099" target="_blank" rel="noopener noreferrer">Request access</a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default UnlockPage
