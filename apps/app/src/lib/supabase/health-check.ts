/**
 * Supabase connection health checker
 * Detects ISP blocking and provides graceful fallbacks
 */

import { useState, useEffect } from 'react';

interface HealthCheckResult {
  isReachable: boolean;
  latency?: number;
  error?: string;
  lastChecked: Date;
}

class SupabaseHealthChecker {
  private static instance: SupabaseHealthChecker;
  private healthStatus: HealthCheckResult | null = null;
  private checkInProgress = false;
  private lastCheckTime = 0;
  private readonly CHECK_INTERVAL = 5 * 60 * 1000; // 5 minutes

  static getInstance(): SupabaseHealthChecker {
    if (!this.instance) {
      this.instance = new SupabaseHealthChecker();
    }
    return this.instance;
  }

  async checkConnection(force = false): Promise<HealthCheckResult> {
    const now = Date.now();
    
    // Return cached result if recent and not forced
    if (!force && this.healthStatus && (now - this.lastCheckTime) < this.CHECK_INTERVAL) {
      return this.healthStatus;
    }

    // Prevent multiple concurrent checks
    if (this.checkInProgress) {
      return this.healthStatus || this.getFailedResult('Check in progress');
    }

    this.checkInProgress = true;
    this.lastCheckTime = now;

    try {
      const startTime = Date.now();
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      
      if (!supabaseUrl) {
        return this.getFailedResult('Supabase URL not configured');
      }

      // Test connection with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'HEAD',
        signal: controller.signal,
        headers: {
          'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        },
      });

      clearTimeout(timeoutId);
      
      const latency = Date.now() - startTime;
      
      if (response.ok || response.status === 401) { // 401 is fine - means auth is working
        this.healthStatus = {
          isReachable: true,
          latency,
          lastChecked: new Date(),
        };
      } else {
        this.healthStatus = this.getFailedResult(`HTTP ${response.status}`);
      }

    } catch (error: any) {
      let errorMessage = 'Unknown error';
      
      if (error.name === 'AbortError') {
        errorMessage = 'Connection timeout - likely ISP blocking';
      } else if (error.message.includes('Failed to fetch')) {
        errorMessage = 'Network error - possible ISP blocking';
      } else {
        errorMessage = error.message || 'Connection failed';
      }

      this.healthStatus = this.getFailedResult(errorMessage);
    } finally {
      this.checkInProgress = false;
    }

    return this.healthStatus;
  }

  private getFailedResult(error: string): HealthCheckResult {
    return {
      isReachable: false,
      error,
      lastChecked: new Date(),
    };
  }

  getLastResult(): HealthCheckResult | null {
    return this.healthStatus;
  }

  isHealthy(): boolean {
    return this.healthStatus?.isReachable ?? false;
  }
}

export const supabaseHealth = SupabaseHealthChecker.getInstance();

// Hook for React components
export function useSupabaseHealth() {
  const [health, setHealth] = useState<HealthCheckResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const checkHealth = async (force = false) => {
    setIsChecking(true);
    try {
      const result = await supabaseHealth.checkConnection(force);
      setHealth(result);
      return result;
    } finally {
      setIsChecking(false);
    }
  };

  useEffect(() => {
    // Initial check
    checkHealth();
  }, []);

  return {
    health,
    isChecking,
    checkHealth,
    isHealthy: health?.isReachable ?? false,
  };
}