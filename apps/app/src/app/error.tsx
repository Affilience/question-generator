'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console (could send to error tracking service)
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-red-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
          Something went wrong
        </h1>

        <p className="text-[var(--color-text-secondary)] mb-6">
          We encountered an unexpected error. Please try again, or contact support if the problem persists.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="px-6 py-2.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-medium rounded-lg transition-colors"
          >
            Try again
          </button>

          <a
            href="/"
            className="px-6 py-2.5 border border-[var(--color-border)] hover:bg-[var(--color-bg-hover)] text-[var(--color-text-primary)] font-medium rounded-lg transition-colors"
          >
            Go home
          </a>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-[var(--color-text-tertiary)]">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
