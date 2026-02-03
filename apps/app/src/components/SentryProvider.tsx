'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import { filterErrorForSentry } from '@/lib/error-filter';

let initialized = false;

export function SentryProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isProduction = process.env.NODE_ENV === 'production';

    if (!initialized && process.env.NEXT_PUBLIC_SENTRY_DSN && isProduction) {
      Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        enabled: true,
        tracesSampleRate: 0.1,
        debug: false,
        replaysOnErrorSampleRate: 1.0,
        replaysSessionSampleRate: 0.1,
        beforeSend: filterErrorForSentry,
        integrations: [
          Sentry.replayIntegration({
            maskAllText: true,
            blockAllMedia: true,
          }),
        ],
      });

      initialized = true;
    }
  }, []);

  return <>{children}</>;
}
