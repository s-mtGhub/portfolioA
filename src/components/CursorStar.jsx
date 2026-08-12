import { useEffect, useRef } from 'react'

export default function CursorStar() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const mouse = useRef({ x: -9999, y: -9999 })
  const head = useRef({ x: -9999, y: -9999 })
  const particles = useRef([])
  const lastSpawn = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Only run on devices with a real cursor — touch has no persistent pointer,
    // and touchmove would otherwise spray particles during scroll.
    if (!window.matchMedia('(pointer: fine)').matches) return

    const ctx = canvas.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function resize() {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    function onPointer(e) {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    window.addEventListener('mousemove', onPointer, { passive: true })

    let visible = true
    function onVisibility() {
      visible = document.visibilityState === 'visible'
      if (visible && !rafRef.current) rafRef.current = requestAnimationFrame(loop)
    }
    document.addEventListener('visibilitychange', onVisibility)

    // ---- star head shape (4-point sparkle), stretched along its motion vector ----
    // `stretch` > 1 elongates the sparkle into a streak; angle points along travel direction.
    function drawStar(x, y, size, rotation, alpha, stretch) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.scale(stretch, 1) // elongate along the direction of travel only
      ctx.globalAlpha = alpha

      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 4)
      glow.addColorStop(0, 'rgba(180,225,255,0.55)')
      glow.addColorStop(1, 'rgba(180,225,255,0)')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(0, 0, size * 4, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.moveTo(0, -size * 2.2)
      ctx.quadraticCurveTo(size * 0.3, -size * 0.3, size * 2.2, 0)
      ctx.quadraticCurveTo(size * 0.3, size * 0.3, 0, size * 2.2)
      ctx.quadraticCurveTo(-size * 0.3, size * 0.3, -size * 2.2, 0)
      ctx.quadraticCurveTo(-size * 0.3, -size * 0.3, 0, -size * 2.2)
      ctx.closePath()
      ctx.fill()

      ctx.beginPath()
      ctx.arc(0, 0, size * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.95)'
      ctx.fill()

      ctx.restore()
    }

    let t = 0
    let lastHeadX = 0
    let lastHeadY = 0

    function loop() {
      if (!visible) {
        rafRef.current = 0
        return
      }
      t += 1

      head.current.x += (mouse.current.x - head.current.x) * 0.22
      head.current.y += (mouse.current.y - head.current.y) * 0.22

      const dx = head.current.x - lastSpawn.current.x
      const dy = head.current.y - lastSpawn.current.y
      const dist = Math.hypot(dx, dy)

      if (dist > 4) {
        const steps = Math.min(6, Math.floor(dist / 4))
        for (let i = 0; i < steps; i++) {
          const f = i / steps
          particles.current.push({
            x: lastSpawn.current.x + dx * f,
            y: lastSpawn.current.y + dy * f,
            life: 1,
            size: 1.5 + Math.random() * 2,
            drift: (Math.random() - 0.5) * 0.4,
          })
        }
        lastSpawn.current.x = head.current.x
        lastSpawn.current.y = head.current.y
      }

      // hard cap so a frantic mouse-shake can't runaway-grow the array
      if (particles.current.length > 150) {
        particles.current.splice(0, particles.current.length - 150)
      }

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.globalCompositeOperation = 'lighter'

      particles.current.forEach((p) => {
        p.life -= 0.035
        p.y += p.drift
        p.x += p.drift
      })
      particles.current = particles.current.filter((p) => p.life > 0)

      particles.current.forEach((p) => {
        const alpha = Math.max(0, p.life) * 0.7
        const r = p.size * (0.5 + p.life)
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3)
        grad.addColorStop(0, `rgba(255,255,255,${alpha})`)
        grad.addColorStop(0.4, `rgba(150,210,255,${alpha * 0.6})`)
        grad.addColorStop(1, 'rgba(150,210,255,0)')
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2)
        ctx.fill()
      })

      // velocity of the eased head itself (not raw cursor) drives the stretch —
      // this is what makes the sparkle snap back to a clean point when idle
      const headDx = head.current.x - lastHeadX
      const headDy = head.current.y - lastHeadY
      const headSpeed = Math.hypot(headDx, headDy)
      lastHeadX = head.current.x
      lastHeadY = head.current.y

      const travelAngle = headSpeed > 0.05 ? Math.atan2(headDy, headDx) : 0
      const stretch = 1 + Math.min(2.2, headSpeed * 0.14)
      const twinkle = 1 + Math.sin(t * 0.15) * 0.15
      const size = 3 * twinkle

      drawStar(head.current.x, head.current.y, size, travelAngle, 0.9, stretch)

      ctx.globalCompositeOperation = 'source-over'

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onPointer)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}