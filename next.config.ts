import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/firesafe_x_website' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/firesafe_x_website/' : '',
};

export default nextConfig;
