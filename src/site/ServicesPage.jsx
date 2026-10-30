import { Link } from 'react-router-dom'
import { usePageTitle } from './usePageTitle'
import { PageHero, CtaBand } from './SiteLayout'
import { SERVICES, ENGAGEMENTS } from './data'

export default function ServicesPage() {
  usePageTitle('Services')

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Software and account management, built around your work."
        lead="We take on a small number of projects at a time, so the person you talk to is the person building it."
      >
        <nav className="sh-jump sh-jump--dark" aria-label="Services on this page">
          {SERVICES.map(s => <a key={s.id} href={`#${s.id}`}>{s.title}</a>)}
        </nav>
      </PageHero>

      <section className="sh-section">
        <div className="sh-wrap sh-svc-list">
          {SERVICES.map((s, i) => (
            <article id={s.id} key={s.id} className="sh-svc">
              <div className="sh-svc-intro">
                <span className="sh-step-num">{String(i + 1).padStart(2, '0')}</span>
                <h2>{s.title}</h2>
                <p>{s.intro}</p>
                <p className="sh-fit"><strong>A good fit if</strong> {s.fit.charAt(0).toLowerCase() + s.fit.slice(1)}</p>
                {s.link && <Link to={s.link} className="sh-link">See how the survey tool works →</Link>}
              </div>
              <ul className="sh-checks">
                {s.points.map(p => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="sh-section sh-section--tint">
        <div className="sh-wrap">
          <h2>Ways to work with us</h2>
          <p className="sh-sub">Every engagement starts with a written quote. No surprises on the invoice.</p>
          <div className="sh-engage">
            {ENGAGEMENTS.map(e => (
              <div key={e.title} className="sh-engage-card">
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
