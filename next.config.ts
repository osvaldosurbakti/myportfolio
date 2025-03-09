import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'], // Tambahkan domain yang diizinkan di sini
    unoptimized: false, // Pastikan ini *tidak* diubah ke true
  },
  rules: [
    {
      "react/no-unescaped-entities": "off"
    }
  ]
};

export default nextConfig;
