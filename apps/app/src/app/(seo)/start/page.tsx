import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Get Started - Choose Your Level | Past Papers',
  description: 'Choose your qualification level to start practicing. GCSE and A-Level exam questions available across all major exam boards.',
  alternates: {
    canonical: '/start',
  },
};

export const dynamic = 'force-static';

const levels = [
  {
    id: 'gcse',
    name: 'GCSE',
    fullName: 'General Certificate of Secondary Education',
    description: 'For students aged 14-16 in Years 10-11',
    subjects: '12+ subjects',
    boards: 'AQA, Edexcel, OCR',
    href: '/gcse',
    gradient: 'from-blue-500 to-cyan-500',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 'a-level',
    name: 'A-Level',
    fullName: 'Advanced Level',
    description: 'For students aged 16-18 in Years 12-13',
    subjects: '10+ subjects',
    boards: 'AQA, Edexcel, OCR',
    href: '/a-level',
    gradient: 'from-violet-500 to-purple-500',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
];

export default function StartPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Get Started', href: '/start', current: true },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Breadcrumbs items={breadcrumbs} />

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Choose Your Level
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Select your qualification level to access unlimited practice questions tailored to your exam board.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {levels.map((level) => (
            <Link
              key={level.id}
              href={level.href}
              className="group relative bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] p-8 transition-all duration-300 hover:border-[var(--color-accent)]/50 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              {/* Gradient accent */}
              <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${level.gradient}`} />

              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${level.gradient} flex items-center justify-center text-white mb-6`}>
                {level.icon}
              </div>

              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                {level.name}
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] mb-4">
                {level.fullName}
              </p>
              <p className="text-[var(--color-text-secondary)] mb-6">
                {level.description}
              </p>

              <div className="space-y-2 text-sm text-[var(--color-text-muted)]">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {level.subjects}
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {level.boards}
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 text-[var(--color-accent)] font-medium group-hover:gap-3 transition-all">
                Start practicing
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Info section */}
        <div className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 sm:p-8 text-center">
          <h2 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
            Free to Start
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-4 max-w-xl mx-auto">
            Practice up to 5 questions per day for free. No account required to get started.
            Create an account to track your progress and unlock more features.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--color-text-muted)]">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No credit card needed
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Full solutions included
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Mark schemes included
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
