export interface Business {
  id: string;
  name: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  phone?: string;
  email?: string;
  website?: string;
  category?: string;
  subCategory?: string;
  description?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface SearchFilters {
  query: string;
  region?: string;
  category?: string;
  nearMe?: boolean;
  radius?: number; // in kilometers
}

export interface SearchResults {
  businesses: Business[];
  total: number;
  page: number;
  totalPages: number;
} 