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
  
  // Optimize bundle splitting for better performance
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      '@supabase/supabase-js',
      'react-katex',
      'animejs',
      'canvas-confetti',
    ],
  },
  
  // Target modern browsers to reduce polyfills (ES2020+)
  compiler: {
    // Keep error and warn. Stripping every console call also removed the 176
    // console.error calls that are the only record of failures in API routes,
    // where fewer than a quarter report to Sentry.
    removeConsole:
      process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  
  // External packages for server components (remove katex from optimizePackageImports to avoid conflict)
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
        // No-store belongs ONLY on signed-in pages.
        //
        // This rule used to match every non-_next, non-api path, so all ~1,295
        // prerendered public pages were served uncacheable: nothing reached the
        // Vercel edge cache, the `revalidate` set on the (seo) routes was
        // neutered, and `no-store` on the document disables back/forward cache
        // in Chrome and Firefox, making every back navigation a full round
        // trip. Being last, it also overrode the immutable rule above for
        // favicon/icon files.
        source: '/:path(dashboard|bookmarks|app|login|signup|welcome|choose-mode|questions|account|subscription)/:rest*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'private, no-store, max-age=0, must-revalidate',
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
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
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
              // 'unsafe-eval' removed: nothing in src/ evals since the
              // expression parser replaced eval() in DiagramRenderer. Turbopack's
              // dev HMR still needs it, so allow it in development only.
              `script-src 'self' ${process.env.NODE_ENV === 'production' ? '' : "'unsafe-eval' "}'unsafe-inline' cdn.jsdelivr.net vitals.vercel-analytics.com https://js.stripe.com https://checkout.stripe.com`,
              "style-src 'self' 'unsafe-inline' cdn.jsdelivr.net fonts.googleapis.com https://checkout.stripe.com",
              "img-src 'self' data: blob: images.unsplash.com cdn.sanity.io https://*.stripe.com",
              "font-src 'self' fonts.gstatic.com cdn.jsdelivr.net",
              // The browser never calls the model APIs - those imports are
              // server-only - so listing them just hands an injected script a
              // ready-made exfiltration channel. Sentry's ingest is reached
              // through the /monitoring tunnel, which is same-origin.
              "connect-src 'self' *.supabase.co vitals.vercel-analytics.com https://api.stripe.com https://checkout.stripe.com",
              "frame-ancestors 'self'",
              "frame-src https://js.stripe.com https://checkout.stripe.com https://hooks.stripe.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://checkout.stripe.com",
              "worker-src 'self' blob:",
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
