import Link from 'next/link'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  showTagline?: boolean
}

export default function Logo({ variant = 'dark', size = 'md', href = '/', showTagline = false }: LogoProps) {
  const navy  = variant === 'light' ? '#ffffff' : '#1e3a6e'
  const teal  = variant === 'light' ? '#4ecdc0' : '#2ab5a5'
  const sub   = variant === 'light' ? 'rgba(255,255,255,0.5)' : teal
  const w     = size === 'sm' ? 38 : size === 'lg' ? 64 : 50
  const tMain = size === 'sm' ? '17px' : size === 'lg' ? '28px' : '21px'
  const tSub  = size === 'sm' ? '9px'  : size === 'lg' ? '13px' : '10.5px'

  return (
    <Link href={href} className="inline-flex items-center gap-3 shrink-0 group">
      {/* ── SVG icon — faithful recreation of the uploaded logo ── */}
      <svg width={w} height={w} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Outer C-arc (navy, thick, open top-right) */}
        <path
          d="M100 18 A54 54 0 1 0 100 102"
          stroke={navy} strokeWidth="9" strokeLinecap="round" fill="none"
        />
        {/* Hand / palm (navy silhouette) */}
        <path
          d="M30 80 Q36 95 60 95 Q84 95 90 80 Q96 90 95 98 Q80 108 60 108 Q40 108 25 98 Q24 90 30 80Z"
          fill={navy} opacity="0.18"
        />
        <path
          d="M26 76 Q30 90 60 93 Q90 90 94 76"
          stroke={navy} strokeWidth="5" strokeLinecap="round" fill="none"
        />
        {/* Heart shape (teal) */}
        <path
          d="M60 88 Q35 70 35 50 A18 18 0 0 1 60 36 A18 18 0 0 1 85 50 Q85 70 60 88Z"
          fill={teal} opacity="0.9"
        />
        {/* House roof above heart */}
        <path d="M50 48 L60 36 L70 48" stroke={navy} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Window on house */}
        <rect x="55.5" y="37" width="9" height="8" rx="1" fill={navy} opacity="0.55"/>
        <line x1="60" y1="37" x2="60" y2="45" stroke={teal} strokeWidth="1"/>
        <line x1="55.5" y1="41" x2="64.5" y2="41" stroke={teal} strokeWidth="1"/>
        {/* Elderly person with cane — navy, right side */}
        <circle cx="70" cy="51" r="5.5" fill={navy}/>
        <path d="M66 57 Q68 68 70 72" stroke={navy} strokeWidth="4.5" strokeLinecap="round" fill="none"/>
        <path d="M70 72 L75 80" stroke={navy} strokeWidth="3" strokeLinecap="round"/>
        {/* Caregiver / helper — teal, left side, arms raised joyfully */}
        <circle cx="50" cy="52" r="5" fill="white"/>
        <path d="M44 60 Q47 56 50 58 Q53 56 56 60" stroke="white" strokeWidth="3.5" strokeLinecap="round" fill="none"/>
        <path d="M44 58 L40 54" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <path d="M56 58 L60 54" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>

      {/* ── Text block ── */}
      <div className="leading-tight">
        <div style={{ fontFamily:'var(--font-cormorant), Georgia, serif', fontWeight:700, fontSize:tMain, color:navy, letterSpacing:'-0.01em', lineHeight:1 }}>
          Crest<span style={{ color:teal }}>Well</span>
        </div>
        <div style={{ fontFamily:'var(--font-opensans),system-ui,sans-serif', fontWeight:700, fontSize:tSub, color:sub, letterSpacing:'0.2em', textTransform:'uppercase', marginTop:'3px', lineHeight:1 }}>
          Healthcare
        </div>
        {showTagline && (
          <div style={{ fontFamily:'var(--font-opensans)', fontSize:'9px', color:variant==='light'?'rgba(255,255,255,0.4)':teal, letterSpacing:'0.12em', textTransform:'uppercase', marginTop:'4px' }}>
            Compassionate Care
          </div>
        )}
      </div>
    </Link>
  )
}
