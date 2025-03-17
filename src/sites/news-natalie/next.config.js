const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add our shared directory to the webpack module paths
    config.resolve.modules.push(path.resolve(__dirname, '../../'));
    
    // Add alias for shared components
    config.resolve.alias['@shared'] = path.resolve(__dirname, '../../shared');
    
    return config;
  },
  experimental: {
    externalDir: true,
  },
  distDir: '.next',
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Ensure each site works as a standalone static site
  basePath: process.env.NODE_ENV === 'production' ? '/news' : '',
}

module.exports = nextConfig; 