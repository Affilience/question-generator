import type { Metadata } from 'next';

// Practicals pages are dynamic and should not be indexed
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PracticalsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
