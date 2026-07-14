import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default:'Crestwell Healthcare | Home Care & Support Work in Seattle', template:'%s | Crestwell Healthcare' },
  description:'Crestwell Healthcare delivers trusted support work, domiciliary care, night care, and living care — right in the comfort of your own home.',
  openGraph: { title:'Crestwell Healthcare', description:'Compassionate Care. Reliable People. Better Outcomes.', type:'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
