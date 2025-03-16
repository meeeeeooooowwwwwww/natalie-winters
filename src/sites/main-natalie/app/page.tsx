'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Natalie G. Winters
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Welcome to your source for business insights and news coverage
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link href="/biz" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Business Directory</h2>
            <p className="text-gray-600">Explore our comprehensive business directory and find the services you need.</p>
          </Link>
          <Link href="/news" className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">War Room News</h2>
            <p className="text-gray-600">Stay updated with the latest War Room videos and news coverage.</p>
          </Link>
        </div>
      </div>
    </main>
  );
} 