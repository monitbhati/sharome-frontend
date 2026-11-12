import { usePageTitle } from '../site/usePageTitle'
import { PageHero } from '../site/SiteLayout'
import './PrivacyPage.css'

const CONTACT_EMAIL = "contact@sharome.in"
const EFFECTIVE_DATE = "12 November 2026"

const ext = { target: '_blank', rel: 'noopener noreferrer' }

const GAMES = [
  ['Arrow Knot', 'in.sharome.arrowknot', 'Arrow puzzle'],
  ['Swarm Zero', 'in.sharome.swarmzero', 'Survivor shooter'],
  ['Lumen Drift', 'in.sharome.lumendrift', 'Calm sky shooter'],
  ['Neon Shatter', 'in.sharome.neonshatter', 'Brick breaker'],
  ['Blocktide', 'in.sharome.blocktide', 'Block puzzle'],
  ['Pour Party', 'in.sharome.pourparty', 'Colour sort puzzle'],
  ['Unbolt', 'in.sharome.unbolt', 'Screw puzzle'],
]

function GamesPrivacyPage() {
  usePageTitle('Games Privacy Policy')

  return (
    <>
      <PageHero
        eyebrow={`Effective ${EFFECTIVE_DATE}`}
        title="Games privacy *policy*"
        lead="How SHAROME handles information in its mobile games on Google Play."
      />

      <div className="privacy-body">
        <div className="privacy-summary">
          <strong>The short version.</strong> Our games have no accounts and we collect no personal information.
          Your progress is saved only on your phone. The games show ads from Google AdMob, and Google&rsquo;s ads
          service receives limited technical data, described below.
        </div>

        <p>
          This policy covers the following games published by SHAROME (&ldquo;we&rdquo;, &ldquo;us&rdquo;), a sole
          proprietorship registered in Jhajjar, Haryana, India.
        </p>

        <div className="privacy-table">
          <table>
            <thead><tr><th>Game</th><th>Package</th><th>Type</th></tr></thead>
            <tbody>
              {GAMES.map(([name, pkg, type]) => (
                <tr key={pkg}><td>{name}</td><td><code>{pkg}</code></td><td>{type}</td></tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>1. Information we collect</h2>
        <p>
          We do not collect any personal information. The games have no accounts, no sign-in, no chat and no in-app
          purchases. They do not ask for your name, email address, phone number, contacts, photos, files or precise
          location.
        </p>
        <p>
          Your game progress (levels reached, scores, coins, upgrades and settings) is saved only on your device and
          is never sent to us. Uninstalling a game or clearing its app data deletes this progress permanently.
        </p>

        <h2>2. Advertising</h2>
        <p>
          All of these games show ads provided by Google AdMob. To show ads, measure them and prevent fraud, the
          Google Mobile Ads SDK built into the games automatically collects and shares the following with Google:
        </p>
        <ul>
          <li>your device&rsquo;s IP address, which can be used to estimate your general location;</li>
          <li>interactions with the app and its ads, such as app launches, taps and video views;</li>
          <li>diagnostic information, such as app performance data;</li>
          <li>device identifiers, such as the Android advertising ID and app set ID.</li>
        </ul>
        <p>
          This data is encrypted in transit and handled by Google under its own policies. We do not receive it in a
          form that identifies you. Learn more in{' '}
          <a href="https://policies.google.com/technologies/partner-sites" {...ext}>How Google uses information from
          sites or apps that use its services</a> and the{' '}
          <a href="https://policies.google.com/privacy" {...ext}>Google Privacy Policy</a>.
        </p>
        <p>
          You can reset or delete your advertising ID, or opt out of personalised ads, in your Android settings
          (Settings → Privacy → Ads, or Settings → Google → Ads, depending on your phone).
        </p>
        <p>
          Where the law requires it, such as in the European Economic Area and the United Kingdom, the games ask for
          your consent before personalised ads are shown, using Google&rsquo;s consent tool. You can change your
          choice at any time from &ldquo;Privacy options&rdquo; on the game&rsquo;s home screen.
        </p>

        <h2>3. How information is used and shared</h2>
        <p>
          We do not sell, rent or share any personal information. The only data that leaves your device is the
          advertising data described above, collected directly by Google AdMob for advertising, analytics and fraud
          prevention.
        </p>

        <h2>4. Children</h2>
        <p>
          These games are not directed at children under 13, and we do not knowingly collect personal information
          from children. If you believe a child has provided personal information through one of our games, contact
          us and we will help remove it.
        </p>

        <h2>5. Data retention and deletion</h2>
        <p>
          We keep no data on any server. Game progress stays on your device until you uninstall the game or clear its
          data. Data collected by Google AdMob is kept according to Google&rsquo;s policies; you can manage it through
          your Google account and Android ad settings.
        </p>

        <h2>6. Security</h2>
        <p>
          Game progress is stored locally using your device&rsquo;s standard app storage. Advertising data is sent to
          Google over encrypted connections.
        </p>

        <h2>7. Changes to this policy</h2>
        <p>
          If we change this policy, we will update this page and the effective date above. Significant changes will
          also be noted in the game&rsquo;s Google Play listing.
        </p>

        <h2>8. Contact</h2>
        <p>
          SHAROME, Jhajjar, Haryana, India<br />
          Email: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </>
  )
}

export default GamesPrivacyPage
