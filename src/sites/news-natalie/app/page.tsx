'use client';

import React from 'react';
import Layout from '@shared/components/Layout';

export default function NewsHome() {
  return (
    <Layout siteTitle="News Coverage" siteColor="purple">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample news articles */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Latest News
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Breaking News Story</h2>
            <p className="text-gray-600 mb-4">Latest updates on current events and breaking news coverage.</p>
            <div className="text-sm text-gray-500">
              <p>Published: March 16, 2024</p>
              <p>Author: Natalie Winters</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Featured Story
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Featured Investigation</h2>
            <p className="text-gray-600 mb-4">In-depth investigative reporting on important issues.</p>
            <div className="text-sm text-gray-500">
              <p>Published: March 15, 2024</p>
              <p>Author: Natalie Winters</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Opinion
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Opinion Piece</h2>
            <p className="text-gray-600 mb-4">Analysis and commentary on current events.</p>
            <div className="text-sm text-gray-500">
              <p>Published: March 14, 2024</p>
              <p>Author: Natalie Winters</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 