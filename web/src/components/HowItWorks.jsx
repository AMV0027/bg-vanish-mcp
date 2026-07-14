const STEPS = [
  {
    num: '01',
    title: 'Send an Image',
    desc: 'Your AI assistant sends the image — as a file path on your computer or a base64 string. No uploading to any server.',
    img: '/step1_no_bg.png',
    alt: 'Step 1: Send an image to the MCP tool',
  },
  {
    num: '02',
    title: 'AI Removes Background',
    desc: 'The U2NET deep-learning model processes the image entirely on your machine. No data ever leaves your computer.',
    img: '/step2_no_bg.png',
    alt: 'Step 2: U2NET AI model removes the background',
  },
  {
    num: '03',
    title: 'Get Transparent PNG',
    desc: 'The result is saved as a transparent PNG to your filesystem, or returned as base64 — ready to use instantly.',
    img: '/step3_no_bg.png',
    alt: 'Step 3: Receive transparent PNG output',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section border-b border-[#e8e5e0]">
      <div className="container">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-14">
          <div>
            <p className="section-label mb-2">Process</p>
            <h2 className="text-[1.6rem] sm:text-[2.2rem]">How It Works</h2>
          </div>
          <p className="text-sm text-[#6b6b64] max-w-sm sm:text-right leading-relaxed">
            Three steps — from image to transparent PNG, entirely on your own machine.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 border border-[#e8e5e0] rounded-2xl overflow-hidden">
          {STEPS.map(({ num, title, desc, img, alt }, i) => (
            <div
              key={num}
              className={`flex flex-col p-8 bg-white ${
                i === 1 ? 'md:bg-[#fafaf8]' : ''
              } ${
                i > 0 ? 'border-t md:border-t-0 md:border-l border-[#e8e5e0]' : ''
              }`}
            >
              {/* Number */}
              <div className="text-[10px] font-semibold tracking-widest text-[#9e9a94] mb-5">
                {num}
              </div>

              {/* Illustration */}
              <div className={`w-full aspect-[4/3] bg-[#fafaf8] border border-[#e8e5e0] rounded-xl overflow-hidden mb-6 flex items-center justify-center ${
                i === 2 ? 'checker-frame' : ''
              }`}>
                <img
                  src={img}
                  alt={alt}
                  className="w-[80%] h-[80%] object-contain"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold mb-2">{title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#6b6b64]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-[11px] text-[#9e9a94] text-center mt-6">
          Step illustrations processed with bg-vanish-mcp — backgrounds removed locally using U2NET.
        </p>

      </div>
    </section>
  )
}
