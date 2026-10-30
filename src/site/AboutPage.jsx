import { usePageTitle } from './usePageTitle'
import { PageHero, CtaBand } from './SiteLayout'
import { STACK } from './data'

const PRINCIPLES = [
  { title: 'You talk to the builder', body: 'No account managers in between. The person on the call is the person writing the code.' },
  { title: 'Scope and price in writing', body: 'Before any work starts you get a written quote with what is included, the cost and the timeline.' },
  { title: 'Working software every week', body: 'Weekly demos mean you can see progress and change direction early, not at the end.' },
  { title: 'Built only for what you use', body: 'We cut features nobody needs. Simpler tools are faster to learn and cheaper to keep running.' },
  { title: 'Still here after launch', body: 'Hosting, fixes and small changes on a monthly plan, with someone who already knows your system.' },
  { title: 'Hours that suit you', body: 'Based in India, with calls in UK, European and US working hours.' },
]

export default function AboutPage() {
  usePageTitle('About')

  return (
    <>
      <PageHero
        eyebrow="About SHAROME"
        title="A small studio that builds the tools businesses run on."
        lead="SHAROME is a software studio in Haryana, India. We build custom tools for market research agencies and growing businesses, publish our own Android apps, and manage influencer accounts."
      />

      <section className="sh-section">
        <div className="sh-wrap sh-split sh-split--top">
          <div>
            <h2>Why we started</h2>
          </div>
          <div className="sh-prose">
            <p>
              Most small teams run on spreadsheets, WhatsApp groups and software they rent but cannot
              change. It works until the business grows, and then a lot of time goes into chasing
              numbers instead of doing the work.
            </p>
            <p>
              One of our first client projects fixed exactly that for two market research agencies,
              replacing a rented fieldwork tool with one they control. The same approach now goes into management
              systems for new businesses, Android apps and the business side of creators’ accounts.
            </p>
            <p>
              We stay small on purpose, so every client works directly with the person building their
              software.
            </p>
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--tint">
        <div className="sh-wrap sh-founder">
          <div className="sh-founder-mark" aria-hidden="true">M</div>
          <div>
            <p className="sh-label">Founder</p>
            <h2>Mohit</h2>
            <p className="sh-prose-p">
              Mohit studied Computer Science with a specialisation in AI at Gurugram University and
              completed a software development internship at Maruti Suzuki India, working on quality
              management for IT operations. He builds across the stack, from PHP and Java backends to
              React frontends and native Android apps, and handles client work from first call to launch.
            </p>
          </div>
        </div>
      </section>

      <section className="sh-section">
        <div className="sh-wrap">
          <h2>How we work</h2>
          <div className="sh-principles">
            {PRINCIPLES.map(p => (
              <div key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sh-section sh-section--tint">
        <div className="sh-wrap sh-split">
          <div>
            <h2>What we build with</h2>
            <p className="sh-sub sh-sub--wide">Proven, widely used tools, so your software is easy to host and easy to hand over.</p>
          </div>
          <ul className="sh-stack">{STACK.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
      </section>

      <section className="sh-section sh-section--tight">
        <div className="sh-wrap sh-facts">
          <div><span>Registered as</span><p>SHAROME, sole proprietorship</p></div>
          <div><span>Registration</span><p>MSME (Udyam), Government of India</p></div>
          <div><span>Based in</span><p>Haryana, India</p></div>
          <div><span>Takes on</span><p>Remote projects, worldwide</p></div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
