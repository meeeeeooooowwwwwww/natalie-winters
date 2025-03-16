'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NewsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('http://localhost:3002');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to news site...</p>
    </div>
  );
} 