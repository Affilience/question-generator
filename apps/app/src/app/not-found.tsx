import Link from 'next/link';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

/**
 * There was no not-found page, so every 404 rendered the framework default:
 * unstyled, unbranded, and with no route back into the site. The subtopic
 * route sets dynamicParams, so 404s are routine rather than exceptional.
 */
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-[var(--color-bg-deepest)]">
      <div className="w-full max-w-md text-center">
        <p className="text-sm uppercase tracking-widest text-[var(--color-text-muted)] mb-4">
          404
        </p>
        <h1 className="text-3xl font-semibold text-[var(--color-text-primary)] mb-3">
          We can&apos;t find that page
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          The link may be out of date, or the topic may have moved. Everything
          below still works.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/start"
            className="px-5 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium"
          >
            Start practising
          </Link>
          <Link
            href="/"
            className="px-5 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text-primary)]"
          >
            Go to the homepage
          </Link>
        </div>

        <p className="mt-8 text-sm text-[var(--color-text-muted)]">
          Looking for a subject?{' '}
          <Link href="/gcse" className="underline hover:text-[var(--color-text-primary)]">
            GCSE
          </Link>{' '}
          ·{' '}
          <Link href="/a-level" className="underline hover:text-[var(--color-text-primary)]">
            A-Level
          </Link>
        </p>
      </div>
    </main>
  );
}
