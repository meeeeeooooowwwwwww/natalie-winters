'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  siteTitle: string;
  siteColor: 'blue' | 'green' | 'purple';
}

export default function Navigation({ siteTitle, siteColor }: NavigationProps) {
  const pathname = usePathname();
  const isMainSite = pathname?.startsWith('/') && !pathname?.startsWith('/biz') && !pathname?.startsWith('/news');
  const isBizSite = pathname?.startsWith('/biz');
  const isNewsSite = pathname?.startsWith('/news');

  const bgColorClass = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
    purple: 'bg-purple-600'
  }[siteColor];

  const hoverColorClass = {
    blue: 'hover:text-blue-200',
    green: 'hover:text-green-200',
    purple: 'hover:text-purple-200'
  }[siteColor];

  return (
    <nav className={`${bgColorClass} text-white shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            {siteTitle}
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href={isMainSite ? '/' : isBizSite ? '/biz' : '/news'} 
              className={`text-white ${hoverColorClass} ${(isMainSite && pathname === '/') || (isBizSite && pathname === '/biz') || (isNewsSite && pathname === '/news') ? 'font-bold' : ''}`}
            >
              Home
            </Link>
            <Link 
              href={isMainSite ? '/biz' : isBizSite ? '/biz/search' : '/news/videos'} 
              className={`text-white ${hoverColorClass}`}
            >
              {isMainSite ? 'Business' : isBizSite ? 'Search' : 'Videos'}
            </Link>
            <Link 
              href={isMainSite ? '/news' : isBizSite ? '/biz/categories' : '/news/categories'} 
              className={`text-white ${hoverColorClass}`}
            >
              {isMainSite ? 'News' : isBizSite ? 'Categories' : 'Categories'}
            </Link>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
} 