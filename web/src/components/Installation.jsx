import CopyBtn from './CopyBtn'

const MANUAL = `git clone https://github.com/your-username/bg-vanish-mcp.git
cd bg-vanish-mcp
python -m venv .venv
source .venv/bin/activate    # Linux / macOS
# .venv\\Scripts\\activate     # Windows
pip install -r requirements.txt`

function CodeBlock({ children, light = false }) {
  return (
    <div className="copy-wrap relative">
      {light ? (
        <pre className="m-0 overflow-x-auto rounded-lg border border-[#e8e5e0] bg-[#fafaf8] p-3 text-xs font-mono leading-relaxed text-[#3d3d38]">
          {children}
        </pre>
      ) : (
        <pre className="terminal m-0 overflow-x-auto rounded-lg p-3.5 text-xs font-mono leading-relaxed">
          <code className="text-[#86efac]">{children}</code>
        </pre>
      )}
      <CopyBtn text={typeof children === 'string' ? children : ''} className={light ? 'light' : ''} />
    </div>
  )
}

export default function Installation() {
  return (
    <section id="installation" className="section border-b border-[#e8e5e0]">
      <div className="container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-2">Setup</p>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] mb-2">Installation</h2>
          <p className="text-sm text-[#6b6b64] max-w-lg">
            Get started in under a minute. Requires Python 3.10+.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left col */}
          <div className="flex flex-col gap-6">

            {/* Standard */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#9e9a94]">Recommended</span>
                <span className="h-px flex-1 bg-[#e8e5e0]" />
              </div>
              <CodeBlock>pip install bg-vanish-mcp</CodeBlock>
              <p className="text-[11px] text-[#9e9a94] mt-2">
                Then run <code className="font-mono text-xs text-[#3d3d38]">bg-vanish-mcp</code> to start the server.
              </p>
            </div>

            {/* Windows GPU */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#9e9a94]">Windows + DirectML</span>
                <span className="h-px flex-1 bg-[#e8e5e0]" />
              </div>
              <CodeBlock>{`pip install bg-vanish-mcp[dml]\nset USE_GPU=true`}</CodeBlock>
              <p className="text-[11px] text-[#9e9a94] mt-2">Any GPU (AMD, Intel, NVIDIA)</p>
            </div>

            {/* Linux/Mac GPU */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#9e9a94]">Linux / macOS + CUDA</span>
                <span className="h-px flex-1 bg-[#e8e5e0]" />
              </div>
              <CodeBlock>{`pip install bg-vanish-mcp[gpu]\nexport USE_GPU=true`}</CodeBlock>
              <p className="text-[11px] text-[#9e9a94] mt-2">NVIDIA GPU required</p>
            </div>

          </div>

          {/* Right col */}
          <div className="flex flex-col gap-6">

            {/* Manual */}
            <div>
              <details id="manual-setup-accordion" className="w-full">
                <summary className="flex items-center justify-between px-4 py-3 border border-[#e8e5e0] rounded-lg text-xs font-semibold text-[#3d3d38] bg-[#fafaf8] user-select-none list-none cursor-pointer">
                  <span>Manual setup from source</span>
                  <svg className="chevron" width="14" height="14" fill="none" stroke="var(--muted)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <div className="mt-2.5">
                  <CodeBlock light>{MANUAL}</CodeBlock>
                </div>
              </details>
            </div>

            {/* Virtual env */}
            <div>
              <details className="w-full">
                <summary className="flex items-center justify-between px-4 py-3 border border-[#e8e5e0] rounded-lg text-xs font-semibold text-[#3d3d38] bg-[#fafaf8] user-select-none list-none cursor-pointer">
                  <span>Using a virtual environment</span>
                  <svg className="chevron" width="14" height="14" fill="none" stroke="var(--muted)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                  </svg>
                </summary>
                <div className="mt-2.5">
                  <CodeBlock>{`{
  "mcpServers": {
    "bg-vanish-mcp": {
      "command": "/path/to/.venv/bin/python",
      "args": ["-m", "bg_vanish_mcp"],
      "env": { "USE_GPU": "true" }
    }
  }
}`}</CodeBlock>
                </div>
              </details>
            </div>

            {/* Verify */}
            <div className="p-4 border border-[#e8e5e0] rounded-xl bg-[#fafaf8]">
              <p className="text-xs font-semibold text-[#3d3d38] mb-2">Verify installation</p>
              <CodeBlock light>python test_server.py</CodeBlock>
              <p className="text-[11px] text-[#9e9a94] mt-2">
                Should print: <em>Verification PASSED: Output has transparency.</em>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
