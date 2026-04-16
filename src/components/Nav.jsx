import { useState, useEffect, useRef } from 'react'

const ECOSYSTEM_LINKS = [
  { name: 'Neeve', href: 'https://www.neeveresearch.com' },
  { name: 'Datafye', href: 'https://www.datafye.io' },
  { name: 'Paywhere', href: 'https://www.paywhere.com' },
]

function EcosystemMenu() {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-[13px] text-muted/70 hover:text-[#9aa3b2] transition-colors cursor-pointer"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Ecosystem
        <svg width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.25" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full pt-2">
          <div className="min-w-[140px] bg-surface/95 backdrop-blur-md border border-border rounded-lg py-1.5">
            {ECOSYSTEM_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-1.5 text-[13px] text-[#9aa3b2] hover:text-[#e6eaf2] hover:bg-surface-light/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Nav({ onContact }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-midnight/90 backdrop-blur-md border-b border-border' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center">
            <img src="/n5-logo.png" alt="N5" className="h-[52px]" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-[15px] text-muted">
            <a href="#shift" className="hover:text-[#e6eaf2] transition-colors">The Shift</a>
            <a href="#stack" className="hover:text-[#e6eaf2] transition-colors">The Stack</a>
            <a href="#how" className="hover:text-[#e6eaf2] transition-colors">How It Works</a>
            <a href="#why" className="hover:text-[#e6eaf2] transition-colors">Why It Matters</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:block">
            <EcosystemMenu />
          </div>
          <button onClick={onContact}
            className="text-[15px] px-4 py-2 rounded-lg border border-border text-[#9aa3b2] hover:border-[#4a5568] hover:text-[#e6eaf2] transition-all cursor-pointer">
            Talk to Us
          </button>
        </div>
      </div>
    </nav>
  )
}
