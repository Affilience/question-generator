import type { Metadata } from 'next';

// Paper builder pages are dynamic and should not be indexed
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function PaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
