import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import path from 'path';
import fs from 'fs';

export const runtime = 'edge';

// Simple in-memory rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 30; // 30 requests per minute
const requestCounts = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const requestData = requestCounts.get(ip);

  if (!requestData) {
    requestCounts.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
    // Reset if window has passed
    requestCounts.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (requestData.count >= MAX_REQUESTS) {
    return true;
  }

  requestData.count++;
  return false;
}

export async function GET(request: Request) {
  // Get client IP
  const headersList = headers();
  const forwardedFor = headersList.get('x-forwarded-for');
  const ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';

  // Check rate limit
  if (isRateLimited(ip)) {
    return new NextResponse(JSON.stringify({ error: 'Too many requests' }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // Check referer to prevent direct access
  const referer = headersList.get('referer');
  if (!referer || !referer.includes(request.headers.get('host') || '')) {
    return new NextResponse(JSON.stringify({ error: 'Unauthorized' }), {
      status: 403,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    // In edge runtime, we'll use KV or D1 for data storage
    // For now, we'll use the JSON file directly
    const response = await fetch('https://raw.githubusercontent.com/meeeeeooooowwwwwww/nz-business-listings/main/src/app/data/nz-listings.json');
    const data = await response.json();

    return new NextResponse(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error reading business data:', error);
    return new NextResponse(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 