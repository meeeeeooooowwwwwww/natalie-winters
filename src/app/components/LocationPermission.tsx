'use client';

import { useLocation } from '../contexts/LocationContext';

export default function LocationPermission() {
  const { coordinates, error, loading, resetAndRetry } = useLocation();

  if (loading) {
    return null;
  }

  if (error) {
    return (
      <div className="fixed top-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
        <p className="text-sm mb-2">Enable location services to get better search results</p>
        <button
          onClick={resetAndRetry}
          className="text-xs bg-pink-400 hover:bg-pink-500 text-white px-4 py-1 rounded-full transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!coordinates.latitude || !coordinates.longitude) {
    return (
      <div className="fixed top-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
        <p className="text-sm">Waiting for location permission...</p>
      </div>
    );
  }

  return null;
} 