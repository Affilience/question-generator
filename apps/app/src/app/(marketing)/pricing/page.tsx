import type { Metadata } from 'next';
import PricingPageContent from './PricingPageContent';

export const metadata: Metadata = {
  title: 'Pricing Plans - GCSE & A-Level Practice Questions',
  description: 'Simple, transparent pricing for Past Papers. Choose the plan that fits your revision needs. All plans include full access to every subject and exam board.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing | Past Papers',
    description: 'Simple, transparent pricing for Past Papers. Choose the plan that fits your revision needs.',
    url: '/pricing',
  },
};

export default function PricingPage() {
  return <PricingPageContent />;
}
