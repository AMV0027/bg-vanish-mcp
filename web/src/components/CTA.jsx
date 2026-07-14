import CopyBtn from './CopyBtn'

export default function CTA() {
  return (
    <section className="bg-[#fafaf8] border-b border-[#e8e5e0] py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <p className="section-label mb-3">Get started</p>
            <h2 className="text-[1.8rem] sm:text-[2.4rem] leading-tight mb-4">
              Ready to remove<br />backgrounds?
            </h2>
            <p className="text-sm sm:text-base text-[#6b6b64] leading-relaxed max-w-md">
              Install in 30 seconds. No sign-up, no API keys, no cloud. Your images stay on your
              machine — now and always.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {/* Install */}
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#9e9a94] mb-2">
                Install
              </p>
              <div className="terminal copy-wrap p-4 inline-flex items-center gap-3 w-full sm:w-auto min-w-[320px]">
                <span className="font-mono text-sm text-[#334155] select-none">$</span>
                <code className="font-mono text-sm text-[#86efac]">pip install bg-vanish-mcp</code>
                <CopyBtn text="pip install bg-vanish-mcp" />
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://github.com/your-username/bg-vanish-mcp"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-github-btn"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-[#1a1a18] text-white hover:opacity-85 no-underline transition-all"
              >
                <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://pypi.org/project/bg-vanish-mcp/"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-pypi-btn"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold bg-white text-[#1a1a18] border border-[#e8e5e0] hover:border-[#9e9a94] no-underline transition-all"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                </svg>
                View on PyPI
              </a>
            </div>

            {/* Trust line */}
            <p className="text-[11px] text-[#9e9a94] leading-relaxed mt-1">
              MIT licensed · No tracking · No telemetry · No cloud dependency
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
