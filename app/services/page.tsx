import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import RevealInit from "@/components/ui/RevealInit";
import { SERVICES } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore CrestWell's home care services — support work, domiciliary & home care, night care, living care, and unregulated support service.",
};

export default function ServicesPage() {
  return (
    <>
      <RevealInit />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full py-28 md:py-36 flex flex-col items-center justify-center text-center bg-primary overflow-hidden">
          <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-secondary z-10" />
          <div className="relative z-10">
            <span className="font-script text-secondary block mb-2" style={{ fontSize: "clamp(20px,2vw,26px)" }}>
              What We Offer
            </span>
            <h1 className="font-serif font-bold text-white" style={{ fontSize: "clamp(44px,7vw,80px)", lineHeight: 1.1 }}>
              Our Services
            </h1>
            <div className="w-12 h-[3px] bg-secondary mx-auto mt-5" />
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20">
          <div className="container-site max-w-[1040px]">
            <div className="flex flex-col gap-5 text-[17px] text-text leading-relaxed reveal">
              <p>At Crestwell, we offer a full range of care and support services, delivered wherever you call home. Whether you need a few hours of company each week, hands-on personal care, overnight support, or someone living in full-time, we have the right option for you.</p>
              <p>Every service is delivered by qualified, DBS-checked, compassionate carers matched to your needs. We believe everyone deserves a life full of dignity, comfort, and independence — and our services are built around exactly that.</p>
            </div>
          </div>
        </section>

        {/* Services grid — image top, serif title, body, Learn More → */}
        <section className="pb-20 md:pb-24">
          <div className="container-site max-w-[1040px]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {SERVICES.map((s) => (
                <article key={s.title} className="flex flex-col reveal">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt={s.title} className="w-full h-[220px] object-cover mb-5" />
                  <h3 className="font-serif font-bold text-dark mb-3" style={{ fontSize: "clamp(20px,2.5vw,28px)", lineHeight: 1.15 }}>
                    {s.title}
                  </h3>
                  <p className="text-[15px] text-text leading-relaxed flex-1 mb-5">{s.body}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-[15px] font-bold text-primary hover:text-secondary transition-colors duration-200 group">
                    Learn More
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Closing paragraph */}
        <section className="pb-20 md:pb-24 bg-surface">
          <div className="container-site max-w-[1040px] py-16">
            <p className="text-[17px] text-text leading-relaxed reveal">
              Families are kept in the loop between visits, with regular updates on how care is going. Clients who need closer support can add medication monitoring or night care on top of their regular visits, and can request extra help at any time. We know every client by name and work hard to make each visit feel personal — that&rsquo;s what makes Crestwell a great partner for meeting each day with dignity, at home.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
