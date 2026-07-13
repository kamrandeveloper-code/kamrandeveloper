import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   poweredByHeader: false, // remove x-powered-by: Next.js
  
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
        ],
      },
    ];
  },
  
  images: {
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
 formats: ['image/avif', 'image/webp'],
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