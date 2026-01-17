import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Past Papers',
    default: 'GCSE & A-Level Practice Questions | Past Papers',
  },
  description: 'AI-generated exam questions for GCSE and A-Level students. Practice unlimited questions matching AQA, Edexcel, and OCR exam board styles.',
  keywords: ['past papers', 'GCSE', 'A-Level', 'exam questions', 'revision', 'AQA', 'Edexcel', 'OCR'],
  openGraph: {
    type: 'website',
    siteName: 'Past Papers',
  },
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
