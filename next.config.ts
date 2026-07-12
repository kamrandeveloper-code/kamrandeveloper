import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",

    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5081",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "api.kamrandeveloper.com",
        pathname: "/uploads/**",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },

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