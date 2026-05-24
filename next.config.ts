import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cms.bessaapps.com/**")]
  },
  async redirects() {
    return [
      {
        source: "/services/custom-mobile-app-development-for-your-vision",
        destination: "/mobile-app-development",
        permanent: true
      },
      {
        source: "/services/app-store-submission-services-for-ios-android",
        destination: "/app-store-submission",
        permanent: true
      },
      {
        source:
          "/services/seo-and-aso-services-that-boost-visibility-and-downloads",
        destination: "/app-store-optimization",
        permanent: true
      }
    ];
  }
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
