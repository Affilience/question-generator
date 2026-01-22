import type { MetadataRoute } from 'next';
import { getAllSubjectParams, getAllPracticalParams, getAllExamBoardParams } from '@/lib/seo/utils';

const BASE_URL = 'https://www.past-papers.co.uk';

/**
 * SEO SITEMAP STRATEGY
 * ====================
 *
 * Only includes URLs that actually exist and return 200.
 *
 * Included:
 * - Marketing pages (/, /pricing)
 * - Level pages (/gcse, /a-level)
 * - Subject pages (/gcse/maths)
 * - Exam board pages (/gcse/maths/aqa)
 * - Required practical pages (/gcse/physics/aqa/practicals/rp1)
 *
 * Excluded (routes don't exist):
 * - Boardless topic pages (/gcse/maths/algebra) - no route exists
 * - Boardless subtopic pages (/gcse/maths/algebra/quadratics) - no route exists
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
  const subjectPages: MetadataRoute.Sitemap = getAllSubjectParams().map(({ level, subject }) => ({
    url: `${BASE_URL}/${level}/${subject}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Exam board pages (e.g., /gcse/maths/aqa) - These routes exist and work
  const examBoardPages: MetadataRoute.Sitemap = getAllExamBoardParams().map(({ level, subject, examBoard }) => ({
    url: `${BASE_URL}/${level}/${subject}/${examBoard}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Required Practical pages - High search demand for science subjects
  const practicalPages: MetadataRoute.Sitemap = getAllPracticalParams().map(({ level, subject, examBoard, practicalId }) => ({
    url: `${BASE_URL}/${level}/${subject}/${examBoard}/practicals/${practicalId}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...levelPages,
    ...subjectPages,
    ...examBoardPages,
    ...practicalPages,
  ];
}
