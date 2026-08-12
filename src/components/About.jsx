import { useEffect, useState } from 'react'
import Section from './Section'
import { useInView } from '../hooks/useInView'
import { about } from '../data'

/** Counts 0 → value over ~1.5s once the stat grid is on screen. */
function Counter({ value, suffix, run }) {
  const [n, setN] = useState(0)
  // keep the same number of decimals the source value has (8.29 → 2)
  const decimals = String(value).split('.')[1]?.length ?? 0

  useEffect(() => {
    if (!run) return
    const duration = 1500
    let raf = 0
    let start = null
    function step(ts) {
      if (start === null) start = ts
      const p = Math.min((ts - start) / duration, 1)
      // ease-out so it decelerates into the final number
      setN(value * (1 - Math.pow(1 - p, 3)))
      if (p < 1) raf = requestAnimationFrame(step)
      else setN(value)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [run, value])

  return (
    <span className="gradient-text text-3xl font-bold sm:text-4xl">
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <Section id="about" title="About Me">
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div>
          {about.paragraphs.map((p) => (
            <p key={p} className="mb-5 leading-relaxed text-muted">
              {p}
            </p>
          ))}

          <div ref={ref} className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
            {about.stats.map((s) => (
              <div key={s.label} className="card px-4 py-5 text-center">
                <Counter value={s.value} suffix={s.suffix} run={inView} />
                <div className="mt-1 text-xs text-muted sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-first flex justify-center md:order-last">
          <div className="grid aspect-square w-56 animate-float place-items-center rounded-3xl border border-line bg-gradient-to-br from-mint/10 via-sky/10 to-violet/10 text-7xl backdrop-blur-md sm:w-72 sm:text-8xl">
            {about.emoji}
          </div>
        </div>
      </div>
    </Section>
  )
}
