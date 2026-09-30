import { useEffect, useState } from 'react'
import LogoMark from '../components/LogoMark'

const RECIPIENT = 'info@medbridgesupply.ca'
const SHOWN_KEY = 'mb_popup_shown'

export default function InnovatorPopup() {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  useEffect(() => {
    if (sessionStorage.getItem(SHOWN_KEY)) return
    const t = setTimeout(() => {
      setOpen(true)
      sessionStorage.setItem(SHOWN_KEY, '1')
    }, 5000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `Innovator Inquiry — ${form.company || form.name || 'New Market Entry'}`
    )
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\nAbout the innovation & goals:\n${form.message}`
    )
    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`
    setOpen(false)
  }

  const inputCls =
    'w-full border border-[#0e2340]/20 bg-white px-4 py-3 text-[14px] text-[#12263f] placeholder:text-[#12263f]/35 focus:border-[#a4141f] focus:outline-none transition-colors'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a1a30]/70 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fade-up relative w-full max-w-lg bg-[#f7f5f0] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* gold top rule */}
        <div className="h-1.5 w-full bg-[#a4141f]" />

        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#0e2340]/20 text-[#0e2340] transition-colors hover:bg-[#0e2340] hover:text-white"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="p-8 lg:p-10">
          <div className="flex items-center gap-3 text-[#0e2340]">
            <LogoMark className="h-9 w-9" archColor="#0e2340" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a4141f]">
              For Innovators
            </span>
          </div>

          <h3 className="font-display mt-5 text-[1.7rem] font-medium leading-[1.15] text-[#12263f]">
            Building something in{' '}
            <em className="text-[#a4141f]">Medical or MedTech</em>?
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed text-[#12263f]/70">
            If you're an innovator looking to grow your business
            internationally, send us your details — our team will reach out
            and help you chart the route to new markets.
          </p>

          <form onSubmit={submit} className="mt-7 space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                required
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
                className={inputCls}
              />
              <input
                required
                value={form.company}
                onChange={update('company')}
                placeholder="Company / product"
                className={inputCls}
              />
            </div>
            <input
              required
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder="Email address"
              className={inputCls}
            />
            <textarea
              value={form.message}
              onChange={update('message')}
              placeholder="Tell us briefly about your innovation and the markets you're targeting"
              rows={3}
              className={`${inputCls} resize-none`}
            />
            <button
              type="submit"
              className="btn-pill btn-pill-red w-full !tracking-[0.22em]"
            >
              Send My Details
            </button>
            <p className="text-center text-[11px] leading-relaxed text-[#12263f]/45">
              This opens your email app with everything pre-filled — nothing
              is stored on this site.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
