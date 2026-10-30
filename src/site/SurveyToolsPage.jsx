import { Link } from 'react-router-dom'
import { usePageTitle } from './usePageTitle'
import { PageHero, CtaBand } from './SiteLayout'

const FLOW = [
  { title: 'Vendor link', body: 'Each sample vendor gets its own entry link for the project.' },
  { title: 'Checks', body: 'IP, geolocation and subnet checks run before the respondent reaches the survey.' },
  { title: 'Your survey', body: 'The respondent takes the survey on the platform you already use.' },
  { title: 'Redirect back', body: 'At the end, the survey sends them to a complete, terminate or quota-full link.' },
  { title: 'Counted and reported', body: 'The tool records the status, updates counts per vendor and emails the vendor.' },
]

const MODULES = [
  { title: 'Projects and vendors', body: 'Create a project, add vendors and generate their entry and redirect links in one step.' },
  { title: 'Fraud checks', body: 'Block repeat IPs, out-of-country traffic and suspicious subnets before they cost you a complete.' },
  { title: 'Live field view', body: 'Completes, terminates and quota-fulls by vendor and quota cell, with IR and LOI, while the project runs.' },
  { title: 'Vendor emails and portal', body: 'Automatic emails to vendors and a supplier portal where they can check their own numbers.' },
  { title: 'Reconciliation reports', body: 'ID lists and counts per vendor for invoicing, ready to export at the close of a project.' },
  { title: 'Panel management', body: 'An optional panel sign-up page with member and admin dashboards, for agencies that recruit their own respondents.' },
]

const QUOTAS = [
  ['Male 18–34', 118, 150],
  ['Female 18–34', 141, 150],
  ['Male 35+', 64, 100],
  ['Female 35+', 100, 100],
]

const FAQ = [
  { q: 'Do we need to change our survey platform?', a: 'No. The tool works alongside any survey platform that can send respondents to a link at the end of the survey, which most of them can.' },
  { q: 'Where is it hosted, and who controls it?', a: 'On hosting in your own account, or on hosting we manage for you. Email and lookup services are set up in your company’s name.' },
  { q: 'Can it carry our brand?', a: 'Yes. It runs on your subdomain with your logo, and vendors see your company name in emails and the supplier portal.' },
  { q: 'Can you match the tool we use today?', a: 'Usually. We start from the features your team actually uses and leave out the ones nobody needs.' },
  { q: 'What does it cost?', a: 'A one-time setup fee and a monthly plan for hosting, fixes and small changes. We send a written quote after a short call about your workflow.' },
]

export default function SurveyToolsPage() {
  usePageTitle('Survey operations tools')

  return (
    <>
      <PageHero
        eyebrow="For market research agencies"
        title="A fieldwork tool your agency controls."
        lead="Vendor links, fraud checks, live quotas and vendor reports in one place, built around how your ops team already works and hosted under your name."
      >
        <div className="sh-actions">
          <Link to="/contact?topic=survey-tools" className="sh-btn">Book a workflow call</Link>
          <a href="#how" className="sh-btn sh-btn--ghost">How it works</a>
        </div>
      </PageHero>

      <section id="how" className="sh-section">
        <div className="sh-wrap">
          <h2>How a respondent moves through the tool</h2>
          <p className="sh-sub">Every respondent is tracked from the vendor’s link to their final status.</p>
          <ol className="sh-flow">
            {FLOW.map((f, i) => (
              <li key={f.title}>
                <span className="sh-flow-dot">{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sh-section sh-section--tint">
        <div className="sh-wrap sh-split">
          <div>
            <h2>See fieldwork while it happens</h2>
            <p className="sh-sub sh-sub--wide">
              Project managers stop asking vendors for counts. Quota cells fill in live, and closed
              cells send new respondents to the quota-full link automatically.
            </p>
            <ul className="sh-checks sh-checks--plain">
              <li>Counts by vendor, by quota cell and overall</li>
              <li>IR and LOI updated as completes come in</li>
              <li>Export to Excel for the client at any point</li>
            </ul>
          </div>
          <figure className="sh-quota" aria-label="Example quota cells">
            <figcaption>Example · Project 2611 · quota cells</figcaption>
            {QUOTAS.map(([label, n, target]) => (
              <div className="sh-quota-row" key={label}>
                <div className="sh-quota-top">
                  <span>{label}</span>
                  <span className="sh-num">{n} / {target}{n >= target ? ' · closed' : ''}</span>
                </div>
                <div className={`sh-quota-bar${n >= target ? ' is-full' : ''}`}>
                  <div style={{ width: `${Math.min(100, (n / target) * 100)}%` }} />
                </div>
              </div>
            ))}
          </figure>
        </div>
      </section>

      <section className="sh-section">
        <div className="sh-wrap">
          <h2>What the tool can include</h2>
          <p className="sh-sub">Pick the modules your team needs. We leave out what you will not use.</p>
          <div className="sh-tiles">
            {MODULES.map(m => (
              <div key={m.title} className="sh-tile sh-tile--static">
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--tint">
        <div className="sh-wrap sh-split sh-split--top">
          <div>
            <h2>Already in use</h2>
            <p className="sh-sub sh-sub--wide">
              Two market research agencies in India run their own copies of a tool we rebuilt for them,
              each on its own subdomain and hosting, instead of renting one from an outside provider.
            </p>
            <Link to="/work#survey-tool" className="sh-link">Read the case study →</Link>
          </div>
          <div className="sh-faq">
            <h2>Questions agencies ask</h2>
            {FAQ.map(f => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Show us how your fieldwork runs today." body="A 20-minute call is enough to tell you whether a custom tool makes sense for your agency." />
    </>
  )
}
