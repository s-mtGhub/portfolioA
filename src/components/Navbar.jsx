import { useEffect, useState } from 'react'
import { nav, hero } from '../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Scroll spy: whichever section owns the point just under the navbar wins.
  useEffect(() => {
    function onScroll() {
      const line = window.scrollY + 100
      let current = nav[0].id
      for (const { id } of nav) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Keep the page from scrolling behind an open drawer.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="gradient-text text-2xl font-bold tracking-tight">
          {hero.brand}
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-sm transition-colors hover:text-mint ${
                  active === id ? 'text-mint' : 'text-muted'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-lg text-xl text-body transition-colors hover:text-mint lg:hidden"
        >
          <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={`overflow-hidden border-t border-line bg-ink/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? 'max-h-[70vh]' : 'max-h-0'
        }`}
      >
        <ul className="space-y-1 px-4 py-3">
          {nav.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-base transition-colors hover:bg-white/5 hover:text-mint ${
                  active === id ? 'text-mint' : 'text-body'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
