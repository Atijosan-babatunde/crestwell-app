import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealInit from "@/components/ui/RevealInit";
import CTABanner from "@/components/sections/CTABanner";
import { ABOUT_PHOTOS, ABOUT_CHECKLIST, SERVICES } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Crestwell Healthcare — trusted support work, domiciliary care, night care, and living care across Seattle for over 30 years.",
};

export default function AboutPage() {
  return (
    <>
      <RevealInit />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full py-28 md:py-36 flex flex-col items-center justify-center text-center bg-primary overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-secondary z-10" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full border-[2px] border-secondary/8" />
          <div className="relative z-10">
            <span className="font-script text-secondary block mb-2" style={{ fontSize: "clamp(20px,2vw,26px)" }}>
              Our Story
            </span>
            <h1 className="font-serif font-bold text-white" style={{ fontSize: "clamp(44px,7vw,80px)", lineHeight: 1.1 }}>
              About Crestwell
            </h1>
            <div className="w-12 h-[3px] bg-secondary mx-auto mt-5" />
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20">
          <div className="container-site max-w-[1040px]">
            <div className="flex flex-col gap-5 text-[16.5px] text-text/80 leading-relaxed reveal">
              <p>Many of us worry about growing older or caring for a loved one — not just because everyday tasks get harder, but because of the loneliness that can come with losing independence, especially when family live far away or can't always be there.</p>
              <p>Moving isn't always the answer. Most people simply want to stay in the home they know, surrounded by their own things, on their own street. That's exactly what Crestwell Healthcare is built for. We're a home care and support work provider serving Seattle and the surrounding suburbs, bringing trained, compassionate carers straight to your door.</p>
            </div>
          </div>
        </section>

        {/* 3-column photo grid */}
        <section className="pb-16 md:pb-20">
          <div className="container-site max-w-[1040px]">
            <div className="grid grid-cols-3 gap-1 reveal">
              {ABOUT_PHOTOS.map((p) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={p.alt} src={p.src} alt={p.alt} className="w-full h-[220px] md:h-[280px] object-cover" />
              ))}
            </div>
          </div>
        </section>

        {/* 2-col image + text */}
        <section className="pb-16 md:pb-20">
          <div className="container-site max-w-[1040px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start reveal">
              <div className="border-4 border-secondary/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edafb4abce70021a3e44a_optimized_1234_c1234x1052-0x0" alt="Carer supporting a client at home" className="w-full h-[400px] object-cover object-top" />
              </div>
              <div className="flex flex-col gap-5 text-[15.5px] text-text/80 leading-relaxed">
                <p>Every care plan starts with an assessment of your home and your routine, so support fits around the life you already have — not the other way around. If mobility is a concern, our carers are trained to help safely with transfers, positioning, and getting around the house.</p>
                <p>Our support workers can help with meal preparation too, so clients eat well throughout the week, with menus that take dietary needs and personal tastes into account.</p>
                <p>But the real advantage of home care is simple: you stay where you're comfortable. Choosing Crestwell Healthcare brings peace of mind to clients and their families alike, wherever home happens to be.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="pb-12 md:pb-16">
          <div className="container-site max-w-[1040px]">
            <div className="flex flex-col gap-5 text-[16.5px] text-text/80 leading-relaxed reveal">
              <p>Many clients tell us that without company, one day can start to feel much like the last — shopping, watching TV, cooking, sleeping. That's why our support work goes beyond the practical: our carers make time for conversation, hobbies, and getting out of the house.</p>
              <p>Whether it's a game of chess, a trip to the library, help getting to a social club, or simply company over a favorite film, our support workers build real relationships with the people they care for — alongside the medication prompts, personal care, and daily routines they're there to help with.</p>
            </div>
          </div>
        </section>

        {/* Video thumbnail */}
        {/* <section className="pb-16 md:pb-20">
          <div className="container-site max-w-[1040px] reveal">
            <div className="relative cursor-pointer group">
              <img src="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edaa37d55900022f98939"
                   alt="Clients enjoying time with their carer" className="w-full h-[440px] object-cover"/>
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/15 transition-colors duration-300 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-teal group-hover:scale-110 transition-transform duration-200">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 ml-1" fill="#1e3a6e"><path d="M8 5.14v14l11-7-11-7z"/></svg>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"/>
            </div>
          </div>
        </section> */}

        {/* Checklist */}
        <section className="pb-16 md:pb-20 bg-surface py-16">
          <div className="container-site max-w-[1040px]">
            <div className="text-center mb-10 reveal">
              <span className="eyebrow">What we offer</span>
              <h2 className="font-serif font-bold text-dark mt-1" style={{ fontSize: "clamp(26px,3vw,38px)" }}>
                Everything You Need, Already Here.
              </h2>
              <div className="w-12 h-[3px] bg-secondary mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 reveal">
              {ABOUT_CHECKLIST.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[14.5px] text-text/80">
                  <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services grid */}

        {/* Closing paragraph */}
        <section className="pb-20 md:pb-24">
          <div className="container-site max-w-[1040px]">
            <p className="text-[16.5px] text-text/80 leading-relaxed reveal">
              Families are always kept in the loop between visits, with regular updates on how care is going. Clients who need closer support can arrange medication monitoring or night care on top of their regular visits, and can request extra help at any time. We know every client by name and work hard to make each visit feel personal. Crestwell Healthcare is here to help you meet each day with
              dignity, wherever you call home.
            </p>
          </div>
        </section>

        {/* <CTABanner bgImage="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edb323f096400210b02f2" title="See the Crestwell Difference." subtitle="Book a free home assessment and let our team show you how care can work for you. No pressure, just a warm welcome." btnLabel="Book an Assessment" btnHref="/contact" /> */}
      </main>
      <Footer />
    </>
  );
}
