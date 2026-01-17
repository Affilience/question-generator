import type { Metadata } from 'next';

// Practice pages are dynamic (CSR) and should not be indexed
// Users discover these through the SEO subtopic pages and CTAs
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false, // No need for Google to follow links from practice pages
  },
};

export default function PracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
