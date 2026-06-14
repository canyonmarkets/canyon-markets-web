import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local-network/loopback hosts to load dev resources (HMR, chunks) during development.
  allowedDevOrigins: ['127.0.0.1'],
};

export default nextConfig;
