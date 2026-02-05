/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.iiitn.ac.in',
      },
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig; 