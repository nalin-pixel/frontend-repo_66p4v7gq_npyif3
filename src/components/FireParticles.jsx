import { useEffect, useRef } from 'react'

export default function FireParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + Math.random() * 200,
      s: Math.random() * 2 + 0.5,
      v: Math.random() * 0.6 + 0.2,
      o: Math.random() * 0.6 + 0.2,
    }))

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const grad = ctx.createLinearGradient(0, canvas.height, 0, 0)
      grad.addColorStop(0, 'rgba(0,0,0,0)')
      grad.addColorStop(1, 'rgba(251,146,60,0.04)')

      for (const p of particles) {
        ctx.beginPath()
        ctx.fillStyle = `rgba(251,146,60,${p.o})`
        ctx.arc(p.x, p.y, p.s * 2, 0, Math.PI * 2)
        ctx.fill()

        // trail
        ctx.beginPath()
        ctx.strokeStyle = grad
        ctx.moveTo(p.x, p.y)
        ctx.lineTo(p.x, p.y + 20)
        ctx.stroke()

        p.y -= p.v * 2
        p.x += (Math.random() - 0.5) * 0.6
        if (p.y < -20) {
          p.y = canvas.height + Math.random() * 80
          p.x = Math.random() * canvas.width
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-0 opacity-30 pointer-events-none"/>
}
