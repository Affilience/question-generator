import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  // Core Web Vitals optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Enable compression for better loading times
  compress: true,
  
  // Disable Cache Components to fix navigation caching issues in Next.js 16
  cacheComponents: false,
  
  // Optimize bundle splitting and modern JS target
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      '@supabase/supabase-js',
      'react-katex',
      'katex',
      'animejs',
      'canvas-confetti',
    ],
    // Enable modern JS compilation for smaller bundles
    useNextjsBundle: false,
  },
  
  // Target modern browsers to reduce polyfills (ES2020+)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // SWC compiler options for modern JavaScript
  swcMinify: true,
  
  // External packages for server components
  serverExternalPackages: ['katex'],
  
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
          {
            key: 'Preload-Policy',
            value: 'accept',
          },
        ],
      },
      {
        // Optimized cache for images
        source: '/:path*\\.(jpg|jpeg|png|gif|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        // Font optimization headers
        source: '/:path*\\.(woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        // Aggressive no-cache for HTML pages to prevent navigation caching issues
        source: '/:path((?!_next|api).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
          },
          {
            key: 'Pragma',
            value: 'no-cache',
          },
          {
            key: 'Expires',
            value: '0',
          },
          {
            key: 'Surrogate-Control',
            value: 'no-store',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        // Performance and security headers for all routes
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
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.jsdelivr.net vitals.vercel-analytics.com",
              "style-src 'self' 'unsafe-inline' cdn.jsdelivr.net fonts.googleapis.com",
              "img-src 'self' data: blob: images.unsplash.com cdn.sanity.io",
              "font-src 'self' fonts.gstatic.com cdn.jsdelivr.net",
              "connect-src 'self' *.supabase.co api.anthropic.com api.openai.com vitals.vercel-analytics.com",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests"
            ].join('; '),
          },
        ],
      },
    ];
  },
};

// Only apply Sentry config if environment variables are present
// This prevents build hanging when Sentry credentials aren't configured
const shouldUseSentry = process.env.SENTRY_ORG && process.env.SENTRY_PROJECT;

export default shouldUseSentry 
  ? withSentryConfig(nextConfig, {
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
    })
  : nextConfig;
