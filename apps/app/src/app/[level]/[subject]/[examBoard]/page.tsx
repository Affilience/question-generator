'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useSearchParams, useRouter, notFound } from 'next/navigation';
import { getTopicsBySubjectBoardAndLevel, getExamBoardInfo, getSubjectInfo, getExamBoardsBySubjectAndLevel } from '@/lib/topics';
import { getPracticals, subjectHasPracticals } from '@/lib/practicals';
import { getAllProgress } from '@/lib/progress';
import { TopicGrid } from '@/components/TopicGrid';
import { PracticalGrid } from '@/components/PracticalGrid';
import { SubjectTabs, TabType } from '@/components/SubjectTabs';
import { Header } from '@/components/Header';
import { Breadcrumbs, buildBreadcrumbs } from '@/components/ui/Breadcrumbs';
import { TopicProgress, ExamBoard, QualificationLevel, Subject } from '@/types';

const validLevels: QualificationLevel[] = ['gcse', 'a-level'];
const validExamBoards: ExamBoard[] = ['aqa', 'edexcel', 'ocr'];

export default function TopicsPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const level = params.level as string;
  const subject = params.subject as string;
  const examBoard = params.examBoard as string;

  const [progress, setProgress] = useState<Record<string, TopicProgress>>({});
  const [mounted, setMounted] = useState(false);

  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState<TabType>(
    tabParam === 'practicals' ? 'practicals' : 'topics'
  );

  if (!validLevels.includes(level as QualificationLevel)) {
    notFound();
  }

  const subjectData = getSubjectInfo(subject as Subject);
  if (!subjectData) {
    notFound();
  }

  if (!validExamBoards.includes(examBoard as ExamBoard)) {
    notFound();
  }

  const boardsForSubject = getExamBoardsBySubjectAndLevel(subject as Subject, level as QualificationLevel);
  if (!boardsForSubject.find(b => b.id === examBoard)) {
    notFound();
  }

  const examBoardInfo = getExamBoardInfo(examBoard as ExamBoard);
  const topics = getTopicsBySubjectBoardAndLevel(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel
  );

  const practicals = subjectHasPracticals(subject as Subject)
    ? getPracticals(subject as Subject, examBoard as ExamBoard, level as QualificationLevel)
    : [];

  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const breadcrumbs = buildBreadcrumbs({ level, subject, examBoard });

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    const newUrl = tab === 'topics'
      ? `/${level}/${subject}/${examBoard}`
      : `/${level}/${subject}/${examBoard}?tab=practicals`;
    router.push(newUrl);
  };

  useEffect(() => {
    setMounted(true);
    setProgress(getAllProgress());
  }, []);

  const totalAttempted = Object.values(progress).reduce((sum, p) => sum + p.attempted, 0);
  const totalCorrect = Object.values(progress).reduce((sum, p) => sum + p.correct, 0);
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)] safe-area-inset-top">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 safe-area-inset-bottom">
        <Breadcrumbs items={breadcrumbs} className="mb-6" />

        <header className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl sm:text-3xl">{subjectData?.icon}</span>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
                  {examBoardInfo?.name} {levelDisplay} {subjectData?.name}
                </h1>
              </div>
              <p className="text-[var(--color-text-secondary)]">
                {topics.length} topics available
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href="/bookmarks"
                className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-border-visible)] transition-colors active:scale-[0.98]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Saved
              </Link>
              <Link
                href={`/${level}/${subject}/${examBoard}/paper`}
                className="flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-secondary)] hover:border-[var(--color-border-visible)] transition-colors active:scale-[0.98]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Paper
              </Link>
            </div>
          </div>

          {mounted && totalAttempted > 0 && (
            <div className="mt-4 flex gap-4 text-sm">
              <span className="text-[var(--color-text-muted)]">
                {totalAttempted} questions
              </span>
              <span className="text-[var(--color-success)]">
                {accuracy}% accuracy
              </span>
            </div>
          )}
        </header>

        {subjectHasPracticals(subject as Subject) && (
          <SubjectTabs
            subject={subject as Subject}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />
        )}

        <section>
          {activeTab === 'topics' ? (
            <TopicGrid
              topics={topics}
              progress={progress}
              examBoard={examBoard as ExamBoard}
              level={level as QualificationLevel}
              subject={subject as Subject}
            />
          ) : (
            <>
              <p className="text-[var(--color-text-secondary)] mb-6 text-sm">
                Practice exam-style questions on the required practicals.
              </p>
              <PracticalGrid
                practicals={practicals}
                progress={progress}
                examBoard={examBoard as ExamBoard}
                level={level as QualificationLevel}
              />
            </>
          )}
        </section>
      </div>
    </div>
  );
}
