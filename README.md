# CrestWell — Next.js + Tailwind CSS

A fully responsive senior care website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route       | Description                                     |
| ----------- | ----------------------------------------------- |
| `/`         | Home — full landing page with all sections      |
| `/about`    | About Us — story, stats, values, certifications |
| `/services` | Services — all care programmes + extras         |
| `/team`     | Our Team — staff profiles + departments         |
| `/contact`  | Contact — full form, map, quick actions         |

## Project Structure

```
crestwell/
├── app/
│   ├── globals.css          ← Tailwind directives + design tokens
│   ├── layout.tsx           ← Root layout + metadata
│   ├── page.tsx             ← Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── team/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx       ← Sticky nav + mobile burger
│   │   └── Footer.tsx
│   ├── sections/            ← 13 reusable home sections
│   └── ui/
│       ├── PageHero.tsx     ← Shared page hero banner
│       └── RevealInit.tsx   ← Scroll-reveal observer
├── lib/
│   └── data.ts              ← ALL site content (edit here)
├── types/index.ts
├── tailwind.config.ts
└── postcss.config.mjs
```

## Customisation

- **Content** → edit `lib/data.ts`
- **Colors / fonts** → edit `tailwind.config.ts` and CSS variables in `globals.css`
- **Add pages** → create `app/[page]/page.tsx`
# crestwell-app
