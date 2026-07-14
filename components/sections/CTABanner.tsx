interface Props { bgImage:string; title:string; subtitle:string; btnLabel:string; btnHref:string }
export default function CTABanner({bgImage,title,subtitle,btnLabel,btnHref}:Props) {
  return (
    <section className="relative section-pad bg-no-repeat bg-cover bg-fixed bg-center overflow-hidden"
             style={{backgroundImage:`url('${bgImage}')`}}>
      <div className="absolute inset-0 bg-primary/85 z-10"/>
      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary z-20"/>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-secondary z-20"/>
      <div className="container-site relative z-20 flex flex-col items-center text-center max-w-3xl mx-auto reveal">
        <div className="divider-center mb-6"/>
        <h2 className="font-serif font-bold text-white leading-tight mb-5" style={{fontSize:'clamp(32px,5vw,66px)'}}>{title}</h2>
        <p className="mb-10 text-[16px] text-white/75 max-w-xl">{subtitle}</p>
        <a href={btnHref} className="btn-secondary btn-lg shadow-teal">{btnLabel} →</a>
      </div>
    </section>
  )
}
