'use client';

import Link from 'next/link';
import { qualifications, getExamBoardsByLevel } from '@/lib/topics';
import { Header } from '@/components/Header';

export default function LevelSelection() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-3">
            Choose Your Level
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Select a qualification to start practicing
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
          {qualifications.map((qual) => {
            const boardsForLevel = getExamBoardsByLevel(qual.id);
            const boardNames = boardsForLevel.map(b => b.name).join(' • ');

            return (
              <Link
                key={qual.id}
                href={`/${qual.id}`}
                className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)] active:scale-[0.98]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
                      {qual.name}
                    </h2>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {qual.fullName}
                    </p>
                  </div>
                  <span className="text-3xl">{qual.id === 'a-level' ? '🎓' : '📚'}</span>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  {qual.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{boardNames}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border)]">
                  <span className="text-sm text-[var(--color-text-muted)]">
                    View subjects
                  </span>
                  <svg className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
