import { useScrollDraw } from '../hooks/useScrollDraw'

const steps = [
  {
    n: '01',
    title: 'Market Assessment',
    body: 'We analyze market potential, size, trends, regulations and the competitive landscape to find where your innovation wins first.',
    output: 'Market Entry Feasibility Report',
  },
  {
    n: '02',
    title: 'Entry Strategy Development',
    body: 'We define the optimal go-to-market strategy, value proposition and business model for each target country.',
    output: 'Country Entry Strategy & Roadmap',
  },
  {
    n: '03',
    title: 'Partner & Channel Identification',
    body: 'We identify, evaluate and engage the right partners, distributors and key stakeholders in-market.',
    output: 'Qualified Partner Pipeline',
  },
  {
    n: '04',
    title: 'Regulatory & Legal Navigation',
    body: 'We guide you through registration, compliance and every regulatory requirement — nothing left to chance.',
    output: 'Regulatory Approval & Readiness',
  },
  {
    n: '05',
    title: 'Commercial Setup & Launch Plan',
    body: 'We build your local structure, pricing strategy, supply chain and launch plan.',
    output: 'Go-to-Market Launch Plan',
  },
  {
    n: '06',
    title: 'Marketing & Branding Support',
    body: 'We create awareness, build your brand presence and generate real market demand.',
    output: 'Brand Visibility & Demand Generation',
  },
  {
    n: '07',
    title: 'Training & Capability Building',
    body: 'We train your team and partners to ensure product knowledge, selling skills and compliance.',
    output: 'High-Performing Local Teams',
  },
  {
    n: '08',
    title: 'Performance Monitoring & Growth Optimization',
    body: 'We track KPIs, analyze performance and continuously optimize strategies for compounding growth.',
    output: 'Sustainable Growth & Market Leadership',
  },
]

export default function Methodology() {
  const drawRef = useScrollDraw<HTMLDivElement>()

  return (
    <section
      id="methodology"
      className="border-t border-[#0e2340]/10 bg-white py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left — sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p className="section-number">04 — HOW WE WORK</p>
              <h2 className="font-display mt-6 text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.1] text-[#12263f]">
                A proven{' '}
                <em className="text-[#a4141f]">8-step methodology</em> to open
                new countries.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[#12263f]/70">
                Market entry is not a leap of faith — it is a sequence. Each
                step produces a concrete output that de-risks the next, so
                your expansion moves forward on evidence, not hope.
              </p>
              <div className="mt-10 flex items-center gap-6">
                <span className="font-display text-6xl font-light text-[#a4141f]">
                  08
                </span>
                <p className="max-w-[200px] text-[12px] font-semibold uppercase tracking-[0.16em] leading-relaxed text-[#12263f]/60">
                  Steps from first scan to market leadership
                </p>
              </div>
              <a href="#contact" className="btn-pill btn-pill-navy mt-12">
                Begin Step One
              </a>
            </div>
          </div>

          {/* Right — the journey, with a scroll-drawn spine */}
          <div ref={drawRef} className="relative lg:col-span-7">
            {/* spine */}
            <svg
              className="absolute left-[27px] top-2 hidden h-[calc(100%-16px)] w-px md:block"
              width="2"
              height="100%"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                data-draw
                d="M1 0 L1 4000"
                stroke="#a4141f"
                strokeWidth="2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <ol className="space-y-0">
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="group relative grid grid-cols-1 gap-4 border-b border-[#0e2340]/10 py-10 first:pt-0 md:grid-cols-[56px_1fr] md:gap-8"
                >
                  {/* node */}
                  <div className="relative hidden md:block">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#0e2340]/15 bg-white font-display text-lg text-[#0e2340] transition-all duration-500 group-hover:border-[#a4141f] group-hover:bg-[#a4141f] group-hover:text-white">
                      {s.n}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-[1.45rem] font-medium text-[#12263f]">
                      <span className="mr-3 text-sm text-[#a4141f] md:hidden">
                        {s.n}
                      </span>
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-[#12263f]/70">
                      {s.body}
                    </p>
                    <p className="mt-4 flex items-baseline gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
                      <span className="text-[#a4141f]">Output</span>
                      <span className="text-[#12263f]/60">{s.output}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
