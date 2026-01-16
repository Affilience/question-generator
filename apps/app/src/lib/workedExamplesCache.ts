import { Redis } from '@upstash/redis';
import { Difficulty } from '@/types';

// Types for worked examples
export interface WorkedExample {
  questionType: string;
  question: string;
  steps: {
    step: number;
    instruction: string;
    working: string;
    explanation: string;
  }[];
  answer: string;
  keyTips: string[];
  commonMistakes: string[];
}

export interface WorkedExamplesSet {
  subtopic: string;
  examples: WorkedExample[];
  cachedAt: number;
}

// Initialize Redis client
function getRedisClient(): Redis | null {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  return new Redis({ url, token });
}

// Generate cache key for worked examples
function getExamplesCacheKey(topicId: string, subtopic: string): string {
  const normalizedSubtopic = subtopic
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '_')
    .substring(0, 50);

  return `examples:${topicId}:${normalizedSubtopic}`;
}

/**
 * Get cached worked examples
 */
export async function getCachedExamples(
  topicId: string,
  subtopic: string
): Promise<WorkedExamplesSet | null> {
  const redis = getRedisClient();
  if (!redis) return null;

  try {
    const key = getExamplesCacheKey(topicId, subtopic);
    const cached = await redis.get<WorkedExamplesSet>(key);

    if (!cached) {
      return null;
    }

    // Check if expired (90 days for examples - they don't need frequent updates)
    const expiryTime = 90 * 24 * 60 * 60 * 1000;
    if (Date.now() - cached.cachedAt > expiryTime) {
      return null;
    }

    return cached;
  } catch (error) {
    console.error('Examples cache read error:', error);
    return null;
  }
}

/**
 * Cache worked examples
 */
export async function cacheExamples(
  topicId: string,
  subtopic: string,
  examples: WorkedExample[]
): Promise<void> {
  const redis = getRedisClient();
  if (!redis) return;

  try {
    const key = getExamplesCacheKey(topicId, subtopic);
    const data: WorkedExamplesSet = {
      subtopic,
      examples,
      cachedAt: Date.now(),
    };

    // Set with 90-day expiry
    await redis.set(key, data, {
      ex: 90 * 24 * 60 * 60,
    });
  } catch (error) {
    console.error('Examples cache write error:', error);
  }
}
