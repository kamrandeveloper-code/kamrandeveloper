import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "kamrandeveloper.com",
          },
        ],
        destination: "https://www.kamrandeveloper.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;