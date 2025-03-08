import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false, // Pastikan ini *tidak* diubah ke true
  },
};

export default nextConfig;
