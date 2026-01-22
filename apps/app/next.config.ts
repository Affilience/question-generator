import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

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
        // Immutable cache for hashed static assets (JS/CSS chunks)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Short cache for HTML pages to pick up new chunk references faster
        source: '/:path((?!_next|api).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
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

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  tunnelRoute: "/monitoring",

  // Hide source maps from client bundles
  sourcemaps: {
    deleteSourcemapsAfterUpload: true,
  },
});
