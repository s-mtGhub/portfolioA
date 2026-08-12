import Section from './Section'
import { focus } from '../data'

export default function Focus() {
  return (
    <Section id="focus" title="What I Work On">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {focus.map((f) => (
          <div key={f.title} className="card card-hover p-8 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-mint/20 to-violet/20">
              <i className={`${f.icon} text-2xl text-mint`} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-body">{f.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{f.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
