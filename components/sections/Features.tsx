import { FEATURES } from '@/lib/data'

export default function Features() {
  return (
    <section className="section-pad bg-surface" id="features">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="eyebrow">What we offer</span>
          <h2 className="font-serif font-bold text-title text-dark mt-1">Comfort, Delivered to Your Door.</h2>
          <div className="divider-center mt-4"/>
          <p className="mt-4 text-[16px] text-text/80">We've built our services around real comfort for every client we support. We care about each person we visit and work to make daily life easier at home.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {FEATURES.map((f,i)=>(
            <article key={f.title}
              className="bg-white flex flex-col items-center text-center px-9 py-10 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 reveal relative overflow-hidden group">
              <div className={`absolute top-0 left-0 right-0 h-1 transition-all duration-300 ${i===1?'bg-secondary':'bg-primary'}`}/>
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-5 shrink-0 transition-colors duration-300
                ${i===1?'bg-secondary/10 group-hover:bg-secondary/18':'bg-primary/8 group-hover:bg-primary/14'}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.icon} alt="" width={42} height={42} className="object-contain"/>
              </div>
              <h3 className="font-serif text-[21px] font-bold text-dark">{f.title}</h3>
              <div className={`w-10 h-[3px] my-3 ${i===1?'bg-secondary':'bg-primary'}`}/>
              <p className="text-[14.5px] leading-relaxed flex-1 mb-7 text-text/80">{f.body}</p>
              <a href={f.href} className={`inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wide transition-colors ${i===1?'text-secondary hover:text-primary':'text-primary hover:text-secondary'}`}>
                Learn More <span className="text-base">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
