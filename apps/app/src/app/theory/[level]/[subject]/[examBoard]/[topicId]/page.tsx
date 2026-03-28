import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { slugify } from '@/lib/seo/utils';
import {
  getSubjectInfo,
  getQualificationInfo,
  getExamBoardInfo,
  getTopicByIdSubjectBoardAndLevel,
} from '@/lib/topics';
import type { Subject, QualificationLevel, ExamBoard } from '@/types';

interface PageProps {
  params: Promise<{ level: string; subject: string; examBoard: string; topicId: string }>;
}

export default async function TheoryTopicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { level, subject, examBoard, topicId } = resolvedParams;

  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);
  const examBoardInfo = getExamBoardInfo(examBoard as ExamBoard);
  const topic = getTopicByIdSubjectBoardAndLevel(
    topicId,
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel
  );

  if (!subjectInfo || !qualInfo || !examBoardInfo || !topic) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href={`/theory/${level}/${subject}/${examBoard}`}
              className="inline-flex items-center text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to topics
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{topic.icon}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
              {topic.name} Theory
            </h1>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Choose a subtopic to access detailed theory explanations, key concepts, and study materials.
          </p>
        </header>

        {/* Mode Indicator */}
        <section className="mb-8">
          <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <div>
              <span className="font-medium text-[var(--color-text-primary)]">
                Theory Notes • {topic.name}
              </span>
              <p className="text-sm text-[var(--color-text-secondary)]">
                {examBoardInfo.name} {qualInfo.name} {subjectInfo.name}
              </p>
            </div>
            <div className="ml-auto">
              <Link
                href={`/${level}/${subject}/${examBoard}/practice/${topicId}`}
                className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
              >
                Switch to Questions →
              </Link>
            </div>
          </div>
        </section>

        {/* Subtopics Grid */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Choose a Subtopic ({topic.subtopics.length} available)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topic.subtopics.map((subtopic, index) => {
              const subtopicSlug = slugify(subtopic);
              const isHigher = subtopic.includes('(H)');
              
              return (
                <Link
                  key={index}
                  href={`/theory/${level}/${subject}/${examBoard}/${topicId}/${subtopicSlug}`}
                  className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5 transition-all duration-200 hover:border-blue-500/50 hover:bg-[var(--color-bg-elevated)] hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] leading-tight">
                      {subtopic.replace(' (H)', '')}
                    </h3>
                    <svg
                      className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {isHigher && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">
                        Higher Tier
                      </span>
                    )}
                    <span className="text-xs text-[var(--color-text-muted)]">
                      Theory notes
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* All Subtopics Option */}
        <section className="mt-8">
          <Link
            href={`/theory/${level}/${subject}/${examBoard}/${topicId}/overview`}
            className="group bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/30 p-6 transition-all duration-200 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/15 hover:to-blue-500/8 block"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="text-3xl">📋</div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">
                    Complete {topic.name} Overview
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Access all theory notes for this topic in one comprehensive guide
                  </p>
                </div>
              </div>
              <svg
                className="w-6 h-6 text-blue-500 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </section>
      </main>
    </div>
  );
}