/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de rendimiento
  compress: true, // Habilitar compresión gzip
  poweredByHeader: false, // Eliminar header X-Powered-By por seguridad

  // Optimización de imágenes
  images: {
    formats: ["image/avif", "image/webp"], // Formatos modernos
    deviceSizes: [640, 768, 1024, 1280, 1536], // Tamaños responsive
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // Cache de 1 año
    domains: ["https://www.rutschile.com/"], // Mantener dominio de la otra rama
  },

  // Headers de seguridad y performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        // Cache para assets estáticos
        source: "/icons/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache para manifest.json
        source: "/manifest.json",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones solo en producción
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
      };
    }
    return config;
  },
};

export default nextConfig;
