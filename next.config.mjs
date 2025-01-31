/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {},
  // image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.it',
      },
    ],
  },
};

export default nextConfig;