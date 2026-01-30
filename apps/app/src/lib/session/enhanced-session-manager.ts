/**
 * Enhanced Session Manager
 * Integrates all mobile Safari session persistence improvements
 */

import { getEnhancedStorage } from '@/lib/storage/enhanced-storage';
import { getServiceWorkerBridge } from '@/lib/session/service-worker-bridge';
import { getSessionRecoveryManager } from '@/lib/session/session-recovery';
import { getIOSWorkarounds } from '@/lib/session/ios-workarounds';
import { getSessionMonitor } from '@/lib/session/session-diagnostics';

interface EnhancedSessionOptions {
  enableEnhancedStorage?: boolean;
  enableServiceWorker?: boolean;
  enableSessionRecovery?: boolean;
  enableIOSWorkarounds?: boolean;
  enableMonitoring?: boolean;
  enableDiagnostics?: boolean;
  debugMode?: boolean;
}

interface SessionState {
  isInitialized: boolean;
  isAuthenticated: boolean;
  lastActivity: number;
  recoveryEnabled: boolean;
  monitoringEnabled: boolean;
}

class EnhancedSessionManager {
  private storage = getEnhancedStorage();
  private swBridge = getServiceWorkerBridge();
  private recovery = getSessionRecoveryManager();
  private iosWorkarounds = getIOSWorkarounds();
  private monitor = getSessionMonitor();

  private state: SessionState = {
    isInitialized: false,
    isAuthenticated: false,
    lastActivity: Date.now(),
    recoveryEnabled: false,
    monitoringEnabled: false
  };

  private readonly DEFAULT_OPTIONS: Required<EnhancedSessionOptions> = {
    enableEnhancedStorage: true,
    enableServiceWorker: true,
    enableSessionRecovery: true,
    enableIOSWorkarounds: true,
    enableMonitoring: true,
    enableDiagnostics: true,
    debugMode: false
  };

  /**
   * Initialize the enhanced session management system
   */
  async initialize(options: EnhancedSessionOptions = {}): Promise<void> {
    const opts = { ...this.DEFAULT_OPTIONS, ...options };
    
    if (opts.debugMode) {
      console.log('[EnhancedSessionManager] Initializing with options:', opts);
    }

    try {
      const initPromises: Promise<void>[] = [];

      // Initialize service worker bridge
      if (opts.enableServiceWorker) {
        initPromises.push(this.initializeServiceWorker(opts.debugMode));
      }

      // Initialize session recovery
      if (opts.enableSessionRecovery) {
        initPromises.push(this.initializeSessionRecovery(opts.debugMode));
      }

      // Initialize iOS workarounds
      if (opts.enableIOSWorkarounds) {
        initPromises.push(this.initializeIOSWorkarounds(opts.debugMode));
      }

      // Initialize monitoring
      if (opts.enableMonitoring) {
        initPromises.push(this.initializeMonitoring(opts.debugMode));
      }

      // Wait for all initializations to complete
      await Promise.allSettled(initPromises);

      // Set up global event listeners
      this.setupGlobalEventListeners(opts);

      // Perform initial session sync
      await this.performInitialSync();

      this.state.isInitialized = true;

      if (opts.debugMode) {
        console.log('[EnhancedSessionManager] Initialization completed');
        console.log('[EnhancedSessionManager] State:', this.state);
      }

      // Trigger initialization complete event
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('enhanced-session-manager-ready', {
          detail: { state: this.state }
        }));
      }

    } catch (error) {
      console.error('[EnhancedSessionManager] Initialization failed:', error);
      throw error;
    }
  }

  /**
   * Initialize service worker bridge
   */
  private async initializeServiceWorker(debugMode: boolean): Promise<void> {
    try {
      await this.swBridge.initialize();
      if (debugMode) {
        console.log('[EnhancedSessionManager] Service worker bridge initialized');
      }
    } catch (error) {
      console.warn('[EnhancedSessionManager] Service worker initialization failed:', error);
    }
  }

  /**
   * Initialize session recovery
   */
  private async initializeSessionRecovery(debugMode: boolean): Promise<void> {
    try {
      await this.recovery.initialize({
        enableServiceWorker: true,
        enablePersistentStorage: true
      });
      this.state.recoveryEnabled = true;
      if (debugMode) {
        console.log('[EnhancedSessionManager] Session recovery initialized');
      }
    } catch (error) {
      console.warn('[EnhancedSessionManager] Session recovery initialization failed:', error);
    }
  }

  /**
   * Initialize iOS workarounds
   */
  private async initializeIOSWorkarounds(debugMode: boolean): Promise<void> {
    try {
      await this.iosWorkarounds.initialize({
        enableDelayedHydration: true,
        enableRetryMechanism: true,
        enablePWASessionBridge: true,
        enableOTPFallback: true
      });
      if (debugMode) {
        console.log('[EnhancedSessionManager] iOS workarounds initialized');
      }
    } catch (error) {
      console.warn('[EnhancedSessionManager] iOS workarounds initialization failed:', error);
    }
  }

  /**
   * Initialize monitoring
   */
  private async initializeMonitoring(debugMode: boolean): Promise<void> {
    try {
      await this.monitor.startMonitoring();
      this.state.monitoringEnabled = true;
      if (debugMode) {
        console.log('[EnhancedSessionManager] Session monitoring initialized');
      }
    } catch (error) {
      console.warn('[EnhancedSessionManager] Monitoring initialization failed:', error);
    }
  }

  /**
   * Set up global event listeners
   */
  private setupGlobalEventListeners(opts: Required<EnhancedSessionOptions>): void {
    if (typeof window === 'undefined') return;

    // Listen for session recovery events
    window.addEventListener('session-recovery-success', () => {
      this.state.isAuthenticated = true;
      this.state.lastActivity = Date.now();
      if (opts.debugMode) {
        console.log('[EnhancedSessionManager] Session recovery successful');
      }
    });

    window.addEventListener('session-recovery-failure', () => {
      this.state.isAuthenticated = false;
      if (opts.debugMode) {
        console.log('[EnhancedSessionManager] Session recovery failed');
      }
    });

    // Listen for service worker session updates
    window.addEventListener('sw-session-updated', () => {
      this.state.isAuthenticated = true;
      this.state.lastActivity = Date.now();
      if (opts.debugMode) {
        console.log('[EnhancedSessionManager] Service worker session updated');
      }
    });

    window.addEventListener('sw-session-cleared', () => {
      this.state.isAuthenticated = false;
      if (opts.debugMode) {
        console.log('[EnhancedSessionManager] Service worker session cleared');
      }
    });

    // Activity tracking
    const activityEvents = ['click', 'touchstart', 'keydown', 'scroll'];
    const updateActivity = () => {
      this.state.lastActivity = Date.now();
    };

    activityEvents.forEach(event => {
      document.addEventListener(event, updateActivity, { passive: true });
    });
  }

  /**
   * Perform initial session sync
   */
  private async performInitialSync(): Promise<void> {
    try {
      // Request service worker sync
      if (this.swBridge.isActive()) {
        await this.swBridge.syncSessionToServiceWorker();
      }

      // Request background sync
      await this.swBridge.requestSync();

      // Clean up expired data
      await this.storage.clearExpired();

    } catch (error) {
      console.warn('[EnhancedSessionManager] Initial sync failed:', error);
    }
  }

  /**
   * Get comprehensive session diagnostics
   */
  async getDiagnostics(): Promise<any> {
    if (!this.state.monitoringEnabled) {
      throw new Error('Monitoring is not enabled. Cannot generate diagnostics.');
    }

    try {
      const diagnostics = await this.monitor.getDiagnostics();
      const iosInfo = this.iosWorkarounds.getDiagnostics();
      const recoveryState = this.recovery.getRecoveryState();
      const monitorStats = this.monitor.getStats();

      return {
        ...diagnostics,
        enhancedSessionManager: {
          state: this.state,
          iosInfo,
          recoveryState,
          monitorStats,
          serviceWorkerActive: this.swBridge.isActive(),
          storageType: this.storage.isPWA() ? 'PWA' : 'Browser'
        }
      };

    } catch (error) {
      console.error('[EnhancedSessionManager] Diagnostics generation failed:', error);
      throw error;
    }
  }

  /**
   * Force session recovery
   */
  async forceRecovery(): Promise<boolean> {
    if (!this.state.recoveryEnabled) {
      console.warn('[EnhancedSessionManager] Recovery is not enabled');
      return false;
    }

    try {
      const success = await this.recovery.forceRecovery({
        enableServiceWorker: true,
        maxRetries: 3
      });

      if (success) {
        this.state.isAuthenticated = true;
        this.state.lastActivity = Date.now();
      }

      return success;

    } catch (error) {
      console.error('[EnhancedSessionManager] Force recovery failed:', error);
      return false;
    }
  }

  /**
   * Clear all session data
   */
  async clearAllSessionData(): Promise<void> {
    try {
      // Clear enhanced storage
      const authKeys = ['supabase.auth.token', 'session-recovery-state', 'session-monitor-data'];
      await Promise.all(authKeys.map(key => this.storage.removeItem(key)));

      // Clear service worker session
      if (this.swBridge.isActive()) {
        await this.swBridge.clearSessionFromServiceWorker();
      }

      // Clear monitoring data
      if (this.state.monitoringEnabled) {
        await this.monitor.clearData();
      }

      this.state.isAuthenticated = false;
      this.state.lastActivity = Date.now();

      console.log('[EnhancedSessionManager] All session data cleared');

    } catch (error) {
      console.error('[EnhancedSessionManager] Failed to clear session data:', error);
      throw error;
    }
  }

  /**
   * Export session diagnostics
   */
  async exportDiagnostics(): Promise<string> {
    const diagnostics = await this.getDiagnostics();
    return JSON.stringify(diagnostics, null, 2);
  }

  /**
   * Test session persistence across different scenarios
   */
  async testSessionPersistence(): Promise<Record<string, boolean>> {
    const tests: Record<string, boolean> = {};

    try {
      // Test enhanced storage
      const testValue = `test-${Date.now()}`;
      await this.storage.setItem('session-test', testValue);
      const retrieved = await this.storage.getItem('session-test');
      tests.enhancedStorage = retrieved === testValue;
      await this.storage.removeItem('session-test');

      // Test service worker
      if (this.swBridge.isActive()) {
        try {
          await this.swBridge.syncSessionToServiceWorker();
          tests.serviceWorker = true;
        } catch {
          tests.serviceWorker = false;
        }
      } else {
        tests.serviceWorker = false;
      }

      // Test recovery mechanism
      if (this.state.recoveryEnabled) {
        const recoveryState = this.recovery.getRecoveryState();
        tests.sessionRecovery = !recoveryState.isRecovering;
      } else {
        tests.sessionRecovery = false;
      }

      // Test iOS workarounds (if on iOS)
      if (this.storage.isIOSSafari()) {
        try {
          const iosSuccess = await this.iosWorkarounds.forceIOSSessionRefresh();
          tests.iosWorkarounds = iosSuccess;
        } catch {
          tests.iosWorkarounds = false;
        }
      } else {
        tests.iosWorkarounds = true; // Not applicable
      }

    } catch (error) {
      console.error('[EnhancedSessionManager] Session persistence test failed:', error);
    }

    return tests;
  }

  /**
   * Get current session state
   */
  getState(): Readonly<SessionState> {
    return { ...this.state };
  }

  /**
   * Check if manager is fully initialized
   */
  isReady(): boolean {
    return this.state.isInitialized;
  }

  /**
   * Get system capabilities
   */
  getCapabilities(): Record<string, boolean> {
    return {
      enhancedStorage: true,
      serviceWorker: this.swBridge.isActive(),
      sessionRecovery: this.state.recoveryEnabled,
      monitoring: this.state.monitoringEnabled,
      iosSupport: this.storage.isIOSSafari(),
      pwaSupport: this.storage.isPWA(),
      persistentStorage: typeof navigator !== 'undefined' && 'storage' in navigator && 'persist' in navigator.storage
    };
  }

  /**
   * Perform health check
   */
  async healthCheck(): Promise<Record<string, any>> {
    const health: Record<string, any> = {
      timestamp: Date.now(),
      initialized: this.state.isInitialized,
      components: {}
    };

    try {
      // Check storage health
      const testKey = 'health-check-test';
      const testValue = `test-${Date.now()}`;
      await this.storage.setItem(testKey, testValue);
      const retrieved = await this.storage.getItem(testKey);
      health.components.storage = retrieved === testValue;
      await this.storage.removeItem(testKey);

      // Check service worker health
      health.components.serviceWorker = this.swBridge.isActive();

      // Check recovery health
      health.components.recovery = this.state.recoveryEnabled && !this.recovery.getRecoveryState().isRecovering;

      // Check monitoring health
      health.components.monitoring = this.state.monitoringEnabled;

      health.overall = Object.values(health.components).every(status => status === true);

    } catch (error) {
      health.error = error instanceof Error ? error.message : String(error);
      health.overall = false;
    }

    return health;
  }

  /**
   * Clean up resources
   */
  destroy(): void {
    try {
      // Stop monitoring
      if (this.state.monitoringEnabled) {
        this.monitor.stopMonitoring();
      }

      // Clean up recovery
      if (this.state.recoveryEnabled) {
        this.recovery.destroy();
      }

      // Clean up iOS workarounds
      this.iosWorkarounds.destroy();

      this.state.isInitialized = false;
      this.state.recoveryEnabled = false;
      this.state.monitoringEnabled = false;

      console.log('[EnhancedSessionManager] Destroyed successfully');

    } catch (error) {
      console.error('[EnhancedSessionManager] Destruction failed:', error);
    }
  }
}

// Singleton instance
let enhancedSessionManagerInstance: EnhancedSessionManager | null = null;

export function getEnhancedSessionManager(): EnhancedSessionManager {
  if (!enhancedSessionManagerInstance) {
    enhancedSessionManagerInstance = new EnhancedSessionManager();
  }
  return enhancedSessionManagerInstance;
}

export { EnhancedSessionManager };