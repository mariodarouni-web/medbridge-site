import { useEffect, useRef } from 'react'

const verticals = [
  {
    index: 'A',
    accent: '#e8374a',
    image: '/images/medtech.png',
    tag: 'Operating rooms to new markets',
    title: 'MedTech & Medical',
    body: 'Medical devices, diagnostics, biotech and pharmaceutical innovations face the world’s most demanding entry requirements. We navigate registration, compliance and clinical-market expectations so your product arrives approved, positioned and trusted.',
    points: [
      'Regulatory & registration strategy',
      'Distributor and clinical-channel access',
      'Portfolio expansion across markets',
    ],
  },
  {
    index: 'B',
    accent: '#d5b66f',
    image: '/images/consumer-goods.png',
    tag: 'Skincare & beauty, shelf-ready',
    title: 'Cosmetics & Consumer Goods',
    body: 'From skincare and cosmetics to everyday essentials, great consumer brands win new markets through the right shelves, the right partners and the right story. We build your route to market — from channel identification and pricing to launch execution and demand generation.',
    points: [
      'Go-to-market & channel strategy',
      'Retail and distribution partnerships',
      'Brand positioning for local markets',
    ],
  },
]

/** Alternating photo-led panels with slow parallax on the imagery. */
export default function Verticals() {
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight
      refs.current.forEach((el) => {
        if (!el) return
        const r = el.getBoundingClientRect()
        const progress = (r.top + r.height / 2 - vh / 2) / vh
        const img = el.querySelector<HTMLElement>('[data-parallax]')
        if (img) img.style.transform = `translateY(${progress * -40}px) scale(1.12)`
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="verticals" className="bg-[#f7f5f0] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <p className="section-number">03 — WHAT WE MOVE</p>
            <h2 className="font-display mt-6 max-w-xl text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.1] text-[#12263f]">
              Two worlds. One bridge.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-[#12263f]/60">
            Whether the product belongs in an operating room or on a
            supermarket shelf, the discipline of crossing borders is the same
            — and it is what we do best.
          </p>
        </div>

        <div className="mt-20 space-y-20 lg:space-y-28">
          {verticals.map((v, i) => (
            <article
              key={v.title}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16`}
            >
              {/* image with parallax */}
              <div
                ref={(el) => {
                  refs.current[i] = el
                }}
                className={`relative overflow-hidden rounded-sm lg:col-span-7 ${
                  i % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    data-parallax
                    src={v.image}
                    alt={v.title}
                    className="h-full w-full object-cover transition-transform duration-200 ease-out will-change-transform"
                    style={{ transform: 'scale(1.12)' }}
                  />
                </div>
                <span
                  className="absolute bottom-4 left-4 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(10,26,48,0.55)' }}
                >
                  {v.tag}
                </span>
              </div>

              {/* copy */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span
                  className="font-display text-5xl font-light"
                  style={{ color: v.accent }}
                >
                  {v.index}
                </span>
                <h3 className="font-display mt-4 text-3xl font-medium text-[#12263f]">
                  {v.title}
                </h3>
                <p className="mt-5 text-[14.5px] leading-relaxed text-[#12263f]/70">
                  {v.body}
                </p>
                <ul className="mt-8 space-y-3 border-t border-[#0e2340]/10 pt-8">
                  {v.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[13px] font-medium text-[#12263f]/80">
                      <span className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: v.accent }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
