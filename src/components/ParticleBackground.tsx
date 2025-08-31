// 'use client'
// import { useEffect, useRef } from 'react'

// const ParticleBackground = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     const canvas = canvasRef.current
//     if (!canvas) return

//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     const particles: Array<{
//       x: number
//       y: number
//       dx: number
//       dy: number
//       size: number
//       opacity: number
//     }> = []

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }

//     const createParticles = () => {
//       const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      
//       for (let i = 0; i < particleCount; i++) {
//         particles.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           dx: (Math.random() - 0.5) * 0.5,
//           dy: (Math.random() - 0.5) * 0.5,
//           size: Math.random() * 2 + 0.5,
//           opacity: Math.random() * 0.3 + 0.1
//         })
//       }
//     }

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       particles.forEach((particle, index) => {
//         // Update position
//         particle.x += particle.dx
//         particle.y += particle.dy

//         // Bounce off edges
//         if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
//         if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

//         // Draw particle
//         ctx.beginPath()
//         ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
//         ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
//         ctx.fill()

//         // Draw connections
//         particles.forEach((otherParticle, otherIndex) => {
//           if (index === otherIndex) return

//           const dx = particle.x - otherParticle.x
//           const dy = particle.y - otherParticle.y
//           const distance = Math.sqrt(dx * dx + dy * dy)

//           if (distance < 100) {
//             ctx.beginPath()
//             ctx.moveTo(particle.x, particle.y)
//             ctx.lineTo(otherParticle.x, otherParticle.y)
//             ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`
//             ctx.lineWidth = 0.5
//             ctx.stroke()
//           }
//         })
//       })

//       requestAnimationFrame(animate)
//     }

//     resizeCanvas()
//     createParticles()
//     animate()

//     window.addEventListener('resize', () => {
//       resizeCanvas()
//       particles.length = 0
//       createParticles()
//     })

//     return () => {
//       window.removeEventListener('resize', resizeCanvas)
//     }
//   }, [])

//   return (
//     <canvas
//       ref={canvasRef}
//       className="fixed inset-0 pointer-events-none z-0"
//       style={{ opacity: 0.6 }}
//     />
//   )
// }

// export default ParticleBackground
'use client'
import { useEffect, useRef } from 'react'

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles: Array<{
      x: number
      y: number
      dx: number
      dy: number
      size: number
      opacity: number
    }> = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      // Slightly reduced particle count for better performance
      const particleCount = Math.floor((canvas.width * canvas.height) / 18000)
      particles.length = 0 // Clear existing particles
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx: (Math.random() - 0.5) * 0.4, // Slightly slower movement
          dy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.5 + 0.4, // Slightly smaller particles
          opacity: Math.random() * 0.25 + 0.08 // Slightly more subtle
        })
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.dx
        particle.y += particle.dy

        // Bounce off edges with slight damping
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.dx *= -1
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.dy *= -1
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`
        ctx.fill()

        // Draw connections with optimized distance check
        particles.forEach((otherParticle, otherIndex) => {
          if (index >= otherIndex) return // Avoid duplicate connections

          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 90) { // Slightly shorter connection distance
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - distance / 90)})`
            ctx.lineWidth = 0.4 // Thinner lines
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createParticles() // Recreate particles on resize
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }} // Slightly more subtle
    />
  )
}

export default ParticleBackground
