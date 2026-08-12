import Section from './Section'
import { certifications } from '../data'

export default function Certifications() {
  return (
    <Section id="certifications" title="Training & Certifications">
      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((c) => (
          <a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-full sm:w-[48%] lg:w-[32%]"
          >
            <article className="card card-hover group overflow-hidden h-full">
              <div className="grid h-40 place-items-center bg-gradient-to-br from-violet/20 to-sky/20 text-5xl transition-transform duration-300 group-hover:scale-105">
                {c.emoji}
              </div>
              <div className="p-6">
                <p className="text-xs text-mint">{c.issuer}</p>
                <h3 className="mt-2 text-lg font-semibold text-body">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.text}</p>
              </div>

              {/* hover preview: small iframe shown on group hover (hidden by default) */}
              <div className="pointer-events-none absolute top-4 right-4 z-10 hidden w-56 max-h-56 overflow-hidden rounded border border-line bg-white/95 p-1 shadow-lg group-hover:block">
                <iframe
                  src={c.href}
                  title={`preview-${c.title}`}
                  className="w-full h-48"
                />
              </div>
            </article>
          </a>
        ))}
      </div>
    </Section>
  )
}
