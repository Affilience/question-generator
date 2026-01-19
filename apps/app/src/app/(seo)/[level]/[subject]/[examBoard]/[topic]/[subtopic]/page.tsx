import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { BreadcrumbJsonLd, EducationalResourceJsonLd } from '@/components/seo/JsonLd';
import {
  getBreadcrumbs,
  generateSEOTitle,
  generateSEODescription,
  getIndexedSubtopicParams,
  slugify,
  unslugify,
  getRelatedTopics,
  getRelatedSubtopics,
  getCrossTopicSubtopics,
} from '@/lib/seo/utils';
import {
  getSubjectInfo,
  getQualificationInfo,
  getExamBoardInfo,
  getTopicsBySubjectBoardAndLevel,
} from '@/lib/topics';
import type { Subject, QualificationLevel, ExamBoard } from '@/types';
import { SampleQuestions } from './SampleQuestions';
import { shouldIndexSubtopic } from '@/lib/seo/indexed-pages';
import { getSampleQuestionsForSubtopic, getSEOContent } from '@/lib/supabase';

interface PageProps {
  params: Promise<{
    level: string;
    subject: string;
    examBoard: string;
    topic: string;
    subtopic: string;
  }>;
}

export async function generateStaticParams() {
  // Don't pre-generate ANY subtopic pages at build time
  // All subtopic pages will be generated on-demand via ISR
  // This keeps build size under Vercel's 75MB deployment limit
  return [];
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { level, subject, examBoard, topic, subtopic } = resolvedParams;

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

  const subtopicName = unslugify(subtopic);
  // Keep title under 60 chars total (including "| Past Papers" template suffix)
  // Format: "Subtopic - Board Level Subject" puts main keyword first for SEO
  const title = `${subtopicName} - ${boardInfo.name} ${qualInfo.name} ${subjectInfo.name}`;
  const description = `Practice unlimited ${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} questions on ${subtopicName}. AI-generated exam-style questions with step-by-step solutions.`;

  // Only index subtopics with verified search demand
  const shouldIndex = shouldIndexSubtopic(level, subject, examBoard, topic, subtopic);

  return {
    title,
    description,
    keywords: [
      `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} ${subtopicName}`,
      `${subtopicName} questions`,
      `${subtopicName} practice`,
      `${qualInfo.name} ${subtopicName}`,
      `${subtopicName} exam questions`,
      `${subtopicName} past paper questions`,
    ],
    alternates: {
      canonical: `/${level}/${subject}/${examBoard}/${topic}/${subtopic}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/${level}/${subject}/${examBoard}/${topic}/${subtopic}`,
    },
    robots: {
      index: shouldIndex,
      follow: true, // Allow link equity to flow to related pages
    },
  };
}

// Allow dynamic generation for non-indexed pages (ISR)
export const dynamicParams = true;
export const revalidate = 86400; // Revalidate daily

export default async function SubtopicPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { level, subject, examBoard, topic, subtopic } = resolvedParams;

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

  // Find the actual subtopic name - first try exact match
  let subtopicName = topicData.subtopics.find(s => slugify(s) === subtopic);

  // If no exact match, try fuzzy matching for backwards compatibility
  // This handles URLs generated with the old incorrect slugification that
  // stripped special characters like = instead of converting to -equals-
  if (!subtopicName) {
    // Generate what the old broken slugification would have produced
    const brokenSlugify = (s: string) => s
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '')
      .trim();

    const fuzzyMatch = topicData.subtopics.find(s => brokenSlugify(s) === subtopic);

    if (fuzzyMatch) {
      // Redirect to the correct URL
      const correctSlug = slugify(fuzzyMatch);
      permanentRedirect(`/${level}/${subject}/${examBoard}/${topic}/${correctSlug}`);
    }

    notFound();
  }

  // Check if this is an SEO page or practice-only page
  const isIndexedPage = shouldIndexSubtopic(level, subject, examBoard, topic, subtopic);

  // Non-indexed pages redirect directly to practice (no SEO content needed)
  // Use permanentRedirect (308) instead of redirect (307) for SEO - tells search engines this is permanent
  if (!isIndexedPage) {
    permanentRedirect(`/${level}/${subject}/${examBoard}/practice/${topic}/${subtopic}`);
  }

  // Fetch SEO content and sample questions from database
  const [seoContent, dbSampleQuestions] = await Promise.all([
    getSEOContent(level, subject, examBoard, topic, subtopic),
    getSampleQuestionsForSubtopic(level, subject, examBoard, topic, subtopic),
  ]);

  const breadcrumbs = getBreadcrumbs({ level, subject, examBoard, topic, subtopic });
  const relatedTopics = getRelatedTopics(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel,
    topic,
    4
  );
  const relatedSubtopics = getRelatedSubtopics(topicData, subtopic, 6);
  const crossTopicSubtopics = getCrossTopicSubtopics(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel,
    topic,
    6
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <EducationalResourceJsonLd
        name={`${boardInfo.name} ${qualInfo.name} ${subjectInfo.name}: ${subtopicName}`}
        description={generateSEODescription({ level, subject, examBoard, topic, subtopic })}
        url={`/${level}/${subject}/${examBoard}/${topic}/${subtopic}`}
        educationalLevel={qualInfo.name}
        subject={subjectInfo.name}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <article>
          <header className="mb-6">
            <div className="flex items-center gap-2 text-sm text-[var(--color-accent)] font-medium mb-2">
              <span>{boardInfo.name}</span>
              <span>&bull;</span>
              <span>{qualInfo.name}</span>
              <span>&bull;</span>
              <span>{subjectInfo.name}</span>
              <span>&bull;</span>
              <span>{topicData.name}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-3">
              {subtopicName}
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">
              {boardInfo.name} {qualInfo.name} {subjectInfo.name} practice questions with step-by-step solutions
            </p>
          </header>

          {/* PRIMARY CTA - Hero Section */}
          <section className="mb-10 bg-gradient-to-br from-[var(--color-accent)]/20 via-purple-500/15 to-blue-500/20 rounded-2xl border border-[var(--color-accent)]/40 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                  Start Practicing Now
                </h2>
                <p className="text-[var(--color-text-secondary)]">
                  Generate unlimited {subtopicName} questions. Choose your difficulty level, get instant feedback, and master this topic.
                </p>
                <div className="flex items-center gap-4 mt-3 text-sm text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited questions
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Detailed solutions
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {boardInfo.name} exam style
                  </span>
                </div>
              </div>
              <Link
                href={`/${level}/${subject}/${examBoard}/practice/${topic}/${subtopic}`}
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-accent)]/25 whitespace-nowrap"
              >
                Start Practice
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </section>

          {/* Sample Questions Section - Now comes before the about section */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)]">
                Sample Questions
              </h2>
              <span className="text-sm text-[var(--color-text-muted)]">
                Try before you start
              </span>
            </div>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Preview {boardInfo.name} {qualInfo.name} style questions on {subtopicName}.
              Click &quot;Show Solution&quot; to see the step-by-step answer.
            </p>

            <SampleQuestions
              level={level as QualificationLevel}
              subject={subject as Subject}
              examBoard={examBoard as ExamBoard}
              topicId={topic}
              subtopic={subtopicName}
              dbQuestions={dbSampleQuestions}
            />

            {/* Inline CTA after sample questions */}
            <div className="mt-8 text-center">
              <p className="text-[var(--color-text-muted)] mb-4">Want more questions like these?</p>
              <Link
                href={`/${level}/${subject}/${examBoard}/practice/${topic}/${subtopic}`}
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Generate Unlimited Questions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </section>

          {/* Topic Information - Now after sample questions */}
          <section className="mb-10 bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
              About {subtopicName} in {boardInfo.name} {qualInfo.name}
            </h2>
            <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)] space-y-4">
              {seoContent?.introduction ? (
                <div className="whitespace-pre-wrap">{seoContent.introduction}</div>
              ) : (
                <>
                  <p>
                    {subtopicName} is part of the {topicData.name} unit in the {boardInfo.name} {qualInfo.name} {subjectInfo.name} specification.
                    This topic appears regularly in {boardInfo.name} exams and understanding it thoroughly is essential for achieving top grades.
                  </p>
                  <p>
                    Questions on {subtopicName} can range from straightforward recall and application questions worth 1-2 marks,
                    to more challenging extended response questions worth 6 or more marks. The {boardInfo.name} mark scheme rewards
                    clear working, correct use of technical terminology, and well-structured answers.
                  </p>
                  <p>
                    To master this topic, practise a variety of question types and difficulty levels. Our AI-generated questions
                    match the {boardInfo.name} {qualInfo.name} exam style, helping you become familiar with how questions are
                    phrased and what examiners expect. Each question includes a detailed solution showing the full working and
                    mark allocation, so you can learn from your mistakes and improve your technique.
                  </p>
                </>
              )}
              <div className="grid sm:grid-cols-2 gap-4 not-prose mt-6">
                <div className="bg-[var(--color-bg-elevated)] rounded-lg p-4 border border-[var(--color-border)]">
                  <h3 className="font-medium text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What you&apos;ll practice
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    Exam-style questions matching the {boardInfo.name} specification, from basic to challenging
                  </p>
                </div>
                <div className="bg-[var(--color-bg-elevated)] rounded-lg p-4 border border-[var(--color-border)]">
                  <h3 className="font-medium text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    How it works
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    AI generates unique questions each time, with full worked solutions and mark schemes
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Related Subtopics */}
          {relatedSubtopics.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                Related {topicData.name} Subtopics
              </h2>
              <div className="flex flex-wrap gap-2">
                {relatedSubtopics.map((relSubtopic) => (
                  <Link
                    key={relSubtopic}
                    href={`/${level}/${subject}/${examBoard}/${topic}/${slugify(relSubtopic)}`}
                    className="px-4 py-2 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                  >
                    {relSubtopic}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Topics */}
          {relatedTopics.length > 0 && (
            <section className="mb-10">
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

          {/* Cross-Topic Subtopics - Links to subtopics from other topics for better internal linking */}
          {crossTopicSubtopics.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                More {boardInfo.name} {qualInfo.name} {subjectInfo.name} Practice
              </h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {crossTopicSubtopics.map((item) => (
                  <Link
                    key={`${item.topicId}-${item.slug}`}
                    href={`/${level}/${subject}/${examBoard}/${item.topicId}/${item.slug}`}
                    className="flex items-center justify-between px-4 py-3 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-lg text-sm hover:border-[var(--color-accent)]/50 transition-colors group"
                  >
                    <div>
                      <span className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)]">
                        {item.subtopic}
                      </span>
                      <span className="text-[var(--color-text-muted)] text-xs ml-2">
                        {item.topicName}
                      </span>
                    </div>
                    <svg className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to Topic Link */}
          <section className="border-t border-[var(--color-border)] pt-8">
            <Link
              href={`/${level}/${subject}/${examBoard}/${topic}`}
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to all {topicData.name} subtopics
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}
