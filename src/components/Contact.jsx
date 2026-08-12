import { useState } from 'react'
import Section from './Section'
import { contact } from '../data'

const details = [
  { icon: 'fa-solid fa-envelope', label: 'Email', value: contact.email },
  { icon: 'fa-solid fa-phone', label: 'Phone', value: contact.phone },
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: contact.location },
]

const field =
  'w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-body placeholder:text-muted/70 outline-none transition-colors focus:border-mint'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  // No backend here — hand the message to the visitor's mail client.
  function onSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    // Use window.open for mailto so the SPA page isn't replaced by a mailto URL
    const mailto = `mailto:${contact.email}?subject=${subject}&body=${body}`
    window.open(mailto)
  }

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  return (
    <Section id="contact" title="Get In Touch">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <div className="space-y-5">
          {details.map((d) => (
            <div key={d.label} className="card flex items-center gap-4 p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-mint/20 to-sky/20">
                <i className={`${d.icon} text-lg text-mint`} />
              </div>
              <div className="min-w-0">
                <p className="text-sm text-muted">{d.label}</p>
                <p className="truncate text-body">{d.value}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            aria-label="Your name"
            value={form.name}
            onChange={set('name')}
            className={field}
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            aria-label="Your email"
            value={form.email}
            onChange={set('email')}
            className={field}
          />
          <textarea
            required
            rows={5}
            placeholder="Your Message"
            aria-label="Your message"
            value={form.message}
            onChange={set('message')}
            className={`${field} resize-y`}
          />
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-to-r from-mint to-sky py-3 font-semibold text-ink transition-transform hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      </div>
    </Section>
  )
}
