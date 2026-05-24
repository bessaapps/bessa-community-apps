import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    remotePatterns: [new URL("https://cms.bessaapps.com/**")]
  },
  async redirects() {
    return [];
  }
};

export default nextConfig;
