import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Oomkar Technical Services | Solar EPC, Odisha',
  description: 'End-to-end solar EPC solutions engineered for homes, businesses, and industry across Odisha.',
  keywords: ['solar EPC Odisha', 'rooftop solar Baripada', 'solar water pumping', 'Oomkar Technical Services'],
  openGraph: {
    title: 'Oomkar Technical Services | Powering progress. Responsibly.',
    description: 'Practical solar engineering for a brighter baseline.',
    type: 'website',
    locale: 'en_IN',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: '#f5f6f0' }, { media: '(prefers-color-scheme: dark)', color: '#102019' }],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="bg-background"><body className="antialiased">{children}</body></html>
}

