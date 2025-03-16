const environments = require('./environments');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@parent-natalie/shared'],
  experimental: {
    externalDir: true,
  },
  env: {
    ENVIRONMENT: process.env.NODE_ENV || 'development',
  },
  async rewrites() {
    const env = process.env.NODE_ENV || 'development';
    const config = environments[env];
    
    return {
      beforeFiles: [
        // Add cross-site API routes if needed
      ],
      afterFiles: [
        // Handle any dynamic routes
      ],
      fallback: [
        // Fallback routes if needed
      ],
    };
  },
  // Enable Edge Runtime
  experimental: {
    runtime: 'edge',
    serverComponents: true,
  },
  // Configure headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ],
      },
    ];
  },
  webpack: (config, { isServer }) => {
    // Handle shared components and utilities
    config.resolve.alias = {
      ...config.resolve.alias,
      '@shared': path.resolve(__dirname, '../src/shared'),
    }
    return config
  },
}

module.exports = nextConfig 