import Section from './Section'
import { useInView } from '../hooks/useInView'
import { skillGroups, tools } from '../data'

function SkillCard({ group }) {
  const [ref, inView] = useInView()

  return (
    <div ref={ref} className="card card-hover p-6">
      <h3 className="mb-6 text-lg font-semibold text-mint">{group.title}</h3>
      <div className="space-y-5">
        {group.skills.map((s) => (
          <div key={s.name}>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-body">{s.name}</span>
              <span className="text-muted">{s.level}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-mint to-sky transition-[width] duration-1000 ease-out"
                style={{ width: inView ? `${s.level}%` : '0%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <Section id="skills" title="Technical Skills">
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((g) => (
          <SkillCard key={g.title} group={g} />
        ))}

        <div className="card card-hover p-6">
          <h3 className="mb-6 text-lg font-semibold text-mint">Cloud &amp; Observability</h3>
          <div className="grid grid-cols-2 gap-4">
            {tools.map((t) => (
              <div
                key={t.label}
                className="rounded-xl border border-line bg-white/8 px-3 py-4 text-center"
              >
                <i className={`${t.icon} text-2xl text-sky`} />
                <p className="mt-2 text-sm text-muted">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
