import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow mobile devices on the local network to access the dev server
  allowedDevOrigins: ["192.168.1.5"],

  // Explicitly set Turbopack root to avoid the multiple-lockfiles warning
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
