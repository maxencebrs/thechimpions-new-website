import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/merch-store',
        destination: 'https://shop.chimpions.co',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
