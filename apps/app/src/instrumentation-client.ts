import * as Sentry from '@sentry/nextjs';
import { filterErrorForSentry } from '@/lib/error-filter';

/**
 * Browser-side Sentry initialisation.
 *
 * This file replaces sentry.client.config.ts, which never ran: Sentry injects
 * that file through the WEBPACK entry hook, and this app builds with Turbopack,
 * whose injection rule only matches `instrumentation-client.*`. Because it
 * never loaded, the rewritten tunnel path was also absent from the bundle, so
 * the fallback init in SentryProvider posted straight to the Sentry ingest host
 * — which the Content-Security-Policy blocks. Between the two, no browser error
 * has ever been reported.
 *
 * Errors are sent through the same-origin /monitoring tunnel configured in
 * next.config.ts, which is why connect-src does not need the ingest host.
 */
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Only enable in production
  enabled: process.env.NODE_ENV === 'production',

  tracesSampleRate: 0.1,

  debug: false,

  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,

  // Drop benign noise (aborted fetches, ResizeObserver loops, chunk load
  // failures on deploy) without hiding real application errors.
  beforeSend: filterErrorForSentry,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});

// Required for navigation instrumentation in the App Router.
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
