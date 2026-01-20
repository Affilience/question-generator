import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { BreadcrumbJsonLd, EducationalResourceJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbs } from '@/lib/seo/utils';
import { subjects, examBoards, getTopicsBySubjectBoardAndLevel } from '@/lib/topics';
import type { Subject } from '@/types';

// A-Level FAQs for structured data
const alevelFaqs = [
  {
    question: 'How do I effectively revise for A-Level exams?',
    answer: 'A-Level revision requires deeper engagement than GCSE. Focus on understanding underlying concepts, practice extended response questions, and develop exam technique through timed practice. Our AI generates unlimited A-Level questions with detailed solutions to help build your skills.',
  },
  {
    question: 'How many A-Level subjects should I study?',
    answer: 'Most students take 3-4 A-Levels. Universities typically require 3 A-Levels for entry. Quality of grades matters more than quantity, so focus on subjects relevant to your intended degree and career path.',
  },
  {
    question: 'What makes A-Level questions different from GCSE?',
    answer: 'A-Level questions require more advanced problem-solving, longer extended answers, and deeper conceptual understanding. Questions often combine multiple topics and require you to apply knowledge in unfamiliar contexts. Our questions match these A-Level expectations.',
  },
  {
    question: 'How can I improve my A-Level exam technique?',
    answer: 'Practice with exam-style questions regularly, study mark schemes to understand how marks are awarded, work on time management, and learn to structure extended responses effectively. Use our step-by-step solutions to understand examiner expectations.',
  },
];

export const metadata: Metadata = {
  // Title: 49 chars
  title: 'A-Level Past Paper Questions | Practice by Topic',
  // Description: 158 chars
  description: 'Free A-Level past paper style questions organised by topic. AQA, Edexcel, OCR for Maths, Sciences, English & more. With mark schemes and worked solutions.',
  keywords: ['A-Level past papers', 'AQA A-Level past papers', 'A-Level revision', 'A-Level practice questions', 'AQA A-Level', 'Edexcel A-Level', 'OCR A-Level'],
  alternates: {
    canonical: '/a-level',
  },
  openGraph: {
    title: 'A-Level Past Paper Questions | Practice by Topic',
    description: 'Free A-Level past paper style questions organised by topic. AQA, Edexcel, OCR with mark schemes.',
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
      <FAQJsonLd questions={alevelFaqs} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            A-Level Past Paper Questions
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

        {/* Paper Generator Promo */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-xl border border-purple-500/30 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-shrink-0 p-4 bg-purple-500/20 rounded-xl">
                <span className="text-4xl">📝</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                  A-Level Past Paper Generator
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Create custom A-Level mock exams tailored to your specification.
                  Choose topics, set difficulty, and get full papers with mark schemes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/past-papers#alevel-subjects"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
                  >
                    Generate Paper
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <span className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Full mark schemes included
                  </span>
                </div>
              </div>
            </div>
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

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {alevelFaqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)]"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-[var(--color-text-primary)] font-medium">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-[var(--color-text-muted)] transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-[var(--color-text-secondary)] leading-relaxed">
                  {faq.answer}
                </div>
              </details>
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
