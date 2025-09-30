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
      {
        protocol: 'https',
        hostname: 'akfayaz.anzbizconsultants.com.au',
      },
    ],
  },
};

export default nextConfig;