import type { Metadata } from 'next'

export interface RootLayoutProps {
  children: React.ReactNode;
  metadata?: Metadata;
  analytics?: {
    googleAnalyticsId?: string;
  };
}

export default function RootLayout({
  children,
  metadata,
  analytics
}: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {analytics?.googleAnalyticsId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${analytics.googleAnalyticsId}`}></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${analytics.googleAnalyticsId}');
                `
              }}
            />
          </>
        )}
      </head>
      <body className="overflow-hidden m-0 p-0">
        {children}
      </body>
    </html>
  )
} 