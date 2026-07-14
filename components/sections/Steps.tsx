const steps = [
  {num:'01', title:'Contact Us',           body:'Send us a request, call us, or fill out the form on our website to learn more about our services.'},
  {num:'02', title:'Free Home Assessment', body:'A care coordinator visits you at home to understand your needs and put together a care plan that fits.'},
  {num:'03', title:'Care Begins',          body:'We match you with the right carers and start visits on the schedule you choose — no long lock-in contracts.'},
]
export default function Steps() {
  return (
    <section className="section-pad" id="steps">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/6006eaf84ba2c50021985c7d_optimized_1052"
                 alt="Ageing gracefully" className="w-full max-h-[480px] object-contain"/>
          </div>
          <div className="reveal">
            <span className="eyebrow block">Getting started</span>
            <h2 className="font-serif font-bold text-h2 text-dark mt-1 mb-2">3 Steps to Start Your Care.</h2>
            <div className="divider mb-10"/>
            <div className="flex flex-col gap-0">
              {steps.map((s,i)=>(
                <div key={s.num} className="flex items-stretch gap-5">
                  {/* Number + connector */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-14 h-14 bg-secondary flex items-center justify-center font-sans font-bold text-[18px] text-white shadow-teal">
                      {s.num}
                    </div>
                    {i < steps.length-1 && <div className="w-[2px] flex-1 bg-secondary/20 my-1"/>}
                  </div>
                  <div className={`pb-8 ${i===steps.length-1?'':'pb-10'}`}>
                    <h3 className="font-serif text-[21px] font-bold text-dark mb-2 leading-snug pt-3">{s.title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-text/80">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
