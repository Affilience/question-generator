import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Use service role for rate limiting (bypasses RLS)
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export interface RateLimitConfig {
  endpoint: string;
  maxRequests: number;
  windowMs: number; // Window size in milliseconds
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: Date;
  error?: string;
}

// Default rate limits - Optimized for user onboarding and engagement
export const RATE_LIMITS = {
  // Question generation: 200 requests per hour for authenticated users
  QUESTION_GENERATION_AUTH: {
    endpoint: 'generate-question',
    maxRequests: 200,
    windowMs: 60 * 60 * 1000, // 1 hour
  },
  // Question generation: 50 requests per hour for anonymous users (enough for proper trial)
  QUESTION_GENERATION_ANON: {
    endpoint: 'generate-question',
    maxRequests: 50,
    windowMs: 60 * 60 * 1000, // 1 hour
  },
} as const;

/**
 * Check and update the rate limit for a user or IP.
 *
 * Delegates the whole check to a single atomic `INSERT … ON CONFLICT DO UPDATE
 * … RETURNING` in Postgres. The previous read-then-write had three faults that
 * together meant anonymous traffic was effectively unlimited:
 *
 *  1. The unique index covers (user_id, endpoint, window_start), and Postgres
 *     treats NULLs as distinct — so it never applied to anonymous rows. Every
 *     concurrent request inserted a fresh row instead of incrementing one, and
 *     114,742 of the table's 117,475 rows were anonymous.
 *  2. Once a window held more than one row, `.single()` errored, and the error
 *     branch failed open AND skipped the increment — so the limiter silently
 *     switched itself off for that IP. Already true for 540 windows.
 *  3. Two concurrent requests could both read the same count and both write
 *     count+1, losing an increment.
 */
export async function checkRateLimit(
  config: RateLimitConfig,
  userId?: string,
  ipAddress?: string
): Promise<RateLimitResult> {
  const { endpoint, maxRequests, windowMs } = config;

  // Truncate to the window size so every request in the same window agrees.
  const now = Date.now();
  const windowStart = new Date(Math.floor(now / windowMs) * windowMs);
  const resetAt = new Date(windowStart.getTime() + windowMs);

  const identifier = userId || ipAddress;
  if (!identifier) {
    return {
      allowed: false,
      remaining: 0,
      resetAt,
      error: 'No user ID or IP address provided',
    };
  }

  try {
    const { data, error } = await supabase.rpc('check_rate_limit', {
      p_user_id: userId ?? null,
      p_ip_address: userId ? null : (ipAddress ?? null),
      p_endpoint: endpoint,
      p_window_start: windowStart.toISOString(),
      p_max_requests: maxRequests,
    });

    if (error) {
      console.error('Rate limit check error:', error);
      // Fail open: a limiter outage must not take the product down.
      return { allowed: true, remaining: maxRequests, resetAt };
    }

    const row = Array.isArray(data) ? data[0] : data;
    const count = Number(row?.request_count ?? 0);

    return {
      allowed: Boolean(row?.allowed),
      remaining: Math.max(0, maxRequests - count),
      resetAt,
    };
  } catch (error) {
    console.error('Rate limit error:', error);
    return { allowed: true, remaining: maxRequests, resetAt };
  }
}

/**
 * Get client IP from request headers
 */
export function getClientIP(request: Request): string {
  // Check various headers for the real IP
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }

  // Fallback
  return 'unknown';
}

/**
 * Format rate limit headers for response
 */
export function getRateLimitHeaders(result: RateLimitResult): Record<string, string> {
  return {
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': Math.floor(result.resetAt.getTime() / 1000).toString(),
  };
}
