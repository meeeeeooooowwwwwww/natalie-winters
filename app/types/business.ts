export interface Business {
  key: string;
  value: {
    title: string;
    address: string;
    phone: string;
    url: string;
    email: string;
    website: string;
    description: string;
  };
}

export interface SearchFilters {
  query: string;
  nearMe?: boolean;
  radius?: number; // in kilometers
}

export interface SearchResults {
  businesses: Business[];
  total: number;
  page: number;
  totalPages: number;
} 