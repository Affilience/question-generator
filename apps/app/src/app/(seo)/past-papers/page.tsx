import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/seo/JsonLd';
import { subjects, examBoards, getTopicsBySubjectBoardAndLevel } from '@/lib/topics';
import type { Subject } from '@/types';

export const metadata: Metadata = {
  // Title: 49 chars
  title: 'Past Paper Generator | Create Mock Exams Free',
  // Description: 155 chars
  description: 'Generate custom GCSE and A-Level past papers for any subject. AQA, Edexcel, OCR mock exams with mark schemes. Choose topics and difficulty level.',
  keywords: ['past paper generator', 'mock exam generator', 'GCSE past papers', 'A-Level past papers', 'create practice papers', 'custom mock exams'],
  alternates: {
    canonical: '/past-papers',
  },
  openGraph: {
    title: 'Past Paper Generator | Create Custom Mock Exams',
    description: 'Generate custom GCSE and A-Level past papers. Choose your subject, topics, and difficulty.',
    type: 'website',
    url: '/past-papers',
  },
};

export const dynamic = 'force-static';
export const revalidate = 86400;

const faqs = [
  {
    question: 'How does the past paper generator work?',
    answer: 'Our AI-powered generator creates custom practice papers based on your chosen subject, exam board, topics, and difficulty level. Each paper includes authentic exam-style questions with full mark schemes and worked solutions.',
  },
  {
    question: 'Can I choose which topics appear in my paper?',
    answer: 'Yes! You can select specific topics to include or exclude, set the difficulty level, and choose the number of questions. This lets you create targeted revision papers for your weak areas.',
  },
  {
    question: 'Are the generated papers similar to real exam papers?',
    answer: 'Our questions are designed to match the style, format, and difficulty of real AQA, Edexcel, and OCR exam papers. They follow the same mark allocation and command word patterns used in actual exams.',
  },
  {
    question: 'Do I get mark schemes with the generated papers?',
    answer: 'Yes, every generated paper comes with detailed mark schemes showing exactly how marks are awarded, plus step-by-step worked solutions to help you understand the method.',
  },
];

export default function PastPapersPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Past Paper Generator', href: '/past-papers', current: true },
  ];

  // Get subjects that have content for either GCSE or A-Level
  const availableSubjects = subjects.filter(subject => {
    return examBoards.some(board => {
      const gcseTopics = getTopicsBySubjectBoardAndLevel(subject.id as Subject, board.id, 'gcse');
      const alevelTopics = getTopicsBySubjectBoardAndLevel(subject.id as Subject, board.id, 'a-level');
      return gcseTopics.length > 0 || alevelTopics.length > 0;
    });
  });

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FAQJsonLd questions={faqs} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">📝</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
              Past Paper Generator
            </h1>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Create custom practice papers for GCSE and A-Level exams. Choose your subject,
            exam board, and topics to generate authentic mock exams with mark schemes.
          </p>
        </header>

        {/* Feature highlights */}
        <section className="mb-12 grid sm:grid-cols-3 gap-4">
          <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">Choose Your Topics</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Select specific topics to focus your revision on areas that need work</p>
          </div>
          <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5">
            <div className="text-2xl mb-2">📊</div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">Set Difficulty</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Adjust difficulty level from foundation to challenge grade 9 questions</p>
          </div>
          <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5">
            <div className="text-2xl mb-2">✅</div>
            <h3 className="font-semibold text-[var(--color-text-primary)] mb-1">Full Mark Schemes</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">Every paper includes detailed mark schemes and worked solutions</p>
          </div>
        </section>

        {/* Level Selection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Choose Your Level
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="#gcse-subjects"
              className="group bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl border border-blue-500/30 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">GCSE</h3>
              <p className="text-[var(--color-text-secondary)]">Generate practice papers for GCSE exams</p>
            </Link>
            <Link
              href="#alevel-subjects"
              className="group bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl border border-purple-500/30 p-6 transition-all hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">A-Level</h3>
              <p className="text-[var(--color-text-secondary)]">Generate practice papers for A-Level exams</p>
            </Link>
          </div>
        </section>

        {/* GCSE Subjects */}
        <section id="gcse-subjects" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            GCSE Past Paper Generator
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableSubjects.map((subject) => {
              // Check if this subject has GCSE content
              const hasGcse = examBoards.some(board => {
                const topics = getTopicsBySubjectBoardAndLevel(subject.id as Subject, board.id, 'gcse');
                return topics.length > 0;
              });

              if (!hasGcse) return null;

              return (
                <div
                  key={`gcse-${subject.id}`}
                  className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{subject.icon}</span>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">{subject.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {examBoards.map((board) => {
                      const topics = getTopicsBySubjectBoardAndLevel(subject.id as Subject, board.id, 'gcse');
                      if (topics.length === 0) return null;
                      return (
                        <Link
                          key={board.id}
                          href={`/gcse/${subject.id}/${board.id}/paper`}
                          className="px-3 py-1.5 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                        >
                          {board.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* A-Level Subjects */}
        <section id="alevel-subjects" className="mb-12 scroll-mt-20">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            A-Level Past Paper Generator
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableSubjects.map((subject) => {
              // Check if this subject has A-Level content
              const hasAlevel = examBoards.some(board => {
                const topics = getTopicsBySubjectBoardAndLevel(subject.id as Subject, board.id, 'a-level');
                return topics.length > 0;
              });

              if (!hasAlevel) return null;

              return (
                <div
                  key={`alevel-${subject.id}`}
                  className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{subject.icon}</span>
                    <h3 className="font-semibold text-[var(--color-text-primary)]">{subject.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {examBoards.map((board) => {
                      const topics = getTopicsBySubjectBoardAndLevel(subject.id as Subject, board.id, 'a-level');
                      if (topics.length === 0) return null;
                      return (
                        <Link
                          key={board.id}
                          href={`/a-level/${subject.id}/${board.id}/paper`}
                          className="px-3 py-1.5 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                        >
                          {board.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
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

        {/* CTA */}
        <section className="bg-gradient-to-r from-[var(--color-accent)]/20 to-purple-500/20 rounded-xl border border-[var(--color-accent)]/30 p-8 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
            Ready to Create Your First Paper?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-6 max-w-xl mx-auto">
            Choose a subject above to start generating custom practice papers tailored to your exam board.
          </p>
          <Link
            href="/gcse/maths/aqa/paper"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Generate GCSE Maths Paper
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </section>
      </main>
    </div>
  );
}
