/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Fix for OpenTelemetry critical dependency warning
    config.module.exprContextCritical = false;
    
    return config;
  },
};

module.exports = nextConfig;
