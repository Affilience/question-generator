import type { Metadata } from 'next';
import BlogPageContent from './BlogPageContent';

export const metadata: Metadata = {
  title: 'Study Guides & Revision Tips Blog',
  description: 'Expert study guides, revision tips, and exam strategies for GCSE & A-Level students. Get the latest insights on AQA, Edexcel, and OCR specifications.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Study Guides & Revision Tips Blog | Past Papers',
    description: 'Expert study guides, revision tips, and exam strategies for GCSE & A-Level students.',
    url: '/blog',
  },
};

export default function BlogPage() {
  return <BlogPageContent />;
}