import Section from './Section'
import { achievements } from '../data'

export default function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Recognition">
      <div className="flex flex-wrap justify-center gap-6">
        {achievements.map((a) => (
          <div key={a.title} className="card card-hover flex gap-4 p-6 w-full sm:w-[48%] lg:w-[32%]">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-mint/20 to-sky/20">
              <i className={`${a.icon} text-lg text-mint`} />
            </div>
            <div className="min-w-0">
              <span className="text-xs tracking-wide text-sky uppercase">{a.year}</span>
              <h3 className="mt-0.5 font-semibold text-body">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
