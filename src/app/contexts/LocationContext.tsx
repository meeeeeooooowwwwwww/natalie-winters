'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface LocationContextType {
  coordinates: {
    latitude: number | null;
    longitude: number | null;
  };
  error: string | null;
  loading: boolean;
  resetAndRetry: () => void;
}

const LocationContext = createContext<LocationContextType>({
  coordinates: { latitude: null, longitude: null },
  error: null,
  loading: true,
  resetAndRetry: () => {}
});

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [coordinates, setCoordinates] = useState<{ latitude: number | null; longitude: number | null }>({
    latitude: null,
    longitude: null
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const requestLocation = useCallback(() => {
    setLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        setCoordinates(newCoordinates);
        setLoading(false);
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

  const resetAndRetry = useCallback(() => {
    localStorage.removeItem('user-location');
    requestLocation();
  }, [requestLocation]);

  useEffect(() => {
    const savedLocation = localStorage.getItem('user-location');
    if (savedLocation) {
      try {
        const parsed = JSON.parse(savedLocation);
        setCoordinates(parsed);
        setLoading(false);
      } catch (e) {
        localStorage.removeItem('user-location');
        requestLocation();
      }
    } else {
      requestLocation();
    }
  }, [requestLocation]);

  return (
    <LocationContext.Provider value={{ coordinates, error, loading, resetAndRetry }}>
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