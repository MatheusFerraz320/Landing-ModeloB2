/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  compress: true,
  
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [65, 70, 75],
    minimumCacheTTL: 31536000,
    // Device sizes responsivos
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "Link",
            value: "<https://www.googletagmanager.com>; rel=preconnect; crossorigin",
          },
        ],
      },
    ];
  },
  
  experimental: {
    optimizePackageImports: ["framer-motion", "swiper"],
  },
};

export default nextConfig;
