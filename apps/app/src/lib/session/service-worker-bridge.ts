/**
 * Service Worker Session Bridge
 * Handles session persistence across PWA/Safari contexts using service worker
 */

import { getEnhancedStorage } from '@/lib/storage/enhanced-storage';

interface SessionData {
  access_token?: string;
  refresh_token?: string;
  expires_at?: number;
  user?: any;
  session?: any;
}

class ServiceWorkerSessionBridge {
  private storage = getEnhancedStorage();
  private sw: ServiceWorker | null = null;
  private isRegistered = false;
  private messageChannel: MessageChannel | null = null;
  
  /**
   * Register service worker and set up session bridging
   */
  async initialize(): Promise<void> {
    // DISABLED - Service Worker completely disabled to fix navigation caching issues
    console.log('[SW Bridge] Service Worker registration disabled to fix caching issues');
    return;

    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      console.warn('[SW Bridge] Service Workers not supported');
      return;
    }

    try {
      // Register service worker
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/',
        updateViaCache: 'none'
      });

      console.log('[SW Bridge] Service Worker registered:', registration);
      this.isRegistered = true;

      // Wait for SW to be ready
      const sw = registration.active || registration.waiting || registration.installing;
      if (sw) {
        this.sw = sw;
        
        if (sw.state !== 'activated') {
          await new Promise((resolve) => {
            sw.addEventListener('statechange', () => {
              if (sw.state === 'activated') {
                resolve(void 0);
              }
            });
          });
        }
      }

      // Listen for messages from service worker
      navigator.serviceWorker.addEventListener('message', this.handleServiceWorkerMessage.bind(this));

      // Set up message channel for direct communication
      this.messageChannel = new MessageChannel();

      // Sync existing session data to service worker
      await this.syncSessionToServiceWorker();

      console.log('[SW Bridge] Initialized successfully');

    } catch (error) {
      console.error('[SW Bridge] Registration failed:', error);
    }
  }

  /**
   * Handle messages from service worker
   */
  private handleServiceWorkerMessage(event: MessageEvent) {
    const { type, data } = event.data;

    switch (type) {
      case 'session-updated':
        this.handleSessionUpdate(data);
        break;
      case 'session-cleared':
        this.handleSessionClear();
        break;
      case 'sync-request':
        this.syncSessionToServiceWorker();
        break;
      default:
        console.log('[SW Bridge] Unknown message type:', type);
    }
  }

  /**
   * Handle session updates from service worker
   */
  private async handleSessionUpdate(sessionData: SessionData) {
    try {
      // Update local storage with session data from SW
      if (sessionData.access_token) {
        await this.storage.setItem('supabase.auth.token', JSON.stringify(sessionData));
      }
      
      // Trigger auth state change event
      window.dispatchEvent(new CustomEvent('sw-session-updated', { 
        detail: sessionData 
      }));
      
    } catch (error) {
      console.error('[SW Bridge] Session update failed:', error);
    }
  }

  /**
   * Handle session clear from service worker
   */
  private async handleSessionClear() {
    try {
      // Clear all auth-related data
      await this.storage.removeItem('supabase.auth.token');
      
      // Trigger auth state change event
      window.dispatchEvent(new CustomEvent('sw-session-cleared'));
      
    } catch (error) {
      console.error('[SW Bridge] Session clear failed:', error);
    }
  }

  /**
   * Sync current session data to service worker
   */
  async syncSessionToServiceWorker(): Promise<void> {
    if (!this.isRegistered || !this.messageChannel) {
      return;
    }

    try {
      // Get current session data from all storage tiers
      const sessionToken = await this.storage.getItem('supabase.auth.token');
      
      if (sessionToken) {
        try {
          const sessionData = JSON.parse(sessionToken);
          
          // Send to service worker via message
          navigator.serviceWorker.controller?.postMessage({
            type: 'SYNC_SESSION',
            data: sessionData
          }, [this.messageChannel!.port2]);
          
          // Also sync via fetch API for cross-context access
          await this.setSessionViaFetch(sessionData);
          
        } catch (error) {
          console.warn('[SW Bridge] Invalid session token format:', error);
        }
      }
    } catch (error) {
      console.error('[SW Bridge] Session sync failed:', error);
    }
  }

  /**
   * Get session data from service worker
   */
  async getSessionFromServiceWorker(): Promise<SessionData | null> {
    if (!this.isRegistered) {
      return null;
    }

    try {
      // Try direct message first
      if (this.messageChannel && navigator.serviceWorker.controller) {
        return new Promise((resolve) => {
          const timeout = setTimeout(() => resolve(null), 5000);
          
          this.messageChannel!.port1.onmessage = (event) => {
            clearTimeout(timeout);
            const { success, session } = event.data;
            resolve(success ? session : null);
          };

          navigator.serviceWorker.controller?.postMessage({
            type: 'GET_SESSION'
          }, [this.messageChannel!.port2]);
        });
      }

      // Fallback to fetch API
      const response = await fetch('/__session__', {
        method: 'GET',
        credentials: 'same-origin'
      });

      if (response.ok) {
        const data = await response.json();
        return data.session || null;
      }

      return null;
    } catch (error) {
      console.error('[SW Bridge] Get session failed:', error);
      return null;
    }
  }

  /**
   * Set session data via fetch API (cross-context accessible)
   */
  private async setSessionViaFetch(sessionData: SessionData): Promise<void> {
    try {
      await fetch('/__session__', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sessionData),
        credentials: 'same-origin'
      });
    } catch (error) {
      console.warn('[SW Bridge] Fetch API session set failed:', error);
    }
  }

  /**
   * Clear session from service worker
   */
  async clearSessionFromServiceWorker(): Promise<void> {
    if (!this.isRegistered) {
      return;
    }

    try {
      // Clear via message
      if (this.messageChannel && navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller?.postMessage({
          type: 'CLEAR_SESSION'
        }, [this.messageChannel.port2]);
      }

      // Clear via fetch API
      await fetch('/__session__', {
        method: 'DELETE',
        credentials: 'same-origin'
      });

    } catch (error) {
      console.error('[SW Bridge] Clear session failed:', error);
    }
  }

  /**
   * Request background sync for session data
   */
  async requestSync(): Promise<void> {
    if (!this.isRegistered || !('sync' in window.ServiceWorkerRegistration.prototype)) {
      return;
    }

    try {
      const registration = await navigator.serviceWorker.ready;
      await (registration as any).sync.register('session-sync');
    } catch (error) {
      console.warn('[SW Bridge] Background sync request failed:', error);
    }
  }

  /**
   * Check if running in PWA mode
   */
  isPWAMode(): boolean {
    if (typeof window === 'undefined') return false;
    
    return window.matchMedia('(display-mode: standalone)').matches ||
           (window.navigator as any).standalone === true ||
           document.referrer.includes('android-app://');
  }

  /**
   * Check if service worker is available and active
   */
  isActive(): boolean {
    return this.isRegistered && 
           navigator.serviceWorker.controller !== null &&
           navigator.serviceWorker.controller?.state === 'activated';
  }

  /**
   * Force update service worker
   */
  async updateServiceWorker(): Promise<void> {
    if (!this.isRegistered) return;

    try {
      const registration = await navigator.serviceWorker.getRegistration('/');
      if (registration) {
        await registration.update();
        console.log('[SW Bridge] Service worker updated');
      }
    } catch (error) {
      console.error('[SW Bridge] Service worker update failed:', error);
    }
  }

  /**
   * Unregister service worker (for cleanup)
   */
  async unregister(): Promise<void> {
    if (!this.isRegistered) return;

    try {
      const registration = await navigator.serviceWorker.getRegistration('/');
      if (registration) {
        await registration.unregister();
        this.isRegistered = false;
        this.sw = null;
        this.messageChannel = null;
        console.log('[SW Bridge] Service worker unregistered');
      }
    } catch (error) {
      console.error('[SW Bridge] Service worker unregistration failed:', error);
    }
  }
}

// Singleton instance
let swBridgeInstance: ServiceWorkerSessionBridge | null = null;

export function getServiceWorkerBridge(): ServiceWorkerSessionBridge {
  if (!swBridgeInstance) {
    swBridgeInstance = new ServiceWorkerSessionBridge();
  }
  return swBridgeInstance;
}

export { ServiceWorkerSessionBridge };