import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePageTitle } from './usePageTitle'
import { PageHero } from './SiteLayout'
import { CONTACT_EMAIL, LOCATION, SERVICES } from './data'

const BUDGETS = ['Not sure yet', 'Under $1,000', '$1,000 – $3,000', '$3,000 – $8,000', 'Over $8,000']

/* No backend needed: the form builds an email and opens the visitor's mail app. */
export default function ContactPage() {
  usePageTitle('Contact')
  const [params] = useSearchParams()
  const initialTopic = SERVICES.find(s => s.id === params.get('topic'))?.title || ''
  const [form, setForm] = useState({ name: '', email: '', company: '', topic: initialTopic, budget: BUDGETS[0], message: '' })
  const [opened, setOpened] = useState(false)
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    const subject = `Project enquiry${form.topic ? `: ${form.topic}` : ''}${form.company ? ` (${form.company})` : ''}`
    const lines = [`Name: ${form.name}`, `Email: ${form.email}`]
    if (form.company) lines.push(`Company: ${form.company}`)
    if (form.topic) lines.push(`Looking for: ${form.topic}`)
    lines.push(`Budget: ${form.budget}`, '', form.message)
    const body = lines.join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us about your project."
        lead="A few lines are enough. We reply with a time for a short call, then send a written quote."
      />

      <section className="sh-section">
        <div className="sh-wrap sh-contact-page">
          <form className="sh-form" onSubmit={submit}>
            <div className="sh-form-row">
              <label>Your name<input required value={form.name} onChange={set('name')} autoComplete="name" /></label>
              <label>Email<input required type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
            </div>
            <label>Company or account <em>(optional)</em><input value={form.company} onChange={set('company')} autoComplete="organization" /></label>
            <div className="sh-form-row">
              <label>What do you need?
                <select value={form.topic} onChange={set('topic')}>
                  <option value="">Choose one</option>
                  {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                  <option>Something else</option>
                </select>
              </label>
              <label>Rough budget
                <select value={form.budget} onChange={set('budget')}>
                  {BUDGETS.map(b => <option key={b}>{b}</option>)}
                </select>
              </label>
            </div>
            <label>About the project<textarea required rows={6} value={form.message} onChange={set('message')} placeholder="What your team does today, what is getting in the way, and when you would like it done." /></label>
            <button type="submit" className="sh-btn">Send enquiry</button>
            <p className="sh-form-note" role="status">
              {opened
                ? <>Your email app should open with the details filled in. If it did not, write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</>
                : 'This opens your email app with the details filled in. Nothing is stored on this site.'}
            </p>
          </form>

          <aside className="sh-contact-side">
            <div><span>Email</span><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
            <div><span>Based in</span><p>{LOCATION}</p></div>
            <div><span>Call hours</span><p>We take calls in UK, European and US working hours.</p></div>
            <div><span>What happens next</span>
              <ol>
                <li>We reply to set up a 20-minute call.</li>
                <li>You get a written scope, price and timeline.</li>
                <li>Work starts once you approve it.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
