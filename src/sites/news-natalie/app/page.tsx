'use client';

import React from 'react';
import Layout from '@shared/components/Layout';
import VideoSearch from './components/VideoSearch';

export default function Home() {
  return (
    <Layout siteTitle="War Room News" siteColor="purple">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Videos</h2>
        <VideoSearch />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            {/* Placeholder image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              News 1
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Breaking News Story</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="text-sm text-gray-500">
              <span>March 16, 2024</span>
              <span className="mx-2">•</span>
              <span>Politics</span>
            </div>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            {/* Placeholder image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              News 2
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Local Business Expansion</h2>
            <p className="text-gray-600 mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="text-sm text-gray-500">
              <span>March 15, 2024</span>
              <span className="mx-2">•</span>
              <span>Business</span>
            </div>
          </div>
        </article>
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            {/* Placeholder image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              News 3
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Community Event Highlights</h2>
            <p className="text-gray-600 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="text-sm text-gray-500">
              <span>March 14, 2024</span>
              <span className="mx-2">•</span>
              <span>Community</span>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
} 