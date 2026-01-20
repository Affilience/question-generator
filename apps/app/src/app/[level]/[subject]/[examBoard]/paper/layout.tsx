import type { Metadata } from 'next';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ level: string; subject: string; examBoard: string }>;
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { level, subject, examBoard } = await params;

  const levelDisplay = level === 'a-level' ? 'A-Level' : 'GCSE';
  const boardDisplay = examBoard.toUpperCase();
  const subjectDisplay = subject.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  // Title: 55 chars max e.g. "AQA GCSE Maths Past Paper Generator | Create Mock Exams"
  const title = `${boardDisplay} ${levelDisplay} ${subjectDisplay} Past Paper Generator`;

  // Description: 158 chars
  const description = `Generate custom ${boardDisplay} ${levelDisplay} ${subjectDisplay} past papers. Create mock exams by topic with mark schemes and worked solutions.`;

  return {
    title: title.slice(0, 60),
    description: description.slice(0, 160),
    keywords: [
      `${boardDisplay} ${levelDisplay} ${subjectDisplay} past papers`,
      `${levelDisplay} ${subjectDisplay} mock exam`,
      `${boardDisplay} ${subjectDisplay} practice paper`,
    ],
    alternates: {
      canonical: `/${level}/${subject}/${examBoard}/paper`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default function PaperLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
