import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Only set basePath and assetPrefix for production (GitHub Pages deployment)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/firesafe_x_website',
    assetPrefix: '/firesafe_x_website/',
  }),
  // Configure turbopack root to fix the warning
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
