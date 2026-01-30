/**
 * Enhanced Multi-Tier Storage System for Mobile Safari Session Persistence
 * 
 * Storage priority order:
 * 1. IndexedDB (highest capacity, persists across PWA/Safari)
 * 2. Cache Storage (works across PWA instances via Service Worker)
 * 3. Cookies (HTTP-accessible, works in private mode)
 * 4. localStorage (fastest access, may fail in private mode)
 */

interface StorageItem {
  value: string;
  timestamp: number;
  ttl?: number; // Time to live in milliseconds
}

class EnhancedStorage {
  private dbName = 'supabase-auth-store';
  private dbVersion = 1;
  private storeName = 'auth-tokens';
  private cachePrefix = 'sb-auth-';

  /**
   * Get item with automatic fallback through storage tiers
   */
  async getItem(key: string): Promise<string | null> {
    // Try IndexedDB first (highest capacity, best persistence)
    try {
      const value = await this.getFromIndexedDB(key);
      if (value !== null) return value;
    } catch (error) {
      console.warn('[EnhancedStorage] IndexedDB get failed:', error);
    }

    // Try Cache Storage (works across PWA instances)
    try {
      const value = await this.getFromCacheStorage(key);
      if (value !== null) {
        // Sync back to IndexedDB for future use
        this.setToIndexedDB(key, value).catch(() => {});
        return value;
      }
    } catch (error) {
      console.warn('[EnhancedStorage] Cache Storage get failed:', error);
    }

    // Try Cookies (works in private mode)
    try {
      const value = this.getFromCookies(key);
      if (value !== null) {
        // Sync to higher tiers
        this.setToIndexedDB(key, value).catch(() => {});
        this.setToCacheStorage(key, value).catch(() => {});
        return value;
      }
    } catch (error) {
      console.warn('[EnhancedStorage] Cookie get failed:', error);
    }

    // Try localStorage (fastest, may fail in private mode)
    try {
      const value = this.getFromLocalStorage(key);
      if (value !== null) {
        // Sync to higher tiers
        this.setToIndexedDB(key, value).catch(() => {});
        this.setToCacheStorage(key, value).catch(() => {});
        return value;
      }
    } catch (error) {
      console.warn('[EnhancedStorage] localStorage get failed:', error);
    }

    return null;
  }

  /**
   * Set item across all available storage tiers
   */
  async setItem(key: string, value: string, ttl?: number): Promise<void> {
    const promises: Promise<void>[] = [];

    // Set in all available storage tiers simultaneously
    promises.push(this.setToIndexedDB(key, value, ttl));
    promises.push(this.setToCacheStorage(key, value, ttl));
    promises.push(this.setToCookies(key, value, ttl));
    promises.push(this.setToLocalStorage(key, value, ttl));

    // Wait for all to complete, but don't fail if some storage methods fail
    const results = await Promise.allSettled(promises);
    
    // Log any failures for debugging
    results.forEach((result, index) => {
      if (result.status === 'rejected') {
        const storageTypes = ['IndexedDB', 'Cache Storage', 'Cookies', 'localStorage'];
        console.warn(`[EnhancedStorage] ${storageTypes[index]} set failed:`, result.reason);
      }
    });
  }

  /**
   * Remove item from all storage tiers
   */
  async removeItem(key: string): Promise<void> {
    const promises: Promise<void>[] = [];

    promises.push(this.removeFromIndexedDB(key));
    promises.push(this.removeFromCacheStorage(key));
    promises.push(this.removeFromCookies(key));
    promises.push(this.removeFromLocalStorage(key));

    await Promise.allSettled(promises);
  }

  // IndexedDB Implementation
  private async getIndexedDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'key' });
        }
      };
    });
  }

  private async getFromIndexedDB(key: string): Promise<string | null> {
    const db = await this.getIndexedDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(key);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const result = request.result as StorageItem & { key: string };
        if (!result) {
          resolve(null);
          return;
        }

        // Check TTL
        if (result.ttl && Date.now() - result.timestamp > result.ttl) {
          this.removeFromIndexedDB(key).catch(() => {});
          resolve(null);
          return;
        }

        resolve(result.value);
      };
    });
  }

  private async setToIndexedDB(key: string, value: string, ttl?: number): Promise<void> {
    const db = await this.getIndexedDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      
      const item: StorageItem & { key: string } = {
        key,
        value,
        timestamp: Date.now(),
        ttl,
      };
      
      const request = store.put(item);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  private async removeFromIndexedDB(key: string): Promise<void> {
    const db = await this.getIndexedDB();
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(key);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  // Cache Storage Implementation
  private async getFromCacheStorage(key: string): Promise<string | null> {
    if (!('caches' in window)) return null;
    
    const cache = await caches.open(this.cachePrefix + 'session');
    const response = await cache.match(`/${key}`);
    
    if (!response) return null;
    
    const data = await response.json() as StorageItem;
    
    // Check TTL
    if (data.ttl && Date.now() - data.timestamp > data.ttl) {
      cache.delete(`/${key}`);
      return null;
    }
    
    return data.value;
  }

  private async setToCacheStorage(key: string, value: string, ttl?: number): Promise<void> {
    if (!('caches' in window)) return;
    
    const cache = await caches.open(this.cachePrefix + 'session');
    const data: StorageItem = {
      value,
      timestamp: Date.now(),
      ttl,
    };
    
    const response = new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
    
    await cache.put(`/${key}`, response);
  }

  private async removeFromCacheStorage(key: string): Promise<void> {
    if (!('caches' in window)) return;
    
    const cache = await caches.open(this.cachePrefix + 'session');
    await cache.delete(`/${key}`);
  }

  // Cookies Implementation (existing logic)
  private getFromCookies(key: string): string | null {
    if (typeof document === 'undefined') return null;
    
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === key) {
        try {
          const data = JSON.parse(decodeURIComponent(value)) as StorageItem;
          
          // Check TTL
          if (data.ttl && Date.now() - data.timestamp > data.ttl) {
            this.removeFromCookies(key);
            return null;
          }
          
          return data.value;
        } catch {
          // Fallback for non-JSON values (backward compatibility)
          return decodeURIComponent(value);
        }
      }
    }
    return null;
  }

  private setToCookies(key: string, value: string, ttl?: number): Promise<void> {
    return new Promise((resolve) => {
      if (typeof document === 'undefined') {
        resolve();
        return;
      }

      try {
        const data: StorageItem = {
          value,
          timestamp: Date.now(),
          ttl,
        };

        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        
        document.cookie = `${key}=${encodeURIComponent(JSON.stringify(data))}; expires=${date.toUTCString()}; path=/; SameSite=Lax; Secure`;
        resolve();
      } catch (error) {
        console.warn('[EnhancedStorage] Cookie set failed:', error);
        resolve();
      }
    });
  }

  private removeFromCookies(key: string): Promise<void> {
    return new Promise((resolve) => {
      if (typeof document === 'undefined') {
        resolve();
        return;
      }

      try {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
        resolve();
      } catch (error) {
        console.warn('[EnhancedStorage] Cookie remove failed:', error);
        resolve();
      }
    });
  }

  // localStorage Implementation (existing logic with TTL)
  private getFromLocalStorage(key: string): string | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return null;

      try {
        const data = JSON.parse(stored) as StorageItem;
        
        // Check TTL
        if (data.ttl && Date.now() - data.timestamp > data.ttl) {
          localStorage.removeItem(key);
          return null;
        }
        
        return data.value;
      } catch {
        // Fallback for non-JSON values (backward compatibility)
        return stored;
      }
    } catch (error) {
      console.warn('[EnhancedStorage] localStorage get failed:', error);
      return null;
    }
  }

  private setToLocalStorage(key: string, value: string, ttl?: number): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') {
        resolve();
        return;
      }

      try {
        const data: StorageItem = {
          value,
          timestamp: Date.now(),
          ttl,
        };
        
        localStorage.setItem(key, JSON.stringify(data));
        resolve();
      } catch (error) {
        console.warn('[EnhancedStorage] localStorage set failed:', error);
        resolve();
      }
    });
  }

  private removeFromLocalStorage(key: string): Promise<void> {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') {
        resolve();
        return;
      }

      try {
        localStorage.removeItem(key);
        resolve();
      } catch (error) {
        console.warn('[EnhancedStorage] localStorage remove failed:', error);
        resolve();
      }
    });
  }

  /**
   * Check if we're running in a PWA context
   */
  isPWA(): boolean {
    if (typeof window === 'undefined') return false;
    
    // Check if running in standalone mode (PWA)
    return window.matchMedia('(display-mode: standalone)').matches ||
           (window.navigator as any).standalone === true ||
           document.referrer.includes('android-app://');
  }

  /**
   * Check if we're running on iOS Safari
   */
  isIOSSafari(): boolean {
    if (typeof window === 'undefined') return false;
    
    const ua = window.navigator.userAgent;
    const iOS = /iPad|iPhone|iPod/.test(ua);
    const webkit = /WebKit/.test(ua);
    const notChrome = !/CriOS/.test(ua);
    
    return iOS && webkit && notChrome;
  }

  /**
   * Clear all expired items from all storage tiers
   */
  async clearExpired(): Promise<void> {
    const promises: Promise<void>[] = [];

    // Clear from IndexedDB
    promises.push(this.clearExpiredFromIndexedDB());
    
    // Clear from Cache Storage
    promises.push(this.clearExpiredFromCacheStorage());

    await Promise.allSettled(promises);
  }

  private async clearExpiredFromIndexedDB(): Promise<void> {
    try {
      const db = await this.getIndexedDB();
      
      return new Promise((resolve, reject) => {
        const transaction = db.transaction([this.storeName], 'readwrite');
        const store = transaction.objectStore(this.storeName);
        const request = store.getAll();
        
        request.onerror = () => reject(request.error);
        request.onsuccess = () => {
          const items = request.result as (StorageItem & { key: string })[];
          const now = Date.now();
          
          items.forEach((item) => {
            if (item.ttl && now - item.timestamp > item.ttl) {
              store.delete(item.key);
            }
          });
          
          resolve();
        };
      });
    } catch (error) {
      console.warn('[EnhancedStorage] IndexedDB cleanup failed:', error);
    }
  }

  private async clearExpiredFromCacheStorage(): Promise<void> {
    try {
      if (!('caches' in window)) return;
      
      const cache = await caches.open(this.cachePrefix + 'session');
      const requests = await cache.keys();
      const now = Date.now();
      
      for (const request of requests) {
        try {
          const response = await cache.match(request);
          if (response) {
            const data = await response.json() as StorageItem;
            if (data.ttl && now - data.timestamp > data.ttl) {
              await cache.delete(request);
            }
          }
        } catch (error) {
          console.warn('[EnhancedStorage] Cache cleanup item failed:', error);
        }
      }
    } catch (error) {
      console.warn('[EnhancedStorage] Cache Storage cleanup failed:', error);
    }
  }
}

// Singleton instance
let enhancedStorageInstance: EnhancedStorage | null = null;

export function getEnhancedStorage(): EnhancedStorage {
  if (!enhancedStorageInstance) {
    enhancedStorageInstance = new EnhancedStorage();
  }
  return enhancedStorageInstance;
}

export { EnhancedStorage };