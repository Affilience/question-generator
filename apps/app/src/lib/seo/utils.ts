import {
  qualifications,
  subjects,
  examBoards,
  getTopicsBySubjectBoardAndLevel,
  getSubjectInfo,
  getExamBoardInfo,
  getQualificationInfo,
  getExamBoardsBySubjectAndLevel,
} from '@/lib/topics';
import { getPracticals } from '@/lib/practicals';
import type { ExamBoard, QualificationLevel, Subject, Topic } from '@/types';

/**
 * Convert a string to URL-friendly slug
 * Handles mathematical expressions like "i² = -1" or "y - y1 = m(x - x1)"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    // Replace common math symbols with words
    // Handle ² followed by a letter (e.g., i²r → i-squared-r)
    .replace(/²([a-z])/g, '-squared-$1')
    .replace(/²/g, '-squared')
    // Handle ³ followed by a letter
    .replace(/³([a-z])/g, '-cubed-$1')
    .replace(/³/g, '-cubed')
    .replace(/√/g, 'sqrt-')
    // Handle ^2 and ^3 notation
    .replace(/\^2([a-z])/g, '-squared-$1')
    .replace(/\^2/g, '-squared')
    .replace(/\^3([a-z])/g, '-cubed-$1')
    .replace(/\^3/g, '-cubed')
    // Handle comparison/equality operators
    .replace(/\s*=\s*/g, '-equals-')
    .replace(/\s*<\s*/g, '-less-than-')
    .replace(/\s*>\s*/g, '-greater-than-')
    // Remove remaining special characters
    .replace(/[^a-z0-9\s-]/g, '')
    // Replace whitespace with hyphens
    .replace(/\s+/g, '-')
    // Collapse multiple hyphens
    .replace(/-+/g, '-')
    // Remove leading/trailing hyphens
    .replace(/^-+|-+$/g, '')
    .trim();
}

/**
 * Convert a slug back to display text
 */
export function unslugify(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Generate all static params for the level pages (/gcse, /a-level)
 */
export function getAllLevelParams(): { level: string }[] {
  return qualifications.map(q => ({
    level: q.id,
  }));
}

/**
 * Generate all static params for subject pages (/gcse/maths, etc.)
 */
export function getAllSubjectParams(): { level: string; subject: string }[] {
  const params: { level: string; subject: string }[] = [];

  for (const qual of qualifications) {
    for (const subj of subjects) {
      // Check if this subject has any topics for this level
      const hasTopics = examBoards.some(board => {
        const topics = getTopicsBySubjectBoardAndLevel(subj.id as Subject, board.id, qual.id);
        return topics.length > 0;
      });

      if (hasTopics) {
        params.push({
          level: qual.id,
          subject: subj.id,
        });
      }
    }
  }

  return params;
}

/**
 * Generate all static params for exam board pages (/gcse/maths/aqa, etc.)
 */
export function getAllExamBoardParams(): { level: string; subject: string; examBoard: string }[] {
  const params: { level: string; subject: string; examBoard: string }[] = [];

  for (const qual of qualifications) {
    for (const subj of subjects) {
      const boards = getExamBoardsBySubjectAndLevel(subj.id as Subject, qual.id);

      for (const board of boards) {
        const topics = getTopicsBySubjectBoardAndLevel(subj.id as Subject, board.id, qual.id);
        if (topics.length > 0) {
          params.push({
            level: qual.id,
            subject: subj.id,
            examBoard: board.id,
          });
        }
      }
    }
  }

  return params;
}

/**
 * Generate all static params for topic pages (/gcse/maths/aqa/algebra, etc.)
 */
export function getAllTopicParams(): { level: string; subject: string; examBoard: string; topic: string }[] {
  const params: { level: string; subject: string; examBoard: string; topic: string }[] = [];

  for (const qual of qualifications) {
    for (const subj of subjects) {
      for (const board of examBoards) {
        const topics = getTopicsBySubjectBoardAndLevel(subj.id as Subject, board.id, qual.id);

        for (const topic of topics) {
          params.push({
            level: qual.id,
            subject: subj.id,
            examBoard: board.id,
            topic: topic.id,
          });
        }
      }
    }
  }

  return params;
}

/**
 * Generate all static params for subtopic pages (PRIMARY SEO TARGET)
 * /gcse/maths/aqa/algebra/simultaneous-equations
 */
export function getAllSubtopicParams(): {
  level: string;
  subject: string;
  examBoard: string;
  topic: string;
  subtopic: string;
}[] {
  const params: {
    level: string;
    subject: string;
    examBoard: string;
    topic: string;
    subtopic: string;
  }[] = [];

  for (const qual of qualifications) {
    for (const subj of subjects) {
      for (const board of examBoards) {
        const topics = getTopicsBySubjectBoardAndLevel(subj.id as Subject, board.id, qual.id);

        for (const topic of topics) {
          for (const subtopic of topic.subtopics) {
            params.push({
              level: qual.id,
              subject: subj.id,
              examBoard: board.id,
              topic: topic.id,
              subtopic: slugify(subtopic),
            });
          }
        }
      }
    }
  }

  return params;
}

/**
 * Get only INDEXED subtopic params for static generation
 * This dramatically reduces build time by only pre-rendering pages with SEO value
 * Non-indexed pages will be generated on-demand (ISR)
 */
export function getIndexedSubtopicParams(): {
  level: string;
  subject: string;
  examBoard: string;
  topic: string;
  subtopic: string;
}[] {
  // Import here to avoid circular dependency
  const { INDEXED_BOARDLESS_SUBTOPICS } = require('./indexed-pages');

  const params: {
    level: string;
    subject: string;
    examBoard: string;
    topic: string;
    subtopic: string;
  }[] = [];

  // For each indexed subtopic, generate params for all exam boards
  // (the page will handle redirects for non-indexed board variants)
  for (const indexed of INDEXED_BOARDLESS_SUBTOPICS) {
    for (const board of examBoards) {
      params.push({
        level: indexed.level,
        subject: indexed.subject,
        examBoard: board.id,
        topic: indexed.topic,
        subtopic: indexed.subtopic,
      });
    }
  }

  return params;
}

/**
 * Get breadcrumb items for any SEO page
 */
export interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

export function getBreadcrumbs(params: {
  level?: string;
  subject?: string;
  examBoard?: string;
  topic?: string;
  subtopic?: string;
}): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  if (params.level) {
    const qual = getQualificationInfo(params.level as QualificationLevel);
    crumbs.push({ label: qual?.name || params.level.toUpperCase(), href: `/${params.level}` });
  }

  if (params.level && params.subject) {
    const subj = getSubjectInfo(params.subject as Subject);
    crumbs.push({ label: subj?.name || params.subject, href: `/${params.level}/${params.subject}` });
  }

  if (params.level && params.subject && params.examBoard) {
    const board = getExamBoardInfo(params.examBoard as ExamBoard);
    crumbs.push({ label: board?.name || params.examBoard.toUpperCase(), href: `/${params.level}/${params.subject}/${params.examBoard}` });
  }

  if (params.level && params.subject && params.examBoard && params.topic) {
    const topics = getTopicsBySubjectBoardAndLevel(params.subject as Subject, params.examBoard as ExamBoard, params.level as QualificationLevel);
    const topic = topics.find(t => t.id === params.topic);
    crumbs.push({ label: topic?.name || params.topic, href: `/${params.level}/${params.subject}/${params.examBoard}/${params.topic}` });
  }

  if (params.level && params.subject && params.examBoard && params.topic && params.subtopic) {
    crumbs.push({ label: unslugify(params.subtopic), href: `/${params.level}/${params.subject}/${params.examBoard}/${params.topic}/${params.subtopic}` });
  }

  // Mark last item as current
  if (crumbs.length > 0) {
    crumbs[crumbs.length - 1].current = true;
  }

  return crumbs;
}

/**
 * Generate SEO title for a page
 * Target: 50-60 characters max for optimal display in SERPs
 *
 * High-volume keywords targeted:
 * - "aqa gcse maths past papers" (12,100/mo)
 * - "edexcel maths past papers" (14,800/mo)
 * - "aqa biology past papers" (8,100/mo)
 */
export function generateSEOTitle(params: {
  level?: string;
  subject?: string;
  examBoard?: string;
  topic?: string;
  subtopic?: string;
}): string {
  const board = params.examBoard ? getExamBoardInfo(params.examBoard as ExamBoard) : null;
  const qual = params.level ? getQualificationInfo(params.level as QualificationLevel) : null;
  const subj = params.subject ? getSubjectInfo(params.subject as Subject) : null;

  // Get topic name if applicable
  let topicName = '';
  if (params.topic && params.subject && params.examBoard && params.level) {
    const topics = getTopicsBySubjectBoardAndLevel(
      params.subject as Subject,
      params.examBoard as ExamBoard,
      params.level as QualificationLevel
    );
    const topic = topics.find(t => t.id === params.topic);
    topicName = topic?.name || params.topic;
  }

  // Subtopic page: "Quadratics | AQA GCSE Maths Questions" (under 60 chars)
  if (params.subtopic) {
    const subtopicName = unslugify(params.subtopic);
    const boardName = board?.name || '';
    const qualName = qual?.name || '';
    const subjName = subj?.name || '';
    // Keep it short: "Subtopic | Board Level Subject"
    return `${subtopicName} | ${boardName} ${qualName} ${subjName}`.slice(0, 60);
  }

  // Topic page: "Algebra | AQA GCSE Maths Questions" (noindex, for navigation)
  if (params.topic) {
    const boardName = board?.name || '';
    const qualName = qual?.name || '';
    const subjName = subj?.name || '';
    return `${topicName} | ${boardName} ${qualName} ${subjName}`.slice(0, 60);
  }

  // Exam board page: "AQA GCSE Maths Past Papers" (matches "aqa gcse maths past papers")
  if (params.examBoard && params.subject && params.level) {
    const title = `${board?.name} ${qual?.name} ${subj?.name} Past Papers`;
    // Should be ~30-35 chars typically, well under limit
    return title.slice(0, 60);
  }

  // Subject page: "GCSE Maths Past Papers | AQA, Edexcel, OCR"
  if (params.subject && params.level) {
    return `${qual?.name} ${subj?.name} Past Papers | AQA, Edexcel, OCR`.slice(0, 60);
  }

  return 'Past Papers | Free Exam Questions';
}

/**
 * Generate SEO description for a page
 * Target: 150-160 characters max for optimal display in SERPs
 * Includes both "past papers" and "questions" keywords for search coverage
 */
export function generateSEODescription(params: {
  level?: string;
  subject?: string;
  examBoard?: string;
  topic?: string;
  subtopic?: string;
}): string {
  const board = params.examBoard ? getExamBoardInfo(params.examBoard as ExamBoard) : null;
  const qual = params.level ? getQualificationInfo(params.level as QualificationLevel) : null;
  const subj = params.subject ? getSubjectInfo(params.subject as Subject) : null;

  // Build context string: "AQA GCSE Maths"
  const contextParts: string[] = [];
  if (board) contextParts.push(board.name);
  if (qual) contextParts.push(qual.name);
  if (subj) contextParts.push(subj.name);
  const context = contextParts.join(' ');

  // Subtopic: "Free AQA GCSE Maths Quadratics questions with mark schemes and worked solutions." (~85 chars)
  if (params.subtopic) {
    const subtopicName = unslugify(params.subtopic);
    return `Free ${context} ${subtopicName} questions with mark schemes and worked solutions. Practice exam-style problems.`.slice(0, 160);
  }

  // Topic: "AQA GCSE Maths Algebra questions. Past paper style practice with mark schemes and solutions." (~95 chars)
  if (params.topic) {
    const topics = params.subject && params.examBoard && params.level
      ? getTopicsBySubjectBoardAndLevel(params.subject as Subject, params.examBoard as ExamBoard, params.level as QualificationLevel)
      : [];
    const topic = topics.find(t => t.id === params.topic);
    const topicName = topic?.name || params.topic;
    return `${context} ${topicName} questions. Past paper style practice with mark schemes and step-by-step solutions.`.slice(0, 160);
  }

  // Exam board page: "Free AQA GCSE Maths past papers with mark schemes. Exam-style questions and worked solutions." (~95 chars)
  if (params.examBoard && params.subject && params.level) {
    return `Free ${context} past papers with mark schemes. Unlimited exam-style questions and step-by-step worked solutions.`.slice(0, 160);
  }

  // Subject page: "Free GCSE Maths past papers for AQA, Edexcel, OCR. Practice questions with mark schemes and solutions." (~105 chars)
  if (params.subject && params.level) {
    return `Free ${qual?.name} ${subj?.name} past papers for AQA, Edexcel, OCR. Practice questions with mark schemes and solutions.`.slice(0, 160);
  }

  return 'Free GCSE and A-Level past papers. Exam-style questions for AQA, Edexcel, OCR with mark schemes and solutions.';
}

/**
 * Get related topics for internal linking
 */
export function getRelatedTopics(
  subject: Subject,
  examBoard: ExamBoard,
  level: QualificationLevel,
  currentTopicId: string,
  limit: number = 5
): Topic[] {
  const allTopics = getTopicsBySubjectBoardAndLevel(subject, examBoard, level);
  return allTopics
    .filter(t => t.id !== currentTopicId)
    .slice(0, limit);
}

/**
 * Get related subtopics for internal linking
 */
export function getRelatedSubtopics(
  topic: Topic,
  currentSubtopic: string,
  limit: number = 5
): string[] {
  return topic.subtopics
    .filter(s => slugify(s) !== currentSubtopic)
    .slice(0, limit);
}

/**
 * Get cross-topic subtopics for internal linking
 * Returns subtopics from OTHER topics in the same subject/board/level
 * This improves internal link structure for SEO
 */
export function getCrossTopicSubtopics(
  subject: Subject,
  examBoard: ExamBoard,
  level: QualificationLevel,
  currentTopicId: string,
  limit: number = 6
): { topicId: string; topicName: string; subtopic: string; slug: string }[] {
  const allTopics = getTopicsBySubjectBoardAndLevel(subject, examBoard, level);
  const otherTopics = allTopics.filter(t => t.id !== currentTopicId);

  const results: { topicId: string; topicName: string; subtopic: string; slug: string }[] = [];

  // Get 1-2 subtopics from each other topic until we have enough
  for (const topic of otherTopics) {
    if (results.length >= limit) break;

    // Take first 2 subtopics from each topic (or fewer if topic has less)
    const subtopicsToAdd = topic.subtopics.slice(0, 2);
    for (const subtopic of subtopicsToAdd) {
      if (results.length >= limit) break;
      results.push({
        topicId: topic.id,
        topicName: topic.name,
        subtopic,
        slug: slugify(subtopic),
      });
    }
  }

  return results;
}

// ============================================================================
// BOARDLESS SEO HELPERS (Model A)
// ============================================================================

/**
 * Get unique topic IDs for a subject and level across all exam boards.
 * This aggregates topics so we have one "algebra" page instead of three.
 */
export function getUniqueTopicsForSubjectAndLevel(
  subject: Subject,
  level: QualificationLevel
): { id: string; name: string; description: string; icon: string; color: string; boards: ExamBoard[] }[] {
  const boards = getExamBoardsBySubjectAndLevel(subject, level);
  const topicMap = new Map<string, {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    boards: ExamBoard[];
  }>();

  for (const board of boards) {
    const topics = getTopicsBySubjectBoardAndLevel(subject, board.id, level);
    for (const topic of topics) {
      if (!topicMap.has(topic.id)) {
        topicMap.set(topic.id, {
          id: topic.id,
          name: topic.name,
          description: topic.description,
          icon: topic.icon,
          color: topic.color,
          boards: [board.id],
        });
      } else {
        const existing = topicMap.get(topic.id)!;
        if (!existing.boards.includes(board.id)) {
          existing.boards.push(board.id);
        }
      }
    }
  }

  return Array.from(topicMap.values());
}

/**
 * Get aggregated subtopics for a topic across all boards.
 * Returns union of subtopics with info about which boards cover each.
 */
export function getAggregatedSubtopics(
  subject: Subject,
  level: QualificationLevel,
  topicId: string
): { subtopic: string; slug: string; boards: ExamBoard[] }[] {
  const boards = getExamBoardsBySubjectAndLevel(subject, level);
  const subtopicMap = new Map<string, { subtopic: string; slug: string; boards: ExamBoard[] }>();

  for (const board of boards) {
    const topics = getTopicsBySubjectBoardAndLevel(subject, board.id, level);
    const topic = topics.find(t => t.id === topicId);
    if (topic) {
      for (const subtopic of topic.subtopics) {
        const slug = slugify(subtopic);
        if (!subtopicMap.has(slug)) {
          subtopicMap.set(slug, {
            subtopic,
            slug,
            boards: [board.id],
          });
        } else {
          const existing = subtopicMap.get(slug)!;
          if (!existing.boards.includes(board.id)) {
            existing.boards.push(board.id);
          }
        }
      }
    }
  }

  return Array.from(subtopicMap.values());
}

/**
 * Get default exam board for a subject/level (for SEO pages to use as default).
 * Returns the most popular board, typically AQA.
 */
export function getDefaultExamBoard(subject: Subject, level: QualificationLevel): ExamBoard {
  const boards = getExamBoardsBySubjectAndLevel(subject, level);
  // Prefer AQA > Edexcel > OCR (by market share)
  if (boards.find(b => b.id === 'aqa')) return 'aqa';
  if (boards.find(b => b.id === 'edexcel')) return 'edexcel';
  if (boards.find(b => b.id === 'ocr')) return 'ocr';
  return boards[0]?.id ?? 'aqa';
}

/**
 * Generate params for BOARDLESS topic pages (Model A)
 * /gcse/maths/algebra (no examBoard in URL)
 */
export function getAllBoardlessTopicParams(): { level: string; subject: string; topic: string }[] {
  const params: { level: string; subject: string; topic: string }[] = [];

  for (const qual of qualifications) {
    for (const subj of subjects) {
      const uniqueTopics = getUniqueTopicsForSubjectAndLevel(subj.id as Subject, qual.id);
      for (const topic of uniqueTopics) {
        params.push({
          level: qual.id,
          subject: subj.id,
          topic: topic.id,
        });
      }
    }
  }

  return params;
}

/**
 * Generate params for BOARDLESS subtopic pages (Model A)
 * /gcse/maths/algebra/simultaneous-equations (no examBoard in URL)
 */
export function getAllBoardlessSubtopicParams(): { level: string; subject: string; topic: string; subtopic: string }[] {
  const params: { level: string; subject: string; topic: string; subtopic: string }[] = [];

  for (const qual of qualifications) {
    for (const subj of subjects) {
      const uniqueTopics = getUniqueTopicsForSubjectAndLevel(subj.id as Subject, qual.id);
      for (const topic of uniqueTopics) {
        const subtopics = getAggregatedSubtopics(subj.id as Subject, qual.id, topic.id);
        for (const sub of subtopics) {
          params.push({
            level: qual.id,
            subject: subj.id,
            topic: topic.id,
            subtopic: sub.slug,
          });
        }
      }
    }
  }

  return params;
}

/**
 * Get breadcrumbs for boardless pages
 */
export function getBoardlessBreadcrumbs(params: {
  level?: string;
  subject?: string;
  topic?: string;
  subtopic?: string;
}): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  if (params.level) {
    const qual = getQualificationInfo(params.level as QualificationLevel);
    crumbs.push({ label: qual?.name || params.level.toUpperCase(), href: `/${params.level}` });
  }

  if (params.level && params.subject) {
    const subj = getSubjectInfo(params.subject as Subject);
    crumbs.push({ label: subj?.name || params.subject, href: `/${params.level}/${params.subject}` });
  }

  if (params.level && params.subject && params.topic) {
    const uniqueTopics = getUniqueTopicsForSubjectAndLevel(params.subject as Subject, params.level as QualificationLevel);
    const topic = uniqueTopics.find(t => t.id === params.topic);
    crumbs.push({ label: topic?.name || params.topic, href: `/${params.level}/${params.subject}/${params.topic}` });
  }

  if (params.level && params.subject && params.topic && params.subtopic) {
    crumbs.push({
      label: unslugify(params.subtopic),
      href: `/${params.level}/${params.subject}/${params.topic}/${params.subtopic}`
    });
  }

  // Mark last item as current
  if (crumbs.length > 0) {
    crumbs[crumbs.length - 1].current = true;
  }

  return crumbs;
}

/**
 * Generate all static params for practical pages (SEO target for required practicals)
 * /gcse/physics/aqa/practicals/aqa-gcse-physics-rp1
 */
export function getAllPracticalParams(): {
  level: string;
  subject: string;
  examBoard: string;
  practicalId: string;
}[] {
  const params: {
    level: string;
    subject: string;
    examBoard: string;
    practicalId: string;
  }[] = [];

  // Only science subjects have practicals
  const practicalSubjects: Subject[] = ['physics', 'chemistry', 'biology'];

  for (const qual of qualifications) {
    for (const subj of practicalSubjects) {
      for (const board of examBoards) {
        const practicals = getPracticals(subj, board.id, qual.id);

        for (const practical of practicals) {
          params.push({
            level: qual.id,
            subject: subj,
            examBoard: board.id,
            practicalId: practical.id,
          });
        }
      }
    }
  }

  return params;
}

/**
 * Get breadcrumbs for practical pages
 */
export function getPracticalBreadcrumbs(params: {
  level: string;
  subject: string;
  examBoard: string;
  practicalName: string;
}): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

  const qual = getQualificationInfo(params.level as QualificationLevel);
  crumbs.push({ label: qual?.name || params.level.toUpperCase(), href: `/${params.level}` });

  const subj = getSubjectInfo(params.subject as Subject);
  crumbs.push({ label: subj?.name || params.subject, href: `/${params.level}/${params.subject}` });

  const board = getExamBoardInfo(params.examBoard as ExamBoard);
  crumbs.push({ label: board?.name || params.examBoard.toUpperCase(), href: `/${params.level}/${params.subject}/${params.examBoard}` });

  crumbs.push({ label: 'Required Practicals', href: `/${params.level}/${params.subject}/${params.examBoard}?tab=practicals` });

  crumbs.push({ label: params.practicalName, href: '#', current: true });

  return crumbs;
}

/**
 * Get related practicals for internal linking on practical pages
 */
export function getRelatedPracticals(
  subject: Subject,
  examBoard: ExamBoard,
  level: QualificationLevel,
  currentPracticalId: string,
  limit: number = 4
) {
  const allPracticals = getPracticals(subject, examBoard, level);
  return allPracticals
    .filter(p => p.id !== currentPracticalId)
    .slice(0, limit);
}
