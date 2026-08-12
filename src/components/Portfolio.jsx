import Section from './Section'
import { projects } from '../data'

export default function Portfolio() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="card card-hover group overflow-hidden">
            <div className="grid h-48 place-items-center bg-gradient-to-br from-mint/20 via-sky/20 to-violet/20 text-6xl transition-transform duration-300 group-hover:scale-105">
              {p.emoji}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-body">{p.title}</h3>
              {p.tagline && <p className="mt-1 text-xs text-mint">{p.tagline}</p>}
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-sky/10 px-3 py-1 text-xs text-sky"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* work projects have nothing public to link to — skip the row */}
              {(p.live || p.code) && (
                <div className="mt-5 flex gap-5 text-sm">
                  {p.live && (
                    <a href={p.live} className="text-mint transition-opacity hover:opacity-70">
                      <i className="fa-solid fa-arrow-up-right-from-square mr-2" />
                      Live
                    </a>
                  )}
                  {p.code && (
                    <a href={p.code} className="text-mint transition-opacity hover:opacity-70">
                      <i className="fa-brands fa-github mr-2" />
                      Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
