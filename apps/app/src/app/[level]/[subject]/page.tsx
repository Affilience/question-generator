'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { getExamBoardsBySubjectAndLevel, getSubjectInfo } from '@/lib/topics';
import { Header } from '@/components/Header';
import { Breadcrumbs, buildBreadcrumbs } from '@/components/ui/Breadcrumbs';
import { QualificationLevel, Subject } from '@/types';

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];

export default function ExamBoardSelection() {
  const params = useParams();
  const level = params.level as string;
  const subject = params.subject as string;

  if (!validLevels.includes(level as QualificationLevel)) {
    notFound();
  }

  const subjectData = getSubjectInfo(subject as Subject);
  if (!subjectData) {
    notFound();
  }

  const examBoards = getExamBoardsBySubjectAndLevel(subject as Subject, level as QualificationLevel);
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const breadcrumbs = buildBreadcrumbs({ level, subject });

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)] safe-area-inset-top">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 safe-area-inset-bottom">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl sm:text-3xl">{subjectData?.icon}</span>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)]">
              {levelDisplay} {subjectData?.name}
            </h1>
          </div>
          <p className="text-[var(--color-text-secondary)]">
            Select your exam board
          </p>
        </header>

        <div className={`grid ${examBoards.length === 1 ? 'max-w-md' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-4`}>
          {examBoards.map((board) => (
            <Link
              key={board.id}
              href={`/${level}/${subject}/${board.id}`}
              className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5 min-h-[120px] transition-colors hover:border-[var(--color-border-visible)] hover:bg-[var(--color-bg-elevated)] active:scale-[0.98]"
            >
              <div className="mb-3">
                <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-0.5">
                  {board.name}
                </h2>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {board.specCode}
                </p>
              </div>

              <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                {board.description}
              </p>

              <div className="mt-4 pt-3 border-t border-[var(--color-border)] flex items-center justify-between min-h-[44px]">
                <span className="text-sm text-[var(--color-text-muted)]">
                  View topics
                </span>
                <svg className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {examBoards.length === 0 && (
          <div className="text-center py-12 text-[var(--color-text-secondary)]">
            No exam boards available for this level yet.
          </div>
        )}
      </div>
    </div>
  );
}
