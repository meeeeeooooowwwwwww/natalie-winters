'use client';

import { useState, useEffect } from 'react';
import { WarRoomVideo, VideoSearchParams } from '../types/video';
import { searchVideos } from '../utils/videoSearch';

export default function VideoSearch() {
  const [searchParams, setSearchParams] = useState<VideoSearchParams>({
    query: '',
    page: 1,
    perPage: 12,
    sortBy: 'date'
  });
  const [videos, setVideos] = useState<WarRoomVideo[]>([]);
  const [totalVideos, setTotalVideos] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const result = await searchVideos(searchParams);
        setVideos(result.videos);
        setTotalVideos(result.total);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
      setLoading(false);
    };

    fetchVideos();
  }, [searchParams]);

  const handleSearch = (query: string) => {
    setSearchParams(prev => ({ ...prev, query, page: 1 }));
  };

  const handleSort = (sortBy: 'date' | 'views' | 'likes') => {
    setSearchParams(prev => ({ ...prev, sortBy }));
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams(prev => ({ ...prev, page: newPage }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search videos..."
          className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:border-transparent"
          value={searchParams.query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* Sort Controls */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => handleSort('date')}
          className={`px-4 py-2 rounded-full ${
            searchParams.sortBy === 'date' ? 'bg-pink-400 text-white' : 'bg-gray-200'
          }`}
        >
          Latest
        </button>
        <button
          onClick={() => handleSort('views')}
          className={`px-4 py-2 rounded-full ${
            searchParams.sortBy === 'views' ? 'bg-pink-400 text-white' : 'bg-gray-200'
          }`}
        >
          Most Viewed
        </button>
        <button
          onClick={() => handleSort('likes')}
          className={`px-4 py-2 rounded-full ${
            searchParams.sortBy === 'likes' ? 'bg-pink-400 text-white' : 'bg-gray-200'
          }`}
        >
          Most Liked
        </button>
      </div>

      {/* Video Grid */}
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={video.thumbnailUrl}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 line-clamp-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {new Date(video.publishedAt).toLocaleDateString()}
                </p>
                <p className="text-gray-500 text-sm line-clamp-3">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from(
          { length: Math.ceil(totalVideos / searchParams.perPage) },
          (_, i) => i + 1
        ).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => handlePageChange(pageNum)}
            className={`px-4 py-2 rounded ${
              pageNum === searchParams.page
                ? 'bg-pink-400 text-white'
                : 'bg-gray-200'
            }`}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
} 