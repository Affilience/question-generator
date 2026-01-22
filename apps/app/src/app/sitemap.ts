import type { MetadataRoute } from 'next';
import {
  getAllSubjectParams,
  getAllPracticalParams,
  getAllExamBoardParams,
  getAllTopicParams,
} from '@/lib/seo/utils';
import { INDEXED_BOARDLESS_SUBTOPICS } from '@/lib/seo/indexed-pages';
import { examBoards } from '@/lib/topics';

const BASE_URL = 'https://www.past-papers.co.uk';

/**
 * SEO SITEMAP STRATEGY
 * ====================
 *
 * Includes all valid URLs that return 200:
 *
 * Included:
 * - Marketing pages (/, /pricing)
 * - Level pages (/gcse, /a-level)
 * - Subject pages (/gcse/maths)
 * - Exam board pages (/gcse/maths/aqa)
 * - Topic pages (/gcse/maths/aqa/algebra)
 * - Indexed subtopic pages (/gcse/maths/aqa/algebra/factorising-quadratics)
 * - Required practical pages (/gcse/physics/aqa/practicals/rp1)
 *
 * Excluded:
 * - Boardless URLs (/gcse/maths/algebra) - no route exists
 * - Non-indexed subtopics - redirect to /practice/ (308)
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

  // Exam board pages (e.g., /gcse/maths/aqa)
  const examBoardPages: MetadataRoute.Sitemap = getAllExamBoardParams().map(({ level, subject, examBoard }) => ({
    url: `${BASE_URL}/${level}/${subject}/${examBoard}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Topic pages (e.g., /gcse/maths/aqa/algebra)
  const topicPages: MetadataRoute.Sitemap = getAllTopicParams().map(({ level, subject, examBoard, topic }) => ({
    url: `${BASE_URL}/${level}/${subject}/${examBoard}/${topic}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Indexed subtopic pages (e.g., /gcse/maths/aqa/algebra/factorising-quadratics)
  // Only includes pages that return 200 (non-indexed redirect to /practice/)
  // Generate for each indexed subtopic across all exam boards
  const subtopicPages: MetadataRoute.Sitemap = [];
  for (const indexed of INDEXED_BOARDLESS_SUBTOPICS) {
    for (const board of examBoards) {
      subtopicPages.push({
        url: `${BASE_URL}/${indexed.level}/${indexed.subject}/${board.id}/${indexed.topic}/${indexed.subtopic}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      });
    }
  }

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
    ...topicPages,
    ...subtopicPages,
    ...practicalPages,
  ];
}
