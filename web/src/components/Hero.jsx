import CopyBtn from './CopyBtn'

const CLIENTS = ['Claude Desktop', 'Cline', 'Cursor', 'Continue', 'Windsurf', 'VS Code', 'Zed', 'Goose']

export default function Hero() {
  return (
    <section className="pt-24 pb-16 border-b border-[#e8e5e0]">
      <div className="container">

        {/* ── Top badge row ── */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <a
            href="https://pypi.org/project/bg-vanish-mcp/"
            target="_blank"
            rel="noopener noreferrer"
            className="badge flex items-center gap-1.5"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
            pypi.org/project/bg-vanish-mcp
          </a>
          <span className="badge badge-green flex items-center gap-1">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            MIT License
          </span>
          <span className="badge badge-green flex items-center gap-1">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
            100% Local
          </span>
          <span className="badge">Python 3.10+</span>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left Block */}
          <div>
            <h1 className="fadein text-[2rem] sm:text-[2.6rem] lg:text-[3.2rem] leading-[1.1] mb-5">
              Background removal<br />
              for AI assistants.<br />
              <em className="font-normal text-[#6b6b64] not-italic">Entirely local.</em>
            </h1>

            <p className="fadein d1 text-sm sm:text-base leading-relaxed text-[#6b6b64] max-w-lg mb-8">
              An MCP server that plugs into Claude, Cline, Cursor, Windsurf and any compatible AI
              assistant. Remove backgrounds instantly — no cloud APIs, no uploads, no subscriptions.
              Your images never leave your computer.
            </p>

            {/* Install snippet */}
            <div className="fadein d2 mb-8" id="hero-install">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9e9a94] mb-2">
                Quick install
              </p>
              <div className="terminal copy-wrap p-4 inline-block min-w-full sm:min-w-[320px]">
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57] opacity-70" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e] opacity-70" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840] opacity-70" />
                  </span>
                  <span className="text-[9px] text-[#6b6b64] font-mono">terminal</span>
                </div>
                <code className="text-sm font-mono text-[#86efac] block">
                  pip install bg-vanish-mcp<span className="blink text-[#4ade80]">_</span>
                </code>
                <CopyBtn text="pip install bg-vanish-mcp" />
              </div>
              <p className="text-[11px] text-[#9e9a94] mt-2">
                First run downloads the AI model (~176 MB). After that, fully offline.
              </p>
            </div>

            {/* Client chips */}
            <div className="fadein d3" id="hero-clients">
              <p className="text-[10px] font-semibold tracking-widest uppercase text-[#9e9a94] mb-2.5">
                Works with
              </p>
              <div className="flex flex-wrap gap-1.5">
                {CLIENTS.map(c => (
                  <span
                    key={c}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-[#e8e5e0] text-[#6b6b64] bg-[#fafaf8]"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Block */}
          <div className="fadein d2 w-full" id="hero-visual">
            <div className="border border-[#e8e5e0] rounded-xl overflow-hidden bg-[#fafaf8]">
              {/* Top bar */}
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#e8e5e0] bg-white">
                <span className="w-2 h-2 rounded-full bg-[#ff5f57] opacity-70" />
                <span className="w-2 h-2 rounded-full bg-[#febc2e] opacity-70" />
                <span className="w-2 h-2 rounded-full bg-[#28c840] opacity-70" />
                <span className="text-[10px] text-[#9e9a94] ml-1.5 font-mono">bg-vanish-mcp — live demo</span>
              </div>
              {/* Image */}
              <img
                src="/header_bg.png"
                alt="BG-Vanish MCP demo"
                className="w-full block max-h-[300px] object-cover"
              />
              {/* Status */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-[#e8e5e0] bg-white">
                <span className="text-[11px] text-[#9e9a94] font-mono">U2NET · CPU · offline</span>
                <span className="text-[11px] text-[#2d6a4f] font-mono">✓ transparent PNG saved</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[#e8e5e0]">
          {[
            { v: '100%', l: 'Local processing' },
            { v: '0',    l: 'Cloud API calls' },
            { v: '8+',   l: 'AI clients supported' },
            { v: 'MIT',  l: 'Open source license' },
          ].map(({ v, l }, i) => (
            <div
              key={l}
              className={`text-center px-4 ${
                i > 0 ? 'border-t md:border-t-0 md:border-l border-[#e8e5e0] pt-4 md:pt-0' : ''
              }`}
            >
              <div className="font-display text-3xl font-bold text-[#1a1a18]">{v}</div>
              <div className="text-xs text-[#9e9a94] mt-1">{l}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
