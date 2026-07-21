import type { NextConfig } from "next";

const urls = {
  "/services/seo-and-aso-services-that-boost-visibility-and-downloads":
    "/mobile-app-marketing",
  "/services/custom-mobile-app-development-for-your-vision":
    "/cross-platform-app-development",
  "/services/app-store-submission-services-for-ios-android":
    "/app-publishing-services",
  "/mobile-app-development": "/cross-platform-app-development",
  "/articles/more-than-a-group-chat-why-custom-mobile-app-development-empowers-communities":
    "/launchpad",
  "/articles/why-custom-mobile-apps-are-the-secret-to-empowering-modern-communities":
    "/launchpad",
  "/services/custom-website-design-and-development": "/",
  "/services/app-store-distribution": "/app-publishing-services",
  "/services/app-store-distribution-services": "/app-publishing-services",
  "/services/website-development-services-that-drive-results": "/",
  "/services/stress-free-app-store-submission-services-that-get-you-approved-fast":
    "/app-publishing-services",
  "/services/custom-mobile-app-development": "/cross-platform-app-development",
  "/services/": "/",
  "/services/undefined": "/",
  "/services/mobile": "/cross-platform-app-development",
  "/services/smarter-aso-and-seo-services-for-mobile-apps-to-increase-rankings-and-conversions":
    "/mobile-app-marketing",
  "/articles/they-built-the-app-but-can-they-launch-it-the-reality-of-app-store-distribution":
    "/launchpad",
  "/articles/why-you-should-hire-a-mobile-app-developer-instead-of-using-a-no-code-builder":
    "/launchpad",
  "/articles/agency-quality-freelance-price-the-secret-to-affordable-app-development":
    "/launchpad",
  "/articles/web-app-and-website-development-why-you-shouldnt-choose-between-browser-and-mobile":
    "/launchpad",
  "/health-and-wellness-app-development": "/",
  "/articles/custom-business-app-solutions-for-under-3000-yes-really":
    "/launchpad",
  "/articles/startup-app-development-guide-for-non-coders": "/launchpad",
  "/mobile-app-developer-for-events": "/",
  "/dev-gotchas/seamless-expo-updates-how-to-automatically-upgrade-users-to-your-latest-app-version":
    "/app-publishing-services",
  "/dev-gotchas/why-android-push-notifications-need-extra-love": "/",
  "/dev-gotchas/setting-up-your-ec2-instance-for-next.s-hosting": "/",
  "/dev-gotchas/hidden-dependencies-for-clerk-every-react-cative-app-developer-should-know":
    "/",
  "/bessa": "/",
  "/dev-gotchas/essential-expo-and-eas-commands-every-react-native-app-developer-should-know":
    "/"
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cms.bessaapps.com/**")]
  },
  async redirects() {
    return Object.entries(urls).map(([key, value]) => ({
      source: key,
      destination: value,
      permanent: true
    }));
  }
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
