import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cms.bessaapps.com/**")]
  },
  async redirects() {
    return [
      {
        source: "/services/app-store-distribution-services",
        destination: "/services/app-store-distribution",
        permanent: true
      },
      {
        source: "/services/custom-mobile-app-development",
        destination: "/services/mobile",
        permanent: true
      },
      {
        source: "/services/custom-website-design-and-development",
        destination: "/services/web",
        permanent: true
      },
      {
        source: "/services/custom-seo-and-aso-solutions-that-drive-discovery",
        destination: "/services/aso-and-seo",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
