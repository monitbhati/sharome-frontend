import { usePageTitle } from '../site/usePageTitle'
import { PageHero } from '../site/SiteLayout'
import './PrivacyPage.css'

const CONTACT_EMAIL = "contact@sharome.in"
const EFFECTIVE_DATE = "4 November 2026"

const ext = { target: '_blank', rel: 'noopener noreferrer' }

function PrivacyPage() {
  usePageTitle('Privacy Policy')

  return (
    <>
      <PageHero
        eyebrow={`Effective ${EFFECTIVE_DATE}`}
        title="Privacy *policy*"
        lead="How SHAROME handles information in the Dayopsy Android app and on the sharome.in website."
      />

      <div className="privacy-body">
        <div className="privacy-summary">
          <strong>The short version.</strong> Dayopsy has no account. Your reel counts, screen time, history and
          settings are stored only on your phone, and Dayopsy does not send them anywhere. The app uses Google
          services for ads, purchases, crash reports and anonymous usage statistics; those services receive limited
          technical data, described below.
        </div>

        <p>
          This policy explains what information SHAROME (&ldquo;we&rdquo;, &ldquo;us&rdquo;) handles through
          the <strong>Dayopsy</strong> Android app (package <code>in.sharome.dayopsy</code>) and the sharome.in
          website, how it is used, and the choices you have. SHAROME is a sole proprietorship registered in
          Jhajjar, Haryana, India.
        </p>

        <h2>1. Dayopsy app</h2>

        <h3>Data that stays on your phone</h3>
        <p>To work, Dayopsy creates and stores the following on your device only. We cannot see it.</p>
        <ul>
          <li><strong>Reel counts and time in tracked apps:</strong> how many Reels, Shorts and Spotlight videos you watched, how long Instagram, YouTube and Snapchat were open, and how often you opened them.</li>
          <li><strong>Screen time:</strong> which apps were in front and for how long, and how many times you picked up your phone, read from Android&rsquo;s usage data.</li>
          <li><strong>History:</strong> your day-by-day numbers, used for Stats, streaks, reports and Monthly Wrapped.</li>
          <li><strong>Settings and your own lines:</strong> your preferences, limits, quiet hours, focus sessions and any reminder lines you write yourself.</li>
        </ul>
        <p>
          Android backup is turned off for Dayopsy, so this data is not copied to your Google account. You can erase
          all of it at any time with <strong>Settings → Delete all history</strong> in the app, or by uninstalling Dayopsy.
        </p>

        <h3>Accessibility Service</h3>
        <p>
          Dayopsy uses Android&rsquo;s Accessibility Service API, only after you turn it on yourself in your
          phone&rsquo;s settings. It works only inside Instagram, YouTube and Snapchat, where it:
        </p>
        <ul>
          <li>reads the screen layout to recognise the Reels, Shorts and Spotlight player and count each new video;</li>
          <li>notices when those apps are open, to measure time spent in them;</li>
          <li>shows the live counter bubble and short summary cards over them;</li>
          <li>only if you turn on Nudge or Strict mode, a daily limit, quiet hours or a focus session: shows a reminder over those apps or returns you to your home screen.</li>
        </ul>
        <p>
          It does not monitor any other app, does not read or store your messages, comments, typed text, passwords or
          the content of the videos you watch, and never records your screen. Nothing it sees leaves your phone. You
          can turn it off at any time in Settings → Accessibility; counting stops when it is off.
        </p>

        <h3>Usage access and notifications</h3>
        <p>
          Usage access tells Dayopsy which app was open and for how long, to show your screen time. No screen content
          is read. Notifications (nightly report, daily notes, reminders, focus sessions and Monthly Wrapped) are
          created on your phone and do not send any data to us.
        </p>

        <h3>Google services in the app</h3>
        <p>
          Dayopsy includes the following Google services. They collect limited data directly from the app, encrypted
          in transit, under Google&rsquo;s own privacy terms.
        </p>
        <div className="privacy-table">
          <table>
            <thead>
              <tr><th>Service</th><th>Why we use it</th><th>What it receives</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google AdMob<br /><span>(free version only)</span></td>
                <td>Shows a small banner ad on the Stats and Settings screens. Premium removes ads.</td>
                <td>Your phone&rsquo;s advertising ID and app set ID, IP address (which can indicate your general location), ad views and taps, and app and device performance data. Used for advertising, ad measurement and fraud prevention.</td>
              </tr>
              <tr>
                <td>Google Analytics for Firebase</td>
                <td>Anonymous statistics on which screens and features are used, so we know what to improve.</td>
                <td>An app-instance ID, which screens you open, a few feature events, in-app purchase events (product and price), device and app version information, and a general location derived from your IP address. It does not receive your counts, screen time or the names of apps you use.</td>
              </tr>
              <tr>
                <td>Firebase Crashlytics</td>
                <td>Crash reports, so we can fix bugs.</td>
                <td>The technical details of a crash (stack trace), device model, Android version, app version and a random installation ID.</td>
              </tr>
              <tr>
                <td>Google Play Billing</td>
                <td>Processes Premium and tips.</td>
                <td>Payment is handled entirely by Google Play. We receive only a confirmation of what was bought and never see your card or bank details.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          More on how Google uses this data:{' '}
          <a href="https://policies.google.com/technologies/partner-sites" {...ext}>how Google uses information from apps that use its services</a>{' '}
          and the <a href="https://policies.google.com/privacy" {...ext}>Google Privacy Policy</a>.
        </p>

        <h3>Ads, consent and your choices</h3>
        <ul>
          <li>Where the law requires it (for example in the European Economic Area and the UK), Dayopsy asks for your consent before personalised ads are shown. You can change your choice any time with <strong>Settings → Ad privacy choices</strong> in the app.</li>
          <li>You can reset or delete your advertising ID in your phone&rsquo;s settings (Settings → Google → Ads on most phones).</li>
          <li>Buying Premium removes ads completely.</li>
        </ul>

        <h3>When you email us</h3>
        <p>
          If you choose to email us from the app (for example &ldquo;Send a suggestion&rdquo; or the weekly check-in),
          we receive your email address and what you write. Suggestion emails include your app version and phone model
          so we can help. We use these only to reply and to improve Dayopsy.
        </p>

        <h2>2. sharome.in website</h2>
        <p>
          The SHAROME business pages do not use cookies or tracking tools. The contact form opens your own email app
          and stores nothing on this site. The invite-only Sharomé store beta records basic technical details (browser
          type, screen size, language, timezone and referring page) when an invite code is used, and stores the details
          you choose to submit in a commission request (such as your name, phone number and order details) so we can
          respond and track your order.
        </p>

        <h2>3. Sharing</h2>
        <p>
          We do not sell your personal information. Data reaches only the service providers named above (Google AdMob,
          Google Analytics for Firebase, Firebase Crashlytics and Google Play) to run those features, or others when
          required by law.
        </p>

        <h2>4. How long data is kept</h2>
        <p>
          Data on your phone stays until you delete it or uninstall Dayopsy. Data received by Google services is kept
          for the periods Google sets for those services. Emails and commission requests are kept as long as needed
          to help you and for our records.
        </p>

        <h2>5. Children</h2>
        <p>
          Dayopsy is not directed at children under 13, and we do not knowingly collect personal information from them.
          If you believe a child has provided us data, contact us and we will delete it.
        </p>

        <h2>6. Your choices and data deletion</h2>
        <ul>
          <li>Turn off the Accessibility Service or Usage access at any time in your phone&rsquo;s settings.</li>
          <li>Use Settings → Delete all history in Dayopsy, uninstall the app, or clear its data to delete everything stored on your device.</li>
          <li>Email us for any privacy request, including deleting emails or website data we hold about you. We respond within 30 days.</li>
        </ul>

        <h2>7. Changes to this policy</h2>
        <p>
          If Dayopsy or this website starts handling data differently, we will update this page and change the
          effective date above.
        </p>

        <h2>8. Contact</h2>
        <p>
          SHAROME · Jhajjar, Haryana, India<br />
          Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </>
  )
}

export default PrivacyPage
