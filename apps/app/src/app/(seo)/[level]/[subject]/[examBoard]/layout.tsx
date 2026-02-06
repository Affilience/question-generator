import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getSubjectInfo,
  getQualificationInfo,
  getExamBoardInfo,
  getTopicsBySubjectBoardAndLevel,
} from '@/lib/topics';
import {
  generateSEOTitle,
  generateSEODescription,
} from '@/lib/seo/utils';
import type { Subject, QualificationLevel, ExamBoard } from '@/types';

interface Props {
  params: Promise<{ level: string; subject: string; examBoard: string }>;
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: Promise<{ level: string; subject: string; examBoard: string }> }): Promise<Metadata> {
  const { level, subject, examBoard } = await params;
  
  const subjectInfo = getSubjectInfo(subject as Subject);
  const qualInfo = getQualificationInfo(level as QualificationLevel);
  const boardInfo = getExamBoardInfo(examBoard as ExamBoard);

  if (!subjectInfo || !qualInfo || !boardInfo) {
    return {
      title: 'Page Not Found | Past Papers',
      description: 'The requested page could not be found.',
    };
  }

  const topics = getTopicsBySubjectBoardAndLevel(
    subject as Subject,
    examBoard as ExamBoard,
    level as QualificationLevel
  );

  if (topics.length === 0) {
    return {
      title: 'Page Not Found | Past Papers',
      description: 'The requested page could not be found.',
    };
  }

  const totalSubtopics = topics.reduce((count, t) => count + t.subtopics.length, 0);

  // Create optimized title (≤60 chars)
  const title = `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name}`;
  
  // Create optimized description (150-160 chars)
  const description = `Practice ${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} with ${totalSubtopics}+ subtopics across ${topics.length} topics. AI-generated questions match exam format.`;

  return {
    title,
    description,
    keywords: [
      `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name}`,
      `${boardInfo.name} ${subjectInfo.name}`,
      `${qualInfo.name} ${subjectInfo.name}`,
      `${subjectInfo.name} exam questions`,
      `${subjectInfo.name} practice`,
      `${boardInfo.name} specification`,
      'past papers',
      'exam practice',
    ],
    openGraph: {
      title: `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} Practice Questions`,
      description,
      type: 'website',
      url: `/${level}/${subject}/${examBoard}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${boardInfo.name} ${qualInfo.name} ${subjectInfo.name} Practice Questions`,
      description,
    },
    alternates: {
      canonical: `/${level}/${subject}/${examBoard}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ExamBoardLayout({ children }: Props) {
  return <>{children}</>;
}