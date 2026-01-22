import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { BreadcrumbJsonLd, EducationalResourceJsonLd } from '@/components/seo/JsonLd';
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
import type { Subject, QualificationLevel, ExamBoard } from '@/types';

interface PageProps {
  params: Promise<{ level: string; subject: string; examBoard: string }>;
}

export async function generateStaticParams() {
  return getAllExamBoardParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { level, subject, examBoard } = resolvedParams;

  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);
  const boardInfo = getExamBoardInfo(examBoard as ExamBoard);

  if (!subjectInfo || !qualInfo || !boardInfo) {
    return { title: 'Not Found' };
  }

  const title = generateSEOTitle({ level, subject, examBoard });
  const description = generateSEODescription({ level, subject, examBoard });

  return {
    title,
    description,
    keywords: [
      `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name}`,
      `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} questions`,
      `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} past papers`,
      `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} revision`,
    ],
    alternates: {
      canonical: `/${level}/${subject}/${examBoard}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/${level}/${subject}/${examBoard}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const dynamic = 'force-static';
export const revalidate = 86400;

export default async function ExamBoardPage({ params }: PageProps) {
  const resolvedParams = await params;
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
              href={`/${level}/${subject}/${examBoard}/practice/${topics[0]?.id || 'algebra'}/random`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3b82f6] to-[#2563eb] hover:from-[#2563eb] hover:to-[#1d4ed8] text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25"
            >
              <span className="text-lg">🎲</span>
              Random Practice
            </Link>
            <Link
              href={`/${level}/${subject}/${examBoard}/paper`}
              className="inline-flex items-center gap-2 bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-card)] border border-[var(--color-border)] text-[var(--color-text-primary)] px-5 py-2.5 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Generate Paper
            </Link>
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

        {/* Topics Grid */}
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

        {/* Quick Links Section */}
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
