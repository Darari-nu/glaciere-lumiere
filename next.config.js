/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force cache busting for Vercel deployment
  generateEtags: false,
  experimental: {
    forceSwcTransforms: true,
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'no-cache, no-store, must-revalidate',
        },
      ],
    },
  ],
}

module.exports = nextConfig