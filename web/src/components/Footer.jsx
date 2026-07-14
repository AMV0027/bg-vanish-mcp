const LINKS = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#features',     label: 'Features' },
  { href: '#installation', label: 'Installation' },
  { href: '#integrations', label: 'Integrations' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e8e5e0] py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <span className="w-5.5 h-5.5 rounded bg-[#1a1a18] text-white flex items-center justify-center font-display font-bold text-[10px]">
            B
          </span>
          <span className="font-display font-semibold text-xs text-[#1a1a18]">
            BG-Vanish MCP
          </span>
          <span className="text-[#e8e5e0] text-xs">·</span>
          <span className="text-[11px] text-[#9e9a94]">MIT Licensed</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-xs text-[#9e9a94] hover:text-[#1a1a18] no-underline transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://pypi.org/project/bg-vanish-mcp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#9e9a94] hover:text-[#1a1a18] no-underline transition-colors"
          >
            PyPI
          </a>
          <a
            href="https://github.com/your-username/bg-vanish-mcp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#9e9a94] hover:text-[#1a1a18] no-underline transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Tagline */}
        <p className="text-xs text-[#9e9a94]">Private background removal.</p>

      </div>
    </footer>
  )
}
