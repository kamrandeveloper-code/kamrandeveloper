import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    process.env.DEV_ALLOWED_ORIGIN ?? "karin-hydrotactic-differentially.ngrok-free.dev",
    '10.17.160.42'
  ],
};

export default nextConfig;