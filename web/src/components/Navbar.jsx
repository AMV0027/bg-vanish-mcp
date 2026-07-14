import { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features',     label: 'Features' },
  { href: '#installation', label: 'Install' },
  { href: '#integrations', label: 'Integrations' },
  { href: '#docs',         label: 'Docs' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)
  const lastY = useRef(0)

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY
      if (!navRef.current) return
      navRef.current.style.transform =
        y > 100 && y > lastY.current ? 'translateY(-100%)' : 'translateY(0)'
      lastY.current = y
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav ref={navRef} className="nav-root fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-[#e8e5e0]">
      <div className="container flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group no-underline">
          <span className="w-6.5 h-6.5 rounded-md bg-[#1a1a18] text-white flex items-center justify-center font-display font-bold text-xs">
            B
          </span>
          <span className="font-display font-semibold text-sm text-[#1a1a18] tracking-tight">
            BG-Vanish <span className="text-[#9e9a94] font-normal">MCP</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-xs text-[#6b6b64] hover:text-[#1a1a18] no-underline font-medium transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://pypi.org/project/bg-vanish-mcp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#6b6b64] hover:text-[#1a1a18] no-underline border border-[#e8e5e0] hover:border-[#9e9a94] px-3 py-1 rounded-full flex items-center gap-1.5 transition-all"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
            PyPI
          </a>
          <a
            href="https://github.com/your-username/bg-vanish-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white bg-[#1a1a18] hover:opacity-85 no-underline px-3.5 py-1.5 rounded-full flex items-center gap-1.5 transition-all"
          >
            <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden p-1.5 rounded-lg text-[#6b6b64] hover:text-[#1a1a18] hover:bg-black/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-[#e8e5e0] bg-white px-6 py-4 flex flex-col gap-3">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#6b6b64] hover:text-[#1a1a18] no-underline py-1"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
