import './globals.css?v=5'
import type { Metadata } from 'next'
import CookieConsent from './components/CookieConsent'

export const metadata: Metadata = {
  title: 'BADDIE BADDIE BADDIE IMMA LIL BADDIE',
  description: 'BADDIE BADDIE BADDIE IMMA LIL BADDIE',
  metadataBase: new URL('https://business.nataliegwinters.com'),
  openGraph: {
    title: 'BADDIE BADDIE BADDIE IMMA LIL BADDIE',
    description: 'BADDIE BADDIE BADDIE IMMA LIL BADDIE',
    url: 'https://business.nataliegwinters.com',
    siteName: 'BADDIE BADDIE BADDIE',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BADDIE BADDIE BADDIE IMMA LIL BADDIE'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BADDIE BADDIE BADDIE IMMA LIL BADDIE',
    description: 'BADDIE BADDIE BADDIE IMMA LIL BADDIE',
    creator: '@nataliegwinters',
    images: ['/og-image.jpg']
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/icon.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      url: '/apple-icon.png',
      sizes: '180x180',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://business.nataliegwinters.com'
  },
  verification: {
    google: 'google-site-verification=BADDIE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RPYVDP2KGZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RPYVDP2KGZ');
            `
          }}
        />
      </head>
      <body className="overflow-hidden m-0 p-0">
        {children}
        <CookieConsent />
      </body>
    </html>
  )
} 