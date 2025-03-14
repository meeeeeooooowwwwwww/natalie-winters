'use client';

import { useState, useEffect } from 'react';
import { Business } from '@/app/types/business';
import ContactModal from '@/app/components/ContactModal';

// Function to load business data
async function loadBusinessData(): Promise<Business[]> {
  try {
    const response = await fetch('/api/businesses');
    if (!response.ok) {
      throw new Error('Failed to fetch business data');
    }
    return response.json();
  } catch (error) {
    console.error('Error loading business data:', error);
    return [];
  }
}

// Generate static params for all business pages
export async function generateStaticParams() {
  const businesses = await loadBusinessData();
  return businesses.map((business) => ({
    id: business.key,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const businesses = await loadBusinessData();
  const business = businesses.find(b => b.key === params.id);
  
  if (!business) {
    return {
      title: 'Business Not Found',
      description: 'The requested business could not be found.'
    };
  }

  return {
    title: business.value.title,
    description: business.value.description !== "Currently Unavailable" 
      ? business.value.description 
      : `Details for ${business.value.title}`
  };
}

export default function BusinessPage({ params }: { params: { id: string } }) {
  const [business, setBusiness] = useState<Business | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Load business data on client side
  useEffect(() => {
    loadBusinessData().then(businesses => {
      const found = businesses.find(b => b.key === params.id);
      setBusiness(found || null);
    });
  }, [params.id]);

  if (!business) {
    return (
      <div className="min-h-screen bg-black text-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-8">
            <p className="text-xl mb-4">Business not found</p>
            <a href="/" className="text-pink-400 hover:text-pink-300">
              ← Back to Search
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-pink-400 hover:text-pink-300 inline-block mb-8">
          ← Back to Search
        </a>
        
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
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-pink-400 hover:text-pink-300"
                >
                  ✉️ Contact via Email Form
                </button>
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

      <ContactModal
        businessName={business.value.title}
        businessEmail={business.value.email}
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
} 