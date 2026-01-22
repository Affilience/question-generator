import type { MetadataRoute } from 'next';
import {
  getAllSubjectParams,
  getAllPracticalParams,
  getAllExamBoardParams,
  getAllTopicParams,
  getAllSubtopicParams,
} from '@/lib/seo/utils';
import { INDEXED_BOARDLESS_SUBTOPICS } from '@/lib/seo/indexed-pages';

const BASE_URL = 'https://www.past-papers.co.uk';

/**
 * SEO SITEMAP STRATEGY
 * ====================
 *
 * Only includes INDEXED pages for SEO:
 *
 * Included:
 * - Marketing pages (/, /pricing, /paper-generator, /past-papers, /start, /privacy, /terms)
 * - Level pages (/gcse, /a-level)
 * - Subject pages (/gcse/maths)
 * - Exam board pages (/gcse/maths/aqa)
 * - All topic pages (all exam boards)
 * - INDEXED subtopic pages only (filtered by shouldIndexBoardlessSubtopic)
 * - Required practical pages (/gcse/physics/aqa/practicals/rp1)
 *
 * Excluded:
 * - Non-indexed topics and subtopics (redirect to /practice/)
 * - Boardless URLs (/gcse/maths/algebra) - no route exists
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
    {
      url: `${BASE_URL}/paper-generator`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/past-papers`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/start`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
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

  // Topic pages - all valid topics across all exam boards
  const topicPages: MetadataRoute.Sitemap = getAllTopicParams().map(
    ({ level, subject, examBoard, topic }) => ({
      url: `${BASE_URL}/${level}/${subject}/${examBoard}/${topic}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })
  );

  // Subtopic pages - all valid subtopics across all exam boards
  // Filter to only include subtopics that are in the indexed list (match by level/subject/subtopic)
  const indexedSet = new Set(
    INDEXED_BOARDLESS_SUBTOPICS.map(s => `${s.level}|${s.subject}|${s.subtopic}`)
  );
  const allSubtopics = getAllSubtopicParams();
  const indexedSubtopics = allSubtopics.filter(({ level, subject, subtopic }) =>
    indexedSet.has(`${level}|${subject}|${subtopic}`)
  );

  // Deduplicate subtopics (same subtopic may exist in multiple topics)
  const seenSubtopicUrls = new Set<string>();
  const subtopicPages: MetadataRoute.Sitemap = [];
  for (const { level, subject, examBoard, topic, subtopic } of indexedSubtopics) {
    const url = `${BASE_URL}/${level}/${subject}/${examBoard}/${topic}/${subtopic}`;
    if (!seenSubtopicUrls.has(url)) {
      seenSubtopicUrls.add(url);
      subtopicPages.push({
        url,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.6,
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
