'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { qualifications, subjects, examBoards, getTopicsBySubjectBoardAndLevel } from '@/lib/topics';
import type { Subject } from '@/types';

export default function AppDashboard() {
  // Get counts for stats
  const totalSubjects = subjects.length;
  const totalBoards = examBoards.length;
  let totalSubtopics = 0;

  for (const qual of qualifications) {
    for (const subj of subjects) {
      for (const board of examBoards) {
        const topics = getTopicsBySubjectBoardAndLevel(subj.id as Subject, board.id, qual.id);
        totalSubtopics += topics.reduce((count, t) => count + t.subtopics.length, 0);
      }
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Welcome to Past Papers
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Practice unlimited AI-generated exam questions across all subjects and exam boards.
          </p>
        </header>

        {/* Quick Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5 text-center">
            <div className="text-3xl font-bold text-[var(--color-accent)] mb-1">∞</div>
            <div className="text-sm text-[var(--color-text-muted)]">Questions</div>
          </div>
          <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5 text-center">
            <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-1">{totalSubjects}</div>
            <div className="text-sm text-[var(--color-text-muted)]">Subjects</div>
          </div>
          <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5 text-center">
            <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-1">{totalBoards}</div>
            <div className="text-sm text-[var(--color-text-muted)]">Exam Boards</div>
          </div>
          <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5 text-center">
            <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-1">{totalSubtopics.toLocaleString()}+</div>
            <div className="text-sm text-[var(--color-text-muted)]">Subtopics</div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
            Quick Actions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/gcse"
              className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
            >
              <div className="text-2xl mb-3">📚</div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">GCSE Practice</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Practice GCSE questions</p>
            </Link>

            <Link
              href="/a-level"
              className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
            >
              <div className="text-2xl mb-3">🎓</div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">A-Level Practice</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Practice A-Level questions</p>
            </Link>

            <Link
              href="/dashboard"
              className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
            >
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">Progress</h3>
              <p className="text-sm text-[var(--color-text-muted)]">View your progress</p>
            </Link>

            <Link
              href="/bookmarks"
              className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
            >
              <div className="text-2xl mb-3">⭐</div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">Bookmarks</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Saved questions</p>
            </Link>
          </div>
        </section>

        {/* Choose Level */}
        <section>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
            Start Practicing
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {qualifications.map((qual) => (
              <Link
                key={qual.id}
                href={`/${qual.id}`}
                className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
                      {qual.name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {qual.fullName}
                    </p>
                  </div>
                  <span className="text-3xl">{qual.id === 'a-level' ? '🎓' : '📚'}</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  {qual.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--color-text-muted)]">
                    View subjects
                  </span>
                  <svg
                    className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
