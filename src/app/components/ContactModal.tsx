'use client';

import { useState } from 'react';

interface ContactModalProps {
  businessName: string;
  businessEmail: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ businessName, businessEmail, isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    senderEmail: '',
    senderPhone: '',
    subject: '',
    message: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validateForm = () => {
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.senderEmail)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Phone validation (at least 8 digits)
    const phoneRegex = /^\+?[\d\s-]{8,}$/;
    if (!phoneRegex.test(formData.senderPhone)) {
      setError('Please enter a valid phone number (minimum 8 digits)');
      return false;
    }

    // Check for links in message
    if (formData.message.includes('http') || formData.message.includes('www') || 
        formData.message.includes('<') || formData.message.includes('>')) {
      setError('Links and HTML are not allowed in the message');
      return false;
    }

    // Subject and message length validation
    if (formData.subject.length < 2) {
      setError('Please enter a subject');
      return false;
    }
    if (formData.message.length < 10) {
      setError('Message must be at least 10 characters long');
      return false;
    }
    if (formData.message.length > 1000) {
      setError('Message must be less than 1000 characters');
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSending(true);
    try {
      // Here you would implement your email sending logic
      // For now, we'll just simulate it with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSent(true);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
      <div className="bg-black border border-pink-400 rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Contact {businessName}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {sent ? (
          <div className="text-center py-8">
            <p className="text-green-400 mb-4">Message sent successfully!</p>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-1">Your Email *</label>
              <input
                type="email"
                required
                value={formData.senderEmail}
                onChange={(e) => setFormData({ ...formData, senderEmail: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 text-white border border-pink-400/50 rounded-lg focus:outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Your Phone *</label>
              <input
                type="tel"
                required
                value={formData.senderPhone}
                onChange={(e) => setFormData({ ...formData, senderPhone: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 text-white border border-pink-400/50 rounded-lg focus:outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Subject *</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 text-white border border-pink-400/50 rounded-lg focus:outline-none focus:border-pink-400"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-1">Message *</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-3 py-2 bg-white/10 text-white border border-pink-400/50 rounded-lg focus:outline-none focus:border-pink-400 resize-none"
              />
              <p className="text-xs text-gray-400 mt-1">
                {1000 - formData.message.length} characters remaining
              </p>
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full px-4 py-2 bg-pink-400 text-white rounded-full hover:bg-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 