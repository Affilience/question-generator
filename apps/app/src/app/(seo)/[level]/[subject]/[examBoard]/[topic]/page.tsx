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
  getAllTopicParams,
  slugify,
  getRelatedTopics,
} from '@/lib/seo/utils';
import {
  getSubjectInfo,
  getQualificationInfo,
  getExamBoardInfo,
  getTopicsBySubjectBoardAndLevel,
} from '@/lib/topics';
import type { Subject, QualificationLevel, ExamBoard } from '@/types';

interface PageProps {
  params: Promise<{ level: string; subject: string; examBoard: string; topic: string }>;
}

export async function generateStaticParams() {
  return getAllTopicParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { level, subject, examBoard, topic } = resolvedParams;

  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);
  const boardInfo = getExamBoardInfo(examBoard as ExamBoard);
  const topics = getTopicsBySubjectBoardAndLevel(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel
  );
  const topicData = topics.find(t => t.id === topic);

  if (!subjectInfo || !qualInfo || !boardInfo || !topicData) {
    return { title: 'Not Found' };
  }

  const title = generateSEOTitle({ level, subject, examBoard, topic });
  const description = generateSEODescription({ level, subject, examBoard, topic });

  return {
    title,
    description,
    keywords: [
      `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} ${topicData.name}`,
      `${topicData.name} questions`,
      `${topicData.name} practice`,
      `${qualInfo.name} ${topicData.name}`,
      ...topicData.subtopics.slice(0, 5),
    ],
    alternates: {
      canonical: `/${level}/${subject}/${examBoard}/${topic}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/${level}/${subject}/${examBoard}/${topic}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const dynamic = 'force-static';
export const revalidate = 86400;

export default async function TopicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { level, subject, examBoard, topic } = resolvedParams;

  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);
  const boardInfo = getExamBoardInfo(examBoard as ExamBoard);
  const topics = getTopicsBySubjectBoardAndLevel(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel
  );
  const topicData = topics.find(t => t.id === topic);

  if (!subjectInfo || !qualInfo || !boardInfo || !topicData) {
    notFound();
  }

  const breadcrumbs = getBreadcrumbs({ level, subject, examBoard, topic });
  const relatedTopics = getRelatedTopics(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel,
    topic
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <EducationalResourceJsonLd
        name={`${boardInfo.name} ${qualInfo.name} ${subjectInfo.name}: ${topicData.name}`}
        description={generateSEODescription({ level, subject, examBoard, topic })}
        url={`/${level}/${subject}/${examBoard}/${topic}`}
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
            <span>&bull;</span>
            <span>{subjectInfo.name}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className={`text-4xl p-3 rounded-xl ${topicData.color} bg-opacity-20`}>
              {topicData.icon}
            </span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
                {topicData.name}
              </h1>
              <p className="text-[var(--color-text-secondary)]">
                {topicData.description}
              </p>
            </div>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Practice {topicData.subtopics.length} subtopics in {topicData.name}.
            All questions match the {boardInfo.name} {qualInfo.name} specification.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
            About {topicData.name}
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)]">
            <p className="mb-4">
              {topicData.name} is a key topic in the {boardInfo.name} {qualInfo.name} {subjectInfo.name}
              specification. This topic covers {topicData.description.toLowerCase()}.
            </p>
            <p>
              Master all {topicData.subtopics.length} subtopics below with unlimited AI-generated
              questions. Each subtopic page includes sample questions and the ability to generate
              unlimited practice questions with detailed solutions.
            </p>
          </div>
        </section>

        {/* Subtopics Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            All Subtopics ({topicData.subtopics.length})
          </h2>

          {/* Random Practice Card */}
          <Link
            href={`/${level}/${subject}/${examBoard}/practice/${topic}/random`}
            className="group flex items-center justify-between bg-gradient-to-br from-[#1a2a3a] to-[#0f1a24] rounded-xl border border-[#3b82f6]/30 p-4 mb-4 transition-all duration-300 hover:border-[#3b82f6] hover:shadow-[0_0_30px_rgba(59,130,246,0.4),0_0_60px_rgba(59,130,246,0.15)] hover:scale-[1.01]"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center">
                <span className="text-xl">🎲</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#60a5fa]">Random Practice</h3>
                <p className="text-sm text-[#3b82f6]">Practice any subtopic from {topicData.name}</p>
              </div>
            </div>
            <svg
              className="w-5 h-5 text-[#3b82f6] group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topicData.subtopics.map((subtopic) => {
              const subtopicSlug = slugify(subtopic);
              return (
                <Link
                  key={subtopicSlug}
                  href={`/${level}/${subject}/${examBoard}/${topic}/${subtopicSlug}`}
                  className="group flex items-center justify-between bg-[var(--color-bg-card)] rounded-lg border border-[var(--color-border)] p-4 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
                >
                  <span className="text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    {subtopic}
                  </span>
                  <svg
                    className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Quick Start CTA */}
        <section className="mb-12 bg-gradient-to-r from-[var(--color-accent)]/20 to-purple-500/20 rounded-xl border border-[var(--color-accent)]/30 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
            Start Practicing {topicData.name}
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4">
            Choose any subtopic above to begin practicing with unlimited AI-generated questions.
          </p>
          <Link
            href={`/${level}/${subject}/${examBoard}/${topic}/${slugify(topicData.subtopics[0])}`}
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
          >
            Start with {topicData.subtopics[0]}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </section>

        {/* Related Topics */}
        {relatedTopics.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
              Other {boardInfo.name} {qualInfo.name} {subjectInfo.name} Topics
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedTopics.map((relTopic) => (
                <Link
                  key={relTopic.id}
                  href={`/${level}/${subject}/${examBoard}/${relTopic.id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                >
                  <span>{relTopic.icon}</span>
                  <span>{relTopic.name}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
