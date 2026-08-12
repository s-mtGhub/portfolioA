import Section from './Section'
import { experience } from '../data'

// "2025-06" → parts. An end of null means it is still running, so the
// duration keeps counting up on its own instead of going stale.
function months(start, end) {
  const [sy, sm] = start.split('-').map(Number)
  const now = new Date()
  const [ey, em] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1]
  return (ey - sy) * 12 + (em - sm) + 1 // inclusive of the starting month
}

function duration(start, end) {
  const total = months(start, end)
  const y = Math.floor(total / 12)
  const m = total % 12
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m && `${m} mo${m > 1 ? 's' : ''}`]
    .filter(Boolean)
    .join(' ')
}

function years(start, end) {
  const from = start.slice(0, 4)
  if (!end) return `${from} — Now`
  const to = end.slice(0, 4)
  return from === to ? from : `${from} — ${to}`
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      {/* rail sits at the left on mobile, down the middle from md up */}
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute top-0 bottom-0 left-2 w-px bg-gradient-to-b from-mint via-sky to-violet md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8">
          {experience.map((job, i) => {
            const left = i % 2 === 0
            return (
              <div
                key={job.role}
                className={`relative pl-10 md:w-1/2 md:pl-0 ${
                  left ? 'md:pr-10' : 'md:ml-auto md:pl-10'
                }`}
              >
                <span
                  className={`absolute top-6 left-0 h-4 w-4 rounded-full border-2 border-ink bg-mint md:top-8 ${
                    left ? 'md:right-[-8px] md:left-auto' : 'md:left-[-8px]'
                  }`}
                />

                {/* time marker: above the card on mobile, out beside the rail from md up */}
                <div
                  className={`mb-3 md:absolute md:top-6 md:mb-0 md:w-40 md:whitespace-nowrap ${
                    left ? 'md:left-full md:ml-7 md:text-left' : 'md:right-full md:mr-7 md:text-right'
                  }`}
                >
                  <div className="gradient-text text-lg font-bold">{years(job.start, job.end)}</div>
                  <div className="text-xs text-muted">{duration(job.start, job.end)}</div>
                </div>

                <div className="card card-hover p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold text-body sm:text-xl">{job.role}</h3>
                    <span className="rounded-full bg-mint/10 px-3 py-1 text-xs whitespace-nowrap text-mint">
                      {job.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-sky">{job.company}</p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <i className="fa-solid fa-angle-right mt-1 shrink-0 text-xs text-mint" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
