import { socials, footer } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <div className="flex flex-wrap justify-center gap-5">
          {socials
            .filter((s) => s.href !== '#')
            .map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-lg text-muted transition-colors hover:border-mint hover:text-mint"
              >
                <i className={s.icon} />
              </a>
            ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          © {footer.year} {footer.owner}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
