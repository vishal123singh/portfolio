import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/portfolio",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Disables image optimization for static exports
  },
};

export default nextConfig;
