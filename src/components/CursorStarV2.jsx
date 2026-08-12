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
      const t = e.touches ? e.touches[0] : e
      if (!t) return
      mouse.current.x = t.clientX
      mouse.current.y = t.clientY
    }
    window.addEventListener('mousemove', onPointer, { passive: true })
    window.addEventListener('touchmove', onPointer, { passive: true })

    // ---- star head shape (4-point sparkle) ----
    function drawStar(x, y, size, rotation, alpha) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = alpha

      // outer glow
      const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 4)
      glow.addColorStop(0, 'rgba(180,225,255,0.55)')
      glow.addColorStop(1, 'rgba(180,225,255,0)')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(0, 0, size * 4, 0, Math.PI * 2)
      ctx.fill()

      // 4-point sparkle
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.moveTo(0, -size * 2.2)
      ctx.quadraticCurveTo(size * 0.3, -size * 0.3, size * 2.2, 0)
      ctx.quadraticCurveTo(size * 0.3, size * 0.3, 0, size * 2.2)
      ctx.quadraticCurveTo(-size * 0.3, size * 0.3, -size * 2.2, 0)
      ctx.quadraticCurveTo(-size * 0.3, -size * 0.3, 0, -size * 2.2)
      ctx.closePath()
      ctx.fill()

      // bright core
      ctx.beginPath()
      ctx.arc(0, 0, size * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.95)'
      ctx.fill()

      ctx.restore()
    }

    let t = 0

    function loop() {
      t += 1

      // ease head toward cursor
      head.current.x += (mouse.current.x - head.current.x) * 0.22
      head.current.y += (mouse.current.y - head.current.y) * 0.22

      const dx = head.current.x - lastSpawn.current.x
      const dy = head.current.y - lastSpawn.current.y
      const dist = Math.hypot(dx, dy)

      // spawn trail particles based on distance traveled, not just per-frame
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

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // draw + fade trail (oldest first, so newer glow sits on top)
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

      // moving cursor still -> gentle twinkle, moving fast -> stretched glint
      const speed = Math.hypot(mouse.current.x - head.current.x, mouse.current.y - head.current.y)
      const twinkle = 1 + Math.sin(t * 0.15) * 0.15
      const size = 3 + Math.min(2, speed * 0.05)
      const rotation = t * 0.03

      drawStar(head.current.x, head.current.y, size * twinkle, rotation, 0.9)

      ctx.globalCompositeOperation = 'source-over'

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onPointer)
      window.removeEventListener('touchmove', onPointer)
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