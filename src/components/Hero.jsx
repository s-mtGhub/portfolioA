import { useState } from 'react'
import { hero, socials } from '../data'

function SocialPreview({ s }) {
  const [showPreview, setShowPreview] = useState(false)

  const thumbs = {
    GitHub: '/images/github.svg',
    LinkedIn: '/images/linkedin.svg',
    LeetCode: '/images/leetcode.svg',
    Codeforces: '/images/codeforces.svg',
    Email: '/images/email.svg',
  }

  return (
    <div
      className="relative group"
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
      onFocus={() => setShowPreview(true)}
      onBlur={() => setShowPreview(false)}
    >
      <a
        href={s.href.startsWith('mailto:') ? '#' : s.href}
        aria-label={s.label}
        target={s.href.startsWith('mailto:') ? undefined : '_blank'}
        rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        onClick={(e) => {
          if (s.href.startsWith('mailto:')) {
            e.preventDefault()
            window.open(s.href)
          }
        }}
        className="grid h-11 w-11 place-items-center rounded-full border border-line text-xl text-muted transition-colors hover:border-mint hover:text-mint"
      >
        <i className={s.icon} />
      </a>

      {showPreview && (
        <div className="pointer-events-auto absolute z-50 w-40 sm:w-48 mt-2 -translate-x-1/2 left-1/2 rounded border border-line bg-white/95 p-1 shadow-md">
          <div className="w-full h-28 sm:h-32 relative bg-gradient-to-b from-white/5 to-white/2 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={thumbs[s.label] || '/images/cv-thumbnail.svg'} alt={`${s.label} preview`} className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="mt-2 text-center text-sm">
            <a
              href={s.href.startsWith('mailto:') ? '#' : s.href}
              onClick={(e) => {
                if (s.href.startsWith('mailto:')) {
                  e.preventDefault()
                  window.open(s.href)
                }
              }}
              target={s.href.startsWith('mailto:') ? undefined : '_blank'}
              rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="text-mint"
            >
              Open {s.label}
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const [cvLoaded, setCvLoaded] = useState(false)
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-7xl">
          {hero.greeting}{' '}
          <span className="gradient-text whitespace-nowrap">{hero.name}</span>
        </h1>

        <p className="mt-6 text-base text-muted sm:text-xl">
          {hero.roles.map((role, i) => (
            <span key={role}>
              {i > 0 && <span className="mx-2 text-mint/60">|</span>}
              {role}
            </span>
          ))}
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-lg">
          {hero.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="w-full rounded-full bg-gradient-to-r from-mint to-sky px-8 py-3 font-semibold text-ink transition-transform hover:scale-105 sm:w-auto"
          >
            {hero.primaryCta.label}
          </a>

          <div className="relative group">
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-mint px-8 py-3 font-semibold text-mint transition-colors hover:bg-mint hover:text-ink sm:w-auto block text-center"
            >
              {hero.secondaryCta.label}
            </a>

            <div className="pointer-events-auto absolute z-50 hidden group-hover:block w-64 sm:w-80 mt-2 -translate-x-1/2 left-1/2 rounded border border-line bg-white/95 p-1 shadow-lg">
              <div className="w-full h-64 relative bg-gradient-to-b from-white/5 to-white/2 flex items-center justify-center">
                {!cvLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/images/cv-thumbnail.svg" alt="CV preview" className="w-full h-full object-cover" />
                  </div>
                )}

                <iframe
                  src={hero.secondaryCta.href}
                  title="cv-preview"
                  className={`absolute inset-0 w-full h-full ${cvLoaded ? 'block' : 'hidden'}`}
                  onLoad={() => setCvLoaded(true)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* offscreen warm iframe removed — CV preview iframe now present (hidden) and will load at page load */}

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          {socials
            .filter((s) => s.href !== '#')
            .map((s) => (
              <SocialPreview key={s.label} s={s} />
            ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-float text-2xl text-mint/70 sm:block"
      >
        <i className="fa-solid fa-chevron-down" />
      </a>
    </section>
  )
}
