import { useMemo } from 'react'
import { useScrollDraw } from '../hooks/useScrollDraw'

const regions = [
  { name: 'North America', note: 'Origin market expertise — Canada & beyond' },
  { name: 'Europe', note: 'EU regulatory & distribution networks' },
  { name: 'Middle East & Africa', note: 'High-growth healthcare & retail markets' },
  { name: 'Asia-Pacific', note: 'Scale, manufacturing & demand hubs' },
  { name: 'Latin America', note: 'Emerging beauty & medical channels' },
]

/** Dot-grid globe with gold route arcs, drawn on scroll. */
function Globe() {
  // Build a circle of dots with longitude rings
  const dots = useMemo(() => {
    const pts: { x: number; y: number; r: number }[] = []
    const R = 190
    const cx = 220
    const cy = 220
    const step = 16
    for (let y = -R; y <= R; y += step) {
      const half = Math.sqrt(R * R - y * y)
      // vary density like meridians
      for (let x = -half; x <= half; x += step) {
        const jitter = ((x * 13 + y * 7) % 5) * 0.2
        pts.push({ x: cx + x + jitter, y: cy + y, r: 1.6 })
      }
    }
    return pts
  }, [])

  return (
    <svg viewBox="0 0 440 440" className="h-auto w-full max-w-[520px]" aria-hidden="true">
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r={d.r} fill="#ffffff" opacity="0.22" />
      ))}
      {/* route arcs */}
      <path data-draw d="M150 130 Q 220 40 300 120" stroke="#c9a227" strokeWidth="1.8" fill="none" />
      <path data-draw d="M300 120 Q 370 180 330 270" stroke="#c9a227" strokeWidth="1.8" fill="none" />
      <path data-draw d="M150 130 Q 120 240 180 310" stroke="#c9a227" strokeWidth="1.8" fill="none" />
      <path data-draw d="M180 310 Q 260 360 330 270" stroke="#c9a227" strokeWidth="1.8" fill="none" />
      <path data-draw d="M150 130 Q 240 200 330 270" stroke="#d2ab72" strokeWidth="1.2" fill="none" strokeDasharray="3 5" />
      {/* nodes */}
      {[
        [150, 130],
        [300, 120],
        [330, 270],
        [180, 310],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="7" stroke="#c9a227" strokeWidth="1.5" fill="none" />
          <circle cx={x} cy={y} r="3" fill="#c9a227" />
        </g>
      ))}
      {/* outer ring */}
      <circle cx="220" cy="220" r="190" stroke="#ffffff" strokeWidth="1" opacity="0.15" fill="none" />
    </svg>
  )
}

export default function Coverage() {
  const drawRef = useScrollDraw<HTMLDivElement>()

  return (
    <section id="coverage" className="bg-[#0e2340] py-28 lg:py-36">
      <div
        ref={drawRef}
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12"
      >
        <div>
          <p className="section-number">05 — GLOBAL COVERAGE</p>
          <h2 className="font-display mt-6 text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.1] text-white">
            One partner.{' '}
            <em className="text-[#d5b66f]">Every market that matters.</em>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/60">
            Our coverage is global, but our execution is local. We combine
            international standards with on-the-ground presence, so your
            portfolio grows with the same care abroad as it did at home.
          </p>

          <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {regions.map((r) => (
              <li
                key={r.name}
                className="group flex items-baseline justify-between gap-6 py-5"
              >
                <span className="flex items-center gap-4">
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#c9a227]" />
                  <span className="font-display text-xl text-white transition-colors group-hover:text-[#d5b66f]">
                    {r.name}
                  </span>
                </span>
                <span className="text-right text-[12px] uppercase tracking-[0.12em] text-white/40">
                  {r.note}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Globe />
        </div>
      </div>
    </section>
  )
}
