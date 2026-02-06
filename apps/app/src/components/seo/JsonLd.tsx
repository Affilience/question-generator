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

interface OrganizationJsonLdProps {
  baseUrl?: string;
}

export function OrganizationJsonLd({ baseUrl = 'https://past-papers.co.uk' }: OrganizationJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Past Papers',
    description: 'AI-powered educational platform providing unlimited practice questions for GCSE and A-Level students',
    url: baseUrl,
    logo: `${baseUrl}/icon-512.png`,
    sameAs: [
      // Add social media profiles when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    areaServed: 'GB',
    educationalCredentialAwarded: 'Practice Questions and Solutions',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Educational Practice Questions',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course',
            name: 'GCSE Practice Questions',
            description: 'Comprehensive practice questions for all GCSE subjects'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Course', 
            name: 'A-Level Practice Questions',
            description: 'Advanced practice questions for A-Level subjects'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface CourseJsonLdProps {
  name: string;
  description: string;
  url: string;
  provider: string;
  educationalLevel: string;
  subject: string;
  examBoard: string;
  topics: string[];
  baseUrl?: string;
}

export function CourseJsonLd({
  name,
  description,
  url,
  provider,
  educationalLevel,
  subject,
  examBoard,
  topics,
  baseUrl = 'https://past-papers.co.uk',
}: CourseJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    url: `${baseUrl}${url}`,
    provider: {
      '@type': 'EducationalOrganization',
      name: provider,
      url: baseUrl,
    },
    educationalLevel,
    teaches: subject,
    courseCode: `${examBoard.toUpperCase()}-${educationalLevel}-${subject.toUpperCase()}`,
    numberOfCredits: 0,
    timeRequired: 'PT0H',
    isAccessibleForFree: true,
    inLanguage: 'en-GB',
    availableLanguage: 'en-GB',
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'self-paced',
      instructor: {
        '@type': 'Organization',
        name: provider,
      },
    },
    syllabusSections: topics.map(topic => ({
      '@type': 'Syllabus',
      name: topic,
      about: `${topic} practice questions and solutions`,
    })),
    occupationalCredentialAwarded: `${educationalLevel} ${subject} Practice`,
    educationalCredentialAwarded: `${educationalLevel} ${subject} Practice Questions Completion`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface CollectionPageJsonLdProps {
  name: string;
  description: string;
  url: string;
  numberOfItems: number;
  itemType: string;
  items: Array<{
    name: string;
    description: string;
    url: string;
  }>;
  baseUrl?: string;
}

export function CollectionPageJsonLd({
  name,
  description,
  url,
  numberOfItems,
  itemType,
  items,
  baseUrl = 'https://past-papers.co.uk',
}: CollectionPageJsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: `${baseUrl}${url}`,
    mainEntity: {
      '@type': 'ItemList',
      name: `${name} Topics`,
      description,
      numberOfItems,
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': itemType,
          name: item.name,
          description: item.description,
          url: `${baseUrl}${item.url}`,
        },
      })),
    },
    isPartOf: {
      '@type': 'WebSite',
      name: 'Past Papers',
      url: baseUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
