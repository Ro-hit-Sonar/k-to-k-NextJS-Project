import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
