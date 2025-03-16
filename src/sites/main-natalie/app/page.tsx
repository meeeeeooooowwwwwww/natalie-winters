'use client';

import React from 'react';
import Link from 'next/link';
import Layout from '@shared/components/Layout';

export default function Home() {
  return (
    <Layout siteTitle="Natalie G. Winters" siteColor="blue">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
            {/* Placeholder image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Business Directory
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Business Directory</h2>
          <p className="text-gray-600 mb-4">
            Explore our comprehensive directory of local businesses and services.
          </p>
          <Link href="/biz" className="text-blue-600 hover:text-blue-800">
            View Directory →
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
            {/* Placeholder image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              News Coverage
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">News Coverage</h2>
          <p className="text-gray-600 mb-4">
            Stay informed with the latest news and updates from our team.
          </p>
          <Link href="/news" className="text-blue-600 hover:text-blue-800">
            Read News →
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-4">
            {/* Placeholder image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Contact Us
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-4">
            Get in touch with our team for inquiries and collaborations.
          </p>
          <Link href="/contact" className="text-blue-600 hover:text-blue-800">
            Contact →
          </Link>
        </div>
      </div>
    </Layout>
  );
} 