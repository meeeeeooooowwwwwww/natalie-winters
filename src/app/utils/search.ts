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

export async function searchBusinesses(
  filters: SearchFilters,
  page: number = 1
): Promise<SearchResults> {
  const businesses = await loadBusinessData();
  
  let results = businesses.filter(business => {
    // Basic text search across all relevant fields
    const searchText = `${business.value.title} ${business.value.description} ${business.value.address}`.toLowerCase();
    const query = filters.query.toLowerCase();
    
    if (query && !searchText.includes(query)) {
      return false;
    }

    return true;
  });

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