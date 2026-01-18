import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPracticalById, getPracticals } from '@/lib/practicals';
import { getExamBoardInfo, getSubjectInfo, getQualificationInfo } from '@/lib/topics';
import { getAllPracticalParams, getPracticalBreadcrumbs, getRelatedPracticals } from '@/lib/seo/utils';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { BreadcrumbJsonLd, EducationalResourceJsonLd } from '@/components/seo/JsonLd';
import { PracticalSubtopic, ExamBoard, QualificationLevel, Subject } from '@/types';
import { PracticalProgress } from './PracticalProgress';

// Subtopic display info
const subtopicInfo: Record<PracticalSubtopic, { icon: string; description: string }> = {
  'Method': { icon: '📋', description: 'Describe the procedure step by step' },
  'Variables': { icon: '🎯', description: 'Identify and explain variables' },
  'Equipment': { icon: '🔬', description: 'Name and justify equipment choices' },
  'Results Analysis': { icon: '📊', description: 'Calculate and interpret data' },
  'Graph Skills': { icon: '📈', description: 'Plot, analyse and interpret graphs' },
  'Errors': { icon: '⚠️', description: 'Identify sources of error' },
  'Improvements': { icon: '✨', description: 'Suggest how to improve accuracy' },
  'Safety': { icon: '🦺', description: 'Identify hazards and precautions' },
};

interface PageProps {
  params: Promise<{
    level: string;
    subject: string;
    examBoard: string;
    practicalId: string;
  }>;
}

export async function generateStaticParams() {
  return getAllPracticalParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { level, subject, examBoard, practicalId } = await params;

  const practical = getPracticalById(practicalId);
  const boardInfo = getExamBoardInfo(examBoard as ExamBoard);
  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);

  if (!practical || !boardInfo || !subjectInfo || !qualInfo) {
    return { title: 'Practical Not Found' };
  }

  const title = `${practical.name} - ${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} Required Practical`;
  const description = `Practice questions for ${practical.name}. ${practical.description} ${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} required practical with step-by-step solutions.`;

  return {
    title,
    description,
    keywords: [
      `${practical.name}`,
      `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} required practical`,
      `${practical.name} questions`,
      `${practical.name} method`,
      `${qualInfo.name} ${subjectInfo.name} practical`,
      `required practical ${subjectInfo.name}`,
    ],
    alternates: {
      canonical: `/${level}/${subject}/${examBoard}/practicals/${practicalId}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `/${level}/${subject}/${examBoard}/practicals/${practicalId}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate daily

export default async function PracticalPage({ params }: PageProps) {
  const { level, subject, examBoard, practicalId } = await params;

  const practical = getPracticalById(practicalId);
  const examBoardInfo = getExamBoardInfo(examBoard as ExamBoard);
  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);

  if (!practical || !examBoardInfo || !subjectInfo || !qualInfo) {
    notFound();
  }

  const equipment = practical.equipment || [];
  const safety = practical.safety || [];

  // Get breadcrumbs
  const breadcrumbs = getPracticalBreadcrumbs({
    level,
    subject,
    examBoard,
    practicalName: practical.name,
  });

  // Get related practicals for internal linking
  const relatedPracticals = getRelatedPracticals(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel,
    practicalId,
    4
  );

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <BreadcrumbJsonLd items={breadcrumbs} />
      <EducationalResourceJsonLd
        name={`${practical.name} - ${examBoardInfo.name} ${qualInfo.name} ${subjectInfo.name}`}
        description={`Practice questions for ${practical.name}. ${practical.description} ${examBoardInfo.name} ${qualInfo.name} ${subjectInfo.name} required practical with step-by-step solutions.`}
        url={`/${level}/${subject}/${examBoard}/practicals/${practicalId}`}
        educationalLevel={qualInfo.name}
        subject={subjectInfo.name}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbs} />

        <header className="mb-8">
          <Link
            href={`/${level}/${subject}/${examBoard}?tab=practicals`}
            className="inline-flex items-center text-sm text-[#666666] hover:text-[#a1a1a1] transition-colors mb-4"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Required Practicals
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{practical.icon}</span>
            <h1 className="text-3xl font-bold text-white">{practical.name}</h1>
          </div>
          <p className="text-[#a1a1a1] mb-4">{practical.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-block px-3 py-1 bg-[#10b981]/10 text-[#10b981] text-sm rounded-full border border-[#10b981]/20">
              Required Practical
            </span>
            <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">
              {examBoardInfo.name}
            </span>
            <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20">
              {qualInfo.name}
            </span>
          </div>

          {/* Equipment list - good for SEO */}
          {equipment.length > 0 && (
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a] mb-4">
              <h2 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <span>🔬</span> Equipment Required
              </h2>
              <ul className="text-sm text-[#a1a1a1] list-disc list-inside space-y-1">
                {equipment.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Safety - good for SEO */}
          {safety.length > 0 && (
            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-[#2a2a2a] mb-4">
              <h2 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                <span>🦺</span> Safety Precautions
              </h2>
              <ul className="text-sm text-[#a1a1a1] list-disc list-inside space-y-1">
                {safety.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Client component for progress */}
          <PracticalProgress practicalId={practicalId} />
        </header>

        {/* PRIMARY CTA - Hero Section */}
        <section className="mb-10 bg-gradient-to-br from-[#10b981]/20 via-emerald-500/15 to-teal-500/20 rounded-2xl border border-[#10b981]/40 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">
                Start Practicing Now
              </h2>
              <p className="text-[#a1a1a1]">
                Master {practical.name} with unlimited practice questions. Test your knowledge of method, variables, equipment, and more.
              </p>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-[#666666]">
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
                  Step-by-step solutions
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {examBoardInfo.name} exam style
                </span>
              </div>
            </div>
            <Link
              href={`/${level}/${subject}/${examBoard}/practicals/${practical.id}/random`}
              className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#10b981]/25 whitespace-nowrap"
            >
              Start Practice
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-4">
            Or choose a specific area to practice
          </h2>
          <p className="text-sm text-[#666666] mb-6">
            {practical.subtopics.length} practice areas available
          </p>

          {/* Subtopic grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practical.subtopics.map((subtopic) => {
              const info = subtopicInfo[subtopic];
              return (
                <Link
                  key={subtopic}
                  href={`/${level}/${subject}/${examBoard}/practicals/${practical.id}/${encodeURIComponent(subtopic)}`}
                  className="block"
                >
                  <div className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] p-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:border-[#10b981]/50 cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{info?.icon || '📝'}</div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-[#10b981] transition-colors">
                          {subtopic}
                        </h3>
                        <p className="text-xs text-[#666666]">
                          {info?.description || 'Practice this skill'}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* SEO content section */}
        <section className="mt-12 border-t border-[#2a2a2a] pt-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            About {practical.name}
          </h2>
          <div className="prose prose-invert max-w-none text-[#a1a1a1]">
            <p>
              {practical.name} is a required practical for {examBoardInfo.name} {qualInfo.name} {subjectInfo.name}.
              This practical {practical.description.toLowerCase()}
            </p>
            <p>
              Students are expected to understand the method, identify and control variables, use appropriate equipment,
              analyse results, draw graphs, identify sources of error, suggest improvements, and consider safety precautions.
            </p>
            <p>
              Questions on required practicals frequently appear in {examBoardInfo.name} {qualInfo.name} {subjectInfo.name} exams
              and can be worth significant marks. Practice with our AI-generated questions to master this practical.
            </p>
          </div>
        </section>

        {/* Related Practicals - Internal Linking */}
        {relatedPracticals.length > 0 && (
          <section className="mt-12 border-t border-[#2a2a2a] pt-8">
            <h2 className="text-xl font-semibold text-white mb-4">
              More {examBoardInfo.name} {qualInfo.name} {subjectInfo.name} Required Practicals
            </h2>
            <p className="text-[#666666] mb-6">
              Continue practicing with these other required practicals
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedPracticals.map((relatedPractical) => (
                <Link
                  key={relatedPractical.id}
                  href={`/${level}/${subject}/${examBoard}/practicals/${relatedPractical.id}`}
                  className="block"
                >
                  <div className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] p-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:border-[#10b981]/50">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{relatedPractical.icon}</div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-[#10b981] transition-colors">
                          {relatedPractical.name}
                        </h3>
                        <p className="text-xs text-[#666666] line-clamp-2">
                          {relatedPractical.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Link to all practicals */}
            <div className="mt-6 text-center">
              <Link
                href={`/${level}/${subject}/${examBoard}?tab=practicals`}
                className="inline-flex items-center gap-2 text-[#10b981] hover:text-[#059669] transition-colors"
              >
                View all {subjectInfo.name} required practicals
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
