import '@shared/styles/globals.css'
import type { Metadata } from 'next'
import RootLayout from '@shared/layouts/RootLayout'

export const metadata: Metadata = {
  title: 'NatalieGWinters.com',
  description: 'Welcome to NatalieGWinters.com - Your source for business and news.',
  metadataBase: new URL('https://nataliegwinters.com'),
  openGraph: {
    title: 'NatalieGWinters.com',
    description: 'Welcome to NatalieGWinters.com - Your source for business and news.',
    url: 'https://nataliegwinters.com',
    siteName: 'NatalieGWinters',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NatalieGWinters.com',
    description: 'Welcome to NatalieGWinters.com - Your source for business and news.',
    creator: '@nataliegwinters',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://nataliegwinters.com'
  },
}

export default function MainLayout({
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