'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import { videoIds } from './data/videoIds';
import BusinessSearch from './components/BusinessSearch';
import React from 'react';
import Layout from '@shared/components/Layout';

export default function BusinessDirectory() {
  return (
    <Layout siteTitle="Business Directory" siteColor="green">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample business cards - these would be dynamic in production */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            {/* Placeholder image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Business 1
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Sample Business 1</h2>
            <p className="text-gray-600 mb-4">Description of the business and its services.</p>
            <div className="text-sm text-gray-500">
              <p>123 Main Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            {/* Placeholder image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Business 2
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Sample Business 2</h2>
            <p className="text-gray-600 mb-4">Another business description and services offered.</p>
            <div className="text-sm text-gray-500">
              <p>456 Oak Avenue</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 987-6543</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            {/* Placeholder image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Business 3
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Sample Business 3</h2>
            <p className="text-gray-600 mb-4">Third business description and available services.</p>
            <div className="text-sm text-gray-500">
              <p>789 Pine Road</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 