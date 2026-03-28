import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import {
  getSubjectInfo,
  getQualificationInfo,
  getExamBoardInfo,
  getTopicsBySubjectBoardAndLevel,
} from '@/lib/topics';
import type { Subject, QualificationLevel, ExamBoard } from '@/types';

interface PageProps {
  params: Promise<{ level: string; subject: string; examBoard: string }>;
}

export default async function TheoryExamBoardPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { level, subject, examBoard } = resolvedParams;

  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);
  const examBoardInfo = getExamBoardInfo(examBoard as ExamBoard);

  if (!subjectInfo || !qualInfo || !examBoardInfo) {
    notFound();
  }

  const topics = getTopicsBySubjectBoardAndLevel(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel
  );

  if (topics.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-deepest)]">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href={`/theory/${level}/${subject}`}
              className="inline-flex items-center text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] transition-colors"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to exam boards
            </Link>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">{subjectInfo.icon}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)]">
              {examBoardInfo.name} {qualInfo.name} {subjectInfo.name}
            </h1>
          </div>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
            Theory notes for {examBoardInfo.fullName} {qualInfo.name} {subjectInfo.name}. 
            Choose a topic to access comprehensive explanations and study materials.
          </p>
        </header>

        {/* Mode Indicator */}
        <section className="mb-8">
          <div className="flex items-center gap-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <div>
              <span className="font-medium text-[var(--color-text-primary)]">
                Theory Notes • {examBoardInfo.name} {qualInfo.name} {subjectInfo.name}
              </span>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Complete curriculum coverage aligned with {examBoardInfo.name} specification
              </p>
            </div>
            <div className="ml-auto">
              <Link
                href={`/${level}/${subject}/${examBoard}`}
                className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
              >
                Switch to Questions →
              </Link>
            </div>
          </div>
        </section>

        {/* Topics Grid */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
            Choose a Topic ({topics.length} available)
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Link
                key={topic.id}
                href={`/theory/${level}/${subject}/${examBoard}/${topic.id}`}
                className="group bg-[var(--color-bg-card)] rounded-xl border border-[var(--color-border)] p-6 transition-all duration-200 hover:border-blue-500/50 hover:bg-[var(--color-bg-elevated)] hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{topic.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                        {topic.name}
                      </h3>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-[var(--color-text-muted)] group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                
                <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                  {topic.description || `Complete theory coverage for ${topic.name}`}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                  <span>{topic.subtopics.length} subtopics</span>
                  <span>&bull;</span>
                  <span>Theory notes</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}