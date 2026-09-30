import { useEffect, useState } from 'react'
import { useScrollDraw } from '../hooks/useScrollDraw'

const nodes = [
  { x: 130, y: 168, label: 'Canada — Origin' },
  { x: 352, y: 132, label: 'Europe' },
  { x: 520, y: 212, label: 'Middle East' },
  { x: 672, y: 176, label: 'Asia-Pacific' },
  { x: 268, y: 336, label: 'Latin America' },
]

const routes: [number, number][] = [
  [0, 1],
  [1, 2],
  [0, 3],
  [2, 3],
  [0, 4],
  [4, 3],
]

function arc(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2
  const my = Math.min(a.y, b.y) - Math.abs(b.x - a.x) * 0.18 - 26
  return `M${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`
}

/** Live network map: dotted landmass grid, scroll-drawn gold routes,
 *  pulsing red port markers and parcels travelling along each arc. */
export default function NetworkMap() {
  const drawRef = useScrollDraw<HTMLDivElement>()
  const [dots, setDots] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    const pts: { x: number; y: number }[] = []
    const step = 14
    for (let y = 20; y <= 400; y += step) {
      for (let x = 10; x <= 790; x += step) {
        // pseudo landmass noise
        const v =
          Math.sin(x * 0.021) * Math.cos(y * 0.017) +
          Math.sin((x + y) * 0.013) * 0.7 +
          Math.sin(x * 0.007 + 2) * 0.5
        if (v > 0.55) pts.push({ x: x + (y % 28 ? 7 : 0), y })
      }
    }
    setDots(pts)
  }, [])

  return (
    <section id="network" className="bg-[#0a1a30] py-28 lg:py-36">
      <div ref={drawRef} className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="section-number !text-[#d5b66f]">02 — THE NETWORK IN MOTION</p>
            <h2 className="font-display mt-6 max-w-xl text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.1] text-white">
              Watch your product{' '}
              <em className="text-[#d5b66f]">cross the map</em>.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-white/55">
            From Canadian origin ports to every region that matters — each
            route below is a lane we actively manage for our clients.
          </p>
        </div>

        <div className="relative mt-16 overflow-hidden rounded-sm border border-white/10 bg-[#0e2340]/60">
          <svg viewBox="0 0 800 420" className="h-auto w-full" aria-hidden="true">
            {/* landmass dots */}
            {dots.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r="1.4" fill="#ffffff" opacity="0.14" />
            ))}

            {/* routes */}
            {routes.map(([a, b], i) => {
              const d = arc(nodes[a], nodes[b])
              return (
                <g key={i}>
                  <path
                    data-draw
                    d={d}
                    stroke="#c9a227"
                    strokeWidth="1.6"
                    fill="none"
                    opacity="0.85"
                  />
                  {/* invisible twin path for the moving parcel */}
                  <path id={`route-${i}`} d={d} fill="none" stroke="none" />
                  <circle r="3.2" fill="#e8374a">
                    <animateMotion
                      dur={`${5 + i * 1.3}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.8}s`}
                    >
                      <mpath href={`#route-${i}`} />
                    </animateMotion>
                  </circle>
                </g>
              )
            })}

            {/* port nodes */}
            {nodes.map((n) => (
              <g key={n.label}>
                <circle cx={n.x} cy={n.y} r="7" fill="none" stroke="#e8374a" strokeWidth="1.4">
                  <animate
                    attributeName="r"
                    values="5;10;5"
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.9;0.15;0.9"
                    dur="2.6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx={n.x} cy={n.y} r="3.4" fill="#e8374a" />
                <text
                  x={n.x}
                  y={n.y - 14}
                  textAnchor="middle"
                  fill="#ffffff"
                  opacity="0.75"
                  fontSize="10.5"
                  letterSpacing="1.5"
                  style={{ textTransform: 'uppercase', fontFamily: 'Archivo, sans-serif' }}
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
          {[
            ['Managed trade lanes', '6 core corridors'],
            ['Modes', 'Sea · Air · Land'],
            ['Customs & compliance', 'Handled in-house'],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline gap-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d5b66f]">
                {k}
              </span>
              <span className="text-[12px] text-white/50">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
