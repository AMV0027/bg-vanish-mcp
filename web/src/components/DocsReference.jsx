const TOOLS = [
  {
    name: 'remove_background',
    desc: 'Remove the background from an image file on the local filesystem.',
    params: [
      { name: 'input_path',   type: 'string',  req: true,  desc: 'Absolute or relative path to the input image (PNG, JPG, JPEG).' },
      { name: 'output_path',  type: 'string',  req: false, desc: 'Where to save the output. Defaults to same directory with _no_bg.png suffix.' },
      { name: 'return_base64',type: 'boolean', req: false, desc: 'If true, also returns the result as a base64-encoded PNG string.' },
    ],
    returns: 'Result message + output file path, optionally with base64 string.',
  },
  {
    name: 'remove_background_base64',
    desc: 'Remove the background from a base64-encoded image and return it as a base64 PNG.',
    params: [
      { name: 'image_base64', type: 'string', req: true, desc: 'Base64-encoded image data (supports optional data:image/...;base64, prefix).' },
    ],
    returns: 'Base64-encoded transparent PNG prefixed with data:image/png;base64,',
  },
]

export default function DocsReference() {
  return (
    <section id="docs" className="section border-b border-[#e8e5e0]">
      <div className="container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-2">Reference</p>
          <h2 className="text-[1.6rem] sm:text-[2.2rem] mb-2">Tools Reference</h2>
          <p className="text-sm text-[#6b6b64] max-w-lg">
            Two simple MCP tools your AI assistant can call directly.
          </p>
        </div>

        {/* Tools Wrapper */}
        <div className="flex flex-col border border-[#e8e5e0] rounded-2xl overflow-hidden">
          {TOOLS.map((tool, ti) => (
            <div
              key={tool.name}
              className={`p-6 sm:p-8 bg-white ${
                ti % 2 !== 0 ? 'bg-[#fafaf8]' : ''
              } ${
                ti > 0 ? 'border-t border-[#e8e5e0]' : ''
              }`}
            >

              {/* Tool Header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-2.5 mb-6">
                <code className="font-display text-base sm:text-[17px] font-semibold text-[#1a1a18] tracking-tight">
                  {tool.name}
                </code>
                <span className="text-xs text-[#9e9a94] sm:mt-1">{tool.desc}</span>
              </div>

              {/* Params Table - overflow-x-auto for mobile responsiveness */}
              <div className="overflow-x-auto w-full -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full min-w-[500px] border-collapse text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#e8e5e0]">
                      {['Parameter', 'Type', 'Required', 'Description'].map(h => (
                        <th
                          key={h}
                          className="pb-2.5 px-3 first:pl-0 font-semibold text-[10px] tracking-wider uppercase text-[#9e9a94]"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tool.params.map(p => (
                      <tr key={p.name} className="border-b border-[#e8e5e0] last:border-0">
                        <td className="py-3 px-3 first:pl-0 font-mono text-[#3d3d38] font-medium">{p.name}</td>
                        <td className="py-3 px-3 font-mono text-[#9e9a94]">{p.type}</td>
                        <td className={`py-3 px-3 font-medium ${p.req ? 'text-[#2d6a4f]' : 'text-[#9e9a94]'}`}>
                          {p.req ? 'required' : 'optional'}
                        </td>
                        <td className="py-3 px-3 text-[#6b6b64] leading-relaxed max-w-[250px]">{p.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Returns */}
              <div className="mt-5 pt-4 border-t border-[#e8e5e0] flex items-baseline gap-2.5">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#9e9a94]">Returns</span>
                <span className="text-xs text-[#6b6b64]">{tool.returns}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Example prompts */}
        <div className="mt-10">
          <p className="text-[10px] font-bold tracking-widest uppercase text-[#9e9a94] mb-4">
            Example Prompts
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8e5e0] rounded-xl overflow-hidden border border-[#e8e5e0]">
            {[
              { label: 'File path', text: '"Remove the background from /Users/me/photo.jpg and save it to my Desktop."' },
              { label: 'Base64',    text: '"Here\'s a base64 image. Remove its background and return the result as base64."' },
            ].map(({ label, text }, i) => (
              <div key={label} className="p-6 bg-white">
                <p className="text-[10px] font-bold tracking-widest uppercase text-[#9e9a94] mb-2.5">{label}</p>
                <p className="text-xs sm:text-sm text-[#6b6b64] italic leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
