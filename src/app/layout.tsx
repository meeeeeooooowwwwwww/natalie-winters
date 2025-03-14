import './globals.css?v=2'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NZ Business Listings',
  description: 'New Zealand Business Listings - Coming Soon',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden m-0 p-0">{children}</body>
    </html>
  )
} 