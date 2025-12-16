import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cms.bessaapps.com/**")]
  },
  async redirects() {
    return [
      {
        source: "/services/custom-mobile-app-development",
        destination: "/services/custom-mobile-app-development-for-your-vision",
        permanent: true
      },
      {
        source: "/services/website-development-services-that-drive-results",
        destination: "/services/custom-mobile-app-development-for-your-vision",
        permanent: true
      },
      {
        source:
          "/services/custom-website-design-and-development-that-powers-your-business",
        destination: "/services/custom-mobile-app-development-for-your-vision",
        permanent: true
      },
      {
        source:
          "/services/stress-free-app-store-submission-services-that-get-you-approved-fast",
        destination: "/services/app-store-submission-services-for-ios-android",
        permanent: true
      },
      {
        source:
          "/services/smarter-aso-and-seo-services-for-mobile-apps-to-increase-rankings-and-conversions",
        destination:
          "/services/seo-and-aso-services-that-boost-visibility-and-downloads",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
