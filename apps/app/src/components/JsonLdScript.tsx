import Script from 'next/script';

interface JsonLdProps {
  data: object;
}

export function JsonLdScript({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}

// Common structured data generators
export const generateWebsiteSchema = (name: string, url: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name,
  url,
  description,
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export const generateEducationalOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Past Papers',
  url: 'https://www.past-papers.co.uk',
  description: 'AI-generated exam-style questions for GCSE and A-Level students',
  logo: 'https://www.past-papers.co.uk/icon-512.png',
  sameAs: [
    'https://twitter.com/pastpapers',
    // Add other social media URLs as they become available
  ],
});

export const generateCourseSchema = (subject: string, level: string, examBoard: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: `${level.toUpperCase()} ${subject.charAt(0).toUpperCase() + subject.slice(1)} - ${examBoard.toUpperCase()}`,
  description: `Practice questions and exam preparation for ${level.toUpperCase()} ${subject} with ${examBoard.toUpperCase()} exam board`,
  provider: {
    '@type': 'EducationalOrganization',
    name: 'Past Papers',
    url: 'https://www.past-papers.co.uk',
  },
  educationalLevel: level === 'gcse' ? 'Secondary' : 'Post-Secondary',
  courseCode: `${examBoard.toUpperCase()}-${level.toUpperCase()}-${subject.toUpperCase()}`,
  url: `https://www.past-papers.co.uk/${level}/${subject}/${examBoard}`,
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const generateFAQPageSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateArticleSchema = (
  title: string,
  description: string,
  url: string,
  publishedDate: string,
  modifiedDate: string,
  author: string = 'Past Papers Team',
  imageUrl?: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  url,
  datePublished: publishedDate,
  dateModified: modifiedDate,
  author: {
    '@type': 'Organization',
    name: author,
    url: 'https://www.past-papers.co.uk',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Past Papers',
    url: 'https://www.past-papers.co.uk',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.past-papers.co.uk/icon-512.png',
    },
  },
  ...(imageUrl && {
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
    },
  }),
});

export const generateSoftwareApplicationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Past Papers',
  applicationCategory: 'EducationalApplication',
  description: 'AI-generated exam-style practice questions for GCSE and A-Level students',
  url: 'https://www.past-papers.co.uk',
  operatingSystem: 'Web Browser',
  permissions: 'Free to use with registration',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'GBP',
    category: 'Free with premium options',
  },
  featureList: [
    'AI-generated practice questions',
    'Step-by-step solutions', 
    'Multiple exam boards (AQA, Edexcel, OCR)',
    'GCSE and A-Level coverage',
    'Progress tracking',
    'Unlimited practice',
  ],
});