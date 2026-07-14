'use client'
import { useState } from 'react'
import { TESTIMONIALS } from '@/lib/data'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = TESTIMONIALS[i]

  return (
    <section className="relative section-pad bg-testimonials-img bg-no-repeat bg-cover bg-fixed bg-center overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-primary/88 z-10"/>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-secondary z-20"/>
      <div className="container-site relative z-20">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="font-script text-secondary block mb-2" style={{fontSize:'clamp(20px,2vw,26px)'}}>Testimonials</span>
          <h2 className="font-serif font-bold text-title text-white mt-1">What Our Clients Say.</h2>
          <div className="w-12 h-[3px] bg-secondary/50 mx-auto mt-4"/>
        </div>
        <div className="max-w-[700px] mx-auto text-center reveal" aria-live="polite">
          {/* Large quote mark */}
          <div className="text-secondary/30 font-serif text-[120px] leading-none -mb-8 select-none">"</div>
          <blockquote className="font-sans italic text-white leading-[1.75] mb-8" style={{fontSize:'clamp(16px,2vw,20px)'}}>
            {t.quote.replace(/^"|"$/g,'')}
          </blockquote>
          <div className="w-10 h-[2px] bg-secondary mx-auto mb-4"/>
          <p className="font-serif text-[21px] font-bold text-white">{t.name}</p>
          <p className="text-secondary text-sm font-semibold mt-1">{t.age}</p>
        </div>
        <div className="flex items-center justify-center gap-4 mt-10 reveal">
          <button onClick={()=>setI(c=>(c-1+TESTIMONIALS.length)%TESTIMONIALS.length)}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xl text-white border border-white/20 bg-white/8 hover:bg-secondary hover:border-secondary transition-all duration-200">←</button>
          <div className="flex gap-2.5">
            {TESTIMONIALS.map((_,idx)=>(
              <button key={idx} onClick={()=>setI(idx)}
                      className={`rounded-full transition-all duration-200 ${idx===i?'w-8 h-2.5 bg-secondary':'w-2.5 h-2.5 bg-white/25 hover:bg-white/50'}`}/>
            ))}
          </div>
          <button onClick={()=>setI(c=>(c+1)%TESTIMONIALS.length)}
                  className="w-11 h-11 rounded-full flex items-center justify-center text-xl text-white border border-white/20 bg-white/8 hover:bg-secondary hover:border-secondary transition-all duration-200">→</button>
        </div>
      </div>
    </section>
  )
}
