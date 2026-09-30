import LogoMark from '../components/LogoMark'

const promises = [
  'Regional experts with global standards',
  'End-to-end market entry solutions',
  'Hands-on execution & local presence',
  'Focused on long-term partnerships',
]

export default function Contact() {
  return (
    <>
      {/* CTA */}
      <section id="contact" className="bg-[#a4141f] py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
              06 — Let's Build Your Next Success Story
            </p>
            <h2 className="font-display mt-6 text-[clamp(2.2rem,4.6vw,4rem)] font-medium leading-[1.06] text-white">
              Ready to take your
              <br />
              innovation <em>further</em>?
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/80">
              Whether you are exploring a new market or scaling an existing
              presence, MedBridge Supply is the partner that makes it happen.
              Tell us where you want to go — we'll chart the route.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:info@medbridgesupply.ca"
                className="btn-pill border-white bg-white text-[#a4141f] hover:bg-transparent hover:text-white"
              >
                info@medbridgesupply.ca
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/70">
              Why partner with us
            </p>
            <ul className="mt-8 space-y-5">
              {promises.map((p) => (
                <li key={p} className="flex items-start gap-4 border-b border-white/20 pb-5">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="mt-1 shrink-0">
                    <circle cx="8" cy="8" r="7" stroke="#ffffff" strokeWidth="1.5" fill="none" />
                    <path d="M5 8.2L7.2 10.4L11 5.8" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span className="text-[14px] font-medium text-white">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1a30] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <a href="#top" className="flex items-center gap-3 text-white">
              <LogoMark className="h-12 w-12" archColor="#ffffff" />
              <span className="leading-none">
                <span className="block text-[16px] font-bold tracking-[0.18em] text-[#e8374a]">
                  MEDBRIDGE
                </span>
                <span className="block text-[10px] font-medium tracking-[0.5em] text-[#d5b66f]">
                  SUPPLY
                </span>
              </span>
            </a>
            <nav className="flex flex-wrap gap-8">
              {[
                ['What We Do', '#verticals'],
                ['Methodology', '#methodology'],
                ['Coverage', '#coverage'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-[#d5b66f]"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-[12px] text-white/35 md:flex-row">
            <p>© {new Date().getFullYear()} MedBridge Supply. All rights reserved.</p>
            <p className="tracking-[0.14em] uppercase">
              Connecting innovation to the world
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
