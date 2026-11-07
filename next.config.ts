import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/tools", destination: "/", permanent: false }];
  },
};

export default nextConfig;
