import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old /[examBoard] routes to /gcse/[examBoard] for backwards compatibility
      {
        source: '/aqa',
        destination: '/gcse/aqa',
        permanent: true,
      },
      {
        source: '/aqa/:path*',
        destination: '/gcse/aqa/:path*',
        permanent: true,
      },
      {
        source: '/edexcel',
        destination: '/gcse/edexcel',
        permanent: true,
      },
      {
        source: '/edexcel/:path*',
        destination: '/gcse/edexcel/:path*',
        permanent: true,
      },
      {
        source: '/ocr',
        destination: '/gcse/ocr',
        permanent: true,
      },
      {
        source: '/ocr/:path*',
        destination: '/gcse/ocr/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
