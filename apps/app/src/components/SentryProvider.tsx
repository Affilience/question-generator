'use client';

/**
 * Kept as a pass-through so the provider tree in layout.tsx is unchanged.
 *
 * Sentry is initialised in src/instrumentation-client.ts, which is the file
 * Turbopack actually injects. This component used to run its own Sentry.init
 * in an effect; because the tunnel path was missing from the bundle that
 * client posted directly to the Sentry ingest host, which the CSP blocks, so
 * it reported nothing while looking like it worked.
 */
export function SentryProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
