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
  output: 'standalone',
}

module.exports = nextConfig; 