import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source:
          "/articles/more-than-a-group-chat-why-custom-mobile-app-development-empowers-communities",
        destination: "/",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
