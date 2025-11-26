import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cms.bessaapps.com/**")]
  },
  async redirects() {
    return [
      // {
      //   source: "/services/app-store-distribution-services",
      //   destination: "/services/app-store-distribution",
      //   permanent: true
      // }
    ];
  }
};

export default nextConfig;
