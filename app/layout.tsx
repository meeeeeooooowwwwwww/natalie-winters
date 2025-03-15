import './globals.css'
import type { Metadata } from 'next'
import RootLayout from '@shared/layouts/RootLayout'

export const metadata: Metadata = {
  title: 'Business Directory - NatalieGWinters.com',
  description: 'Find and explore businesses in our comprehensive directory.',
  metadataBase: new URL('https://business.nataliegwinters.com'),
  openGraph: {
    title: 'Business Directory - NatalieGWinters.com',
    description: 'Find and explore businesses in our comprehensive directory.',
    url: 'https://business.nataliegwinters.com',
    siteName: 'NatalieGWinters Business Directory',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Directory - NatalieGWinters.com',
    description: 'Find and explore businesses in our comprehensive directory.',
    creator: '@nataliegwinters',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://business.nataliegwinters.com'
  },
}

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout
      metadata={metadata}
      analytics={{ googleAnalyticsId: 'G-RPYVDP2KGZ' }}
    >
      {children}
    </RootLayout>
  )
} 