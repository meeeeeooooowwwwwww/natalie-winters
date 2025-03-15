/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@parent-natalie/shared'],
  experimental: {
    externalDir: true,
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