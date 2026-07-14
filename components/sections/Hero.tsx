export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-img bg-no-repeat bg-cover bg-[55%_center]">
      {/* Gradient overlay: navy left → transparent right */}
      <div className="absolute inset-0 bg-gradient-hero z-10" aria-hidden="true" />
      {/* Teal bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-secondary z-20" aria-hidden="true" />
      {/* Decorative teal vertical stripe */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary z-20 hidden lg:block" aria-hidden="true" />

      <div className="container-site relative z-20 py-28 lg:pl-12">
        <div className="max-w-[580px] reveal">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-secondary/15 border border-secondary/30 px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-secondary font-sans font-semibold text-xs uppercase tracking-[0.2em]">Trusted Care. Nationwide.</span>
          </div>

          <h1 className="font-serif font-bold text-hero text-white leading-[1.04] mb-6">
            Age Fearlessly,
            <br />
            <span className="text-secondary-light">Live Happily.</span>
          </h1>

          <p className="text-white/75 text-[17px] leading-relaxed mb-10 max-w-[460px]">Crestwell Healthcare brings compassionate support work, domiciliary care, night care, and living care straight to your door so you can stay independent, safe, and comfortable in the home you love.</p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a href="/services" className="btn-secondary btn-lg shadow-teal">
              Explore Services →
            </a>
            <a href="/contact" className="btn-outline-light btn-lg">
              Book a Free Assessment
            </a>
          </div>

          {/* Trust row */}
          {/* <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/12">
            {[
              {n:'30+',  l:'Years of Care'},
              {n:'200+', l:'Happy Clients'},
              {n:'60+',  l:'Care Staff'},
              {n:'98%',  l:'Satisfaction'},
            ].map(s=>(
              <div key={s.l} className="text-center">
                <p className="font-serif font-bold text-secondary text-2xl leading-none">{s.n}</p>
                <p className="text-white/50 text-[11px] font-semibold uppercase tracking-wider mt-0.5">{s.l}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
