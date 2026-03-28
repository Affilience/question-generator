'use client';

import Link from 'next/link';
import { Header } from '@/components/Header';

export default function ChooseModePage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            How would you like to study?
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Choose between practicing exam questions or reviewing comprehensive theory notes to master your subjects.
          </p>
        </header>

        {/* Mode Selection Cards */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Questions Mode */}
          <Link
            href="/questions"
            className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-8 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)] hover:shadow-lg"
          >
            <div className="text-center">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                Practice Questions
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Generate unlimited AI-powered exam questions with detailed step-by-step solutions. 
                Perfect for testing your knowledge and exam preparation.
              </p>
              
              {/* Features */}
              <div className="space-y-3 text-sm text-[var(--color-text-muted)] mb-6">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited AI-generated questions</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Detailed mark schemes & solutions</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Progress tracking & analytics</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Difficulty adjustment</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[var(--color-accent)] font-medium group-hover:gap-3 transition-all">
                <span>Start Practicing</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Theory Notes Mode */}
          <Link
            href="/theory"
            className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-8 transition-all duration-200 hover:border-[var(--color-accent)]/50 hover:bg-[var(--color-bg-elevated)] hover:shadow-lg"
          >
            <div className="text-center">
              <div className="text-6xl mb-6">📚</div>
              <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
                Theory Notes
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                Access comprehensive theory explanations, key concepts, and detailed notes for every topic. 
                Perfect for understanding fundamentals and revision.
              </p>
              
              {/* Features */}
              <div className="space-y-3 text-sm text-[var(--color-text-muted)] mb-6">
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Complete curriculum coverage</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Key formulas & equations</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Worked examples & explanations</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Exam tips & common mistakes</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-[var(--color-accent)] font-medium group-hover:gap-3 transition-all">
                <span>Start Learning</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </section>

        {/* Comparison Section */}
        <section className="bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-8">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-6 text-center">
            Not sure which to choose?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">📝 Choose Questions if you want to:</h3>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                <li>• Test your current knowledge</li>
                <li>• Practice exam technique</li>
                <li>• Get familiar with question formats</li>
                <li>• Track your progress over time</li>
                <li>• Build confidence for exams</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-text-primary)] mb-3">📚 Choose Theory Notes if you want to:</h3>
              <ul className="space-y-2 text-[var(--color-text-secondary)]">
                <li>• Learn new concepts from scratch</li>
                <li>• Review and revise key topics</li>
                <li>• Understand the theory behind problems</li>
                <li>• Get comprehensive explanations</li>
                <li>• Build a solid foundation</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-6 text-[var(--color-text-muted)] text-sm">
            💡 <strong>Pro tip:</strong> You can switch between modes at any time to combine learning and practice!
          </div>
        </section>
      </main>
    </div>
  );
}