'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/90 text-white p-4 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          This website uses cookies to enhance your experience and analyze site traffic. 
          By clicking "Accept", you consent to our use of cookies. 
          We collect and process your data for analytics purposes through Google Analytics. 
          For more information, please read our{' '}
          <button 
            onClick={() => window.open('/privacy-policy', '_blank')}
            className="underline hover:text-pink-400"
          >
            Privacy Policy
          </button>.
        </div>
        <button
          onClick={acceptCookies}
          className="whitespace-nowrap bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
} 