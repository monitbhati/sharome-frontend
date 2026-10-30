import { Link } from 'react-router-dom'
import { usePageTitle } from './usePageTitle'
import { PageHero, CtaBand } from './SiteLayout'
import { WORK } from './data'

export default function WorkPage() {
  usePageTitle('Work')

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Projects for clients, and products of our own."
        lead="Client names are kept private unless they have agreed to be named. Ask us for a walkthrough of any project on a call."
      />

      <section className="sh-section">
        <div className="sh-wrap">
          <nav className="sh-jump" aria-label="Projects on this page">
            {WORK.map(w => <a key={w.id} href={`#${w.id}`}>{w.kind}</a>)}
          </nav>

          <div className="sh-cases">
            {WORK.map((w, i) => (
              <article id={w.id} className="sh-case" key={w.id}>
                <header className="sh-case-head">
                  <span className="sh-case-num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <p className="sh-card-kicker">{w.client}</p>
                    <h2>{w.kind}</h2>
                    <p className="sh-case-summary">{w.summary}</p>
                  </div>
                </header>
                <div className="sh-case-body">
                  <div><h3>The problem</h3><p>{w.problem}</p></div>
                  <div><h3>What we built</h3><p>{w.built}</p></div>
                  <div><h3>Where it is now</h3><p>{w.outcome}</p></div>
                </div>
                <footer className="sh-case-foot">
                  <ul className="sh-tags">{w.tags.map(t => <li key={t}>{t}</li>)}</ul>
                  {w.link && <Link to={w.link.to} className="sh-link">{w.link.label} →</Link>}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Have something similar in mind?" />
    </>
  )
}
