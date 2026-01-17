import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Past Papers App',
    default: 'Dashboard | Past Papers',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
