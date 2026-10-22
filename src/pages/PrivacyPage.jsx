import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPage.css'

const CONTACT_EMAIL = "contact@sharome.in"
const EFFECTIVE_DATE = "22 October 2026"

function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | SHAROME"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="privacy-page">

      <header className="privacy-header">
        <Link to="/" className="privacy-logo">SHAROME</Link>
        <Link to="/" className="privacy-back">← Back to home</Link>
      </header>

      <main className="privacy-body">
        <h1>Privacy Policy</h1>
        <p className="privacy-meta">Effective date: {EFFECTIVE_DATE}</p>

        <p>
          This policy explains what information SHAROME (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects through
          the <strong>Reelity Check</strong> Android app and the sharome.in website, how it is used, and the
          choices you have. SHAROME is a sole proprietorship registered in Haryana, India.
        </p>

        <h2>1. Reelity Check app</h2>

        <h3>Accessibility Service</h3>
        <p>
          Reelity Check uses Android&rsquo;s Accessibility Service API, but only after you turn it on yourself
          in your phone&rsquo;s settings. We use it for one purpose: to detect when you scroll to a new reel or
          short in Instagram, YouTube and Snapchat, and how long those apps stay open, so the app can show
          you your reel count and time spent.
        </p>
        <ul>
          <li>It only reacts to Instagram, YouTube and Snapchat. It does not monitor any other app.</li>
          <li>It does not read or store your messages, comments, typed text, passwords, contacts or the content of the videos you watch.</li>
          <li>The information it produces (counts and time) is processed and stored on your device.</li>
          <li>You can turn it off at any time in Settings → Accessibility. Counting stops when it is off.</li>
        </ul>

        <h3>Data stored on your device</h3>
        <p>
          Your reel counts, time spent, daily history, statistics and app settings (such as your chosen
          language and notification style) are stored locally on your phone. We do not receive this data,
          and it is deleted when you uninstall the app or clear its data.
        </p>

        <h3>Notifications</h3>
        <p>
          The app shows notifications about your scrolling. These are generated on your device and do not
          send any data to us.
        </p>

        <h3>Friends feature (optional)</h3>
        <p>
          If you choose to use the friends feature, we store a display name you pick, your friend
          connections and your daily reel counts using Google Firebase, so you and your friends can compare
          counts. This data is not used for anything else. You can ask us to delete it at any time by
          emailing us. If you never use the friends feature, none of this is collected.
        </p>

        <h3>Advertising</h3>
        <p>
          The free version of the app shows ads through Google AdMob. AdMob may collect information such as
          your device&rsquo;s advertising ID, IP address and general app interaction to show and measure ads,
          as described in{' '}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
            Google&rsquo;s policy on how it uses data from partner apps
          </a>. You can reset or delete your advertising ID in your phone&rsquo;s Google settings. Buying
          Premium removes ads.
        </p>

        <h3>Purchases</h3>
        <p>
          Premium is purchased through Google Play Billing. Payment is handled entirely by Google; we never
          see or store your card or payment details. We only receive confirmation that a purchase was made.
        </p>

        <h2>2. sharome.in website</h2>
        <p>
          The SHAROME business pages do not use cookies or tracking tools. The invite-only Sharomé store
          beta records basic technical details (browser type, screen size, language, timezone and referring
          page) when an invite code is used, and stores the details you choose to submit in a commission
          request (such as your name, phone number and order details) so we can respond and track your
          order.
        </p>

        <h2>3. Sharing</h2>
        <p>
          We do not sell your personal information. We share data only with the service providers named
          above (Google Firebase, Google AdMob and Google Play) to run those features, or when required by
          law.
        </p>

        <h2>4. Children</h2>
        <p>
          Reelity Check is not directed at children under 13, and we do not knowingly collect personal
          information from them. If you believe a child has provided us data, contact us and we will delete it.
        </p>

        <h2>5. Your choices and data deletion</h2>
        <ul>
          <li>Turn off the Accessibility Service at any time to stop counting.</li>
          <li>Uninstall the app or clear its data to delete everything stored on your device.</li>
          <li>Email us to delete any friends-feature or website data we hold about you. We respond within 30 days.</li>
        </ul>

        <h2>6. Changes to this policy</h2>
        <p>
          If we change this policy, we will update it on this page and change the effective date above.
        </p>

        <h2>7. Contact</h2>
        <p>
          SHAROME · Jhajjar, Haryana, India<br />
          Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </main>

      <footer className="privacy-footer">
        <p>© {new Date().getFullYear()} SHAROME</p>
      </footer>

    </div>
  )
}

export default PrivacyPage
