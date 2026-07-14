const checks = ["Care plans built around your routine, not the other way around", "Qualified support workers: carers, therapists, and more", "DBS-checked staff you and your family can trust", "Support work, night care, and living care under one roof", "Local carers serving Seattle and the surrounding suburbs"];

export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="reveal relative">
            {/* Decorative frame */}
            <div className="absolute -bottom-5 -right-5 w-[85%] h-[85%] border-2 border-secondary/25 z-0" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006e8b21bf02b0021956232_optimized_1078_c1078x1205-0x0" alt="Client receiving care at home" className="w-full h-[500px] object-cover object-[18%_0] relative z-10" />
            {/* Floating badge */}
            {/* <div className="absolute -bottom-3 left-8 bg-secondary shadow-teal px-5 py-4 z-20">
              <p className="font-serif font-bold text-white text-4xl leading-none">30+</p>
              <p className="text-[11px] font-bold text-white/80 uppercase tracking-wider mt-0.5">Years of Care</p>
            </div> */}
          </div>

          {/* Text side */}
          <div className="reveal">
            <span className="eyebrow block">About us</span>
            <h2 className="font-serif font-bold text-h2 text-dark mt-1 mb-2">Care Without the Worry, at Home.</h2>
            <div className="divider mb-5" />
            <p className="text-[15.5px] leading-relaxed text-text/80 mb-7">We provide compassionate, personalized home care services across Seattle. Every care plan is tailored to promote comfort, dignity, and independence:</p>
            <ul className="flex flex-col gap-3 mb-8">
              {checks.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-text">
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-[2px]">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/about" className="btn-primary">
              Discover Our Story →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
