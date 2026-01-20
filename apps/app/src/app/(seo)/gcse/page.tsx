import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { BreadcrumbJsonLd, EducationalResourceJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { getBreadcrumbs } from '@/lib/seo/utils';
import { subjects, examBoards, getTopicsBySubjectBoardAndLevel } from '@/lib/topics';
import type { Subject } from '@/types';

export const metadata: Metadata = {
  // Title: 46 chars
  title: 'GCSE Past Paper Questions | Practice by Topic',
  // Description: 156 chars
  description: 'Free GCSE past paper style questions organised by topic. AQA, Edexcel, OCR for Maths, Science, English & more. With mark schemes and worked solutions.',
  keywords: ['GCSE past papers', 'GCSE maths past papers', 'GCSE science past papers', 'GCSE revision', 'GCSE practice questions', 'AQA GCSE', 'Edexcel GCSE', 'OCR GCSE'],
  alternates: {
    canonical: '/gcse',
  },
  openGraph: {
    title: 'GCSE Past Paper Questions | Practice by Topic',
    description: 'Free GCSE past paper style questions organised by topic. AQA, Edexcel, OCR with mark schemes.',
    type: 'website',
    url: '/gcse',
  },
};

// This page is statically generated
export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate once per day

// GCSE FAQs for structured data
const gcseFaqs = [
  {
    question: 'What is the best way to revise for GCSE exams?',
    answer: 'The most effective GCSE revision combines active recall and spaced repetition. Practice past paper questions regularly, review mark schemes to understand examiner expectations, and focus extra time on weaker topics. Our AI generates unlimited practice questions to help you prepare thoroughly.',
  },
  {
    question: 'How many GCSE subjects should I practice?',
    answer: 'Most students take 8-10 GCSEs. Focus your revision time on subjects you find challenging while maintaining practice in all subjects. We recommend dedicating at least 20-30 minutes daily per subject in the months before exams.',
  },
  {
    question: 'Are GCSE past papers enough for revision?',
    answer: 'While past papers are valuable, they are limited in number. Once you have completed available past papers, you need additional practice material. Our AI-generated questions provide unlimited exam-style practice that matches AQA, Edexcel, and OCR specifications.',
  },
  {
    question: 'What GCSE subjects are available on Past Papers?',
    answer: 'We offer practice questions for core subjects including Mathematics, Physics, Chemistry, Biology, English Literature, History, Geography, Psychology, Economics, and more. Each subject covers AQA, Edexcel, and OCR exam board specifications.',
  },
];

export default function GCSEPage() {
  const breadcrumbs = getBreadcrumbs({ level: 'gcse' });

  // Get subjects that have GCSE content
  const availableSubjects = subjects.filter(subject => {
    return examBoards.some(board => {
      const topics = getTopicsBySubjectBoardAndLevel(subject.id as Subject, board.id, 'gcse');
      return topics.length > 0;
    });
  });

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <EducationalResourceJsonLd
        name="GCSE Practice Questions"
        description="Unlimited AI-generated GCSE exam questions with step-by-step solutions"
        url="/gcse"
        educationalLevel="GCSE"
      />
      <FAQJsonLd questions={gcseFaqs} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            GCSE Past Paper Questions
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Master your GCSE exams with unlimited AI-generated practice questions.
            Choose from {availableSubjects.length} subjects across AQA, Edexcel, and OCR exam boards.
          </p>
        </header>

        {/* Introduction Section - SEO Content */}
        <section className="mb-12 bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
            About GCSE Practice
          </h2>
          <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)]">
            <p className="mb-4">
              GCSEs (General Certificate of Secondary Education) are the main qualifications taken by
              14-16 year olds in England, Wales, and Northern Ireland. These examinations assess
              knowledge and skills across a wide range of subjects.
            </p>
            <p className="mb-4">
              Our AI-powered platform generates unlimited exam-style questions that match the exact
              format, difficulty, and marking style of your chosen exam board. Whether you&apos;re studying
              AQA, Edexcel, or OCR, our questions are tailored to give you authentic exam practice.
            </p>
            <p>
              Each question comes with detailed step-by-step solutions, helping you understand not
              just the answer, but the method and reasoning behind it.
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
                const topics = getTopicsBySubjectBoardAndLevel(subject.id as Subject, board.id, 'gcse');
                return count + topics.reduce((tc, t) => tc + t.subtopics.length, 0);
              }, 0);

              return (
                <Link
                  key={subject.id}
                  href={`/gcse/${subject.id}`}
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
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-xl border border-[var(--color-accent)]/30 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-shrink-0 p-4 bg-[var(--color-accent)]/20 rounded-xl">
                <span className="text-4xl">📝</span>
              </div>
              <div className="flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                  GCSE Past Paper Generator
                </h2>
                <p className="text-[var(--color-text-secondary)] mb-4">
                  Create custom mock exams by selecting your topics and difficulty level.
                  Generate full practice papers with mark schemes instantly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/past-papers#gcse-subjects"
                    className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
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
            {gcseFaqs.map((faq, index) => (
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
            tailored to your exam board.
          </p>
          <Link
            href="/gcse/maths"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Start with GCSE Maths
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </section>
      </main>
    </div>
  );
}
