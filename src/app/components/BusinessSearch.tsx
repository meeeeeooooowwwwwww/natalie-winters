'use client';

import { useState, useEffect } from 'react';
import { searchBusinesses } from '../utils/search';
import { Business, SearchFilters, SearchResults } from '../types/business';
import { useDebounce } from 'use-debounce';

function getExcerpt(description: string, maxLength: number = 150): string {
  if (description === "Currently Unavailable") return "";
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength).trim() + '...';
}

export default function BusinessSearch() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: ''
  });
  const [debouncedFilters] = useDebounce(filters, 300);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState<SearchResults | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const searchResults = await searchBusinesses(
          debouncedFilters,
          page
        );
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
      }
      setLoading(false);
    };

    fetchResults();
  }, [debouncedFilters, page]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Search Input */}
      <div className="mb-8">
        <form onSubmit={(e) => {
          e.preventDefault();
          setPage(1);
        }}>
          <input
            type="text"
            placeholder="Search NZ Businesses..."
            className="w-full px-4 py-2 rounded-full bg-white/10 text-white border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={filters.query}
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                setPage(1);
              }
            }}
          />
        </form>
      </div>

      {/* Results */}
      {loading ? (
        <div className="text-white text-center">Loading...</div>
      ) : filters.query ? (
        results?.businesses.length === 0 ? (
          <div className="text-white text-center">No results found</div>
        ) : (
          <div className="grid gap-6">
            {results?.businesses.map((business) => (
              <div
                key={business.key}
                className="bg-white/5 rounded-lg p-6 text-white border border-pink-400/20 hover:border-pink-400/40 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2">{business.value.title}</h3>
                <p className="text-gray-300 mb-4">{getExcerpt(business.value.description)}</p>
                <a
                  href={`/nz/${business.key}`}
                  className="text-pink-400 hover:text-pink-300 inline-flex items-center"
                >
                  View Details →
                </a>
              </div>
            ))}
          </div>
        )
      ) : (
        <div></div>
      )}

      {/* Pagination - only show when there are results and a search query */}
      {results && results.totalPages > 1 && filters.query && (
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