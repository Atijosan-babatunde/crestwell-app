"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import RevealInit from "@/components/ui/RevealInit";

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Address",
    value: "121 NW 145th St, Seattle, WA 98177",
    href: "https://maps.google.com/?q=121+NW+145th+St+Seattle+WA+98177",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.23 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "Phone",
    value: "+1 (234) 567 89 00",
    href: "tel:+12345678900",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "Email",
    value: "info@crestwellhealthcare.com",
    href: "mailto:info@crestwellhealthcare.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "Office hours",
    value: "Mon–Fri: 8am–6pm · Sat–Sun: 9am–5pm",
    href: undefined,
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "general", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <RevealInit />
      <Header />
      <main>
        <PageHero eyebrow="Get in Touch" title="We'd Love to Hear From You." subtitle="Whether you have a question, want to schedule a visit, or are ready to take the next step — we're here." bgImage="https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edb8e7435c10022509922" />

        {/* Contact grid */}
        <section className="section-pad">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">
              {/* Form */}
              <div className="lg:col-span-3 reveal">
                <span className="eyebrow block text-left mb-1">Send a message</span>
                <h2 className="font-serif font-bold text-h2 text-dark mb-8">How Can We Help?</h2>

                {sent ? (
                  <div className="flex items-start gap-4 bg-secondary/10 border border-secondary/30 p-6 rounded" role="alert">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-secondary shrink-0 mt-0.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <div>
                      <strong className="block text-lg font-serif text-primary">Thank you, {form.name}!</strong>
                      <p className="text-secondary mt-1">We&rsquo;ve received your message and will be in touch within one business day.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-dark mb-1.5">
                          Full name *
                        </label>
                        <input id="name" name="name" type="text" required placeholder="Jane Smith" value={form.name} onChange={handleChange} className="form-input" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-1.5">
                          Phone number *
                        </label>
                        <input id="phone" name="phone" type="tel" required placeholder="+1 (234) 567 89 00" value={form.phone} onChange={handleChange} className="form-input" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-dark mb-1.5">
                        Email address *
                      </label>
                      <input id="email" name="email" type="email" required placeholder="jane@example.com" value={form.email} onChange={handleChange} className="form-input" />
                    </div>
                    <div>
                      <label htmlFor="interest" className="block text-sm font-semibold text-dark mb-1.5">
                        I&rsquo;m interested in…
                      </label>
                      <select id="interest" name="interest" value={form.interest} onChange={handleChange} className="form-input appearance-none cursor-pointer">
                        <option value="general">General enquiry</option>
                        <option value="support-work">Support Work</option>
                        <option value="domiciliary">Domiciliary & Home Care</option>
                        <option value="night-care">Night Care</option>
                        <option value="living-care">Living Care</option>
                        <option value="unregulated">Unregulated Support Service</option>
                        <option value="visit">Scheduling a free assessment</option>
                        <option value="careers">Careers</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-dark mb-1.5">
                        Message
                      </label>
                      <textarea id="message" name="message" rows={5} placeholder="Tell us a bit about your situation or what you'd like to know…" value={form.message} onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))} className="form-input resize-none" />
                    </div>
                    <button type="submit" className="btn-primary btn-lg self-start mt-1">
                      Send Message →
                    </button>
                  </form>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                {/* Contact info */}
                <div className="reveal bg-surface p-8">
                  <h3 className="font-serif text-xl font-bold text-dark mb-6">Contact Information</h3>
                  <div className="flex flex-col gap-5">
                    {contactInfo.map((c) => (
                      <div key={c.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center shrink-0 text-secondary">{c.icon}</div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-text/50 mb-0.5">{c.label}</p>
                          {c.href ? (
                            <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-[15px] text-dark hover:text-secondary transition-colors">
                              {c.value}
                            </a>
                          ) : (
                            <p className="text-[15px] text-dark">{c.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick links */}
                <div className="reveal bg-dark p-8">
                  <h3 className="font-serif text-xl font-bold text-white mb-5">Quick Actions</h3>
                  <div className="flex flex-col gap-3">
                    <a href="tel:+12345678900" className="flex items-center gap-3 py-3 px-4 bg-white/10 text-white hover:bg-secondary transition-colors duration-200 text-sm font-semibold">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.23 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      Call us now
                    </a>
                    <a href="/about" className="flex items-center gap-3 py-3 px-4 bg-white/10 text-white hover:bg-secondary transition-colors duration-200 text-sm font-semibold">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      Learn about CrestWell
                    </a>
                    <a href="/services" className="flex items-center gap-3 py-3 px-4 bg-white/10 text-white hover:bg-secondary transition-colors duration-200 text-sm font-semibold">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 shrink-0">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      Explore our services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="section-pad bg-surface" id="careers">
          <div className="container-site max-w-[720px] text-center reveal">
            <span className="eyebrow block mb-1">Careers</span>
            <h2 className="font-serif font-bold text-h2 text-dark mb-4">Join Our Team.</h2>
            <p className="text-base leading-relaxed text-text/80 mb-8">
              We&rsquo;re always looking for compassionate support workers and carers across support work, domiciliary care, night care, and living care. Send us your CV and we&rsquo;ll be in touch about current openings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:Recruitment@Crestwellhealthcare.co.uk?subject=Job%20Application" className="btn-secondary btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Your CV →
              </a>
              <a href="/team" className="text-primary font-semibold hover:text-secondary transition-colors text-sm">
                See current openings →
              </a>
            </div>
            <p className="mt-6 text-sm text-text/60">
              Or reach recruitment directly at{" "}
              <a href="mailto:Recruitment@Crestwellhealthcare.co.uk" className="text-primary font-semibold hover:text-secondary transition-colors">
                Recruitment@Crestwellhealthcare.co.uk
              </a>
            </p>
          </div>
        </section>

        {/* Map */}
        <section>
          <iframe
            title="CrestWell location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.5!2d-122.359966!3d47.7338859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490138fa8a92e91%3A0xef89e5b62e79d0f5!2s121%20NW%20145th%20St%2C%20Seattle%2C%20WA%2098177!5e0!3m2!1sen!2sus!4v1"
            className="w-full h-[420px] border-0 block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
