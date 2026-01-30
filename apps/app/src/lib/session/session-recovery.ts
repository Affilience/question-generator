/**
 * Aggressive Session Recovery System
 * Handles robust session recovery across various mobile Safari scenarios
 */

import { createClient } from '@/lib/supabase/client';
import { getEnhancedStorage } from '@/lib/storage/enhanced-storage';
import { getServiceWorkerBridge } from '@/lib/session/service-worker-bridge';

interface RecoveryOptions {
  maxRetries?: number;
  retryDelay?: number;
  exponentialBackoff?: boolean;
  enableServiceWorker?: boolean;
  enablePersistentStorage?: boolean;
}

interface SessionRecoveryState {
  isRecovering: boolean;
  lastRecoveryAttempt: number;
  recoveryAttempts: number;
  lastSuccessfulAuth: number;
}

class SessionRecoveryManager {
  private storage = getEnhancedStorage();
  private swBridge = getServiceWorkerBridge();
  private supabase = createClient();
  
  private state: SessionRecoveryState = {
    isRecovering: false,
    lastRecoveryAttempt: 0,
    recoveryAttempts: 0,
    lastSuccessfulAuth: 0
  };

  private recoveryTimer: number | null = null;
  private visibilityTimer: number | null = null;
  private healthCheckInterval: number | null = null;

  private readonly DEFAULT_OPTIONS: Required<RecoveryOptions> = {
    maxRetries: 5,
    retryDelay: 2000,
    exponentialBackoff: true,
    enableServiceWorker: true,
    enablePersistentStorage: true
  };

  /**
   * Initialize session recovery system
   */
  async initialize(options: RecoveryOptions = {}): Promise<void> {
    const opts = { ...this.DEFAULT_OPTIONS, ...options };
    
    try {
      // Initialize service worker bridge if enabled
      if (opts.enableServiceWorker) {
        await this.swBridge.initialize();
      }

      // Request persistent storage if supported and enabled
      if (opts.enablePersistentStorage && 'storage' in navigator && 'persist' in navigator.storage) {
        try {
          const persistent = await navigator.storage.persist();
          console.log('[SessionRecovery] Persistent storage:', persistent);
        } catch (error) {
          console.warn('[SessionRecovery] Persistent storage request failed:', error);
        }
      }

      // Set up event listeners for session recovery triggers
      this.setupEventListeners();

      // Start health check interval
      this.startHealthCheck();

      // Load saved recovery state
      await this.loadRecoveryState();

      console.log('[SessionRecovery] Initialized successfully');

    } catch (error) {
      console.error('[SessionRecovery] Initialization failed:', error);
    }
  }

  /**
   * Set up event listeners for various session recovery scenarios
   */
  private setupEventListeners(): void {
    if (typeof window === 'undefined') return;

    // Page visibility changes (app switching, tab changes)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.scheduleRecoveryCheck(500); // Delay for iOS Safari
      }
    });

    // Window focus events (browser/app regaining focus)
    window.addEventListener('focus', () => {
      this.scheduleRecoveryCheck(1000); // Longer delay for focus events
    });

    // Page show events (back/forward navigation, PWA activation)
    window.addEventListener('pageshow', (event) => {
      // Only trigger on persisted page loads (back/forward navigation)
      if (event.persisted) {
        this.scheduleRecoveryCheck(1500); // Even longer delay for persisted loads
      }
    });

    // Online/offline events
    window.addEventListener('online', () => {
      this.scheduleRecoveryCheck(2000); // Network recovery delay
    });

    // Storage events (cross-tab session changes)
    window.addEventListener('storage', (event) => {
      if (event.key?.includes('supabase.auth')) {
        this.scheduleRecoveryCheck(100);
      }
    });

    // Service worker session updates
    window.addEventListener('sw-session-updated', () => {
      this.scheduleRecoveryCheck(100);
    });

    // Service worker session cleared
    window.addEventListener('sw-session-cleared', () => {
      this.clearLocalState();
    });

    // iOS-specific touch events (app activation detection)
    if (this.storage.isIOSSafari()) {
      document.addEventListener('touchstart', this.handleIOSTouch.bind(this), { passive: true, once: false });
    }
  }

  /**
   * Handle iOS touch events to detect app activation
   */
  private handleIOSTouch(): void {
    // Only trigger recovery if it's been a while since last touch
    const now = Date.now();
    const lastTouch = parseInt(localStorage.getItem('last-touch') || '0');
    
    if (now - lastTouch > 30000) { // 30 seconds
      this.scheduleRecoveryCheck(200);
    }
    
    localStorage.setItem('last-touch', now.toString());
  }

  /**
   * Schedule a recovery check with debouncing
   */
  private scheduleRecoveryCheck(delay: number = 1000): void {
    if (this.visibilityTimer) {
      clearTimeout(this.visibilityTimer);
    }

    this.visibilityTimer = window.setTimeout(() => {
      this.attemptSessionRecovery();
    }, delay);
  }

  /**
   * Start periodic health check for session validity
   */
  private startHealthCheck(): void {
    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
    }

    // Check session health every 5 minutes
    this.healthCheckInterval = window.setInterval(() => {
      this.checkSessionHealth();
    }, 5 * 60 * 1000);
  }

  /**
   * Check session health and trigger recovery if needed
   */
  private async checkSessionHealth(): Promise<void> {
    try {
      const { data: { session }, error } = await this.supabase.auth.getSession();
      
      if (error || !session) {
        console.log('[SessionRecovery] Health check failed, attempting recovery');
        await this.attemptSessionRecovery();
      } else {
        // Update last successful auth timestamp
        this.state.lastSuccessfulAuth = Date.now();
        await this.saveRecoveryState();
      }
    } catch (error) {
      console.warn('[SessionRecovery] Health check error:', error);
    }
  }

  /**
   * Attempt session recovery with retry logic and exponential backoff
   */
  async attemptSessionRecovery(options: RecoveryOptions = {}): Promise<boolean> {
    const opts = { ...this.DEFAULT_OPTIONS, ...options };
    
    // Prevent concurrent recovery attempts
    if (this.state.isRecovering) {
      console.log('[SessionRecovery] Recovery already in progress');
      return false;
    }

    // Check if we've exceeded max retries recently
    const now = Date.now();
    const timeSinceLastAttempt = now - this.state.lastRecoveryAttempt;
    const minRetryInterval = opts.exponentialBackoff 
      ? Math.min(opts.retryDelay * Math.pow(2, this.state.recoveryAttempts), 60000)
      : opts.retryDelay;

    if (timeSinceLastAttempt < minRetryInterval) {
      console.log('[SessionRecovery] Too soon for retry, waiting');
      return false;
    }

    if (this.state.recoveryAttempts >= opts.maxRetries) {
      const resetTime = 10 * 60 * 1000; // Reset after 10 minutes
      if (timeSinceLastAttempt > resetTime) {
        this.state.recoveryAttempts = 0;
      } else {
        console.log('[SessionRecovery] Max retries exceeded');
        return false;
      }
    }

    this.state.isRecovering = true;
    this.state.lastRecoveryAttempt = now;
    this.state.recoveryAttempts++;

    try {
      console.log(`[SessionRecovery] Attempting recovery (${this.state.recoveryAttempts}/${opts.maxRetries})`);

      // Step 1: Try current Supabase session
      let { data: { session }, error } = await this.supabase.auth.getSession();
      
      if (session && !error) {
        console.log('[SessionRecovery] Current session is valid');
        await this.onRecoverySuccess();
        return true;
      }

      // Step 2: Try enhanced storage recovery
      const storedSession = await this.recoverFromEnhancedStorage();
      if (storedSession) {
        console.log('[SessionRecovery] Recovered from enhanced storage');
        await this.onRecoverySuccess();
        return true;
      }

      // Step 3: Try service worker recovery
      if (opts.enableServiceWorker) {
        const swSession = await this.recoverFromServiceWorker();
        if (swSession) {
          console.log('[SessionRecovery] Recovered from service worker');
          await this.onRecoverySuccess();
          return true;
        }
      }

      // Step 4: Try refresh token recovery
      const refreshed = await this.attemptTokenRefresh();
      if (refreshed) {
        console.log('[SessionRecovery] Recovered via token refresh');
        await this.onRecoverySuccess();
        return true;
      }

      // Step 5: Try URL hash recovery (OAuth flows)
      const hashRecovered = await this.recoverFromURLHash();
      if (hashRecovered) {
        console.log('[SessionRecovery] Recovered from URL hash');
        await this.onRecoverySuccess();
        return true;
      }

      console.log('[SessionRecovery] All recovery attempts failed');
      await this.onRecoveryFailure();
      return false;

    } catch (error) {
      console.error('[SessionRecovery] Recovery attempt failed:', error);
      await this.onRecoveryFailure();
      return false;
    }
  }

  /**
   * Recover session from enhanced storage
   */
  private async recoverFromEnhancedStorage(): Promise<boolean> {
    try {
      const storedToken = await this.storage.getItem('supabase.auth.token');
      if (!storedToken) return false;

      const tokenData = JSON.parse(storedToken);
      if (tokenData.access_token && tokenData.refresh_token) {
        // Validate token expiry
        if (tokenData.expires_at && tokenData.expires_at * 1000 > Date.now()) {
          // Token is still valid, refresh Supabase session
          const { error } = await this.supabase.auth.setSession({
            access_token: tokenData.access_token,
            refresh_token: tokenData.refresh_token
          });

          return !error;
        }
      }
    } catch (error) {
      console.warn('[SessionRecovery] Enhanced storage recovery failed:', error);
    }
    return false;
  }

  /**
   * Recover session from service worker
   */
  private async recoverFromServiceWorker(): Promise<boolean> {
    try {
      if (!this.swBridge.isActive()) return false;

      const swSession = await this.swBridge.getSessionFromServiceWorker();
      if (swSession && swSession.access_token) {
        const { error } = await this.supabase.auth.setSession({
          access_token: swSession.access_token,
          refresh_token: swSession.refresh_token
        });

        return !error;
      }
    } catch (error) {
      console.warn('[SessionRecovery] Service worker recovery failed:', error);
    }
    return false;
  }

  /**
   * Attempt to refresh expired tokens
   */
  private async attemptTokenRefresh(): Promise<boolean> {
    try {
      const { data, error } = await this.supabase.auth.refreshSession();
      return !error && !!data.session;
    } catch (error) {
      console.warn('[SessionRecovery] Token refresh failed:', error);
      return false;
    }
  }

  /**
   * Recover from URL hash (OAuth flows)
   */
  private async recoverFromURLHash(): Promise<boolean> {
    try {
      if (typeof window === 'undefined') return false;
      
      const hash = window.location.hash;
      if (!hash.includes('access_token')) return false;

      // Let Supabase handle the hash
      const { data, error } = await this.supabase.auth.getSession();
      return !error && !!data.session;
    } catch (error) {
      console.warn('[SessionRecovery] URL hash recovery failed:', error);
      return false;
    }
  }

  /**
   * Handle successful recovery
   */
  private async onRecoverySuccess(): Promise<void> {
    this.state.isRecovering = false;
    this.state.recoveryAttempts = 0;
    this.state.lastSuccessfulAuth = Date.now();
    
    await this.saveRecoveryState();
    
    // Sync session to service worker
    if (this.swBridge.isActive()) {
      await this.swBridge.syncSessionToServiceWorker();
    }

    // Trigger success event
    window.dispatchEvent(new CustomEvent('session-recovery-success'));
  }

  /**
   * Handle recovery failure
   */
  private async onRecoveryFailure(): Promise<void> {
    this.state.isRecovering = false;
    await this.saveRecoveryState();

    // Trigger failure event
    window.dispatchEvent(new CustomEvent('session-recovery-failure', {
      detail: { attempts: this.state.recoveryAttempts }
    }));
  }

  /**
   * Clear local session state
   */
  private async clearLocalState(): Promise<void> {
    this.state.lastSuccessfulAuth = 0;
    this.state.recoveryAttempts = 0;
    await this.saveRecoveryState();
  }

  /**
   * Save recovery state to storage
   */
  private async saveRecoveryState(): Promise<void> {
    try {
      await this.storage.setItem('session-recovery-state', JSON.stringify(this.state));
    } catch (error) {
      console.warn('[SessionRecovery] Failed to save state:', error);
    }
  }

  /**
   * Load recovery state from storage
   */
  private async loadRecoveryState(): Promise<void> {
    try {
      const saved = await this.storage.getItem('session-recovery-state');
      if (saved) {
        const state = JSON.parse(saved);
        this.state = { ...this.state, ...state };
      }
    } catch (error) {
      console.warn('[SessionRecovery] Failed to load state:', error);
    }
  }

  /**
   * Get current recovery state
   */
  getRecoveryState(): Readonly<SessionRecoveryState> {
    return { ...this.state };
  }

  /**
   * Force immediate session recovery
   */
  async forceRecovery(options?: RecoveryOptions): Promise<boolean> {
    this.state.recoveryAttempts = 0; // Reset retry count
    return await this.attemptSessionRecovery(options);
  }

  /**
   * Clean up resources
   */
  destroy(): void {
    if (this.recoveryTimer) {
      clearTimeout(this.recoveryTimer);
      this.recoveryTimer = null;
    }

    if (this.visibilityTimer) {
      clearTimeout(this.visibilityTimer);
      this.visibilityTimer = null;
    }

    if (this.healthCheckInterval) {
      clearInterval(this.healthCheckInterval);
      this.healthCheckInterval = null;
    }

    // Remove event listeners
    if (typeof window !== 'undefined') {
      document.removeEventListener('visibilitychange', this.scheduleRecoveryCheck);
      window.removeEventListener('focus', this.scheduleRecoveryCheck);
      window.removeEventListener('pageshow', this.scheduleRecoveryCheck);
      window.removeEventListener('online', this.scheduleRecoveryCheck);
      window.removeEventListener('storage', this.scheduleRecoveryCheck);
      window.removeEventListener('sw-session-updated', this.scheduleRecoveryCheck);
      window.removeEventListener('sw-session-cleared', this.clearLocalState);
    }
  }
}

// Singleton instance
let recoveryManagerInstance: SessionRecoveryManager | null = null;

export function getSessionRecoveryManager(): SessionRecoveryManager {
  if (!recoveryManagerInstance) {
    recoveryManagerInstance = new SessionRecoveryManager();
  }
  return recoveryManagerInstance;
}

export { SessionRecoveryManager };