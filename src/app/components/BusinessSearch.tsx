'use client';

import { useState, useEffect } from 'react';
import { useLocation } from '../contexts/LocationContext';
import { searchBusinesses } from '../utils/search';
import { Business, SearchFilters, SearchResults } from '../types/business';
import { useDebounce } from 'use-debounce';

export default function BusinessSearch() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    nearMe: false,
    radius: 50
  });
  const [debouncedFilters] = useDebounce(filters, 300);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);
  const { coordinates } = useLocation();

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const searchResults = await searchBusinesses(
          debouncedFilters,
          page,
          coordinates.latitude && coordinates.longitude
            ? { latitude: coordinates.latitude, longitude: coordinates.longitude }
            : undefined
        );
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
      }
      setLoading(false);
    };

    fetchResults();
  }, [debouncedFilters, page, coordinates]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Search Input */}
      <div className="mb-8">
        <form onSubmit={(e) => {
          e.preventDefault();
          setPage(1); // Reset to first page on new search
        }}>
          <input
            type="text"
            placeholder="Search businesses..."
            className="w-full px-4 py-2 rounded-full bg-white/10 text-white border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={filters.query}
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                setPage(1); // Reset to first page on new search
              }
            }}
          />
        </form>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <label className="flex items-center space-x-2 text-white">
          <input
            type="checkbox"
            checked={filters.nearMe}
            onChange={(e) => setFilters({ ...filters, nearMe: e.target.checked })}
            className="rounded text-pink-400 focus:ring-pink-400"
          />
          <span>Near Me</span>
        </label>

        {filters.nearMe && (
          <select
            value={filters.radius}
            onChange={(e) => setFilters({ ...filters, radius: Number(e.target.value) })}
            className="bg-white/10 text-white border border-pink-400 rounded-full px-4 py-1"
          >
            <option value="5">5km</option>
            <option value="10">10km</option>
            <option value="25">25km</option>
            <option value="50">50km</option>
            <option value="100">100km</option>
          </select>
        )}
      </div>

      {/* Results */}
      {loading ? (
        <div className="text-white text-center">Loading...</div>
      ) : results?.businesses.length === 0 ? (
        <div className="text-white text-center">No results found</div>
      ) : (
        <div className="grid gap-6">
          {results?.businesses.map((business) => (
            <div
              key={business.id}
              className="bg-white/5 rounded-lg p-6 text-white border border-pink-400/20 hover:border-pink-400/40 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{business.name}</h3>
              <p className="text-gray-300 mb-2">{business.address}, {business.city}</p>
              {business.phone && (
                <p className="text-gray-300 mb-2">📞 {business.phone}</p>
              )}
              {business.website && (
                <a
                  href={business.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300"
                >
                  🌐 Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {results && results.totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-full bg-pink-400 text-white disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-white">
            Page {page} of {results.totalPages}
          </span>
          <button
            onClick={() => setPage(p => Math.min(results.totalPages, p + 1))}
            disabled={page === results.totalPages}
            className="px-4 py-2 rounded-full bg-pink-400 text-white disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
} 