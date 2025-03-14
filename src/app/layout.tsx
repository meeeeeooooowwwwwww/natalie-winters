import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NZ Business Listings - Coming Soon',
  description: 'Directory of New Zealand Businesses - Coming Soon',
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