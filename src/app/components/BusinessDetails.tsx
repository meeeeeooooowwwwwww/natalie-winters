'use client';

import { useState } from 'react';
import { Business } from '@/app/types/business';
import ContactModal from './ContactModal';

interface BusinessDetailsProps {
  business: Business;
}

export default function BusinessDetails({ business }: BusinessDetailsProps) {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const renderField = (label: string, value: string, icon: string, isLink?: boolean) => {
    if (value === "Currently Unavailable") return null;
    
    return (
      <div>
        <h2 className="text-lg font-semibold mb-2">{label}</h2>
        {isLink ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-300"
          >
            {icon} Visit {label}
          </a>
        ) : (
          <p className="text-gray-300">{icon} {value}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-pink-400 hover:text-pink-300 inline-block mb-8">
          ← Back to Search
        </a>
        
        <div className="bg-white/5 rounded-lg p-8 border border-pink-400/20">
          <h1 className="text-3xl font-bold mb-6">{business.value.title}</h1>
          
          <div className="space-y-4">
            {renderField("Address", business.value.address, "📍")}
            {renderField("Phone", business.value.phone, "📞")}
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
            {renderField("Website", business.value.website, "🌐", true)}
            {renderField("URL", business.value.url, "🔗", true)}
            {renderField("Description", business.value.description, "📝")}
          </div>

          {/* Additional Info Section */}
          <div className="mt-8 pt-8 border-t border-pink-400/20">
            <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
            <p className="text-gray-400 text-sm">
              Business ID: {business.key}
            </p>
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