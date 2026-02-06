import type { MetadataRoute } from 'next';
import {
  getAllSubjectParams,
  getAllPracticalParams,
  getAllExamBoardParams,
  getAllTopicParams,
  getAllSubtopicParams,
} from '@/lib/seo/utils';
import { INDEXED_BOARDLESS_SUBTOPICS } from '@/lib/seo/indexed-pages';
import { getAllBlogPosts } from '@/lib/blog';

const BASE_URL = 'https://www.past-papers.co.uk';

/**
 * SEO SITEMAP STRATEGY
 * ====================
 *
 * All pages in this sitemap have index: true in their metadata.
 * IMPORTANT: Only URLs that actually exist should be included to avoid 404s.
 *
 * Included:
 * - Marketing pages (/, /pricing, /paper-generator, /past-papers, /start, /privacy, /terms)
 * - Level pages (/gcse, /a-level)
 * - Subject pages (/gcse/maths) - only subjects with actual topics
 * - Exam board pages (/gcse/maths/aqa) - only valid exam board/subject/level combinations
 * - All topic pages (/gcse/maths/aqa/algebra) - only valid topic IDs
 * - INDEXED subtopic pages only (filtered by INDEXED_BOARDLESS_SUBTOPICS)
 * - Required practical pages (/gcse/physics/aqa/practicals/rp1)
 *
 * Excluded:
 * - Non-existent subjects (e.g., sociology)
 * - Invalid topic/subtopic combinations
 * - Non-indexed subtopics (noindex meta tag)
 * - Boardless URLs (/gcse/maths/algebra) - no route exists
 * - All /app/* routes - blocked by robots.txt
 * - All /api/* routes
 */

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Subtopic pages - only INDEXED subtopics across all exam boards
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

  // Blog pages - Important for SEO and content marketing
  const blogPosts = await getAllBlogPosts();
  const blogPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...blogPosts.map(post => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...levelPages,
    ...subjectPages,
    ...examBoardPages,
    ...topicPages,
    ...subtopicPages,
    ...practicalPages,
    ...blogPages,
  ];

  // Validate URLs to prevent 404s - only include URLs with valid combinations
  const validPages = allPages.filter(page => {
    const url = page.url;
    const path = url.replace(BASE_URL, '');
    const segments = path.split('/').filter(Boolean);

    // Skip static pages (already validated)
    if (segments.length <= 1) return true;

    // Extract route parts
    const level = segments[0];
    const subject = segments[1];
    const examBoard = segments[2];
    const topic = segments[3];
    const subtopic = segments[4];

    // Validate level
    if (level && !['gcse', 'a-level'].includes(level)) {
      console.warn(`Invalid level in sitemap: ${level} - ${url}`);
      return false;
    }

    // Validate subject exists in our topics
    if (subject) {
      const validSubjects = getAllSubjectParams().map(p => p.subject);
      if (!validSubjects.includes(subject)) {
        console.warn(`Invalid subject in sitemap: ${subject} - ${url}`);
        return false;
      }
    }

    // Validate exam board + subject + level combination has topics
    if (examBoard && subject && level) {
      const validBoards = getAllExamBoardParams().map(p => `${p.level}|${p.subject}|${p.examBoard}`);
      if (!validBoards.includes(`${level}|${subject}|${examBoard}`)) {
        console.warn(`Invalid exam board combination in sitemap: ${level}/${subject}/${examBoard} - ${url}`);
        return false;
      }
    }

    // Validate topic exists (but skip validation for practical routes)
    if (topic && examBoard && subject && level && topic !== 'practicals') {
      const validTopics = getAllTopicParams().map(p => `${p.level}|${p.subject}|${p.examBoard}|${p.topic}`);
      if (!validTopics.includes(`${level}|${subject}|${examBoard}|${topic}`)) {
        console.warn(`Invalid topic in sitemap: ${level}/${subject}/${examBoard}/${topic} - ${url}`);
        return false;
      }
    }

    // Validate practical routes separately
    if (topic === 'practicals' && segments[4]) {
      const practicalId = segments[4];
      const validPracticals = getAllPracticalParams().map(p => `${p.level}|${p.subject}|${p.examBoard}|${p.practicalId}`);
      if (!validPracticals.includes(`${level}|${subject}|${examBoard}|${practicalId}`)) {
        console.warn(`Invalid practical in sitemap: ${level}/${subject}/${examBoard}/practicals/${practicalId} - ${url}`);
        return false;
      }
    }

    return true;
  });

  console.log(`Sitemap: Generated ${allPages.length} URLs, filtered to ${validPages.length} valid URLs`);
  console.log(`Filtered out ${allPages.length - validPages.length} invalid URLs`);

  return validPages;
}
