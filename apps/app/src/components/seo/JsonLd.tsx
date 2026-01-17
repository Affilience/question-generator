import type { BreadcrumbItem } from '@/lib/seo/utils';

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
  baseUrl?: string;
}

export function BreadcrumbJsonLd({ items, baseUrl = 'https://past-papers.co.uk' }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `${baseUrl}${item.href}`,
        name: item.label,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface EducationalResourceJsonLdProps {
  name: string;
  description: string;
  url: string;
  educationalLevel?: string;
  subject?: string;
  provider?: string;
  baseUrl?: string;
}

export function EducationalResourceJsonLd({
  name,
  description,
  url,
  educationalLevel,
  subject,
  provider = 'Past Papers',
  baseUrl = 'https://past-papers.co.uk',
}: EducationalResourceJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name,
    description,
    url: `${baseUrl}${url}`,
    provider: {
      '@type': 'Organization',
      name: provider,
    },
    ...(educationalLevel && { educationalLevel }),
    ...(subject && { teaches: subject }),
    learningResourceType: 'Practice Questions',
    interactivityType: 'active',
    isAccessibleForFree: true,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FAQJsonLdProps {
  questions: { question: string; answer: string }[];
}

export function FAQJsonLd({ questions }: FAQJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface WebsiteJsonLdProps {
  baseUrl?: string;
}

export function WebsiteJsonLd({ baseUrl = 'https://past-papers.co.uk' }: WebsiteJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Past Papers',
    description: 'AI-generated exam questions for GCSE and A-Level students',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
