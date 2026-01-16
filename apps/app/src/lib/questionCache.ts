import { Redis } from '@upstash/redis';
import { Difficulty } from '@/types';
import { DiagramSpec } from '@/types/diagram';

// Types for cached questions
interface CachedQuestion {
  content: string;
  solution: string;
  marks: number;
  markScheme: string[];
  diagram?: DiagramSpec;  // Include diagram in cache
  cachedAt: number;
}

interface CacheConfig {
  maxQuestionsPerKey: number;
  cacheExpiryDays: number;
  cacheHitProbability: number; // 0-1, probability of serving from cache vs generating fresh
}

const DEFAULT_CONFIG: CacheConfig = {
  maxQuestionsPerKey: 20, // Store up to 20 questions per topic/subtopic/difficulty
  cacheExpiryDays: 60, // Questions expire after 60 days
  cacheHitProbability: 1.0, // 100% - always serve from cache if available
};

// Initialize Redis client (only if env vars are set)
function getRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

// Generate cache key
function getCacheKey(topicId: string, subtopic: string, difficulty: Difficulty): string {
  // Normalize subtopic to handle special characters
  const normalizedSubtopic = subtopic
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .substring(0, 50);

  return `questions:${topicId}:${normalizedSubtopic}:${difficulty}`;
}

/**
 * Simple similarity check between two strings
 * Returns a score from 0 to 1 (1 = identical)
 */
function calculateSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase().replace(/\s+/g, ' ').trim();
  const s2 = str2.toLowerCase().replace(/\s+/g, ' ').trim();

  if (s1 === s2) return 1;
  if (s1.length === 0 || s2.length === 0) return 0;

  // Simple word overlap check
  const words1 = new Set(s1.split(' ').filter(w => w.length > 3));
  const words2 = new Set(s2.split(' ').filter(w => w.length > 3));

  if (words1.size === 0 || words2.size === 0) return 0;

  const intersection = [...words1].filter(w => words2.has(w)).length;
  const union = new Set([...words1, ...words2]).size;

  return intersection / union;
}

/**
 * Get a cached question with improved diversity
 * @param excludeContentPrefixes - Array of first 100 chars of questions to exclude (to avoid repeats)
 */
export async function getCachedQuestion(
  topicId: string,
  subtopic: string,
  difficulty: Difficulty,
  excludeContentPrefixes?: string | string[]
): Promise<CachedQuestion | null> {
  const redis = getRedisClient();
  if (!redis) return null;

  try {
    const key = getCacheKey(topicId, subtopic, difficulty);
    const cached = await redis.get<CachedQuestion[]>(key);

    if (!cached || cached.length === 0) {
      return null;
    }

    // Normalize exclusions to array
    const exclusions = Array.isArray(excludeContentPrefixes)
      ? excludeContentPrefixes
      : excludeContentPrefixes
        ? [excludeContentPrefixes]
        : [];

    // Filter out expired questions and excluded questions
    const expiryTime = DEFAULT_CONFIG.cacheExpiryDays * 24 * 60 * 60 * 1000;
    const validQuestions = cached.filter(q => {
      // Check if expired
      if (Date.now() - q.cachedAt > expiryTime) {
        return false;
      }
      // Check if this question matches any exclusion prefix
      const prefix = q.content.substring(0, 100);
      if (exclusions.includes(prefix)) {
        return false;
      }
      // Check similarity against all excluded questions (stricter check)
      for (const excl of exclusions) {
        if (calculateSimilarity(q.content.substring(0, 150), excl) > 0.7) {
          return false; // Too similar to a question already seen
        }
      }
      return true;
    });

    if (validQuestions.length === 0) {
      return null; // Cache exhausted, will trigger AI generation
    }

    // Pick the least recently used question to maximize variety
    // Sort by cachedAt (oldest first) and pick from the oldest third
    const sortedByAge = [...validQuestions].sort((a, b) => a.cachedAt - b.cachedAt);
    const oldestThird = Math.ceil(sortedByAge.length / 3);
    const candidatePool = sortedByAge.slice(0, Math.max(oldestThird, 1));

    // Pick randomly from the oldest questions
    const randomIndex = Math.floor(Math.random() * candidatePool.length);
    return candidatePool[randomIndex];
  } catch (error) {
    console.error('Cache read error:', error);
    return null;
  }
}

/**
 * Cache a generated question
 */
export async function cacheQuestion(
  topicId: string,
  subtopic: string,
  difficulty: Difficulty,
  question: Omit<CachedQuestion, 'cachedAt'>
): Promise<void> {
  const redis = getRedisClient();
  if (!redis) return;

  try {
    const key = getCacheKey(topicId, subtopic, difficulty);
    const existing = await redis.get<CachedQuestion[]>(key) || [];

    // Add new question with timestamp
    const newQuestion: CachedQuestion = {
      ...question,
      cachedAt: Date.now(),
    };

    // Check for exact duplicates
    const isExactDuplicate = existing.some(q =>
      q.content.substring(0, 100) === question.content.substring(0, 100)
    );

    if (isExactDuplicate) {
      return;
    }

    // Check for similar questions (>70% word overlap)
    const isTooSimilar = existing.some(q =>
      calculateSimilarity(q.content, question.content) > 0.7
    );

    if (isTooSimilar) {
      return; // Don't cache questions that are too similar to existing ones
    }

    // Add to cache, keeping only the most recent N questions
    const updated = [newQuestion, ...existing].slice(0, DEFAULT_CONFIG.maxQuestionsPerKey);

    // Set with expiry (60 days)
    await redis.set(key, updated, {
      ex: DEFAULT_CONFIG.cacheExpiryDays * 24 * 60 * 60,
    });
  } catch (error) {
    console.error('Cache write error:', error);
  }
}

/**
 * Get cache statistics
 */
export async function getCacheStats(): Promise<{
  enabled: boolean;
  totalKeys?: number;
  error?: string;
}> {
  const redis = getRedisClient();

  if (!redis) {
    return { enabled: false };
  }

  try {
    // Get approximate key count (Upstash doesn't support DBSIZE directly)
    // This is a simple check that the connection works
    await redis.ping();
    return { enabled: true };
  } catch (error) {
    return {
      enabled: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

/**
 * Get count of cached questions for a key
 */
export async function getCacheCount(
  topicId: string,
  subtopic: string,
  difficulty: Difficulty
): Promise<number> {
  const redis = getRedisClient();
  if (!redis) return 0;

  try {
    const key = getCacheKey(topicId, subtopic, difficulty);
    const cached = await redis.get<CachedQuestion[]>(key);
    return cached?.length || 0;
  } catch {
    return 0;
  }
}

/**
 * Clear cache for a specific topic/subtopic/difficulty
 */
export async function clearCache(
  topicId?: string,
  subtopic?: string,
  difficulty?: Difficulty
): Promise<boolean> {
  const redis = getRedisClient();
  if (!redis) return false;

  try {
    if (topicId && subtopic && difficulty) {
      const key = getCacheKey(topicId, subtopic, difficulty);
      await redis.del(key);
    }
    return true;
  } catch (error) {
    console.error('Cache clear error:', error);
    return false;
  }
}

/**
 * Check if cache needs more questions (below threshold)
 */
export async function needsMoreQuestions(
  topicId: string,
  subtopic: string,
  difficulty: Difficulty,
  minQuestions: number = 5
): Promise<boolean> {
  const count = await getCacheCount(topicId, subtopic, difficulty);
  return count < minQuestions;
}
