const lanes = [
  'Vancouver',
  'Toronto',
  'Rotterdam',
  'Hamburg',
  'Dubai',
  'Riyadh',
  'Cairo',
  'Mumbai',
  'Singapore',
  'Shanghai',
  'São Paulo',
  'Mexico City',
  'Sydney',
  'Johannesburg',
]

/** Infinite scrolling trade-lane marquee between hero and content. */
export default function Marquee() {
  const row = [...lanes, ...lanes]
  return (
    <div className="overflow-hidden border-y border-[#0e2340]/10 bg-white py-5">
      <div className="marquee-track flex w-max items-center">
        {row.map((city, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#12263f]/55">
              {city}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-[#a4141f]" />
          </span>
        ))}
      </div>
    </div>
  )
}
