/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true
  },
  output: 'standalone',
  distDir: '.next',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
};

module.exports = nextConfig; 