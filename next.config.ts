import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix:'https://linhmonkaist/semscholars',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
