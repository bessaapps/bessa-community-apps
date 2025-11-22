import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/app-store-distribution-services",
        destination:
          "/app-store-distribution-services-that-get-your-app-approved-fast",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
