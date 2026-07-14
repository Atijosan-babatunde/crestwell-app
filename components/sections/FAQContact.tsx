'use client'
import { useState } from 'react'
import { FAQ_ITEMS } from '@/lib/data'

function Accordion() {
  const [open,setOpen] = useState<number|null>(null)
  return (
    <div>
      {FAQ_ITEMS.map((item,i)=>(
        <div key={item.question} className="border-b border-primary/10">
          <button
            className={`w-full flex justify-between items-center py-4.5 text-[15.5px] text-left gap-4 font-sans transition-colors duration-200
              ${open===i?'text-primary font-semibold':'text-dark/80 hover:text-primary font-normal'}`}
            style={{paddingTop:'18px',paddingBottom:'18px'}}
            onClick={()=>setOpen(open===i?null:i)}>
            {item.question}
            <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300
              ${open===i?'bg-secondary border-secondary text-white rotate-45':'border-primary/20 text-primary/40'}`}>
              <span className="text-lg font-bold leading-none">+</span>
            </div>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${open===i?'max-h-48':'max-h-0'}`}>
            <p className="text-[14.5px] leading-relaxed pb-5 text-text/75">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function ContactForm() {
  const [sent,setSent] = useState(false)
  return (
    <div className="bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border-[2px] border-secondary/10"/>
      <div className="absolute -bottom-12 -left-12 w-36 h-36 rounded-full border-[2px] border-secondary/8"/>
      <div className="p-10 relative z-10">
        <span className="font-script text-secondary block mb-1" style={{fontSize:'clamp(18px,2vw,22px)'}}>Contact Us</span>
        <h3 className="font-serif text-[26px] font-bold text-white mb-1.5">Want to Learn More?</h3>
        <p className="text-[14px] text-white/50 mb-7">Fill the form below and we&rsquo;ll respond within 24 hours.</p>
        {sent ? (
          <div className="flex items-center gap-4 bg-secondary/20 border border-secondary/35 p-5 text-white" role="alert">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div><strong className="block text-[15px]">Thank you!</strong><p className="text-sm text-white/65 mt-0.5">We will contact you shortly.</p></div>
          </div>
        ) : (
          <form onSubmit={e=>{e.preventDefault();setSent(true)}} className="flex flex-col gap-3" noValidate>
            {[{t:'text',p:'Your name *',req:true},{t:'tel',p:'Phone number *',req:true},{t:'email',p:'Email address *',req:true},{t:'text',p:'How can we help?',req:false}].map(f=>(
              <input key={f.p} type={f.t} placeholder={f.p} required={f.req}
                     className="w-full px-4 py-3.5 border border-white/12 text-white text-[14.5px] font-sans outline-none transition-colors focus:border-secondary placeholder:text-white/25"
                     style={{background:'rgba(255,255,255,0.06)'}}/>
            ))}
            <button type="submit" className="btn-secondary w-full justify-center py-4 text-[12.5px] mt-1">
              Request a Consultation →
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function FAQContact() {
  return (
    <section className="section-pad" id="faq">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div className="reveal">
            <span className="eyebrow block">FAQ</span>
            <h2 className="font-serif font-bold text-title text-dark mt-1 mb-2">Have Questions?</h2>
            <div className="divider mb-8"/>
            <Accordion/>
          </div>
          <div className="reveal shadow-navy"><ContactForm/></div>
        </div>
      </div>
    </section>
  )
}
