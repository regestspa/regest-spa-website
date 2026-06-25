/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://player.vimeo.com https://f.vimeocdn.com https://fresnel.vimeocdn.com",
              "frame-src 'self' https://player.vimeo.com https://vimeo.com",
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://api.vimeo.com https://fresnel.vimeocdn.com https://vimeocdn.com",
              "img-src 'self' data: blob: https://*.vimeocdn.com https://*.vimeo.com",
              "media-src 'self' blob: https://*.vimeocdn.com https://*.vimeo.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "worker-src 'self' blob:",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
