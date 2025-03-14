import { Business, SearchFilters, SearchResults } from '../types/business';

// We'll load the data using a dynamic import
async function loadBusinessData(): Promise<Business[]> {
  try {
    const response = await fetch('/nz-listings.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading business data:', error);
    return [];
  }
}

const ITEMS_PER_PAGE = 20;

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export async function searchBusinesses(
  filters: SearchFilters,
  page: number = 1,
  userLocation?: { latitude: number; longitude: number }
): Promise<SearchResults> {
  const businesses = await loadBusinessData();
  
  let results = businesses.filter(business => {
    // Basic text search
    const searchText = `${business.name} ${business.description || ''} ${business.category || ''} ${business.city} ${business.region}`.toLowerCase();
    const query = filters.query.toLowerCase();
    
    if (query && !searchText.includes(query)) {
      return false;
    }

    // Region filter
    if (filters.region && business.region?.toLowerCase() !== filters.region.toLowerCase()) {
      return false;
    }

    // Category filter
    if (filters.category && business.category?.toLowerCase() !== filters.category.toLowerCase()) {
      return false;
    }

    // Location-based filter
    if (filters.nearMe && userLocation && business.coordinates) {
      const distance = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        business.coordinates.latitude,
        business.coordinates.longitude
      );
      if (distance > (filters.radius || 50)) { // Default 50km radius
        return false;
      }
    }

    return true;
  });

  // Sort by relevance or distance
  if (filters.nearMe && userLocation) {
    results = results.sort((a, b) => {
      if (!a.coordinates || !b.coordinates) return 0;
      const distanceA = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        a.coordinates.latitude,
        a.coordinates.longitude
      );
      const distanceB = calculateDistance(
        userLocation.latitude,
        userLocation.longitude,
        b.coordinates.latitude,
        b.coordinates.longitude
      );
      return distanceA - distanceB;
    });
  }

  const total = results.length;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedResults = results.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return {
    businesses: paginatedResults,
    total,
    page,
    totalPages
  };
} 