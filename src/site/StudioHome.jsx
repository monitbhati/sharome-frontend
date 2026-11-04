import { Link } from 'react-router-dom'
import { usePageTitle } from './usePageTitle'
import { Arrow, CtaBand, WorkCard } from './SiteLayout'
import { CountUp, SplitWords } from './motion'
import { AUDIENCES, SERVICES, STEPS, WORK } from './data'

function QuotaPanel() {
  return (
    <figure className="sh-panel sh-fade-in" style={{ '--i': 7 }} aria-label="Example live quota view">
      <figcaption>
        <span>Example · live quota view</span>
        <span className="sh-live"><span className="sh-live-dot" aria-hidden="true" />Live</span>
      </figcaption>
      <div className="sh-panel-head">
        <span>Vendor</span><span>Complete</span><span>Term</span><span>Quota-full</span>
      </div>
      {[
        ['Vendor A', 142, 38, 6],
        ['Vendor B', 96, 51, 2],
        ['Vendor C', 61, 19, 0],
      ].map(([v, c, t, q]) => (
        <div className="sh-panel-row" key={v}>
          <span>{v}</span><CountUp to={c} /><CountUp to={t} /><CountUp to={q} />
        </div>
      ))}
      <div className="sh-panel-foot">
        <div><span>IR</span><strong><CountUp to={31} suffix="%" /></strong></div>
        <div><span>LOI</span><strong><CountUp to={12} suffix=" min" /></strong></div>
        <div><span>Quota</span><strong><CountUp to={299} /> / 400</strong></div>
      </div>
      <div className="sh-bar"><div style={{ '--w': '75%' }} /></div>
    </figure>
  )
}

/* Endless strip of what SHAROME does, between the hero and the first section. */
function Marquee() {
  const items = [...SERVICES.map(s => s.title), 'Built in Haryana, India', 'Remote projects, worldwide']
  const row = items.map(t => <li key={t}>{t}<span aria-hidden="true">✦</span></li>)
  return (
    <div className="sh-marquee" aria-label="What we do">
      <ul>{row}</ul>
      <ul aria-hidden="true">{row}</ul>
    </div>
  )
}

export default function StudioHome() {
  usePageTitle(null)
  const featured = WORK.filter(w => w.featured)

  return (
    <>
      <section className="sh-dark sh-hero-band sh-hero-band--home">
        <div className="sh-glow sh-parallax" style={{ '--speed': 0.18 }} aria-hidden="true" />
        <div className="sh-glow sh-glow--2 sh-parallax" style={{ '--speed': -0.08 }} aria-hidden="true" />
        <div className="sh-grid-lines" aria-hidden="true" />
        <div className="sh-wrap sh-hero">
          <div className="sh-hero-copy">
            <p className="sh-eyebrow sh-fade-in">SHAROME · Haryana, India</p>
            <SplitWords text="Custom software for teams that have *outgrown* spreadsheets." />
            <p className="sh-lead sh-fade-in" style={{ '--i': 6 }}>
              SHAROME builds survey operations tools for market research companies, management
              systems for growing businesses and Android apps, and manages influencer accounts.
              Each one is built around how you already work.
            </p>
            <div className="sh-actions sh-fade-in" style={{ '--i': 8 }}>
              <Link to="/contact" className="sh-btn">Start a project <Arrow /></Link>
              <Link to="/work" className="sh-btn sh-btn--ghost">See our work</Link>
            </div>
          </div>
          <div className="sh-parallax" style={{ '--speed': -0.05 }}>
            <QuotaPanel />
          </div>
        </div>
        <Marquee />
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-wrap">
          <p className="sh-label" data-reveal>Who we work with</p>
          <div className="sh-audiences">
            {AUDIENCES.map((a, i) => (
              <div key={a.title} data-reveal style={{ '--d': i }}>
                <span className="sh-step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--tint">
        <div className="sh-wrap">
          <div className="sh-section-head" data-reveal>
            <div>
              <h2>Selected <span className="sh-accent">work</span></h2>
              <p className="sh-sub">Client projects and our own products.</p>
            </div>
            <Link to="/work" className="sh-link">All projects <Arrow /></Link>
          </div>
          <div className="sh-work sh-work--3">
            {featured.map((w, i) => <WorkCard key={w.id} w={w} i={i} to={`/work#${w.id}`} />)}
          </div>
        </div>
      </section>

      <section className="sh-section">
        <div className="sh-wrap">
          <div className="sh-section-head" data-reveal>
            <div>
              <h2>What we <span className="sh-accent">do</span></h2>
              <p className="sh-sub">Six services, one small team that builds and looks after them.</p>
            </div>
            <Link to="/services" className="sh-link">All services <Arrow /></Link>
          </div>
          <div className="sh-tiles">
            {SERVICES.map((s, i) => (
              <Link key={s.id} to={s.link || `/services#${s.id}`} className="sh-tile sh-spot" data-reveal style={{ '--d': i % 3 }}>
                <span className="sh-step-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="sh-tile-go" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-dark sh-spotlight-band">
        <div className="sh-glow sh-glow--center sh-parallax" style={{ '--speed': 0.1 }} aria-hidden="true" />
        <div className="sh-wrap sh-spotlight">
          <div data-reveal>
            <p className="sh-eyebrow">For market research agencies</p>
            <h2>Stop <span className="sh-accent">renting</span> your fieldwork tool.</h2>
            <p className="sh-lead">
              We build and host survey operations tools that your agency controls: redirect links,
              fraud checks, vendor emails and live counts, on your own hosting and in your own name.
            </p>
          </div>
          <div className="sh-actions" data-reveal style={{ '--d': 2 }}>
            <Link to="/survey-tools" className="sh-btn">How the tool works <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="sh-section">
        <div className="sh-wrap">
          <h2 data-reveal>How a project <span className="sh-accent">runs</span></h2>
          <ol className="sh-steps">
            {STEPS.map((s, i) => (
              <li key={s.title} data-reveal style={{ '--d': i }}>
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
