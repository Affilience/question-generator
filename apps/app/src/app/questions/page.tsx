'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';
import { qualifications } from '@/lib/topics';

export default function QuestionsPage() {
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
            <span className="text-4xl">📝</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
              Practice Questions
            </h1>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Choose your qualification level to access unlimited AI-generated exam questions with detailed solutions.
          </p>
        </header>

        {/* Mode Indicator */}
        <section className="mb-8">
          <div className="flex items-center gap-3 p-4 bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-xl">
            <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <div>
              <span className="font-medium text-[var(--color-text-primary)]">Questions Mode Selected</span>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Perfect for testing knowledge and exam preparation
              </p>
            </div>
            <div className="ml-auto">
              <Link
                href="/theory"
                className="text-sm text-[var(--color-accent)] hover:text-[var(--color-accent)]/80 transition-colors"
              >
                Switch to Theory Notes →
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
                href={`/${qual.id}`}
                className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-8 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)] hover:shadow-lg"
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
                  {qual.description}
                </p>
                
                {/* Features for this level */}
                <div className="space-y-2 text-sm text-[var(--color-text-muted)] mb-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>All exam boards (AQA, Edexcel, OCR)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Multiple subjects available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Difficulty levels: Easy to Hard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Progress tracking & analytics</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--color-text-muted)]">
                    View subjects
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
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}