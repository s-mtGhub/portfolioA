import { hero, socials } from '../data'

export default function Hero() {
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
          <a
            href={hero.secondaryCta.href}
            className="w-full rounded-full border border-mint px-8 py-3 font-semibold text-mint transition-colors hover:bg-mint hover:text-ink sm:w-auto"
          >
            {hero.secondaryCta.label}
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          {socials
            .filter((s) => s.href !== '#')
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-xl text-muted transition-colors hover:border-mint hover:text-mint"
              >
                <i className={s.icon} />
              </a>
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
