'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { qualifications } from '@/lib/topics';

export default function TheoryPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/choose-mode"
              className="inline-flex items-center text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to mode selection
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">📚</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
              Theory Notes
            </h1>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Choose your qualification level to access comprehensive theory explanations and detailed notes for every topic.
          </p>
        </header>

        {/* Mode Indicator */}
        <section className="mb-8">
          <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <div>
              <span className="font-medium text-[var(--color-text-primary)]">Theory Notes Mode Selected</span>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Perfect for understanding concepts and revision
              </p>
            </div>
            <div className="ml-auto">
              <Link
                href="/questions"
                className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
              >
                Switch to Practice Questions →
              </Link>
            </div>
          </div>
        </section>

        {/* Choose Level */}
        <section>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">
            Choose Your Qualification Level
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {qualifications.map((qual) => (
              <Link
                key={qual.id}
                href={`/theory/${qual.id}`}
                className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-8 transition-all duration-200 hover:border-blue-500/50 hover:bg-[var(--color-bg-elevated)] hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                      {qual.name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {qual.fullName}
                    </p>
                  </div>
                  <span className="text-4xl">{qual.id === 'a-level' ? '🎓' : '📚'}</span>
                </div>
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                  {qual.description}. Access comprehensive theory notes covering all curriculum requirements.
                </p>
                
                {/* Features for this level */}
                <div className="space-y-2 text-sm text-[var(--color-text-muted)] mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Complete curriculum coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Key formulas & worked examples</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Exam tips & common mistakes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Searchable & cross-referenced</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--color-text-muted)]">
                    View subjects
                  </span>
                  <svg
                    className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Theory Notes Info */}
        <section className="mt-12 bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-8">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6">
            What's included in Theory Notes?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Core Concepts</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Comprehensive explanations of fundamental principles and theories
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📐</div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Formulas</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                All essential formulas with explanations and derivations
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Examples</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Worked examples showing step-by-step problem solving
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">⚠️</div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-2">Exam Tips</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Common mistakes to avoid and exam-specific guidance
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}