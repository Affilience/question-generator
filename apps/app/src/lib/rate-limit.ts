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

// Default rate limits
export const RATE_LIMITS = {
  // Question generation: 30 requests per hour for authenticated users
  QUESTION_GENERATION_AUTH: {
    endpoint: 'generate-question',
    maxRequests: 30,
    windowMs: 60 * 60 * 1000, // 1 hour
  },
  // Question generation: 10 requests per hour for anonymous users
  QUESTION_GENERATION_ANON: {
    endpoint: 'generate-question',
    maxRequests: 10,
    windowMs: 60 * 60 * 1000, // 1 hour
  },
} as const;

/**
 * Check and update rate limit for a user/IP
 */
export async function checkRateLimit(
  config: RateLimitConfig,
  userId?: string,
  ipAddress?: string
): Promise<RateLimitResult> {
  try {
    const { endpoint, maxRequests, windowMs } = config;

    // Calculate window start (truncate to window size)
    const now = new Date();
    const windowStart = new Date(Math.floor(now.getTime() / windowMs) * windowMs);

    // Build query based on user or IP
    const identifier = userId || ipAddress;
    if (!identifier) {
      return {
        allowed: false,
        remaining: 0,
        resetAt: new Date(windowStart.getTime() + windowMs),
        error: 'No user ID or IP address provided',
      };
    }

    // Check current usage
    const { data: existing, error: fetchError } = await supabase
      .from('api_usage')
      .select('request_count, window_start')
      .eq(userId ? 'user_id' : 'ip_address', identifier)
      .eq('endpoint', endpoint)
      .gte('window_start', windowStart.toISOString())
      .single();

    if (fetchError && fetchError.code !== 'PGRST116') {
      // PGRST116 = no rows found (which is fine)
      console.error('Rate limit check error:', fetchError);
      // Allow request on error (fail open)
      return {
        allowed: true,
        remaining: maxRequests,
        resetAt: new Date(windowStart.getTime() + windowMs),
      };
    }

    const currentCount = existing?.request_count || 0;
    const remaining = Math.max(0, maxRequests - currentCount - 1);
    const resetAt = new Date(windowStart.getTime() + windowMs);

    // Check if limit exceeded
    if (currentCount >= maxRequests) {
      return {
        allowed: false,
        remaining: 0,
        resetAt,
      };
    }

    // Update or insert usage record
    if (existing) {
      await supabase
        .from('api_usage')
        .update({ request_count: currentCount + 1 })
        .eq(userId ? 'user_id' : 'ip_address', identifier)
        .eq('endpoint', endpoint)
        .gte('window_start', windowStart.toISOString());
    } else {
      await supabase.from('api_usage').insert({
        user_id: userId || null,
        ip_address: userId ? null : ipAddress,
        endpoint,
        request_count: 1,
        window_start: windowStart.toISOString(),
      });
    }

    return {
      allowed: true,
      remaining,
      resetAt,
    };
  } catch (error) {
    console.error('Rate limit error:', error);
    // Fail open on error
    return {
      allowed: true,
      remaining: 0,
      resetAt: new Date(),
    };
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
