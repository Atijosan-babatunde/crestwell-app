'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { SERVICES } from '@/lib/data'

export default function Services() {
  const [current, setCurrent] = useState(0)
  const [perView, setPerView] = useState(3)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setPerView(1)
      else if (window.innerWidth < 1024) setPerView(2)
      else setPerView(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const max = Math.max(0, SERVICES.length - perView)
  const sw  = 100 / perView

  return (
    <section className="section-pad bg-surface" id="services">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="eyebrow">Services</span>
          <h2 className="font-serif font-bold text-title text-dark mt-1">Everyone Deserves Comfortable Living.</h2>
          <div className="divider-center mt-4"/>
        </div>

        <div className="overflow-hidden reveal">
          <div className="flex transition-transform duration-500 ease-in-out"
               style={{ transform:`translateX(-${current*sw}%)` }}>
            {SERVICES.map(s=>(
              <article key={s.title} className="flex-shrink-0 px-3.5 flex flex-col" style={{minWidth:`${sw}%`}}>
                <div className="overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.title} className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="bg-white p-6 flex flex-col flex-1 shadow-card">
                  <h3 className="font-serif font-bold text-dark mb-2 leading-snug" style={{fontSize:'clamp(19px,2.2vw,25px)'}}>
                    {s.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-secondary mb-3"/>
                  <p className="text-[14px] text-text/80 leading-relaxed flex-1 mb-5">{s.body}</p>
                  <Link href="/services"
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wide text-primary hover:text-secondary transition-colors group">
                    Learn More
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-6">
          {[{fn:()=>setCurrent(c=>Math.max(c-1,0)),dis:current===0,s:'←'},{fn:()=>setCurrent(c=>Math.min(c+1,max)),dis:current>=max,s:'→'}].map((b,i)=>(
            <button key={i} onClick={b.fn} disabled={b.dis}
                    className="w-11 h-11 flex items-center justify-center text-lg bg-primary text-white hover:bg-secondary disabled:bg-muted/40 disabled:cursor-not-allowed transition-colors duration-200">
              {b.s}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
