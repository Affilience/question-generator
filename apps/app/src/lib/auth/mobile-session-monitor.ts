/**
 * Mobile Safari Session Monitor
 * Handles session persistence issues specific to iOS Safari
 */

interface SessionMonitorConfig {
  onSessionLost: () => void;
  onSessionRecovered: (session: any) => void;
  debugMode?: boolean;
}

export class MobileSessionMonitor {
  private config: SessionMonitorConfig;
  private isIOSSafari: boolean = false;
  private lastActiveTime: number = Date.now();
  private sessionCheckInterval: NodeJS.Timeout | null = null;
  private visibilityChangeHandler: (() => void) | null = null;
  private focusHandler: (() => void) | null = null;
  private pageShowHandler: ((event: PageTransitionEvent) => void) | null = null;
  private suspendedSession: any = null;

  constructor(config: SessionMonitorConfig) {
    this.config = config;
    this.detectEnvironment();
    this.setupEventListeners();
    
    if (this.isIOSSafari) {
      this.startSessionMonitoring();
    }
  }

  private detectEnvironment() {
    if (typeof window === 'undefined') return;
    
    const ua = navigator.userAgent;
    this.isIOSSafari = /iPhone|iPad|iPod/.test(ua) && 
                      /Safari/.test(ua) && 
                      !/CriOS|FxiOS|OPiOS|mercury/.test(ua);

    if (this.config.debugMode && this.isIOSSafari) {
      console.log('[MobileSessionMonitor] iOS Safari detected, enhanced monitoring enabled');
    }
  }

  private setupEventListeners() {
    if (typeof window === 'undefined') return;

    // Enhanced visibility change handler for mobile Safari
    this.visibilityChangeHandler = () => {
      if (document.hidden) {
        this.handleAppSuspend();
      } else {
        this.handleAppResume();
      }
    };

    // Focus handler for app switching
    this.focusHandler = () => {
      const timeSinceLastActive = Date.now() - this.lastActiveTime;
      
      // If app was backgrounded for more than 30 seconds, check session
      if (timeSinceLastActive > 30000) {
        this.handleAppResume();
      }
      
      this.lastActiveTime = Date.now();
    };

    // Page show handler for back/forward navigation
    this.pageShowHandler = (event: PageTransitionEvent) => {
      // If page is coming from cache (bfcache), session might be stale
      if (event.persisted) {
        this.handleAppResume();
      }
    };

    // Add event listeners
    document.addEventListener('visibilitychange', this.visibilityChangeHandler);
    window.addEventListener('focus', this.focusHandler);
    window.addEventListener('pageshow', this.pageShowHandler);

    // iOS Safari specific: beforeunload for session preservation
    if (this.isIOSSafari) {
      window.addEventListener('beforeunload', () => {
        this.preserveSessionOnSuspend();
      });
    }
  }

  private startSessionMonitoring() {
    // Periodic session health check for iOS Safari
    this.sessionCheckInterval = setInterval(() => {
      this.checkSessionHealth();
    }, 60000); // Check every minute when active
  }

  private handleAppSuspend() {
    if (this.config.debugMode) {
      console.log('[MobileSessionMonitor] App suspended');
    }
    
    this.preserveSessionOnSuspend();
    this.lastActiveTime = Date.now();
    
    // Reduce monitoring frequency when app is backgrounded
    if (this.sessionCheckInterval) {
      clearInterval(this.sessionCheckInterval);
      this.sessionCheckInterval = null;
    }
  }

  private handleAppResume() {
    if (this.config.debugMode) {
      console.log('[MobileSessionMonitor] App resumed');
    }

    const timeSuspended = Date.now() - this.lastActiveTime;
    
    // If app was suspended for more than 5 minutes, aggressively check session
    if (timeSuspended > 300000) {
      setTimeout(() => {
        this.recoverSessionOnResume();
      }, this.isIOSSafari ? 1500 : 500); // Longer delay for iOS Safari
    } else if (timeSuspended > 30000) {
      // Moderate suspension, gentle recovery
      setTimeout(() => {
        this.recoverSessionOnResume();
      }, this.isIOSSafari ? 1000 : 300);
    }

    this.lastActiveTime = Date.now();
    
    // Resume monitoring
    if (this.isIOSSafari && !this.sessionCheckInterval) {
      this.startSessionMonitoring();
    }
  }

  private preserveSessionOnSuspend() {
    try {
      // Try to preserve current session in multiple storage layers
      const sessionData = this.getCurrentSessionData();
      if (sessionData) {
        this.suspendedSession = sessionData;
        
        // Store in enhanced storage for recovery
        if (typeof window !== 'undefined') {
          localStorage.setItem('suspended_session_backup', JSON.stringify({
            session: sessionData,
            timestamp: Date.now(),
          }));
        }
      }
    } catch (error) {
      if (this.config.debugMode) {
        console.warn('[MobileSessionMonitor] Failed to preserve session:', error);
      }
    }
  }

  private recoverSessionOnResume() {
    try {
      // Check if session was lost and attempt recovery
      const currentSession = this.getCurrentSessionData();
      
      if (!currentSession || !currentSession.access_token) {
        // Session appears lost, attempt recovery
        const backupSession = this.getSuspendedSessionBackup();
        
        if (backupSession && this.isSessionValid(backupSession)) {
          if (this.config.debugMode) {
            console.log('[MobileSessionMonitor] Attempting session recovery');
          }
          
          this.config.onSessionRecovered(backupSession);
        } else {
          if (this.config.debugMode) {
            console.log('[MobileSessionMonitor] Session lost, no valid backup found');
          }
          
          this.config.onSessionLost();
        }
      } else {
        if (this.config.debugMode) {
          console.log('[MobileSessionMonitor] Session still valid after resume');
        }
      }
    } catch (error) {
      if (this.config.debugMode) {
        console.warn('[MobileSessionMonitor] Session recovery failed:', error);
      }
    }
  }

  private getCurrentSessionData(): any {
    // Try to get current session from various sources
    if (typeof window === 'undefined') return null;
    
    try {
      // Try localStorage first
      const keys = ['sb-' + process.env.NEXT_PUBLIC_SUPABASE_URL?.split('//')[1] + '-auth-token'];
      
      for (const key of keys) {
        const data = localStorage.getItem(key);
        if (data) {
          return JSON.parse(data);
        }
      }
      
      // Try cookies as fallback
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name.includes('auth-token')) {
          try {
            return JSON.parse(decodeURIComponent(value));
          } catch {
            return null;
          }
        }
      }
    } catch (error) {
      console.warn('[MobileSessionMonitor] Failed to get current session:', error);
    }
    
    return null;
  }

  private getSuspendedSessionBackup(): any {
    try {
      if (this.suspendedSession) {
        return this.suspendedSession;
      }
      
      const backup = localStorage.getItem('suspended_session_backup');
      if (backup) {
        const data = JSON.parse(backup);
        
        // Check if backup is not too old (max 24 hours)
        if (Date.now() - data.timestamp < 86400000) {
          return data.session;
        }
      }
    } catch (error) {
      console.warn('[MobileSessionMonitor] Failed to get session backup:', error);
    }
    
    return null;
  }

  private isSessionValid(session: any): boolean {
    if (!session || !session.access_token || !session.expires_at) {
      return false;
    }
    
    // Check if token is not expired (with 5 minute buffer)
    const expiresAt = session.expires_at * 1000;
    const now = Date.now();
    const buffer = 5 * 60 * 1000; // 5 minutes
    
    return expiresAt > (now + buffer);
  }

  private checkSessionHealth() {
    // Periodic health check for active sessions
    const currentSession = this.getCurrentSessionData();
    
    if (!currentSession || !this.isSessionValid(currentSession)) {
      if (this.config.debugMode) {
        console.log('[MobileSessionMonitor] Session health check failed');
      }
      
      this.config.onSessionLost();
    }
  }

  public destroy() {
    // Cleanup event listeners and intervals
    if (this.visibilityChangeHandler) {
      document.removeEventListener('visibilitychange', this.visibilityChangeHandler);
    }
    
    if (this.focusHandler) {
      window.removeEventListener('focus', this.focusHandler);
    }
    
    if (this.pageShowHandler) {
      window.removeEventListener('pageshow', this.pageShowHandler);
    }
    
    if (this.sessionCheckInterval) {
      clearInterval(this.sessionCheckInterval);
    }
    
    // Clear backup data
    try {
      localStorage.removeItem('suspended_session_backup');
    } catch {}
  }

  public getMetrics() {
    return {
      isIOSSafari: this.isIOSSafari,
      lastActiveTime: this.lastActiveTime,
      hasBackupSession: !!this.suspendedSession,
      monitoringActive: !!this.sessionCheckInterval,
    };
  }
}