import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Always set basePath and assetPrefix for GitHub Pages deployment
  basePath: '/firesafe_x_website',
  assetPrefix: '/firesafe_x_website/',
};

export default nextConfig;
