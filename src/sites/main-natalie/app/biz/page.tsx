'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BizRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('http://localhost:3001');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to business site...</p>
    </div>
  );
} 