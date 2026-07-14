import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CTABanner from "@/components/sections/CTABanner";
import WhyUs from "@/components/sections/WhyUs";
import Steps from "@/components/sections/Steps";
import Team from "@/components/sections/Team";
import ExpertCare from "@/components/sections/ExpertCare";
import Testimonials from "@/components/sections/Testimonials";
import FAQContact from "@/components/sections/FAQContact";
// import Contacts from "@/components/sections/Contacts";
import RevealInit from "@/components/ui/RevealInit";

export default function HomePage() {
  return (
    <>
      <RevealInit />
      <Header />
      <main>
        <Hero />
        {/* <Features /> */}
        <About />
        {/* <Services /> */}
        <CTABanner bgImage="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edb8e7435c10022509922" title="Reliable Care, Right at Home." subtitle="Looking for support at home? Crestwell can provide the full range of care and support services, delivered where you live." btnLabel="Contact Us" btnHref="#contacts" />
        <WhyUs />
        <Steps />
        {/* <CTABanner bgImage="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edb323f096400210b02f2" title="Care for Couples, at Home." subtitle="We offer flexible support for couples who want to keep their usual freedom, with all our services and care backing them up." btnLabel="Learn More" btnHref="#faq" /> */}
        {/* <Team /> */}
        {/* <ExpertCare /> */}
        <Testimonials />
        <FAQContact />
        {/* <Contacts /> */}
      </main>
      <Footer />
    </>
  );
}
