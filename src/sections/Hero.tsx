import { useEffect, useRef, useState } from 'react'

const scenes = [
  {
    src: '/images/medtech.png',
    label: 'MedTech',
    caption: 'Devices and diagnostics, delivered market-ready',
  },
  {
    src: '/images/consumer-goods.png',
    label: 'Consumer Goods',
    caption: 'Cosmetics and skincare, placed on the shelves that matter',
  },
]

const DURATION = 5000

/** Cinematic crossfading hero: Ken Burns motion on each scene,
 *  progress indicators, gradient overlay with the manifesto on top. */
export default function Hero() {
  const [active, setActive] = useState(0)
  const timer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timer.current = setInterval(
      () => setActive((a) => (a + 1) % scenes.length),
      DURATION
    )
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
  }, [])

  return (
    <section id="top" className="relative h-screen min-h-[640px] overflow-hidden bg-[#0a1a30]">
      {/* scenes */}
      {scenes.map((s, i) => (
        <div
          key={s.src}
          className="absolute inset-0 transition-opacity duration-[1600ms] ease-out"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <img
            src={s.src}
            alt={s.label}
            className={`h-full w-full object-cover ${i === active ? 'kenburns' : ''}`}
          />
        </div>
      ))}

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a30] via-[#0a1a30]/35 to-[#0a1a30]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a30]/70 via-transparent to-transparent" />

      {/* content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-32 lg:px-12 lg:pb-36">
        <p className="tag-pill w-fit border-[#e8374a]/60 bg-black/25 text-[#f0717f] backdrop-blur-sm fade-up">
          Global Market Expansion Partner — We Help You Become International
        </p>
        <h1
          className="font-display mt-6 max-w-3xl text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[1.03] text-white fade-up"
          style={{ animationDelay: '0.15s' }}
        >
          Great innovations
          <br />
          deserve a <em className="text-[#d5b66f]">world stage</em>.
        </h1>
        <p
          className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/75 fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          MedBridge Supply moves breakthrough MedTech, medical and consumer
          goods innovations across borders — by sea, by air, and through the
          partners who know each market best.
        </p>
        <div
          className="mt-9 flex flex-wrap items-center gap-4 fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          <a href="#contact" className="btn-pill btn-pill-red">
            Expand With Us
          </a>
          <a href="#methodology" className="btn-pill btn-pill-light">
            Our Methodology
          </a>
        </div>
      </div>

      {/* scene indicators */}
      <div className="absolute bottom-10 left-6 z-20 flex gap-6 lg:left-12">
        {scenes.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setActive(i)}
            className="group flex flex-col items-start gap-2"
          >
            <span
              className={`text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors ${
                i === active ? 'text-[#d5b66f]' : 'text-white/45 group-hover:text-white/80'
              }`}
            >
              {s.label}
            </span>
            <span className="h-px w-14 overflow-hidden bg-white/25">
              <span
                key={`${active}-${i}`}
                className={`block h-full bg-[#d5b66f] ${i === active ? 'progress-bar' : ''}`}
                style={
                  i === active
                    ? { animationDuration: `${DURATION}ms` }
                    : { width: i < active ? '100%' : '0%' }
                }
              />
            </span>
          </button>
        ))}
      </div>

      {/* active caption, bottom right */}
      <div className="absolute bottom-10 right-6 z-20 hidden text-right lg:right-12 lg:block">
        <p key={active} className="fade-up text-[12px] uppercase tracking-[0.18em] text-white/55">
          {scenes[active].caption}
        </p>
      </div>
    </section>
  )
}
