/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // ✅ Compressão automática (gzip/brotli)
  compress: true,
  
  // ✅ Otimizações de imagem
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [65, 70, 75],
    // Cache otimizado para imagens
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
      // ✅ Preconnect para Google Analytics
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
  
  // ✅ Otimizar package imports
  experimental: {
    optimizePackageImports: ["framer-motion", "swiper"],
  },
};

export default nextConfig;
