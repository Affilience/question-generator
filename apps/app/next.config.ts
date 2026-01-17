import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Redirect old /[examBoard] routes to /gcse/[examBoard] for backwards compatibility
      {
        source: '/aqa',
        destination: '/gcse/maths/aqa',
        permanent: true,
      },
      {
        source: '/edexcel',
        destination: '/gcse/maths/edexcel',
        permanent: true,
      },
      {
        source: '/ocr',
        destination: '/gcse/maths/ocr',
        permanent: true,
      },
      // Redirect old app subdomain paths (if accessed on main domain)
      {
        source: '/app.past-papers.co.uk/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Add security headers for all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
