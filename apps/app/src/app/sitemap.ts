import type { MetadataRoute } from 'next';
import { getAllSubjectParams, getAllPracticalParams } from '@/lib/seo/utils';

const BASE_URL = 'https://past-papers.co.uk';

/**
 * SEO SITEMAP STRATEGY
 * ====================
 *
 * Minimal sitemap approach - only include pages that:
 * 1. Have unique, substantial content
 * 2. Can rank for meaningful keywords
 * 3. Are not duplicates of other pages
 *
 * Included:
 * - Marketing pages (/, /pricing)
 * - Level pages (/gcse, /a-level)
 * - Subject pages (/gcse/maths) - Primary SEO targets
 *
 * Excluded:
 * - Board-specific pages (/gcse/maths/aqa/*) - noindex, serve navigation only
 * - Topic/subtopic pages - noindex until keyword research validates demand
 * - All /app/* routes - blocked by robots.txt + noindex
 * - All /api/* routes
 *
 * FUTURE: After keyword research, selectively add high-demand pages
 * using the allowlists in /lib/seo/indexed-pages.ts
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

  return [
    ...staticPages,
    ...levelPages,
    ...subjectPages,
    ...practicalPages,
    // NOTE: Board/topic/subtopic pages intentionally excluded
    // They exist for navigation but don't capture distinct search intent
    // Add them selectively after keyword research validates demand
  ];
}
