"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-header" : ""}`}>
      {/* ── Topbar ── */}
      <div className="bg-primary-dark hidden md:block">
        <div className="container-site flex justify-between items-center py-2 text-[12.5px]">
          <div className="flex items-center gap-5">
            {/* <a href="tel:+12345678900" className="flex items-center gap-1.5 text-white/60 hover:text-secondary transition-colors font-medium">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.23 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +1 (234) 567 89 00
            </a> */}
            <a href="mailto:info@crestwellhealthcare.com" className="flex items-center gap-1.5 text-white/60 hover:text-secondary transition-colors font-medium">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Admin@crestwellhealthcare.co.uk
            </a>
          </div>
          <p className="text-white/35 tracking-widest text-[11px] uppercase font-semibold hidden lg:block">Compassionate Care &nbsp;·&nbsp; Reliable People &nbsp;·&nbsp; Better Outcomes</p>
        </div>
      </div>

      {/* ── Main bar ── */}
      <div className="border-b border-primary/[0.08]">
        <div className="container-site flex items-center gap-6 py-3.5">
          <Logo size="md" />

          <nav className="hidden lg:flex items-center gap-6 ml-auto">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-[13.5px] font-semibold text-dark/75 hover:text-primary transition-colors relative group whitespace-nowrap uppercase tracking-wide">
                {l.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Social icons — rounded */}
          {/* <div className="hidden md:flex items-center gap-1.5">
            {[
              { h:'https://facebook.com/', a:'Facebook',
                i:<svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
              { h:'https://instagram.com/', a:'Instagram',
                i:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg> },
              { h:'https://linkedin.com/', a:'LinkedIn',
                i:<svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
            ].map(s => (
              <a key={s.a} href={s.h} target="_blank" rel="noopener noreferrer" aria-label={s.a}
                 className="w-8 h-8 rounded-full border border-primary/15 flex items-center justify-center text-primary/40 hover:border-secondary hover:bg-secondary hover:text-white transition-all duration-200">
                {s.i}
              </a>
            ))}
          </div> */}

          {/* CTA */}
          <Link href="/contact" className="hidden lg:inline-flex btn-secondary text-[12px] px-5 py-2.5 shrink-0">
            Get Started →
          </Link>

          {/* Burger */}
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu" className="lg:hidden flex flex-col gap-1.5 p-1 ml-auto">
            <span className={`block w-6 h-[2px] bg-primary transition-transform duration-300 origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-6 h-[2px] bg-primary transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[2px] bg-primary transition-transform duration-300 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile nav ── */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-[500px]" : "max-h-0"}`}>
        <nav className="flex flex-col border-t border-primary/[0.07]">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="px-6 py-3.5 text-[14px] font-semibold uppercase tracking-wide text-dark hover:text-primary hover:bg-surface border-b border-primary/[0.06] transition-colors">
              {l.label}
            </Link>
          ))}
          <div className="px-6 py-4 bg-surface">
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center py-3 text-[13px]">
              Get Started →
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
