import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { BreadcrumbJsonLd, EducationalResourceJsonLd, CourseJsonLd, CollectionPageJsonLd } from '@/components/seo/JsonLd';
import { ExamBoardContent } from './ExamBoardContent';
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
import { getPracticals } from '@/lib/practicals';
import type { Subject, QualificationLevel, ExamBoard } from '@/types';

interface PageProps {
  params: Promise<{ level: string; subject: string; examBoard: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { level, subject, examBoard } = await params;
  const title = generateSEOTitle({ level, subject, examBoard });
  const description = generateSEODescription({ level, subject, examBoard });
  
  return {
    title,
    description,
    alternates: {
      canonical: `/${level}/${subject}/${examBoard}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/${level}/${subject}/${examBoard}`,
    },
  };
}

// Generate static params for all valid combinations
export async function generateStaticParams() {
  return getAllExamBoardParams();
}

export default async function ExamBoardPage({ params }: PageProps) {
  const { level, subject, examBoard } = await params;

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
      <CourseJsonLd
        name={`${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} Practice Course`}
        description={`Comprehensive ${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} practice questions covering all topics in the specification. AI-generated questions with detailed solutions.`}
        url={`/${level}/${subject}/${examBoard}`}
        provider="Past Papers"
        educationalLevel={qualInfo.name}
        subject={subjectInfo.name}
        examBoard={boardInfo.name}
        topics={topics.map(t => t.name)}
      />
      <CollectionPageJsonLd
        name={`${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} Topics`}
        description={`Browse all ${topics.length} topics for ${boardInfo.name} ${qualInfo.name} ${subjectInfo.name}`}
        url={`/${level}/${subject}/${examBoard}`}
        numberOfItems={topics.length}
        itemType="LearningResource"
        items={topics.map(topic => ({
          name: topic.name,
          description: topic.description,
          url: `/${level}/${subject}/${examBoard}/${topic.id}`
        }))}
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

        {/* Client-side Interactive Content */}
        <ExamBoardContent 
          level={level}
          subject={subject as Subject}
          examBoard={examBoard as ExamBoard}
          topics={topics}
          practicals={practicals}
          subjectInfo={subjectInfo}
          qualInfo={qualInfo}
          boardInfo={boardInfo}
        />
      </main>
    </div>
  );
}
