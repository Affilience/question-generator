/**
 * iOS-Specific Workarounds for Session Persistence
 * Handles known iOS Safari and PWA session issues
 */

import { createClient } from '@/lib/supabase/client';
import { getEnhancedStorage } from '@/lib/storage/enhanced-storage';
import { getServiceWorkerBridge } from '@/lib/session/service-worker-bridge';

interface IOSWorkaroundOptions {
  enableDelayedHydration?: boolean;
  enableRetryMechanism?: boolean;
  enablePWASessionBridge?: boolean;
  enableOTPFallback?: boolean;
  hydrationDelay?: number;
  maxRetries?: number;
}

class IOSSessionWorkarounds {
  private storage = getEnhancedStorage();
  private swBridge = getServiceWorkerBridge();
  private supabase = createClient();
  
  private isIOS = false;
  private isPWA = false;
  private isInitialized = false;
  
  private readonly DEFAULT_OPTIONS: Required<IOSWorkaroundOptions> = {
    enableDelayedHydration: true,
    enableRetryMechanism: true,
    enablePWASessionBridge: true,
    enableOTPFallback: true,
    hydrationDelay: 2000,
    maxRetries: 3
  };

  /**
   * Initialize iOS-specific workarounds
   */
  async initialize(options: IOSWorkaroundOptions = {}): Promise<void> {
    const opts = { ...this.DEFAULT_OPTIONS, ...options };
    
    if (typeof window === 'undefined') return;
    
    // Detect iOS and PWA mode
    this.isIOS = this.detectIOS();
    this.isPWA = this.detectPWA();
    
    console.log(`[iOS Workarounds] iOS: ${this.isIOS}, PWA: ${this.isPWA}`);
    
    if (!this.isIOS) {
      console.log('[iOS Workarounds] Not iOS, skipping iOS-specific workarounds');
      return;
    }

    try {
      // Set up iOS-specific session handling
      if (opts.enableDelayedHydration) {
        await this.setupDelayedSessionHydration(opts.hydrationDelay);
      }

      if (opts.enableRetryMechanism) {
        this.setupIOSRetryMechanism(opts.maxRetries);
      }

      if (opts.enablePWASessionBridge && this.isPWA) {
        await this.setupPWASessionBridge();
      }

      if (opts.enableOTPFallback) {
        this.setupOTPFallback();
      }

      // Set up iOS-specific event listeners
      this.setupIOSEventListeners();

      // Handle initial session state
      await this.handleInitialSessionState();

      this.isInitialized = true;
      console.log('[iOS Workarounds] Initialized successfully');

    } catch (error) {
      console.error('[iOS Workarounds] Initialization failed:', error);
    }
  }

  /**
   * Detect iOS device
   */
  private detectIOS(): boolean {
    if (typeof window === 'undefined') return false;
    
    const ua = window.navigator.userAgent;
    const isIOSDevice = /iPad|iPhone|iPod/.test(ua);
    const isWebKit = /WebKit/.test(ua);
    const isNotChrome = !/CriOS/.test(ua);
    
    return isIOSDevice && isWebKit && isNotChrome;
  }

  /**
   * Detect PWA mode
   */
  private detectPWA(): boolean {
    if (typeof window === 'undefined') return false;
    
    // Check if running in standalone mode (PWA)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isHomeScreen = (window.navigator as any).standalone === true;
    const isAndroidApp = document.referrer.includes('android-app://');
    
    return isStandalone || isHomeScreen || isAndroidApp;
  }

  /**
   * Set up delayed session hydration for iOS
   * iOS Safari sometimes needs time for localStorage/cookies to be available
   */
  private async setupDelayedSessionHydration(delay: number): Promise<void> {
    console.log(`[iOS Workarounds] Setting up delayed hydration (${delay}ms)`);
    
    // Add initial delay for iOS Safari to initialize storage
    await new Promise(resolve => setTimeout(resolve, delay));
    
    // Try to recover session after delay
    await this.attemptDelayedSessionRecovery();
  }

  /**
   * Attempt session recovery with iOS-specific delays
   */
  private async attemptDelayedSessionRecovery(): Promise<void> {
    let attempts = 0;
    const maxAttempts = 3;
    const baseDelay = 1000;

    while (attempts < maxAttempts) {
      try {
        const { data: { session }, error } = await this.supabase.auth.getSession();
        
        if (session && !error) {
          console.log('[iOS Workarounds] Session recovered after delay');
          return;
        }

        // Try enhanced storage recovery
        const storedSession = await this.recoverFromStorage();
        if (storedSession) {
          console.log('[iOS Workarounds] Session recovered from storage');
          return;
        }

        attempts++;
        if (attempts < maxAttempts) {
          const delay = baseDelay * Math.pow(2, attempts); // Exponential backoff
          console.log(`[iOS Workarounds] Retry ${attempts} in ${delay}ms`);
          await new Promise(resolve => setTimeout(resolve, delay));
        }

      } catch (error) {
        console.warn(`[iOS Workarounds] Recovery attempt ${attempts + 1} failed:`, error);
        attempts++;
      }
    }
  }

  /**
   * Set up iOS-specific retry mechanism for getSession calls
   */
  private setupIOSRetryMechanism(maxRetries: number): void {
    console.log('[iOS Workarounds] Setting up iOS retry mechanism');

    // Wrap Supabase getSession calls with retry logic
    const originalGetSession = this.supabase.auth.getSession.bind(this.supabase.auth);
    
    (this.supabase.auth as any).getSession = async () => {
      let attempts = 0;
      
      while (attempts < maxRetries) {
        try {
          const result = await originalGetSession();
          
          // If we get null session on iOS, retry with delay
          if (!result.data.session && !result.error && this.isIOS && attempts < maxRetries - 1) {
            attempts++;
            console.log(`[iOS Workarounds] Null session on iOS, retry ${attempts}/${maxRetries}`);
            await new Promise(resolve => setTimeout(resolve, 500 * attempts));
            continue;
          }
          
          return result;
          
        } catch (error) {
          attempts++;
          if (attempts >= maxRetries) {
            throw error;
          }
          
          console.warn(`[iOS Workarounds] getSession attempt ${attempts} failed:`, error);
          await new Promise(resolve => setTimeout(resolve, 1000 * attempts));
        }
      }
    };
  }

  /**
   * Set up PWA session bridge for iOS home screen apps
   */
  private async setupPWASessionBridge(): Promise<void> {
    console.log('[iOS Workarounds] Setting up PWA session bridge');
    
    try {
      // Initialize service worker bridge
      await this.swBridge.initialize();
      
      // Check for session in Safari context and bridge to PWA
      await this.bridgeSessionFromSafari();
      
      // Set up periodic session sync
      setInterval(async () => {
        await this.syncSessionBetweenContexts();
      }, 30000); // Every 30 seconds

    } catch (error) {
      console.error('[iOS Workarounds] PWA bridge setup failed:', error);
    }
  }

  /**
   * Bridge session from Safari to PWA context
   */
  private async bridgeSessionFromSafari(): Promise<void> {
    try {
      // Try to get session from service worker (shared between contexts)
      const swSession = await this.swBridge.getSessionFromServiceWorker();
      
      if (swSession && swSession.access_token) {
        // Set session in PWA context
        const { error } = await this.supabase.auth.setSession({
          access_token: swSession.access_token,
          refresh_token: swSession.refresh_token
        });

        if (!error) {
          console.log('[iOS Workarounds] Session bridged from Safari to PWA');
        }
      }
    } catch (error) {
      console.warn('[iOS Workarounds] Session bridging failed:', error);
    }
  }

  /**
   * Sync session between Safari and PWA contexts
   */
  private async syncSessionBetweenContexts(): Promise<void> {
    try {
      const { data: { session } } = await this.supabase.auth.getSession();
      
      if (session) {
        // Sync to service worker for cross-context access
        await this.swBridge.syncSessionToServiceWorker();
        
        // Also sync to enhanced storage
        await this.storage.setItem('supabase.auth.token', JSON.stringify(session));
      }
    } catch (error) {
      console.warn('[iOS Workarounds] Session sync failed:', error);
    }
  }

  /**
   * Set up OTP fallback for iOS PWA users
   */
  private setupOTPFallback(): void {
    console.log('[iOS Workarounds] Setting up OTP fallback');
    
    // Add custom event listener for auth method preference
    window.addEventListener('auth-method-request', ((event: CustomEvent) => {
      if (this.isPWA) {
        // Suggest OTP over magic link for PWA users
        event.detail.preferOTP = true;
        event.detail.reason = 'PWA users should use OTP to stay in app context';
      }
    }) as EventListener);
  }

  /**
   * Set up iOS-specific event listeners
   */
  private setupIOSEventListeners(): void {
    if (typeof window === 'undefined') return;

    // Handle iOS app switching with longer delays
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        // Longer delay for iOS to ensure storage is available
        setTimeout(() => {
          this.handleIOSVisibilityChange();
        }, 1500);
      }
    });

    // Handle iOS PWA activation
    window.addEventListener('focus', () => {
      if (this.isPWA) {
        setTimeout(() => {
          this.handlePWAFocus();
        }, 1000);
      }
    });

    // Handle iOS-specific page events
    window.addEventListener('pageshow', (event) => {
      if (event.persisted && this.isIOS) {
        // iOS back/forward cache restoration
        setTimeout(() => {
          this.handleIOSPageShow();
        }, 2000);
      }
    });

    // Handle iOS storage events with delays
    window.addEventListener('storage', (event) => {
      if (event.key?.includes('supabase.auth')) {
        setTimeout(() => {
          this.handleIOSStorageChange(event);
        }, 500);
      }
    });

    // Handle touch events to detect app activation
    let lastTouch = 0;
    document.addEventListener('touchstart', () => {
      const now = Date.now();
      if (now - lastTouch > 30000) { // 30 seconds
        setTimeout(() => {
          this.handleIOSAppActivation();
        }, 200);
      }
      lastTouch = now;
    }, { passive: true });
  }

  /**
   * Handle iOS visibility change events
   */
  private async handleIOSVisibilityChange(): Promise<void> {
    try {
      console.log('[iOS Workarounds] Handling visibility change');
      
      // Check session validity
      const { data: { session } } = await this.supabase.auth.getSession();
      
      if (!session) {
        // Try recovery from storage
        await this.recoverFromStorage();
      }
    } catch (error) {
      console.warn('[iOS Workarounds] Visibility change handling failed:', error);
    }
  }

  /**
   * Handle PWA focus events
   */
  private async handlePWAFocus(): Promise<void> {
    try {
      console.log('[iOS Workarounds] Handling PWA focus');
      
      // Sync session from service worker
      await this.bridgeSessionFromSafari();
    } catch (error) {
      console.warn('[iOS Workarounds] PWA focus handling failed:', error);
    }
  }

  /**
   * Handle iOS page show events
   */
  private async handleIOSPageShow(): Promise<void> {
    try {
      console.log('[iOS Workarounds] Handling iOS page show');
      
      // Force session refresh on page restoration
      const { error } = await this.supabase.auth.refreshSession();
      if (error) {
        await this.recoverFromStorage();
      }
    } catch (error) {
      console.warn('[iOS Workarounds] Page show handling failed:', error);
    }
  }

  /**
   * Handle iOS storage change events
   */
  private async handleIOSStorageChange(event: StorageEvent): Promise<void> {
    try {
      console.log('[iOS Workarounds] Handling iOS storage change:', event.key);
      
      if (event.newValue) {
        // Session was updated in another tab
        await this.attemptDelayedSessionRecovery();
      } else {
        // Session was cleared
        await this.supabase.auth.signOut();
      }
    } catch (error) {
      console.warn('[iOS Workarounds] Storage change handling failed:', error);
    }
  }

  /**
   * Handle iOS app activation detection
   */
  private async handleIOSAppActivation(): Promise<void> {
    try {
      console.log('[iOS Workarounds] Handling iOS app activation');
      
      // Check and recover session
      const { data: { session } } = await this.supabase.auth.getSession();
      if (!session) {
        await this.recoverFromStorage();
      }
    } catch (error) {
      console.warn('[iOS Workarounds] App activation handling failed:', error);
    }
  }

  /**
   * Handle initial session state on iOS
   */
  private async handleInitialSessionState(): Promise<void> {
    try {
      // Wait for storage to be ready on iOS
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const { data: { session } } = await this.supabase.auth.getSession();
      
      if (!session) {
        // Try to recover from various sources
        const recovered = await this.recoverFromStorage();
        if (!recovered && this.isPWA) {
          await this.bridgeSessionFromSafari();
        }
      }
    } catch (error) {
      console.warn('[iOS Workarounds] Initial session handling failed:', error);
    }
  }

  /**
   * Recover session from storage with iOS-specific handling
   */
  private async recoverFromStorage(): Promise<boolean> {
    try {
      const storedSession = await this.storage.getItem('supabase.auth.token');
      if (!storedSession) return false;

      const sessionData = JSON.parse(storedSession);
      if (sessionData.access_token && sessionData.refresh_token) {
        const { error } = await this.supabase.auth.setSession({
          access_token: sessionData.access_token,
          refresh_token: sessionData.refresh_token
        });

        if (!error) {
          console.log('[iOS Workarounds] Session recovered from storage');
          return true;
        }
      }
    } catch (error) {
      console.warn('[iOS Workarounds] Storage recovery failed:', error);
    }
    return false;
  }

  /**
   * Get iOS-specific diagnostics
   */
  getDiagnostics(): Record<string, any> {
    return {
      isIOS: this.isIOS,
      isPWA: this.isPWA,
      isInitialized: this.isInitialized,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : null,
      displayMode: typeof window !== 'undefined' ? 
        window.matchMedia('(display-mode: standalone)').matches : null,
      standalone: typeof window !== 'undefined' ? 
        (window.navigator as any).standalone : null,
      cookieEnabled: typeof navigator !== 'undefined' ? navigator.cookieEnabled : null,
      storageQuota: typeof navigator !== 'undefined' && 'storage' in navigator ? 
        navigator.storage.estimate() : null
    };
  }

  /**
   * Force session refresh with iOS-specific handling
   */
  async forceIOSSessionRefresh(): Promise<boolean> {
    if (!this.isIOS) return false;

    try {
      // Multiple recovery attempts with increasing delays
      const delays = [500, 1500, 3000];
      
      for (const delay of delays) {
        await new Promise(resolve => setTimeout(resolve, delay));
        
        const { data, error } = await this.supabase.auth.refreshSession();
        if (!error && data.session) {
          console.log(`[iOS Workarounds] Force refresh succeeded after ${delay}ms`);
          return true;
        }
      }

      return false;
    } catch (error) {
      console.error('[iOS Workarounds] Force refresh failed:', error);
      return false;
    }
  }

  /**
   * Clean up iOS workarounds
   */
  destroy(): void {
    this.isInitialized = false;
    // Event listeners are automatically cleaned up when the page unloads
  }
}

// Singleton instance
let iosWorkaroundsInstance: IOSSessionWorkarounds | null = null;

export function getIOSWorkarounds(): IOSSessionWorkarounds {
  if (!iosWorkaroundsInstance) {
    iosWorkaroundsInstance = new IOSSessionWorkarounds();
  }
  return iosWorkaroundsInstance;
}

export { IOSSessionWorkarounds };