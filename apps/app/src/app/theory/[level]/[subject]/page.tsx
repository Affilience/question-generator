import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import {
  getSubjectInfo,
  getQualificationInfo,
  getExamBoardsBySubjectAndLevel,
} from '@/lib/topics';
import type { Subject, QualificationLevel } from '@/types';

interface PageProps {
  params: Promise<{ level: string; subject: string }>;
}

export default async function TheorySubjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { level, subject } = resolvedParams;

  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);

  if (!subjectInfo || !qualInfo) {
    notFound();
  }

  const examBoards = getExamBoardsBySubjectAndLevel(subject as Subject, level as QualificationLevel);

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href={`/theory/${level}`}
              className="inline-flex items-center text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {qualInfo.name} subjects
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{subjectInfo.icon}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
              {qualInfo.name} {subjectInfo.name} Theory
            </h1>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            {subjectInfo.description}. Choose your exam board to access comprehensive theory notes.
          </p>
        </header>

        {/* Exam Boards Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Choose Your Exam Board
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {examBoards.map((board) => (
              <Link
                key={board.id}
                href={`/theory/${level}/${subject}/${board.id}`}
                className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-blue-500/50 hover:bg-[var(--color-bg-elevated)] hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                    {board.name}
                  </h3>
                  <svg
                    className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  {board.fullName}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Complete theory coverage for {board.name} specification
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}