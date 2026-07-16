"use client";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer>
      {/* ── CTA band ── */}
      <div className="bg-gradient-brand py-14">
        <div className="container-site flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-serif font-bold text-white text-[clamp(22px,3vw,32px)] leading-snug">Ready to Experience the Crestwell Difference?</p>
            <p className="text-white/70 mt-1 text-sm">Trusted by families across the country.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/contact" className="btn-outline-light text-[13px] px-6 py-3">
              Schedule a Free Visit →
            </Link>
            <a href="tel:+441274442136" className="inline-flex items-center gap-2 bg-white text-primary font-bold text-[13px] uppercase tracking-wide px-6 py-3 hover:bg-surface transition-colors">
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="bg-footer">
        <div className="container-site py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <Logo variant="light" size="md" />
              <p className="text-sm text-white/45 leading-relaxed mt-4 mb-5 max-w-[260px]">A trusted provider of support work and domiciliary care, dedicated to compassionate care in the comfort of home.</p>
              <div className="flex gap-2">
                {[
                  {
                    h: "https://www.facebook.com/share/197crmYJKK/?mibextid=wwXIfr",
                    a: "Facebook",
                    i: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    ),
                  },
                  {
                    h: "https://www.instagram.com/crestwellhealthcare?igsh=c3lldGxzN2RjaXAw&utm_source=qr",
                    a: "Instagram",
                    i: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                      </svg>
                    ),
                  },
                  // {
                  //   h: "https://linkedin.com/",
                  //   a: "LinkedIn",
                  //   i: (
                  //     <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                  //       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  //       <circle cx="4" cy="4" r="2" />
                  //     </svg>
                  //   ),
                  // },
                ].map((s) => (
                  <a key={s.a} href={s.h} target="_blank" rel="noopener noreferrer" aria-label={s.a} className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-200">
                    {s.i}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 1 */}
            <nav>
              <h4 className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-secondary mb-5">Company</h4>
              <ul className="flex flex-col gap-3">
                {[
                  ["About Us", "/about"],
                  ["Our Services", "/services"],
                  ["Our Team", "/team"],
                  ["Testimonials", "/#testimonials"],
                  ["FAQ", "/#faq"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <Link href={h} className="text-[13.5px] text-white/50 hover:text-secondary transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-secondary/30 group-hover:bg-secondary transition-colors shrink-0" />
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Col 2 */}
            <nav>
              <h4 className="text-[10.5px] font-bold uppercase tracking-[0.15em] text-secondary mb-5">Services</h4>
              <ul className="flex flex-col gap-3">
                {[
                  ["Support Work", "/services"],
                  ["Domiciliary & Home Care", "/services"],
                  ["Night Care", "/services"],
                  ["Living Care", "/services"],
                  ["Unregulated Support", "/services"],
                ].map(([l, h]) => (
                  <li key={l}>
                    <Link href={h} className="text-[13.5px] text-white/50 hover:text-secondary transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-secondary/30 group-hover:bg-secondary transition-colors shrink-0" />
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.06] py-4">
          <div className="container-site flex flex-col sm:flex-row justify-between gap-2 items-center">
            <p className="text-[12px] text-white/25">© {yr} Crestwell Healthcare. All rights reserved.</p>
            <p className="text-[12px] text-white/25 italic">Compassionate Care. Reliable People. Better Outcomes.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
