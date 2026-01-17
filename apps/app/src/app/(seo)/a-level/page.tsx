import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { BreadcrumbJsonLd, EducationalResourceJsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbs } from '@/lib/seo/utils';
import { subjects, examBoards, getTopicsBySubjectBoardAndLevel } from '@/lib/topics';
import type { Subject } from '@/types';

export const metadata: Metadata = {
  title: 'A-Level Practice Questions - All Subjects | Past Papers',
  description: 'Practice unlimited A-Level exam questions across all subjects. AI-generated questions matching AQA, Edexcel, and OCR exam board styles with step-by-step solutions.',
  keywords: ['A-Level', 'A-Level past papers', 'A-Level revision', 'A-Level practice questions', 'AQA A-Level', 'Edexcel A-Level', 'OCR A-Level'],
  alternates: {
    canonical: '/a-level',
  },
  openGraph: {
    title: 'A-Level Practice Questions - All Subjects',
    description: 'Practice unlimited A-Level exam questions across all subjects with AI-generated questions and detailed solutions.',
    type: 'website',
    url: '/a-level',
  },
};

// This page is statically generated
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate once per day

export default function ALevelPage() {
  const breadcrumbs = getBreadcrumbs({ level: 'a-level' });

  // Get subjects that have A-Level content
  const availableSubjects = subjects.filter(subject => {
    return examBoards.some(board => {
      const topics = getTopicsBySubjectBoardAndLevel(subject.id as Subject, board.id, 'a-level');
      return topics.length > 0;
    });
  });

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <EducationalResourceJsonLd
        name="A-Level Practice Questions"
        description="Unlimited AI-generated A-Level exam questions with step-by-step solutions"
        url="/a-level"
        educationalLevel="A-Level"
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            A-Level Practice Questions
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Prepare for your A-Level exams with unlimited AI-generated practice questions.
            Choose from {availableSubjects.length} subjects across AQA, Edexcel, and OCR exam boards.
          </p>
        </header>

        {/* Introduction Section - SEO Content */}
        <section className="mb-12 bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
            About A-Level Practice
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)]">
            <p className="mb-4">
              A-Levels (Advanced Level qualifications) are the gold standard for post-16 education
              in England, Wales, and Northern Ireland. These qualifications are essential for
              university admissions and career progression.
            </p>
            <p className="mb-4">
              Our AI-powered platform generates unlimited A-Level exam-style questions that match
              the exact format, command words, and marking criteria of your chosen exam board.
              The questions reflect the increased depth and complexity expected at A-Level.
            </p>
            <p>
              Every question includes comprehensive step-by-step solutions, showing full working
              and explaining key concepts to help you develop deep understanding and exam technique.
            </p>
          </div>
        </section>

        {/* Subjects Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Choose a Subject
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableSubjects.map((subject) => {
              const topicCount = examBoards.reduce((count, board) => {
                const topics = getTopicsBySubjectBoardAndLevel(subject.id as Subject, board.id, 'a-level');
                return count + topics.reduce((tc, t) => tc + t.subtopics.length, 0);
              }, 0);

              return (
                <Link
                  key={subject.id}
                  href={`/a-level/${subject.id}`}
                  className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{subject.icon}</span>
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
                    {subject.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-3">
                    {subject.description}
                  </p>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    {topicCount}+ subtopics available
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Exam Boards Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Supported Exam Boards
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {examBoards.map((board) => (
              <div
                key={board.id}
                className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6"
              >
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
                  {board.name}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                  {board.fullName}
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {board.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[var(--color-accent)]/20 to-purple-500/20 rounded-xl border border-[var(--color-accent)]/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Ready to Start Practicing?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
            Choose any subject above to begin practicing with unlimited AI-generated questions
            tailored to your A-Level exam board.
          </p>
          <Link
            href="/a-level/maths"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Start with A-Level Maths
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </section>
      </main>
    </div>
  );
}
