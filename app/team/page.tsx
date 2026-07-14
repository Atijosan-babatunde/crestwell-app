import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import RevealInit from "@/components/ui/RevealInit";
import CTABanner from "@/components/sections/CTABanner";
import { TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the dedicated support workers, carers, and care coordinators at CrestWell who make exceptional home care possible every single day.",
};

const departments = [
  {
    name: "Care Management",
    description: "Our care coordinators assess every client's needs and build a care plan around their routine and preferences.",
    members: ["Sarah Whitmore – Head of Care Management", "James Holt – Care Coordinator", "Priya Mehta – Care Plan Reviewer"],
  },
  {
    name: "Support Workers & Carers",
    description: "Our largest team — delivering domiciliary care, personal care, and support work in clients' own homes every day.",
    members: ["Alice Shimmer – Lead Care Coordinator", "Ann Kessner – Domiciliary Care Assistant", "Marcus Lee – Senior Support Worker", "Bella Torres – Personal Care Assistant"],
  },
  {
    name: "Night Care Team",
    description: "Waking and sleeping night carers who provide overnight support and reassurance whenever it's needed.",
    members: ["Trisha Anderson – Senior Support Worker", "Owen Carter – Night Care Supervisor", "Nadia Bloom – Night Support Worker"],
  },
  {
    name: "Recruitment, Training & Compliance",
    description: "The team behind every hire — vetting, DBS checks, and ongoing training that keep our care standards high.",
    members: ["Laura Kim – Recruitment Lead", "James Field – Training Coordinator", "Sophie Grant – Compliance Officer"],
  },
];

export default function TeamPage() {
  return (
    <>
      <RevealInit />
      <Header />
      <main>
        <PageHero eyebrow="Our Team" title="The People Behind Every Smile." subtitle="Compassionate professionals who treat every client like a member of their own family." bgImage="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edaa37d55900022f98939" />

        {/* Featured team */}
        <section className="section-pad">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-14 reveal">
              <span className="eyebrow">Core caregivers</span>
              <h2 className="font-serif font-bold text-title text-dark mt-1">Skilled. Caring. Here for You.</h2>
              <p className="mt-4 text-lg">We only employ support workers and carers with extensive experience helping people live independently at home.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
              {TEAM.map((m) => (
                <article key={m.name} className="flex flex-col reveal group">
                  <div className="overflow-hidden mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.image} alt={m.name} className="w-full aspect-square object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-dark">{m.name}</h3>
                  <div className="flex items-center gap-2.5 text-[13px] text-neutral-400 mt-1.5 mb-3">
                    <span>{m.role}</span>
                    <span className="w-px h-3.5 bg-neutral-300" />
                    <span>{m.experience} of experience</span>
                  </div>
                  <p className="text-[15px] leading-relaxed">{m.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="section-pad bg-surface">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-14 reveal">
              <span className="eyebrow">How we're organised</span>
              <h2 className="font-serif font-bold text-title text-dark mt-1">Our Departments.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
              {departments.map((d) => (
                <div key={d.name} className="reveal bg-white p-9 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-1 h-8 bg-secondary" aria-hidden="true" />
                    <h3 className="font-serif text-2xl font-bold text-dark">{d.name}</h3>
                  </div>
                  <p className="text-[15px] mb-5 leading-relaxed">{d.description}</p>
                  <ul className="flex flex-col gap-2">
                    {d.members.map((mem) => (
                      <li key={mem} className="flex items-center gap-2.5 text-sm text-text/80">
                        <svg className="w-4 h-4 text-secondary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {mem}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join us */}
        <section className="section-pad">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <span className="eyebrow block" style={{ color: "#dca593" }}>
                  Careers at CrestWell
                </span>
                <h2 className="font-serif font-bold text-h2 text-dark mt-1 mb-5">Join Our Team.</h2>
                <p className="text-base leading-relaxed mb-4">We are always looking for compassionate, skilled individuals who share our commitment to exceptional home care. At CrestWell you'll work in a supportive environment with ongoing training, competitive benefits, and a real sense of purpose every day.</p>
                <p className="text-base leading-relaxed mb-7">Current openings include positions in support work, domiciliary care, night care, and care coordination.</p>
                <a href="/contact" className="btn-primary inline-flex">
                  View Open Positions →
                </a>
              </div>
              <div className="reveal bg-surface p-10 shadow-card">
                <h3 className="font-serif text-2xl font-bold text-dark mb-6">Why work with us?</h3>
                <ul className="flex flex-col gap-4">
                  {["Competitive salary and comprehensive benefits", "Ongoing professional development and certifications", "Supportive, team-first culture", "Meaningful work with real impact every day", "Flexible shift patterns to suit your lifestyle", "Staff recognition and wellness programmes"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px]">
                      <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTABanner bgImage="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edb8e7435c10022509922" title="Meet the Team." subtitle="Get in touch and we'll introduce you to the carers who could be supporting you. We'd love to say hello." btnLabel="Get in Touch" btnHref="/contact" />
      </main>
      <Footer />
    </>
  );
}
