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
  getAllSubjectParams,
} from '@/lib/seo/utils';
import {
  getSubjectInfo,
  getQualificationInfo,
  getExamBoardsBySubjectAndLevel,
  getTopicsBySubjectBoardAndLevel,
} from '@/lib/topics';
import type { Subject, QualificationLevel } from '@/types';

interface PageProps {
  params: Promise<{ level: string; subject: string }>;
}

export async function generateStaticParams() {
  return getAllSubjectParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { level, subject } = resolvedParams;

  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);

  if (!subjectInfo || !qualInfo) {
    return { title: 'Not Found' };
  }

  const title = generateSEOTitle({ level, subject });
  const description = generateSEODescription({ level, subject });

  return {
    title,
    description,
    keywords: [
      `${qualInfo.name} ${subjectInfo.name}`,
      `${qualInfo.name} ${subjectInfo.name} questions`,
      `${qualInfo.name} ${subjectInfo.name} practice`,
      `${qualInfo.name} ${subjectInfo.name} revision`,
      `${subjectInfo.name} past papers`,
    ],
    alternates: {
      canonical: `/${level}/${subject}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/${level}/${subject}`,
    },
  };
}

export const dynamic = 'force-static';
export const revalidate = 86400;

export default async function SubjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { level, subject } = resolvedParams;

  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);

  if (!subjectInfo || !qualInfo) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbs({ level, subject });
  const examBoards = getExamBoardsBySubjectAndLevel(subject as Subject, level as QualificationLevel);

  // Filter to only boards that have topics
  const availableBoards = examBoards.filter(board => {
    const topics = getTopicsBySubjectBoardAndLevel(subject as Subject, board.id, level as QualificationLevel);
    return topics.length > 0;
  });

  if (availableBoards.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <EducationalResourceJsonLd
        name={`${qualInfo.name} ${subjectInfo.name} Practice Questions`}
        description={generateSEODescription({ level, subject })}
        url={`/${level}/${subject}`}
        educationalLevel={qualInfo.name}
        subject={subjectInfo.name}
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{subjectInfo.icon}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
              {qualInfo.name} {subjectInfo.name}
            </h1>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            {subjectInfo.description}. Choose your exam board to access unlimited AI-generated
            practice questions with detailed solutions.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
            About {qualInfo.name} {subjectInfo.name}
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)]">
            <p className="mb-4">
              {qualInfo.name} {subjectInfo.name} covers {subjectInfo.description.toLowerCase()}.
              Our platform provides questions that match the exact specification requirements and
              exam style of each exam board.
            </p>
            <p>
              Select your exam board below to access topic-specific practice questions, each with
              comprehensive step-by-step solutions designed to help you understand the methodology
              and improve your exam technique.
            </p>
          </div>
        </section>

        {/* Exam Boards Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Choose Your Exam Board
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableBoards.map((board) => {
              const topics = getTopicsBySubjectBoardAndLevel(
                subject as Subject,
                board.id,
                level as QualificationLevel
              );
              const subtopicCount = topics.reduce((count, t) => count + t.subtopics.length, 0);

              return (
                <Link
                  key={board.id}
                  href={`/${level}/${subject}/${board.id}`}
                  className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)]">
                      {board.name}
                    </h3>
                    <svg
                      className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-[var(--color-text-secondary)] mb-3">
                    {board.fullName}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
                    <span>{topics.length} topics</span>
                    <span>&bull;</span>
                    <span>{subtopicCount} subtopics</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
            Other {qualInfo.name} Subjects
          </h2>
          <div className="flex flex-wrap gap-3">
            {['maths', 'physics', 'chemistry', 'biology'].filter(s => s !== subject).map((s) => {
              const info = getSubjectInfo(s as Subject);
              if (!info) return null;
              return (
                <Link
                  key={s}
                  href={`/${level}/${s}`}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                >
                  <span>{info.icon}</span>
                  <span>{info.name}</span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
