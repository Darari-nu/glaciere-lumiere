/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Force cache busting
  generateEtags: false,
  experimental: {
    forceSwcTransforms: true,
  },
}

module.exports = nextConfig