import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#1e3a6e',   // deep navy  (dominant in logo)
        secondary: '#2ab5a5',   // teal/mint   (accent in logo)
        'primary-dark': '#122548',
        'primary-light':'#2a4f8f',
        'secondary-dark':'#1e9080',
        'secondary-light':'#4ecdc0',
        surface:   '#f0f5fb',   // cool off-white
        dark:      '#0d1f3c',
        muted:     '#6b7fa3',
        text:      '#3d4f6b',
        footer:    '#0d1f3c',
      },
      fontFamily: {
        serif:  ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:   ['var(--font-opensans)', 'system-ui', 'sans-serif'],
        script: ['var(--font-cookie)', 'cursive'],
      },
      fontSize: {
        hero:  ['clamp(48px,8vw,90px)',  {lineHeight:'1.05', fontWeight:'700'}],
        title: ['clamp(30px,4vw,54px)',  {lineHeight:'1.1',  fontWeight:'700'}],
        h2:    ['clamp(24px,3vw,42px)',  {lineHeight:'1.12', fontWeight:'700'}],
      },
      backgroundImage: {
        'hero-img':          "url('https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edc697435c10022509a68')",
        'cta1-img':          "url('https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edb8e7435c10022509922')",
        'cta2-img':          "url('https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edb323f096400210b02f2')",
        'testimonials-img':  "url('https://res2.weblium.site/res/5ffebd7bf672830021d842f0/600edaa37d55900022f98939')",
        'gradient-brand':    'linear-gradient(135deg,#1e3a6e 0%,#2ab5a5 100%)',
        'gradient-hero':     'linear-gradient(105deg,#0d1f3c 0%,#1e3a6e 50%,rgba(30,58,110,0.4) 100%)',
      },
      maxWidth: { container: '1200px' },
      boxShadow: {
        card:        '0 2px 20px rgba(30,58,110,0.08)',
        'card-hover':'0 12px 40px rgba(30,58,110,0.16)',
        header:      '0 2px 24px rgba(13,31,60,0.12)',
        teal:        '0 4px 24px rgba(42,181,165,0.3)',
        navy:        '0 4px 24px rgba(30,58,110,0.35)',
      },
    },
  },
  plugins: [],
}
export default config
