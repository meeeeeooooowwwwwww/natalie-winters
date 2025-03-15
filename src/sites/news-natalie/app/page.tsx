'use client';

import VideoSearch from './components/VideoSearch';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            War Room News
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Stay informed with the latest War Room videos and coverage
          </p>
        </div>
      </div>
      <VideoSearch />
    </main>
  );
} 