import { WHY_ITEMS } from '@/lib/data'

export default function WhyUs() {
  return (
    <section className="section-pad bg-primary" id="why">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="font-script text-secondary leading-none block" style={{fontSize:'clamp(20px,2vw,26px)'}}>Why choose us</span>
          <h2 className="font-serif font-bold text-title text-white mt-1">Welcome Home.</h2>
          <div className="w-12 h-[3px] bg-secondary/60 mx-auto mt-4"/>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {WHY_ITEMS.map((item,i)=>(
            <article key={item.title}
              className="flex flex-col items-center text-center p-8 border border-white/[0.08] hover:border-secondary/40 hover:bg-white/[0.04] transition-all duration-300 reveal group">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-5 shrink-0 transition-all duration-300 ${i%2===0?'bg-secondary/15 group-hover:bg-secondary/25':'bg-white/8 group-hover:bg-white/12'}`}>
                {item.icon.startsWith('http')
                  ? <img src={item.icon} alt="" width={38} height={38} className="object-contain"/>
                  : <svg viewBox="0 0 24 24" fill="none" stroke="#2ab5a5" strokeWidth="1.5" className="w-9 h-9">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                }
              </div>
              <h3 className="font-serif text-[19px] font-bold text-white mb-2">{item.title}</h3>
              <div className="w-7 h-[2px] bg-secondary/50 mb-3"/>
              <p className="text-[13.5px] leading-relaxed text-white/55">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
