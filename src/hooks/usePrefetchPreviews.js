import { useEffect } from 'react'

export default function usePrefetchPreviews(urls = []) {
  useEffect(() => {
    if (typeof window === 'undefined' || !urls || urls.length === 0) return

    const frames = []
    const idle = window.requestIdleCallback || function (cb) { return setTimeout(cb, 1500) }
    const cancelIdle = window.cancelIdleCallback || function (id) { clearTimeout(id) }

    const id = idle(() => {
      for (const u of urls) {
        try {
          if (!u || typeof u !== 'string') continue
          // never prefetch mailto or in-page anchors
          if (u.startsWith('mailto:') || u.startsWith('#')) continue

          const f = document.createElement('iframe')
          f.src = u
          f.style.position = 'absolute'
          f.style.left = '-9999px'
          f.style.top = '-9999px'
          f.style.width = '1px'
          f.style.height = '1px'
          f.setAttribute('aria-hidden', 'true')
          // remove after load or after 10s to avoid leaking
          const cleanup = () => { if (f.parentNode) f.parentNode.removeChild(f) }
          f.onload = () => setTimeout(cleanup, 2000)
          document.body.appendChild(f)
          frames.push(f)
        } catch (e) {
          // ignore individual failures
        }
      }
    })

    return () => {
      cancelIdle(id)
      for (const f of frames) if (f.parentNode) f.parentNode.removeChild(f)
    }
  }, [urls])
}
