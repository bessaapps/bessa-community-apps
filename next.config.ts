import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/custom-mobile-app-development",
        destination:
          "/services/custom-mobile-app-development-that-drives-growth",
        permanent: true
      },
      {
        source: "/services/custom-website-design-and-development",
        destination:
          "/services/custom-website-design-and-development-that-powers-your-business",
        permanent: true
      },
      {
        source: "/services/app-store-distribution-services",
        destination:
          "/services/app-store-distribution-services-that-get-your-app-approved-fast",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
