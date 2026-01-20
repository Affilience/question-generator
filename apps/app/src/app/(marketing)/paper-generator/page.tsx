import type { Metadata } from 'next';
import PaperGeneratorContent from './PaperGeneratorContent';

export const metadata: Metadata = {
  title: 'AI Paper Generator | Create Custom GCSE & A-Level Mock Exams',
  description: 'Generate unlimited custom practice papers for GCSE and A-Level exams. Choose topics, set difficulty, get instant mark schemes. AQA, Edexcel, OCR supported.',
  alternates: {
    canonical: '/paper-generator',
  },
  openGraph: {
    title: 'AI Paper Generator | Create Custom Mock Exams',
    description: 'Generate unlimited custom practice papers for GCSE and A-Level exams. Choose topics, set difficulty, get instant mark schemes.',
    url: '/paper-generator',
  },
};

export default function PaperGeneratorPage() {
  return <PaperGeneratorContent />;
}
