import { useEffect, useRef } from 'react'

/**
 * Scroll-driven SVG stroke drawing.
 * Returns a ref to attach to a wrapper element; every path with
 * `data-draw` inside gets its stroke-dashoffset tied to scroll progress,
 * so the line literally draws itself as the user scrolls through it.
 */
export function useScrollDraw<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const paths = Array.from(
      el.querySelectorAll<SVGPathElement>('path[data-draw]')
    )
    if (paths.length === 0) return

    // Measure real path lengths at runtime
    const lengths = paths.map((p) => {
      const len = p.getTotalLength()
      p.style.strokeDasharray = `${len}`
      p.style.strokeDashoffset = `${len}`
      return len
    })

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // progress 0 → 1 as the element travels from below the fold
      // to about 40% up the viewport
      const start = vh * 0.95
      const end = vh * 0.35
      const raw = (start - rect.top) / (start - end + rect.height * 0.35)
      const progress = Math.min(1, Math.max(0, raw))
      paths.forEach((p, i) => {
        p.style.strokeDashoffset = `${lengths[i] * (1 - progress)}`
      })
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return ref
}
