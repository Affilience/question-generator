/**
 * Session Monitoring and Diagnostics System
 * Tracks session persistence metrics and provides debugging information
 */

import { createClient } from '@/lib/supabase/client';
import { getEnhancedStorage } from '@/lib/storage/enhanced-storage';
import { getServiceWorkerBridge } from '@/lib/session/service-worker-bridge';
import { getSessionRecoveryManager } from '@/lib/session/session-recovery';
import { getIOSWorkarounds } from '@/lib/session/ios-workarounds';

interface SessionMetric {
  timestamp: number;
  event: string;
  data: Record<string, any>;
  sessionId?: string;
  userId?: string;
}

interface SessionDiagnostics {
  browser: BrowserInfo;
  storage: StorageInfo;
  session: SessionInfo;
  recovery: RecoveryInfo;
  performance: PerformanceInfo;
  errors: ErrorInfo[];
}

interface BrowserInfo {
  userAgent: string;
  isIOS: boolean;
  isSafari: boolean;
  isPWA: boolean;
  cookiesEnabled: boolean;
  localStorage: boolean;
  indexedDB: boolean;
  serviceWorker: boolean;
  displayMode?: string;
}

interface StorageInfo {
  localStorageSize: number;
  indexedDBSupported: boolean;
  cacheStorageSupported: boolean;
  storageQuota?: StorageEstimate;
  persistentStorage: boolean;
}

interface SessionInfo {
  isAuthenticated: boolean;
  sessionDuration: number;
  lastActivity: number;
  tokenExpiry?: number;
  refreshTokenAvailable: boolean;
  sessionSource: 'localStorage' | 'cookies' | 'indexedDB' | 'serviceWorker' | 'supabase' | 'unknown';
}

interface RecoveryInfo {
  totalRecoveryAttempts: number;
  successfulRecoveries: number;
  lastRecoveryAttempt: number;
  averageRecoveryTime: number;
  recoveryMethods: Record<string, number>;
}

interface PerformanceInfo {
  sessionLoadTime: number;
  storageAccessTime: number;
  authCheckTime: number;
  recoveryTime?: number;
}

interface ErrorInfo {
  timestamp: number;
  type: 'auth' | 'storage' | 'recovery' | 'network' | 'monitoring' | 'session';
  message: string;
  stack?: string;
  context?: Record<string, any>;
}

class SessionMonitor {
  private storage = getEnhancedStorage();
  private swBridge = getServiceWorkerBridge();
  private recovery = getSessionRecoveryManager();
  private iosWorkarounds = getIOSWorkarounds();
  private supabase = createClient();

  private metrics: SessionMetric[] = [];
  private errors: ErrorInfo[] = [];
  private isMonitoring = false;
  private monitoringInterval: number | null = null;
  private performanceMarks: Map<string, number> = new Map();

  private readonly MAX_METRICS = 100;
  private readonly MAX_ERRORS = 50;
  private readonly MONITORING_INTERVAL = 30000; // 30 seconds

  /**
   * Start session monitoring
   */
  async startMonitoring(): Promise<void> {
    if (this.isMonitoring) return;

    try {
      this.isMonitoring = true;
      
      // Start periodic monitoring
      this.monitoringInterval = window.setInterval(() => {
        this.collectMetrics();
      }, this.MONITORING_INTERVAL);

      // Set up error tracking
      this.setupErrorTracking();

      // Set up performance tracking
      this.setupPerformanceTracking();

      // Load existing metrics
      await this.loadMetrics();

      // Record monitoring start
      this.recordMetric('monitoring_started', {
        timestamp: Date.now(),
        userAgent: navigator.userAgent
      });

      console.log('[SessionMonitor] Monitoring started');

    } catch (error) {
      console.error('[SessionMonitor] Failed to start monitoring:', error);
      this.recordError('monitoring', 'Failed to start session monitoring', error);
    }
  }

  /**
   * Stop session monitoring
   */
  stopMonitoring(): void {
    if (!this.isMonitoring) return;

    this.isMonitoring = false;

    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }

    // Record monitoring stop
    this.recordMetric('monitoring_stopped', {
      timestamp: Date.now(),
      duration: Date.now() - (this.metrics[0]?.timestamp || Date.now())
    });

    // Save final metrics
    this.saveMetrics();

    console.log('[SessionMonitor] Monitoring stopped');
  }

  /**
   * Set up error tracking
   */
  private setupErrorTracking(): void {
    if (typeof window === 'undefined') return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.recordError('auth', event.message, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        stack: event.error?.stack
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.recordError('auth', 'Unhandled promise rejection', {
        reason: event.reason,
        stack: event.reason?.stack
      });
    });

    // Supabase error tracking
    this.supabase.auth.onAuthStateChange((event: string, session: any) => {
      if (event === 'TOKEN_REFRESHED') {
        this.recordMetric('token_refreshed', { timestamp: Date.now() });
      } else if (event === 'SIGNED_OUT') {
        this.recordMetric('signed_out', { timestamp: Date.now() });
      } else if (event === 'SIGNED_IN') {
        this.recordMetric('signed_in', { 
          timestamp: Date.now(),
          userId: session?.user?.id 
        });
      }
    });
  }

  /**
   * Set up performance tracking
   */
  private setupPerformanceTracking(): void {
    // Track auth operations
    const originalGetSession = this.supabase.auth.getSession.bind(this.supabase.auth);
    (this.supabase.auth as any).getSession = async () => {
      const startTime = performance.now();
      try {
        const result = await originalGetSession();
        const endTime = performance.now();
        this.recordMetric('session_check_performance', {
          duration: endTime - startTime,
          hasSession: !!result.data.session,
          hasError: !!result.error
        });
        return result;
      } catch (error) {
        const endTime = performance.now();
        this.recordMetric('session_check_error', {
          duration: endTime - startTime,
          error: error instanceof Error ? error.message : String(error)
        });
        throw error;
      }
    };
  }

  /**
   * Collect current session metrics
   */
  private async collectMetrics(): Promise<void> {
    try {
      const startTime = performance.now();

      // Session state
      const { data: { session } } = await this.supabase.auth.getSession();
      const isAuthenticated = !!session;

      // Storage diagnostics
      const storageDiag = await this.getStorageDiagnostics();

      // Recovery state
      const recoveryState = this.recovery.getRecoveryState();

      this.recordMetric('periodic_check', {
        isAuthenticated,
        sessionExpiry: session?.expires_at,
        userId: session?.user?.id,
        storage: storageDiag,
        recovery: recoveryState,
        checkDuration: performance.now() - startTime
      });

    } catch (error) {
      this.recordError('monitoring', 'Metric collection failed', error);
    }
  }

  /**
   * Get comprehensive session diagnostics
   */
  async getDiagnostics(): Promise<SessionDiagnostics> {
    const startTime = performance.now();

    try {
      const [browserInfo, storageInfo, sessionInfo, recoveryInfo, performanceInfo] = await Promise.all([
        this.getBrowserInfo(),
        this.getStorageInfo(),
        this.getSessionInfo(),
        this.getRecoveryInfo(),
        this.getPerformanceInfo()
      ]);

      const diagnostics: SessionDiagnostics = {
        browser: browserInfo,
        storage: storageInfo,
        session: sessionInfo,
        recovery: recoveryInfo,
        performance: {
          ...performanceInfo,
          sessionLoadTime: performance.now() - startTime
        },
        errors: [...this.errors]
      };

      // Record diagnostics generation
      this.recordMetric('diagnostics_generated', {
        duration: performance.now() - startTime,
        errorCount: this.errors.length,
        metricCount: this.metrics.length
      });

      return diagnostics;

    } catch (error) {
      this.recordError('monitoring', 'Diagnostics generation failed', error);
      throw error;
    }
  }

  /**
   * Get browser information
   */
  private async getBrowserInfo(): Promise<BrowserInfo> {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    const isPWA = window.matchMedia('(display-mode: standalone)').matches || 
                   (navigator as any).standalone === true;

    return {
      userAgent,
      isIOS,
      isSafari,
      isPWA,
      cookiesEnabled: navigator.cookieEnabled,
      localStorage: typeof Storage !== 'undefined',
      indexedDB: typeof indexedDB !== 'undefined',
      serviceWorker: 'serviceWorker' in navigator,
      displayMode: window.matchMedia('(display-mode: standalone)').matches ? 'standalone' : 'browser'
    };
  }

  /**
   * Get storage information
   */
  private async getStorageInfo(): Promise<StorageInfo> {
    let localStorageSize = 0;
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      
      // Estimate localStorage size
      let total = 0;
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          total += localStorage[key].length + key.length;
        }
      }
      localStorageSize = total;
    } catch (error) {
      // localStorage not available
    }

    let storageQuota;
    let persistentStorage = false;

    try {
      if ('storage' in navigator && 'estimate' in navigator.storage) {
        storageQuota = await navigator.storage.estimate();
      }

      if ('storage' in navigator && 'persist' in navigator.storage) {
        persistentStorage = await navigator.storage.persisted();
      }
    } catch (error) {
      // Storage API not available
    }

    return {
      localStorageSize,
      indexedDBSupported: typeof indexedDB !== 'undefined',
      cacheStorageSupported: 'caches' in window,
      storageQuota,
      persistentStorage
    };
  }

  /**
   * Get session information
   */
  private async getSessionInfo(): Promise<SessionInfo> {
    const startTime = performance.now();
    
    try {
      const { data: { session } } = await this.supabase.auth.getSession();
      const authCheckTime = performance.now() - startTime;

      let sessionSource: SessionInfo['sessionSource'] = 'unknown';
      let sessionDuration = 0;
      let lastActivity = Date.now();

      if (session) {
        // Determine session source
        const storedSession = await this.storage.getItem('supabase.auth.token');
        if (storedSession) {
          sessionSource = 'localStorage';
        }

        // Calculate session duration
        if (session.expires_at) {
          const expiryTime = session.expires_at * 1000;
          const issueTime = expiryTime - (60 * 60 * 1000); // Assume 1 hour session
          sessionDuration = Date.now() - issueTime;
        }
      }

      return {
        isAuthenticated: !!session,
        sessionDuration,
        lastActivity,
        tokenExpiry: session?.expires_at,
        refreshTokenAvailable: !!session?.refresh_token,
        sessionSource
      };

    } catch (error) {
      this.recordError('session', 'Session info collection failed', error);
      return {
        isAuthenticated: false,
        sessionDuration: 0,
        lastActivity: Date.now(),
        refreshTokenAvailable: false,
        sessionSource: 'unknown'
      };
    }
  }

  /**
   * Get recovery information
   */
  private getRecoveryInfo(): RecoveryInfo {
    const recoveryState = this.recovery.getRecoveryState();
    
    // Analyze metrics for recovery patterns
    const recoveryMetrics = this.metrics.filter(m => 
      m.event.includes('recovery') || m.event.includes('session_check')
    );

    const recoveryMethods: Record<string, number> = {};
    let totalRecoveryTime = 0;
    let recoveryCount = 0;

    recoveryMetrics.forEach(metric => {
      if (metric.data.recoveryMethod) {
        recoveryMethods[metric.data.recoveryMethod] = (recoveryMethods[metric.data.recoveryMethod] || 0) + 1;
      }
      if (metric.data.recoveryTime) {
        totalRecoveryTime += metric.data.recoveryTime;
        recoveryCount++;
      }
    });

    return {
      totalRecoveryAttempts: recoveryState.recoveryAttempts,
      successfulRecoveries: recoveryCount,
      lastRecoveryAttempt: recoveryState.lastRecoveryAttempt,
      averageRecoveryTime: recoveryCount > 0 ? totalRecoveryTime / recoveryCount : 0,
      recoveryMethods
    };
  }

  /**
   * Get performance information
   */
  private getPerformanceInfo(): PerformanceInfo {
    const performanceMetrics = this.metrics.filter(m => 
      m.event.includes('performance') || m.data.duration
    );

    let totalSessionLoadTime = 0;
    let totalStorageAccessTime = 0;
    let totalAuthCheckTime = 0;
    let count = 0;

    performanceMetrics.forEach(metric => {
      if (metric.data.duration) {
        if (metric.event.includes('session')) {
          totalSessionLoadTime += metric.data.duration;
        } else if (metric.event.includes('storage')) {
          totalStorageAccessTime += metric.data.duration;
        } else if (metric.event.includes('auth')) {
          totalAuthCheckTime += metric.data.duration;
        }
        count++;
      }
    });

    return {
      sessionLoadTime: count > 0 ? totalSessionLoadTime / count : 0,
      storageAccessTime: count > 0 ? totalStorageAccessTime / count : 0,
      authCheckTime: count > 0 ? totalAuthCheckTime / count : 0
    };
  }

  /**
   * Get storage diagnostics
   */
  private async getStorageDiagnostics(): Promise<Record<string, any>> {
    const diagnostics: Record<string, any> = {};

    try {
      // Test localStorage
      const testKey = 'session-monitor-test';
      const testValue = 'test-value';
      
      localStorage.setItem(testKey, testValue);
      const retrieved = localStorage.getItem(testKey);
      localStorage.removeItem(testKey);
      
      diagnostics.localStorage = retrieved === testValue;
    } catch (error) {
      diagnostics.localStorage = false;
      diagnostics.localStorageError = error instanceof Error ? error.message : String(error);
    }

    try {
      // Test enhanced storage
      await this.storage.setItem('session-monitor-test', 'test-value');
      const retrieved = await this.storage.getItem('session-monitor-test');
      await this.storage.removeItem('session-monitor-test');
      
      diagnostics.enhancedStorage = retrieved === 'test-value';
    } catch (error) {
      diagnostics.enhancedStorage = false;
      diagnostics.enhancedStorageError = error instanceof Error ? error.message : String(error);
    }

    try {
      // Test service worker
      diagnostics.serviceWorker = this.swBridge.isActive();
    } catch (error) {
      diagnostics.serviceWorker = false;
      diagnostics.serviceWorkerError = error instanceof Error ? error.message : String(error);
    }

    return diagnostics;
  }

  /**
   * Record a metric
   */
  private recordMetric(event: string, data: Record<string, any>): void {
    const metric: SessionMetric = {
      timestamp: Date.now(),
      event,
      data,
      sessionId: this.generateSessionId(),
      userId: this.getCurrentUserId()
    };

    this.metrics.push(metric);

    // Keep only recent metrics
    if (this.metrics.length > this.MAX_METRICS) {
      this.metrics = this.metrics.slice(-this.MAX_METRICS);
    }

    // Periodically save metrics
    if (this.metrics.length % 10 === 0) {
      this.saveMetrics();
    }
  }

  /**
   * Record an error
   */
  private recordError(type: ErrorInfo['type'], message: string, error?: any): void {
    const errorInfo: ErrorInfo = {
      timestamp: Date.now(),
      type,
      message,
      stack: error instanceof Error ? error.stack : undefined,
      context: error && typeof error === 'object' ? error : { error: String(error) }
    };

    this.errors.push(errorInfo);

    // Keep only recent errors
    if (this.errors.length > this.MAX_ERRORS) {
      this.errors = this.errors.slice(-this.MAX_ERRORS);
    }

    console.warn(`[SessionMonitor] ${type} error:`, message, error);
  }

  /**
   * Save metrics to storage
   */
  private async saveMetrics(): Promise<void> {
    try {
      const data = {
        metrics: this.metrics.slice(-50), // Keep only recent 50 metrics
        errors: this.errors.slice(-25),   // Keep only recent 25 errors
        timestamp: Date.now()
      };

      await this.storage.setItem('session-monitor-data', JSON.stringify(data));
    } catch (error) {
      console.warn('[SessionMonitor] Failed to save metrics:', error);
    }
  }

  /**
   * Load metrics from storage
   */
  private async loadMetrics(): Promise<void> {
    try {
      const stored = await this.storage.getItem('session-monitor-data');
      if (stored) {
        const data = JSON.parse(stored);
        this.metrics = data.metrics || [];
        this.errors = data.errors || [];
      }
    } catch (error) {
      console.warn('[SessionMonitor] Failed to load metrics:', error);
    }
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Get current user ID
   */
  private getCurrentUserId(): string | undefined {
    try {
      const { data: { user } } = this.supabase.auth.getUser();
      return user?.then((u: any) => u?.id);
    } catch {
      return undefined;
    }
  }

  /**
   * Export diagnostics data
   */
  async exportDiagnostics(): Promise<string> {
    const diagnostics = await this.getDiagnostics();
    return JSON.stringify(diagnostics, null, 2);
  }

  /**
   * Clear all monitoring data
   */
  async clearData(): Promise<void> {
    this.metrics = [];
    this.errors = [];
    this.performanceMarks.clear();
    
    try {
      await this.storage.removeItem('session-monitor-data');
    } catch (error) {
      console.warn('[SessionMonitor] Failed to clear data:', error);
    }
  }

  /**
   * Get monitoring statistics
   */
  getStats(): Record<string, any> {
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;
    const recentMetrics = this.metrics.filter(m => now - m.timestamp < oneHour);
    const recentErrors = this.errors.filter(e => now - e.timestamp < oneHour);

    return {
      totalMetrics: this.metrics.length,
      totalErrors: this.errors.length,
      recentMetrics: recentMetrics.length,
      recentErrors: recentErrors.length,
      monitoring: this.isMonitoring,
      startTime: this.metrics[0]?.timestamp || null,
      lastMetric: this.metrics[this.metrics.length - 1]?.timestamp || null
    };
  }
}

// Singleton instance
let sessionMonitorInstance: SessionMonitor | null = null;

export function getSessionMonitor(): SessionMonitor {
  if (!sessionMonitorInstance) {
    sessionMonitorInstance = new SessionMonitor();
  }
  return sessionMonitorInstance;
}

export { SessionMonitor, type SessionDiagnostics, type SessionMetric };