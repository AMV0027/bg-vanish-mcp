const FEATURES = [
  { title: '100% Private',       desc: 'Runs entirely on your machine. No images are ever uploaded to any server, ever.' },
  { title: 'Fast & Efficient',   desc: 'U2NET deep learning model with optional GPU acceleration for rapid processing.' },
  { title: 'Works Offline',      desc: 'Model downloads once (~176 MB). After that, everything runs fully offline.' },
  { title: 'Universal MCP Tool', desc: 'Works with any MCP-compatible AI assistant — Claude, Cline, Cursor, Continue, and more.' },
  { title: 'File & Base64 Input',desc: 'Process images from your filesystem or pass them directly as base64-encoded strings.' },
  { title: 'Free & Open Source', desc: 'MIT licensed. No subscriptions, no API costs, no usage limits. Use it freely.' },
]

export default function Features() {
  return (
    <section id="features" className="section border-b border-[#e8e5e0] bg-[#fafaf8]">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-2">Capabilities</p>
            <h2 className="text-[1.6rem] sm:text-[2.2rem]">Everything You Need</h2>
          </div>
          <p className="text-sm text-[#6b6b64] max-w-xs sm:text-right leading-relaxed">
            No subscriptions, no API keys, no limits.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#e8e5e0] rounded-2xl overflow-hidden">
          {FEATURES.map(({ title, desc }, i) => (
            <div
              key={title}
              className={`p-8 bg-white border-[#e8e5e0] ${
                i >= 1 ? 'border-t sm:border-t-0' : ''
              } ${
                i >= 2 ? 'sm:border-t lg:border-t-0' : ''
              } ${
                i >= 3 ? 'lg:border-t' : ''
              } ${
                i % 3 !== 0 ? 'lg:border-l' : ''
              } ${
                i % 2 !== 0 ? 'sm:border-l lg:border-l-0' : ''
              } ${
                (i % 3 !== 0 && i % 2 === 0) ? 'sm:border-t lg:border-t-0' : ''
              }`}
              style={{
                // Let custom rules handle borders precisely
                borderWidth: '0px',
                borderTopWidth: i >= 3 ? '1px' : (i >= 2 ? '0px' : '0px'),
                borderLeftWidth: '0px'
              }}
              // Actually let's just use standard Tailwind responsive border utilities!
              className="p-8 bg-white border border-[#e8e5e0] -mr-px -mt-px"
            >
              <div className="text-[10px] font-bold tracking-widest text-[#9e9a94] mb-3">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-base font-semibold mb-2">{title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6b6b64]">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
