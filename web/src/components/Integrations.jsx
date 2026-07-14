import { useState } from 'react'
import CopyBtn from './CopyBtn'

const MCP_JSON = `{
  "mcpServers": {
    "bg-vanish-mcp": {
      "command": "bg-vanish-mcp"
    }
  }
}`

const CLIENTS = [
  {
    id: 'claude', label: 'Claude Desktop', abbr: 'CD', category: 'desktop',
    sub: 'claude_desktop_config.json',
    extra: (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-[11px] text-[#9e9a94]">
        <div><strong className="text-[#3d3d38]">macOS</strong><br/>~/Library/Application Support/Claude/</div>
        <div><strong className="text-[#3d3d38]">Windows</strong><br/>%APPDATA%\Claude\</div>
        <div><strong className="text-[#3d3d38]">Linux</strong><br/>~/.config/Claude/</div>
      </div>
    ),
    code: MCP_JSON,
  },
  { id: 'cline',     label: 'Cline (VS Code)',      abbr: 'CL', category: 'editor',  sub: '~/.cline/mcp.json',
    extra: <p className="text-xs text-[#9e9a94] mb-2.5">Or: Cline panel → MCP Servers icon → Configure MCP Servers.</p>,
    code: MCP_JSON },
  { id: 'cursor',    label: 'Cursor',               abbr: 'CR', category: 'editor',  sub: '.cursor/mcp.json',          extra: null, code: MCP_JSON },
  { id: 'continue',  label: 'Continue.dev',         abbr: 'CO', category: 'editor',  sub: '.continue/mcpServers/',
    extra: <p className="text-xs text-[#9e9a94] mb-2.5">Create <code className="font-mono bg-black/5 px-1 py-0.5 rounded text-xs text-[#3d3d38]">.continue/mcpServers/bg-vanish.json</code>:</p>,
    code: MCP_JSON },
  { id: 'windsurf',  label: 'Windsurf',             abbr: 'WS', category: 'editor',  sub: '~/.codeium/windsurf/mcp_config.json', extra: null, code: MCP_JSON },
  { id: 'vscode',    label: 'VS Code / Copilot',    abbr: 'VS', category: 'editor',  sub: '.vscode/mcp.json',
    extra: <p className="text-xs text-[#9e9a94] mb-2.5">⚠ VS Code uses <code className="font-mono bg-black/5 px-1 py-0.5 rounded text-xs text-[#3d3d38]">"servers"</code> (not <code className="font-mono">"mcpServers"</code>) as the root key.</p>,
    code: `{\n  "servers": {\n    "bg-vanish-mcp": {\n      "command": "bg-vanish-mcp"\n    }\n  }\n}` },
  { id: 'zed',       label: 'Zed Editor',           abbr: 'ZD', category: 'editor',  sub: '~/.config/zed/settings.json',
    extra: <p className="text-xs text-[#9e9a94] mb-2.5">⚠ Zed uses <code className="font-mono bg-black/5 px-1 py-0.5 rounded text-xs text-[#3d3d38]">"mcp_servers"</code> (with underscore) as the root key.</p>,
    code: `{\n  "mcp_servers": {\n    "bg-vanish-mcp": {\n      "command": "bg-vanish-mcp"\n    }\n  }\n}` },
  { id: 'goose',     label: 'Goose CLI',            abbr: 'GO', category: 'cli',     sub: 'Configure via CLI',
    extra: <p className="text-xs text-[#9e9a94] mb-2.5">Follow the prompts → add a <strong>stdio</strong> MCP server → command: bg-vanish-mcp</p>,
    code: 'goose configure' },
]

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'editor', label: 'Code Editors' },
  { key: 'desktop', label: 'Desktop Apps' },
  { key: 'cli', label: 'CLI Tools' },
]

function AccCard({ client }) {
  return (
    <details id={`acc-${client.id}`} className="w-full border-b border-[#e8e5e0]">
      <summary className="flex items-center gap-3.5 py-4 cursor-pointer select-none list-none">
        <div className="w-8 h-8 rounded-lg bg-[#fafaf8] border border-[#e8e5e0] flex items-center justify-center text-[10px] font-bold text-[#6b6b64] flex-shrink-0 tracking-wide">
          {client.abbr}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-semibold text-[#1a1a18]">{client.label}</div>
          <div className="text-[11px] text-[#9e9a94] font-mono mt-0.5 truncate">{client.sub}</div>
        </div>
        <svg className="chevron" width="14" height="14" fill="none" stroke="var(--muted)" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <div className="pl-0 sm:pl-11 pb-5 pt-1">
        {client.extra}
        <div className="copy-wrap relative">
          <pre className="terminal p-4 text-xs font-mono rounded-lg overflow-x-auto m-0">
            <code className="text-[#86efac]">{client.code}</code>
          </pre>
          <CopyBtn text={client.code} />
        </div>
      </div>
    </details>
  )
}

export default function Integrations() {
  const [active, setActive] = useState('all')
  const shown = CLIENTS.filter(c => active === 'all' || c.category === active)

  return (
    <section id="integrations" className="section border-b border-[#e8e5e0] bg-[#fafaf8]">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-2">Clients</p>
            <h2 className="text-[1.6rem] sm:text-[2.2rem]">Works With Every MCP Client</h2>
          </div>
          <p className="text-sm text-[#6b6b64] max-w-xs sm:text-right leading-relaxed">
            One install — connect to any MCP-compatible assistant.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              id={`filter-${key}`}
              onClick={() => setActive(key)}
              className={`filter-btn ${active === key ? 'active' : ''}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* List card wrapper */}
        <div className="bg-white border border-[#e8e5e0] rounded-2xl px-4 sm:px-6">
          {shown.map(client => <AccCard key={client.id} client={client} />)}
        </div>

      </div>
    </section>
  )
}
