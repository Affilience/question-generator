import type { MetadataRoute } from 'next';
import { getAllSubjectParams, getAllPracticalParams } from '@/lib/seo/utils';
import { INDEXED_BOARDLESS_TOPICS, INDEXED_BOARDLESS_SUBTOPICS } from '@/lib/seo/indexed-pages';

const BASE_URL = 'https://www.past-papers.co.uk';

/**
 * SEO SITEMAP STRATEGY
 * ====================
 *
 * Include all pages that are set to index: true in their metadata.
 * Uses boardless URL structure (Model A) for topic/subtopic pages.
 *
 * Included (~2000 URLs):
 * - Marketing pages (/, /pricing)
 * - Level pages (/gcse, /a-level)
 * - Subject pages (/gcse/maths)
 * - Indexed topic pages (/gcse/maths/algebra) - from INDEXED_BOARDLESS_TOPICS
 * - Indexed subtopic pages (/gcse/maths/algebra/simultaneous-equations) - from INDEXED_BOARDLESS_SUBTOPICS
 * - Required practical pages (/gcse/physics/aqa/practicals/rp1)
 *
 * Excluded:
 * - Board-specific pages (/gcse/maths/aqa/*) - noindex, navigation only
 * - Non-indexed subtopics - noindex until content is added
 * - All /app/* routes - blocked by robots.txt
 * - All /api/* routes
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static marketing pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Level pages (GCSE, A-Level)
  const levelPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/gcse`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/a-level`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Subject pages (e.g., /gcse/maths) - Primary SEO targets
  // These are comprehensive hub pages that link to all exam boards and topics
  const subjectPages: MetadataRoute.Sitemap = getAllSubjectParams().map(({ level, subject }) => ({
    url: `${BASE_URL}/${level}/${subject}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Required Practical pages - High search demand for science subjects
  // e.g., /gcse/physics/aqa/practicals/aqa-gcse-physics-rp1
  const practicalPages: MetadataRoute.Sitemap = getAllPracticalParams().map(({ level, subject, examBoard, practicalId }) => ({
    url: `${BASE_URL}/${level}/${subject}/${examBoard}/practicals/${practicalId}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Indexed boardless topic pages (Model A SEO structure)
  // e.g., /gcse/maths/algebra
  const topicPages: MetadataRoute.Sitemap = INDEXED_BOARDLESS_TOPICS.map(({ level, subject, topic }) => ({
    url: `${BASE_URL}/${level}/${subject}/${topic}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Indexed boardless subtopic pages - PRIMARY SEO TARGETS
  // e.g., /gcse/maths/algebra/simultaneous-equations
  const subtopicPages: MetadataRoute.Sitemap = INDEXED_BOARDLESS_SUBTOPICS.map(({ level, subject, topic, subtopic }) => ({
    url: `${BASE_URL}/${level}/${subject}/${topic}/${subtopic}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9, // Highest priority - these are the main content pages
  }));

  return [
    ...staticPages,
    ...levelPages,
    ...subjectPages,
    ...topicPages,
    ...subtopicPages,
    ...practicalPages,
  ];
}
