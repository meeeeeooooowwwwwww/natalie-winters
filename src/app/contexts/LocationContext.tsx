'use client';

import { createContext, useContext, useState, useEffect } from 'react';

interface LocationContextType {
  coordinates: {
    latitude: number | null;
    longitude: number | null;
  };
  error: string | null;
  loading: boolean;
}

const LocationContext = createContext<LocationContextType>({
  coordinates: { latitude: null, longitude: null },
  error: null,
  loading: true
});

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [coordinates, setCoordinates] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    // Try to get location from localStorage first
    const savedLocation = localStorage.getItem('user-location');
    if (savedLocation) {
      try {
        const parsed = JSON.parse(savedLocation);
        setCoordinates(parsed);
        setLoading(false);
      } catch (e) {
        localStorage.removeItem('user-location');
      }
    }

    // Request current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        setCoordinates(newCoordinates);
        setLoading(false);
        // Save to localStorage for future use
        localStorage.setItem('user-location', JSON.stringify(newCoordinates));
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError('Location permission denied');
            break;
          case error.POSITION_UNAVAILABLE:
            setError('Location information unavailable');
            break;
          case error.TIMEOUT:
            setError('Location request timed out');
            break;
          default:
            setError('An unknown error occurred');
        }
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  }, []);

  return (
    <LocationContext.Provider value={{ coordinates, error, loading }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
} 