import { useEffect, useState } from 'react'
import LogoMark from '../components/LogoMark'

const links = [
  { label: 'Network', href: '#network' },
  { label: 'What We Move', href: '#verticals' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#0a1a30]/90 backdrop-blur-md'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a href="#top" className="flex items-center gap-3 text-white">
          <LogoMark className="h-10 w-10" archColor="#ffffff" />
          <span className="leading-none">
            <span className="block text-[15px] font-bold tracking-[0.18em] text-[#e8374a]">
              MEDBRIDGE
            </span>
            <span className="block text-[10px] font-medium tracking-[0.5em] text-white/80">
              SUPPLY
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#d5b66f]"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-pill btn-pill-red !px-6 !py-2.5">
            Start a Conversation
          </a>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`h-0.5 w-6 bg-white ${open ? 'opacity-0' : ''}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-[#0a1a30] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
