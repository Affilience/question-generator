import type { Metadata } from 'next';
import { WebsiteJsonLd } from '@/components/seo';

export const metadata: Metadata = {
  title: {
    default: 'Past Papers - AI Exam Questions for GCSE & A-Level',
    template: '%s | Past Papers',
  },
  description: 'Never run out of past paper questions. AI generates unlimited GCSE & A-Level exam questions for every subtopic, matching AQA, Edexcel & OCR specifications exactly.',
  keywords: ['past papers', 'GCSE past papers', 'A-Level past papers', 'exam questions', 'GCSE revision', 'A-Level revision', 'AQA', 'Edexcel', 'OCR', 'practice papers', 'exam practice'],
  openGraph: {
    title: 'Past Papers - Infinite AI-Generated Exam Questions',
    description: 'Never run out of past paper questions. AI generates unlimited GCSE & A-Level exam questions for every subtopic.',
    type: 'website',
    siteName: 'Past Papers',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Past Papers - Infinite AI-Generated Exam Questions',
    description: 'Never run out of past paper questions. AI generates unlimited GCSE & A-Level exam questions for every subtopic.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebsiteJsonLd />
      {children}
    </>
  );
}
