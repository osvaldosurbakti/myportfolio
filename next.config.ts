import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["source.unsplash.com", "picsum.photos"],
    unoptimized: false, // Pastikan ini *tidak* diubah ke true
  }
};

export default nextConfig;