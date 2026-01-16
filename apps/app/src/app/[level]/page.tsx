'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useParams } from 'next/navigation';
import { getAvailableSubjects } from '@/lib/topics';
import { Header } from '@/components/Header';
import { Breadcrumbs, buildBreadcrumbs } from '@/components/ui/Breadcrumbs';
import { QualificationLevel } from '@/types';

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];

const scienceSubjects = ['physics', 'chemistry', 'biology'];

export default function SubjectSelection() {
  const params = useParams();
  const level = params.level as string;

  if (!validLevels.includes(level as QualificationLevel)) {
    notFound();
  }

  const subjects = getAvailableSubjects();
  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const breadcrumbs = buildBreadcrumbs({ level });

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)] safe-area-inset-top">
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 safe-area-inset-bottom">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
            {levelDisplay} Subjects
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Choose a subject to start practicing
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/${level}/${subject.id}`}
              className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-4 min-h-[100px] flex flex-col transition-colors hover:border-[var(--color-border-visible)] hover:bg-[var(--color-bg-elevated)] active:scale-[0.98]"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl sm:text-2xl">{subject.icon}</span>
                <h2 className="text-sm sm:text-base font-semibold text-[var(--color-text-primary)]">
                  {subject.name}
                </h2>
              </div>

              <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 flex-1">
                {subject.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
