import { MarkSchemeValidator } from '@/components/MarkSchemeValidator';
import { notFound } from 'next/navigation';

// PRODUCTION_GUARD: internal rendering harness. Kept for local development,
// but never served (or indexed) in production — these pages were public,
// indexable, and in the prerender manifest.
export const metadata = { robots: { index: false, follow: false } };


export default function TestMarkSchemePage() {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <MarkSchemeValidator />
    </div>
  );
}