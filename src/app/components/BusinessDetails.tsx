'use client';

import { useState } from 'react';
import { Business } from '@/app/types/business';
import ContactModal from './ContactModal';

interface BusinessDetailsProps {
  business: Business;
}

export default function BusinessDetails({ business }: BusinessDetailsProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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