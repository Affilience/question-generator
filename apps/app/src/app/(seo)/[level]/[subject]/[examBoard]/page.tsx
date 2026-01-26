'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { BreadcrumbJsonLd, EducationalResourceJsonLd } from '@/components/seo/JsonLd';
import { SubjectTabs, TabType } from '@/components/SubjectTabs';
import { PracticalGrid } from '@/components/PracticalGrid';
import {
  getBreadcrumbs,
  generateSEOTitle,
  generateSEODescription,
  getAllExamBoardParams,
  slugify,
} from '@/lib/seo/utils';
import {
  getSubjectInfo,
  getQualificationInfo,
  getExamBoardInfo,
  getTopicsBySubjectBoardAndLevel,
} from '@/lib/topics';
import { getPracticals, subjectHasPracticals } from '@/lib/practicals';
import type { Subject, QualificationLevel, ExamBoard } from '@/types';

interface PageProps {
  params: Promise<{ level: string; subject: string; examBoard: string }>;
}

// Note: This is now a client component for interactive tabs
// Static generation and metadata are handled at build time via other means

export default function ExamBoardPage({ params }: PageProps) {
  const [resolvedParams, setResolvedParams] = useState<{ level: string; subject: string; examBoard: string } | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>('topics');

  // Resolve params on client side
  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return (
      <div className="min-h-screen bg-[var(--color-bg-deepest)]">
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-4 border-[var(--color-accent)] border-t-transparent rounded-full animate-spin" />
          </div>
        </main>
      </div>
    );
  }

  const { level, subject, examBoard } = resolvedParams;

  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);
  const boardInfo = getExamBoardInfo(examBoard as ExamBoard);

  if (!subjectInfo || !qualInfo || !boardInfo) {
    notFound();
  }

  const topics = getTopicsBySubjectBoardAndLevel(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel
  );

  if (topics.length === 0) {
    notFound();
  }

  const practicals = getPracticals(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel
  );

  const breadcrumbs = getBreadcrumbs({ level, subject, examBoard });
  const totalSubtopics = topics.reduce((count, t) => count + t.subtopics.length, 0);

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <EducationalResourceJsonLd
        name={`${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} Practice Questions`}
        description={generateSEODescription({ level, subject, examBoard })}
        url={`/${level}/${subject}/${examBoard}`}
        educationalLevel={qualInfo.name}
        subject={subjectInfo.name}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm text-[var(--color-accent)] font-medium mb-2">
            <span>{boardInfo.name}</span>
            <span>&bull;</span>
            <span>{qualInfo.name}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{subjectInfo.icon}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
              {boardInfo.name} {qualInfo.name} {subjectInfo.name}
            </h1>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mb-6">
            Practice {totalSubtopics}+ subtopics across {topics.length} topics.
            All questions match the {boardInfo.name} {qualInfo.name} {subjectInfo.name} specification.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${level}/${subject}/${examBoard}/paper`}
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Generate Practice Paper
            </Link>
            <span className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Choose topics & difficulty
            </span>
          </div>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
            About {boardInfo.name} {qualInfo.name} {subjectInfo.name}
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)]">
            <p className="mb-4">
              The {boardInfo.fullName} ({boardInfo.name}) {qualInfo.name} {subjectInfo.name}
              specification covers all the key concepts you need to master for your exams.
              {boardInfo.description}
            </p>
            <p>
              Our AI-generated questions are specifically designed to match the style, format,
              and difficulty level of {boardInfo.name} {qualInfo.name} {subjectInfo.name} exams.
              Each question includes detailed solutions showing full working.
            </p>
          </div>
        </section>

        {/* Subject Navigation Tabs */}
        <SubjectTabs 
          subject={subject as Subject}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Topics Grid - shown when topics tab is active */}
        {activeTab === 'topics' && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
              All Topics
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics.map((topic) => (
                <Link
                  key={topic.id}
                  href={`/${level}/${subject}/${examBoard}/${topic.id}`}
                  className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`text-2xl p-2 rounded-lg ${topic.color} bg-opacity-20`}>
                      {topic.icon}
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
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                    {topic.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-3 line-clamp-2">
                    {topic.description}
                  </p>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    {topic.subtopics.length} subtopics
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Required Practicals Grid - shown when practicals tab is active */}
        {activeTab === 'practicals' && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
              Required Practicals
            </h2>
            <PracticalGrid 
              practicals={practicals}
              examBoard={examBoard as ExamBoard}
              level={level as QualificationLevel}
            />
          </section>
        )}

        {/* Popular Subtopics - only shown for topics tab */}
        {activeTab === 'topics' && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
              Popular Subtopics
            </h2>
            <div className="flex flex-wrap gap-2">
              {topics.slice(0, 3).flatMap(topic =>
                topic.subtopics.slice(0, 3).map(subtopic => {
                  const slug = slugify(subtopic);
                  return (
                    <Link
                      key={`${topic.id}-${slug}`}
                      href={`/${level}/${subject}/${examBoard}/${topic.id}/${slug}`}
                      className="px-3 py-1.5 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                    >
                      {subtopic}
                    </Link>
                  );
                })
              )}
            </div>
          </section>
        )}

        {/* Other Exam Boards */}
        <section>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
            Other Exam Boards for {qualInfo.name} {subjectInfo.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {['aqa', 'edexcel', 'ocr'].filter(b => b !== examBoard).map((b) => {
              const board = getExamBoardInfo(b as ExamBoard);
              const boardTopics = getTopicsBySubjectBoardAndLevel(
                subject as Subject,
                b as ExamBoard,
                level as QualificationLevel
              );
              if (!board || boardTopics.length === 0) return null;
              return (
                <Link
                  key={b}
                  href={`/${level}/${subject}/${b}`}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                >
                  <span className="font-semibold">{board.name}</span>
                  <span className="text-[var(--color-text-muted)]">{boardTopics.length} topics</span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
