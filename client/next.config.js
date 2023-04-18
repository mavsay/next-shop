/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    SERVER_REQUEST_API: 'http://localhost:8000/api',
    SERVER_STATIC_API: 'http://localhost:8000'
  },
  async rewrites() {
    return [
      {
        source: '/categories',
        destination: 'http://localhost:8000/api/random',
      },
    ]
  },
  images: {
    domains: ['localhost'],
  }
}

module.exports = nextConfig
