import Section from './Section'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <Section id="certifications" title="Training & Certifications">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((c) => (
          <article key={c.title} className="card card-hover group overflow-hidden">
            <div className="grid h-40 place-items-center bg-gradient-to-br from-violet/20 to-sky/20 text-5xl transition-transform duration-300 group-hover:scale-105">
              {c.emoji}
            </div>
            <div className="p-6">
              <p className="text-xs text-mint">{c.issuer}</p>
              <h3 className="mt-2 text-lg font-semibold text-body">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
