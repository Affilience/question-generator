'use client';

import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { TheoryNotes } from '@/components/TheoryNotes';
import {
  getSubjectInfo,
  getQualificationInfo,
  getExamBoardInfo,
  getTopicByIdSubjectBoardAndLevel,
} from '@/lib/topics';
import { slugify } from '@/lib/seo/utils';
import type { Subject, QualificationLevel, ExamBoard } from '@/types';

export default function TheoryNotesPage() {
  const params = useParams();
  const { level, subject, examBoard, topicId, subtopic } = params;

  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);
  const examBoardInfo = getExamBoardInfo(examBoard as ExamBoard);
  const topic = getTopicByIdSubjectBoardAndLevel(
    topicId as string,
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel
  );

  if (!subjectInfo || !qualInfo || !examBoardInfo || !topic) {
    notFound();
  }

  // Find the actual subtopic name from the slug
  const subtopicName = topic.subtopics.find(s => slugify(s) === subtopic);
  const isOverview = subtopic === 'overview';
  
  if (!subtopicName && !isOverview) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href={`/theory/${level}/${subject}/${examBoard}/${topicId}`}
              className="inline-flex items-center text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {topic.name} subtopics
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">📚</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
                {isOverview ? `${topic.name} Overview` : subtopicName?.replace(' (H)', '')}
              </h1>
              <p className="text-[var(--color-text-secondary)]">
                {examBoardInfo.name} {qualInfo.name} {subjectInfo.name} • {topic.name}
              </p>
            </div>
          </div>
          
          {/* Cross-link to Questions */}
          <div className="flex items-center gap-4">
            {!isOverview && (
              <Link
                href={`/${level}/${subject}/${examBoard}/practice/${topicId}/${subtopic}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-lg text-sm text-[var(--color-accent)] hover:bg-[var(--color-accent)]/20 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Practice Questions
              </Link>
            )}
            
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/10 rounded-md">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Theory Mode
              </span>
            </div>
          </div>
        </header>

        {/* Theory Notes Component */}
        <TheoryNotes
          subject={subject as string}
          level={level as string}
          examBoard={examBoard as string}
          topic={isOverview ? undefined : topic.name}
          subtopic={isOverview ? undefined : subtopicName}
        />
      </main>
    </div>
  );
}