'use client';

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { CompactXPDisplay } from './XPDisplay';

interface HeaderProps {
  showBack?: boolean;
  backHref?: string;
  backLabel?: string;
}

export function Header({ showBack, backHref = '/', backLabel = 'Back' }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg-deepest)]/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left side - Logo/Brand */}
        <div className="flex items-center gap-4">
          {showBack && (
            <Link
              href={backHref}
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors min-h-[44px] px-2 -ml-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {backLabel}
            </Link>
          )}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          >
            <span className="text-[var(--color-accent)]">∞</span>
            <span>Past Papers</span>
          </Link>
        </div>

        {/* Right side - XP Display & Navigation */}
        <div className="flex items-center gap-3">
          <CompactXPDisplay />
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
            href="/past-papers"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 min-h-[44px] rounded-lg text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] hover:bg-[var(--color-accent)]/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="hidden sm:inline">Generate Paper</span>
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 min-h-[44px] rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
          <Link
            href="/bookmarks"
            className="flex items-center gap-2 px-3 sm:px-4 py-2 min-h-[44px] rounded-lg text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="hidden sm:inline">Saved</span>
          </Link>
          <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
