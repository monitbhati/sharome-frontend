import { Link } from 'react-router-dom'
import { usePageTitle } from './usePageTitle'
import { CtaBand, WorkCard } from './SiteLayout'
import { AUDIENCES, SERVICES, STEPS, WORK } from './data'

function QuotaPanel() {
  return (
    <figure className="sh-panel" aria-label="Example live quota view">
      <figcaption>Example · live quota view</figcaption>
      <div className="sh-panel-head">
        <span>Vendor</span><span>Complete</span><span>Term</span><span>Quota-full</span>
      </div>
      {[
        ['Vendor A', 142, 38, 6],
        ['Vendor B', 96, 51, 2],
        ['Vendor C', 61, 19, 0],
      ].map(([v, c, t, q]) => (
        <div className="sh-panel-row" key={v}>
          <span>{v}</span><span className="sh-num">{c}</span><span className="sh-num">{t}</span><span className="sh-num">{q}</span>
        </div>
      ))}
      <div className="sh-panel-foot">
        <div><span>IR</span><strong>31%</strong></div>
        <div><span>LOI</span><strong>12 min</strong></div>
        <div><span>Quota</span><strong>299 / 400</strong></div>
      </div>
      <div className="sh-bar"><div style={{ width: '75%' }} /></div>
    </figure>
  )
}

export default function StudioHome() {
  usePageTitle(null)
  const featured = WORK.filter(w => w.featured)

  return (
    <>
      <section className="sh-dark">
        <div className="sh-wrap sh-hero">
          <div className="sh-hero-copy">
            <p className="sh-eyebrow">Software studio · Haryana, India</p>
            <h1>Custom software for teams that have outgrown spreadsheets.</h1>
            <p className="sh-lead">
              SHAROME builds survey operations tools for market research companies, management
              systems for growing businesses and Android apps, and manages influencer accounts.
              Each one is built around how you already work.
            </p>
            <div className="sh-actions">
              <Link to="/contact" className="sh-btn">Start a project</Link>
              <Link to="/work" className="sh-btn sh-btn--ghost">See our work</Link>
            </div>
          </div>
          <QuotaPanel />
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-wrap">
          <p className="sh-label">Who we work with</p>
          <div className="sh-audiences">
            {AUDIENCES.map(a => (
              <div key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--tint">
        <div className="sh-wrap">
          <div className="sh-section-head">
            <div>
              <h2>Selected work</h2>
              <p className="sh-sub">Client projects and our own products.</p>
            </div>
            <Link to="/work" className="sh-link">All projects →</Link>
          </div>
          <div className="sh-work sh-work--3">
            {featured.map(w => <WorkCard key={w.id} w={w} to={`/work#${w.id}`} />)}
          </div>
        </div>
      </section>

      <section className="sh-section">
        <div className="sh-wrap">
          <div className="sh-section-head">
            <div>
              <h2>What we do</h2>
              <p className="sh-sub">Six services, one small team that builds and looks after them.</p>
            </div>
            <Link to="/services" className="sh-link">All services →</Link>
          </div>
          <div className="sh-tiles">
            {SERVICES.map((s, i) => (
              <Link key={s.id} to={s.link || `/services#${s.id}`} className="sh-tile">
                <span className="sh-step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-dark">
        <div className="sh-wrap sh-spotlight">
          <div>
            <p className="sh-eyebrow">For market research agencies</p>
            <h2>Stop renting your fieldwork tool.</h2>
            <p className="sh-lead">
              We build and host survey operations tools that your agency controls: redirect links,
              fraud checks, vendor emails and live counts, on your own hosting and in your own name.
            </p>
          </div>
          <div className="sh-actions">
            <Link to="/survey-tools" className="sh-btn">How the tool works</Link>
          </div>
        </div>
      </section>

      <section className="sh-section">
        <div className="sh-wrap">
          <h2>How a project runs</h2>
          <ol className="sh-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="sh-step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
