import { Redis } from '@upstash/redis';
import { createClient } from '@supabase/supabase-js';
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

// Database row type for question_cache table
interface QuestionCacheRow {
  id: string;
  cache_key: string;
  subtopic: string;
  difficulty: string;
  content: string;
  solution: string;
  marks: number;
  mark_scheme: string[];
  diagram: DiagramSpec | null;
  content_hash: string;
  created_at: string;
  accessed_at: string;
  access_count: number;
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

// Initialize Supabase client for cache fallback
function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return null;
  }

  return createClient(url, serviceKey);
}

// Generate a simple hash for content deduplication
function hashContent(content: string): string {
  // Simple hash function for deduplication
  let hash = 0;
  for (let i = 0; i < content.length; i++) {
    const char = content.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
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
 * Uses Redis if available, falls back to Supabase
 * @param excludeContentPrefixes - Array of first 100 chars of questions to exclude (to avoid repeats)
 */
export async function getCachedQuestion(
  topicId: string,
  subtopic: string,
  difficulty: Difficulty,
  excludeContentPrefixes?: string | string[]
): Promise<CachedQuestion | null> {
  // Try Redis first
  const redis = getRedisClient();
  if (redis) {
    const result = await getCachedQuestionFromRedis(redis, topicId, subtopic, difficulty, excludeContentPrefixes);
    if (result) return result;
  }

  // Fall back to Supabase
  const supabase = getSupabaseClient();
  if (supabase) {
    return getCachedQuestionFromSupabase(supabase, topicId, subtopic, difficulty, excludeContentPrefixes);
  }

  return null;
}

/**
 * Get cached question from Redis
 */
async function getCachedQuestionFromRedis(
  redis: Redis,
  topicId: string,
  subtopic: string,
  difficulty: Difficulty,
  excludeContentPrefixes?: string | string[]
): Promise<CachedQuestion | null> {
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
    console.error('Redis cache read error:', error);
    return null;
  }
}

/**
 * Get cached question from Supabase
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getCachedQuestionFromSupabase(
  supabase: any,
  topicId: string,
  subtopic: string,
  difficulty: Difficulty,
  excludeContentPrefixes?: string | string[]
): Promise<CachedQuestion | null> {
  try {
    const key = getCacheKey(topicId, subtopic, difficulty);
    const normalizedSubtopic = subtopic.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 50);

    // Normalize exclusions to array
    const exclusions = Array.isArray(excludeContentPrefixes)
      ? excludeContentPrefixes
      : excludeContentPrefixes
        ? [excludeContentPrefixes]
        : [];

    // Calculate expiry date
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() - DEFAULT_CONFIG.cacheExpiryDays);

    // Query for cached questions, ordered by access_count (LRU-style)
    const { data: cached, error } = await supabase
      .from('question_cache')
      .select('*')
      .eq('cache_key', key)
      .eq('subtopic', normalizedSubtopic)
      .eq('difficulty', difficulty)
      .gte('created_at', expiryDate.toISOString())
      .order('access_count', { ascending: true })
      .order('accessed_at', { ascending: true })
      .limit(DEFAULT_CONFIG.maxQuestionsPerKey);

    if (error || !cached || cached.length === 0) {
      return null;
    }

    // Type the cached data
    const cachedRows = cached as QuestionCacheRow[];

    // Filter out excluded questions
    const validQuestions = cachedRows.filter((q: QuestionCacheRow) => {
      const prefix = q.content.substring(0, 100);
      if (exclusions.includes(prefix)) {
        return false;
      }
      for (const excl of exclusions) {
        if (calculateSimilarity(q.content.substring(0, 150), excl) > 0.7) {
          return false;
        }
      }
      return true;
    });

    if (validQuestions.length === 0) {
      return null;
    }

    // Pick from the least accessed questions (LRU-style)
    const oldestThird = Math.ceil(validQuestions.length / 3);
    const candidatePool = validQuestions.slice(0, Math.max(oldestThird, 1));
    const selected = candidatePool[Math.floor(Math.random() * candidatePool.length)];

    // Update access count asynchronously
    supabase
      .from('question_cache')
      .update({
        accessed_at: new Date().toISOString(),
        access_count: selected.access_count + 1,
      })
      .eq('id', selected.id)
      .then(() => {});

    return {
      content: selected.content,
      solution: selected.solution,
      marks: selected.marks,
      markScheme: selected.mark_scheme,
      diagram: selected.diagram || undefined,
      cachedAt: new Date(selected.created_at).getTime(),
    };
  } catch (error) {
    console.error('Supabase cache read error:', error);
    return null;
  }
}

/**
 * Cache a generated question
 * Stores in both Redis (if available) and Supabase for redundancy
 */
export async function cacheQuestion(
  topicId: string,
  subtopic: string,
  difficulty: Difficulty,
  question: Omit<CachedQuestion, 'cachedAt'>
): Promise<void> {
  const redis = getRedisClient();
  const supabase = getSupabaseClient();

  // Try to cache in Redis
  if (redis) {
    await cacheQuestionToRedis(redis, topicId, subtopic, difficulty, question);
  }

  // Also cache in Supabase (even if Redis is available, for redundancy)
  if (supabase) {
    await cacheQuestionToSupabase(supabase, topicId, subtopic, difficulty, question);
  }
}

/**
 * Cache question to Redis
 */
async function cacheQuestionToRedis(
  redis: Redis,
  topicId: string,
  subtopic: string,
  difficulty: Difficulty,
  question: Omit<CachedQuestion, 'cachedAt'>
): Promise<void> {
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
    console.error('Redis cache write error:', error);
  }
}

/**
 * Cache question to Supabase
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function cacheQuestionToSupabase(
  supabase: any,
  topicId: string,
  subtopic: string,
  difficulty: Difficulty,
  question: Omit<CachedQuestion, 'cachedAt'>
): Promise<void> {
  try {
    const key = getCacheKey(topicId, subtopic, difficulty);
    const normalizedSubtopic = subtopic.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 50);
    const contentHash = hashContent(question.content);

    // Upsert to avoid duplicates (based on cache_key + content_hash)
    const { error } = await supabase
      .from('question_cache')
      .upsert({
        cache_key: key,
        subtopic: normalizedSubtopic,
        difficulty,
        content: question.content,
        solution: question.solution,
        marks: question.marks,
        mark_scheme: question.markScheme,
        diagram: question.diagram || null,
        content_hash: contentHash,
      }, {
        onConflict: 'cache_key,content_hash',
        ignoreDuplicates: true,
      });

    if (error) {
      console.error('Supabase cache write error:', error);
    }

    // Clean up old entries if we have too many for this key
    // Keep only the most recent N questions per cache_key
    const { data: countData } = await supabase
      .from('question_cache')
      .select('id', { count: 'exact' })
      .eq('cache_key', key);

    if (countData && countData.length > DEFAULT_CONFIG.maxQuestionsPerKey) {
      // Delete oldest entries
      const deleteCount = countData.length - DEFAULT_CONFIG.maxQuestionsPerKey;
      const { data: toDelete } = await supabase
        .from('question_cache')
        .select('id')
        .eq('cache_key', key)
        .order('accessed_at', { ascending: true })
        .limit(deleteCount);

      if (toDelete && toDelete.length > 0) {
        await supabase
          .from('question_cache')
          .delete()
          .in('id', toDelete.map((d: { id: string }) => d.id));
      }
    }
  } catch (error) {
    console.error('Supabase cache write error:', error);
  }
}

/**
 * Get cache statistics
 */
export async function getCacheStats(): Promise<{
  enabled: boolean;
  redisEnabled: boolean;
  supabaseEnabled: boolean;
  totalKeys?: number;
  error?: string;
}> {
  const redis = getRedisClient();
  const supabase = getSupabaseClient();

  let redisEnabled = false;
  let supabaseEnabled = false;
  let totalKeys = 0;

  // Check Redis
  if (redis) {
    try {
      await redis.ping();
      redisEnabled = true;
    } catch {
      // Redis not available
    }
  }

  // Check Supabase
  if (supabase) {
    try {
      const { count } = await supabase
        .from('question_cache')
        .select('*', { count: 'exact', head: true });
      supabaseEnabled = true;
      totalKeys = count || 0;
    } catch {
      // Supabase not available or table doesn't exist
    }
  }

  return {
    enabled: redisEnabled || supabaseEnabled,
    redisEnabled,
    supabaseEnabled,
    totalKeys,
  };
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
  const supabase = getSupabaseClient();

  // Try Redis first
  if (redis) {
    try {
      const key = getCacheKey(topicId, subtopic, difficulty);
      const cached = await redis.get<CachedQuestion[]>(key);
      if (cached && cached.length > 0) {
        return cached.length;
      }
    } catch {
      // Fall through to Supabase
    }
  }

  // Try Supabase
  if (supabase) {
    try {
      const key = getCacheKey(topicId, subtopic, difficulty);
      const normalizedSubtopic = subtopic.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 50);

      const { count } = await supabase
        .from('question_cache')
        .select('*', { count: 'exact', head: true })
        .eq('cache_key', key)
        .eq('subtopic', normalizedSubtopic)
        .eq('difficulty', difficulty);

      return count || 0;
    } catch {
      return 0;
    }
  }

  return 0;
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
  const supabase = getSupabaseClient();

  let success = false;

  // Clear from Redis
  if (redis && topicId && subtopic && difficulty) {
    try {
      const key = getCacheKey(topicId, subtopic, difficulty);
      await redis.del(key);
      success = true;
    } catch (error) {
      console.error('Redis cache clear error:', error);
    }
  }

  // Clear from Supabase
  if (supabase && topicId && subtopic && difficulty) {
    try {
      const key = getCacheKey(topicId, subtopic, difficulty);
      const normalizedSubtopic = subtopic.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 50);

      await supabase
        .from('question_cache')
        .delete()
        .eq('cache_key', key)
        .eq('subtopic', normalizedSubtopic)
        .eq('difficulty', difficulty);

      success = true;
    } catch (error) {
      console.error('Supabase cache clear error:', error);
    }
  }

  return success;
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
