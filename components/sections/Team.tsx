import { TEAM } from '@/lib/data'

export default function Team() {
  return (
    <section className="section-pad bg-surface" id="team">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="eyebrow">Our Team</span>
          <h2 className="font-serif font-bold text-title text-dark mt-1">Skilled Caregivers.</h2>
          <div className="divider-center mt-4"/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TEAM.map(m=>(
            <article key={m.name} className="flex flex-col bg-white shadow-card hover:shadow-card-hover transition-all duration-300 reveal group overflow-hidden">
              <div className="overflow-hidden relative h-[280px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"/>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-[22px] font-bold text-dark">{m.name}</h3>
                <p className="text-secondary text-sm font-semibold mt-0.5">{m.role}</p>
                <div className="w-8 h-[2px] bg-secondary/40 my-3"/>
                <p className="text-[13.5px] leading-relaxed text-text/75 flex-1">{m.bio}</p>
                <p className="text-[12px] text-muted mt-3 font-semibold uppercase tracking-wide">{m.experience} of experience</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
