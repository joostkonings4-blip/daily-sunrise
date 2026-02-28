import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.instagram.com" },
      { protocol: "https", hostname: "**.tiktok.com" },
    ],
  },
};

export default nextConfig;
