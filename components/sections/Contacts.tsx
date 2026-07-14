export default function Contacts() {
  return (
    <section className="flex flex-col md:flex-row min-h-[500px]">
      <div className="flex-1 min-h-[400px]">
        <iframe title="Crestwell Healthcare location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2682.5!2d-122.359966!3d47.7338859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490138fa8a92e91%3A0xef89e5b62e79d0f5!2s121%20NW%20145th%20St%2C%20Seattle%2C%20WA%2098177!5e0!3m2!1sen!2sus!4v1"
          className="w-full h-full min-h-[400px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
      </div>
      <div className="flex-none md:w-[380px] bg-dark border-t-4 md:border-t-0 md:border-l-4 border-secondary px-[clamp(28px,5vw,52px)] py-[clamp(48px,6vw,72px)] flex flex-col justify-center z-10">
        <span className="font-script text-secondary block mb-2" style={{fontSize:'clamp(20px,2vw,26px)'}}>Stay In Touch</span>
        <h2 className="font-serif font-bold text-white mb-6" style={{fontSize:'clamp(34px,3.8vw,50px)'}}>Contacts.</h2>
        <address className="not-italic flex flex-col gap-4">
          {[
            {icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>, text:'121 NW 145th St, Seattle, WA 98177', href:'https://maps.google.com/'},
            {icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.23 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, text:'+1 (234) 567 89 00', href:'tel:+12345678900'},
            {icon:<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5 shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>, text:'info@crestwellhealthcare.com', href:'mailto:info@crestwellhealthcare.com'},
          ].map(c=>(
            <a key={c.text} href={c.href} className="flex items-start gap-3.5 text-white/65 hover:text-secondary transition-colors text-[14.5px]">
              <span className="text-secondary mt-0.5" style={{width:'18px',height:'18px'}}>{c.icon}</span>{c.text}
            </a>
          ))}
        </address>
        <a href="/contact" className="btn-secondary mt-8 self-start">Get in Touch →</a>
      </div>
    </section>
  )
}
