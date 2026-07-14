interface Props { eyebrow?:string; title:string; subtitle?:string; bgImage?:string }
export default function PageHero({eyebrow,title,subtitle,bgImage}:Props) {
  return (
    <section className="relative py-28 md:py-36 bg-primary overflow-hidden"
             style={bgImage?{backgroundImage:`url('${bgImage}')`,backgroundSize:'cover',backgroundPosition:'center'}:{}}>
      {bgImage && <div className="absolute inset-0 bg-primary/85 z-10"/>}
      <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary z-20"/>
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-secondary z-20"/>
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-[2px] border-secondary/8 z-10"/>
      <div className="absolute -bottom-10 right-32 w-48 h-48 rounded-full border-[2px] border-secondary/6 z-10"/>
      <div className="container-site relative z-20 text-center max-w-3xl mx-auto">
        {eyebrow && <span className="font-script text-secondary block mb-3" style={{fontSize:'clamp(20px,2vw,26px)'}}>{eyebrow}</span>}
        <h1 className="font-serif font-bold text-white leading-[1.08]" style={{fontSize:'clamp(36px,5vw,64px)'}}>{title}</h1>
        <div className="w-12 h-[3px] bg-secondary mx-auto mt-5"/>
        {subtitle && <p className="mt-5 text-[16px] text-white/70 max-w-xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
