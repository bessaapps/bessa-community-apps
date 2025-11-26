import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cms.bessaapps.com/**")]
  },
  async redirects() {
    return [
      {
        source: "/services/web",
        destination:
          "/services/custom-website-design-and-development-that-powers-your-business",
        permanent: true
      },
      {
        source: "/services/mobile",
        destination:
          "/services/custom-mobile-app-development-that-drives-growth",
        permanent: true
      },
      {
        source: "/services/app-store-distribution",
        destination:
          "/services/stress-free-app-store-submission-services-that-get-you-approved-fast",
        permanent: true
      },
      {
        source: "/services/app-store-distribution-services",
        destination:
          "/services/stress-free-app-store-submission-services-that-get-you-approved-fast",
        permanent: true
      },
      {
        source: "/services/custom-mobile-app-development",
        destination:
          "/services/custom-mobile-app-development-that-drives-growth",
        permanent: true
      },
      {
        source: "/services/aso-and-seo",
        destination:
          "/services/smarter-aso-and-seo-services-for-mobile-apps-to-increase-rankings-and-conversions",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
