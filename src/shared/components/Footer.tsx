import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-300">
              Your trusted source for business insights and news coverage.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/biz" className="text-gray-300 hover:text-white">Business Directory</Link></li>
              <li><Link href="/news" className="text-gray-300 hover:text-white">News Coverage</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white">Twitter</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">LinkedIn</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Facebook</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Natalie G. Winters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 