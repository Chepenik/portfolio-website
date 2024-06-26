/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.nostr.build", 
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
