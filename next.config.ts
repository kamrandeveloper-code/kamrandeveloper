import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Force non-www → www
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

      // Force http → https (www)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.kamrandeveloper.com",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.kamrandeveloper.com/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;