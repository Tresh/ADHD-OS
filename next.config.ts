import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Turbopack rooted at the project directory (avoids the
  // "package-lock.json in home directory" warning on Windows checkouts
  // that sit under the user profile).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
