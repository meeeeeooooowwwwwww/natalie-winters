'use client';

import { useEffect, useState } from 'react';
import { Business } from '@/app/types/business';
import Link from 'next/link';

export default function BusinessPage({ params }: { params: { id: string } }) {
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await fetch('/nz-listings.json');
        const businesses: Business[] = await response.json();
        const found = businesses.find(b => b.key === params.id);
        if (found) {
          setBusiness(found);
        } else {
          setError('Business not found');
        }
      } catch (err) {
        setError('Failed to load business details');
        console.error('Error loading business:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-8">Loading...</div>
        </div>
      </div>
    );
  }

  if (error || !business) {
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-8">
            <p className="text-xl mb-4">{error || 'Business not found'}</p>
            <Link href="/" className="text-pink-400 hover:text-pink-300">
              ← Back to Search
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-pink-400 hover:text-pink-300 inline-block mb-8">
          ← Back to Search
        </Link>
        
        <div className="bg-white/5 rounded-lg p-8 border border-pink-400/20">
          <h1 className="text-3xl font-bold mb-6">{business.value.title}</h1>
          
          <div className="space-y-4">
            {business.value.address !== "Currently Unavailable" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Address</h2>
                <p className="text-gray-300">{business.value.address}</p>
              </div>
            )}

            {business.value.phone !== "Currently Unavailable" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Phone</h2>
                <p className="text-gray-300">📞 {business.value.phone}</p>
              </div>
            )}

            {business.value.email !== "Currently Unavailable" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Email</h2>
                <a 
                  href={`mailto:${business.value.email}`}
                  className="text-pink-400 hover:text-pink-300"
                >
                  ✉️ {business.value.email}
                </a>
              </div>
            )}

            {business.value.website !== "Currently Unavailable" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Website</h2>
                <a
                  href={business.value.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300"
                >
                  🌐 Visit Website
                </a>
              </div>
            )}

            {business.value.description !== "Currently Unavailable" && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <p className="text-gray-300">{business.value.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 