import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  siteTitle: string;
  siteColor: 'blue' | 'green' | 'purple';
}

export default function Layout({ children, siteTitle, siteColor }: LayoutProps) {
  const bgColorClass = {
    blue: 'bg-blue-50',
    green: 'bg-green-50',
    purple: 'bg-purple-50'
  }[siteColor];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation siteTitle={siteTitle} siteColor={siteColor} />
      <main className="flex-grow">
        <div className={`${bgColorClass} py-8`}>
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">{siteTitle}</h1>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 