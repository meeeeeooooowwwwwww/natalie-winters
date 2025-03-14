'use client';

import { useLocation } from '../contexts/LocationContext';

export default function LocationPermission() {
  const { coordinates, error, loading } = useLocation();

  // Don't show anything if loading or if permission was denied
  if (loading || error) {
    return null;
  }

  // Only show when waiting for initial permission
  if (!coordinates.latitude || !coordinates.longitude) {
    return (
      <div className="fixed top-4 right-4 bg-black/90 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
        <p className="text-sm">Waiting for location permission...</p>
      </div>
    );
  }

  return null;
} 