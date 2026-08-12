import { useEffect, useRef } from 'react'

// A 3D point cloud rotated slowly on two axes and projected by hand onto a
// 2D canvas. Same look as a WebGL starfield without shipping a 3D engine.
const CAMERA_Z = 20 // distance from the origin to the eye
const FOV = 900 // projection scale in px
const SPREAD = 50 // stars fill a cube of ±SPREAD around the origin
const DRIFT_Y = 0.00012 // radians per frame
const DRIFT_X = 0.00006
const MOUSE_PULL = 0.15 // how far the pointer tugs the field

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = 1
    let stars = []
    let frame = 0

    // Rotation actually applied, and where the pointer wants it to be.
    let angleX = 0
    let angleY = 0
    let targetX = 0
    let targetY = 0

    function seed() {
      // ~1 star per 900 css px of viewport, so a phone draws a few hundred
      // and a desktop a few thousand — same density either way.
      const count = Math.min(3000, Math.max(220, Math.round((width * height) / 900)))
      stars = Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 2 * SPREAD,
        y: (Math.random() - 0.5) * 2 * SPREAD,
        z: (Math.random() - 0.5) * 2 * SPREAD,
        // staggered twinkle so they don't all pulse together
        phase: Math.random() * Math.PI * 2,
        size: 0.6 + Math.random() * 1.1,
      }))
    }

    function resize() {
      const w = window.innerWidth
      const h = window.innerHeight
      // Phone browsers fire `resize` every time the URL bar slides in or out,
      // which is a HEIGHT-only change mid-scroll. Reseeding there threw the
      // whole field into a new random arrangement on every scroll, so only the
      // canvas is resized unless the width actually changed (rotation, etc).
      const reseed = !stars.length || w !== width

      width = w
      height = h
      // phones gain nothing visible from a 3× buffer and pay for it in frame time
      dpr = Math.min(window.devicePixelRatio || 1, w < 768 ? 1.5 : 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      // resizing the backing store wipes ctx state, so both are re-applied
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.fillStyle = '#ffffff'

      if (reseed) seed()
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // ease toward the pointer target instead of snapping to it
      angleX += DRIFT_X + (targetX - angleX) * 0.02
      angleY += DRIFT_Y + (targetY - angleY) * 0.02

      const sinY = Math.sin(angleY)
      const cosY = Math.cos(angleY)
      const sinX = Math.sin(angleX)
      const cosX = Math.cos(angleX)
      const cx = width / 2
      const cy = height / 2

      for (const s of stars) {
        // rotate around Y, then around X
        const x1 = s.x * cosY - s.z * sinY
        const z1 = s.x * sinY + s.z * cosY
        const y2 = s.y * cosX - z1 * sinX
        const z2 = s.y * sinX + z1 * cosX

        const depth = z2 + CAMERA_Z + SPREAD
        if (depth <= 1) continue // behind the eye

        const scale = FOV / depth
        const px = cx + x1 * scale
        const py = cy + y2 * scale
        if (px < -10 || px > width + 10 || py < -10 || py > height + 10) continue

        const twinkle = reduced ? 1 : 0.75 + 0.25 * Math.sin(frame * 0.02 + s.phase)
        // near stars are brighter and bigger; far ones fade into the background
        const alpha = Math.min(0.9, (scale / 12) * twinkle)
        if (alpha < 0.02) continue

        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(px, py, Math.max(0.35, s.size * scale * 0.06), 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    let raf = 0
    function loop() {
      frame += 1
      draw()
      raf = requestAnimationFrame(loop)
    }

    function onPointer(e) {
      const t = e.touches ? e.touches[0] : e
      if (!t) return
      targetY = ((t.clientX - width / 2) / width) * MOUSE_PULL
      targetX = ((t.clientY - height / 2) / height) * MOUSE_PULL
    }

    resize()
    ctx.fillStyle = '#ffffff'
    window.addEventListener('resize', resize)

    if (reduced) {
      draw() // one static frame, no loop
    } else {
      window.addEventListener('mousemove', onPointer, { passive: true })
      window.addEventListener('touchmove', onPointer, { passive: true })
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onPointer)
      window.removeEventListener('touchmove', onPointer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      /* sized in JS from innerWidth/innerHeight — 100vh lies on mobile */
      className="pointer-events-none fixed inset-0 -z-10"
    />
  )
}
