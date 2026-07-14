const points = ['Trained, DBS-Checked Carers','Domiciliary & Personal Care','Waking & Sleeping Night Care','Companionship & Social Support','Flexible, Person-Centred Plans']

export default function ExpertCare() {
  return (
    <section className="flex flex-col md:flex-row min-h-[520px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edafb4abce70021a3e44a_optimized_1234_c1234x1052-0x0"
           alt="Expert care" className="w-full md:w-1/2 object-cover object-[84%_100%]"/>
      <div className="flex-1 bg-secondary px-[clamp(32px,6vw,80px)] py-[clamp(48px,6vw,88px)] flex flex-col justify-center relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full border-[3px] border-white/10"/>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full border-[3px] border-white/8"/>
        <span className="font-script text-white/70 block mb-2 relative z-10" style={{fontSize:'clamp(20px,2vw,26px)'}}>Caring and comforting</span>
        <h2 className="font-serif font-bold text-white mt-1 mb-5 leading-snug relative z-10" style={{fontSize:'clamp(24px,2.8vw,40px)'}}>
          Expert Home Care Services in Seattle.
        </h2>
        <p className="text-white/80 text-[15px] leading-relaxed mb-8 relative z-10">
          Crestwell Healthcare does everything it can to provide maximum comfort at home, so every client we support can live life to the full.
        </p>
        <ul className="flex flex-col gap-3.5 relative z-10">
          {points.map(p=>(
            <li key={p} className="flex items-center gap-3 text-white font-semibold text-[14.5px]">
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
