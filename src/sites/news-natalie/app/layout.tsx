import '@shared/styles/globals.css'
import type { Metadata } from 'next'
import RootLayout from '@shared/layouts/RootLayout'

export const metadata: Metadata = {
  title: 'War Room News - NatalieGWinters.com',
  description: 'Latest War Room videos and news coverage',
  metadataBase: new URL('https://news.nataliegwinters.com'),
  openGraph: {
    title: 'War Room News - NatalieGWinters.com',
    description: 'Latest War Room videos and news coverage',
    url: 'https://news.nataliegwinters.com',
    siteName: 'NatalieGWinters News',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'War Room News - NatalieGWinters.com',
    description: 'Latest War Room videos and news coverage',
    creator: '@nataliegwinters',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://news.nataliegwinters.com'
  },
}

export default function NewsLayout({
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