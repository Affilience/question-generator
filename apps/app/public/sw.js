/**
 * Service Worker for Enhanced Session Persistence
 * Handles session bridging between Safari and PWA modes
 */

const CACHE_NAME = 'supabase-auth-bridge-v1';
const SESSION_ENDPOINT = '/__session__';

// Install event
self.addEventListener('install', (event) => {
  console.log('[SW] Service Worker installing');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Cache opened');
      return cache;
    })
  );
  self.skipWaiting(); // Activate immediately
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('[SW] Service Worker activating');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim(); // Take control immediately
});

// Fetch event - handle session bridge requests
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Handle session bridge requests
  if (url.pathname === SESSION_ENDPOINT) {
    event.respondWith(handleSessionRequest(event.request));
    return;
  }

  // Handle regular requests
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Handle session bridge requests
async function handleSessionRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  
  try {
    if (request.method === 'POST') {
      // Store session data
      const sessionData = await request.json();
      const timestamp = Date.now();
      
      const response = new Response(JSON.stringify({
        ...sessionData,
        timestamp,
        stored: true
      }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
      
      // Store in cache with session key
      await cache.put(
        new Request(`${SESSION_ENDPOINT}/session`),
        response.clone()
      );
      
      // Notify all clients about session update
      await notifyClients('session-updated', { ...sessionData, timestamp });
      
      return response;
      
    } else if (request.method === 'GET') {
      // Retrieve session data
      const cachedResponse = await cache.match(`${SESSION_ENDPOINT}/session`);
      
      if (cachedResponse) {
        const sessionData = await cachedResponse.json();
        
        // Check if session is still valid (24 hours)
        const isValid = Date.now() - sessionData.timestamp < 24 * 60 * 60 * 1000;
        
        if (isValid) {
          return new Response(JSON.stringify(sessionData), {
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            }
          });
        } else {
          // Clean up expired session
          await cache.delete(`${SESSION_ENDPOINT}/session`);
        }
      }
      
      return new Response(JSON.stringify({ session: null }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
      
    } else if (request.method === 'DELETE') {
      // Clear session data
      await cache.delete(`${SESSION_ENDPOINT}/session`);
      await notifyClients('session-cleared', {});
      
      return new Response(JSON.stringify({ cleared: true }), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
      
    } else if (request.method === 'OPTIONS') {
      // Handle CORS preflight
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }
    
  } catch (error) {
    console.error('[SW] Session request error:', error);
    return new Response(JSON.stringify({ error: 'Session handling failed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
  
  return new Response(JSON.stringify({ error: 'Method not allowed' }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  });
}

// Notify all clients about session changes
async function notifyClients(type, data) {
  const clients = await self.clients.matchAll({
    includeUncontrolled: true,
    type: 'window'
  });
  
  clients.forEach((client) => {
    client.postMessage({
      type,
      data
    });
  });
}

// Handle messages from clients
self.addEventListener('message', async (event) => {
  const { type, data } = event.data;
  
  try {
    switch (type) {
      case 'SYNC_SESSION':
        // Sync session data to cache
        const cache = await caches.open(CACHE_NAME);
        const response = new Response(JSON.stringify({
          ...data,
          timestamp: Date.now(),
          synced: true
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
        
        await cache.put(
          new Request(`${SESSION_ENDPOINT}/session`),
          response
        );
        
        event.ports[0]?.postMessage({ success: true });
        break;
        
      case 'GET_SESSION':
        // Get session data from cache
        const sessionCache = await caches.open(CACHE_NAME);
        const cachedSession = await sessionCache.match(`${SESSION_ENDPOINT}/session`);
        
        if (cachedSession) {
          const sessionData = await cachedSession.json();
          const isValid = Date.now() - sessionData.timestamp < 24 * 60 * 60 * 1000;
          
          if (isValid) {
            event.ports[0]?.postMessage({ success: true, session: sessionData });
          } else {
            await sessionCache.delete(`${SESSION_ENDPOINT}/session`);
            event.ports[0]?.postMessage({ success: false, session: null });
          }
        } else {
          event.ports[0]?.postMessage({ success: false, session: null });
        }
        break;
        
      case 'CLEAR_SESSION':
        // Clear session from cache
        const clearCache = await caches.open(CACHE_NAME);
        await clearCache.delete(`${SESSION_ENDPOINT}/session`);
        await notifyClients('session-cleared', {});
        event.ports[0]?.postMessage({ success: true });
        break;
        
      default:
        console.warn('[SW] Unknown message type:', type);
        event.ports[0]?.postMessage({ error: 'Unknown message type' });
    }
  } catch (error) {
    console.error('[SW] Message handling error:', error);
    event.ports[0]?.postMessage({ error: error.message });
  }
});

// Periodic session cleanup
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'session-cleanup') {
    event.waitUntil(cleanupExpiredSessions());
  }
});

// Clean up expired sessions
async function cleanupExpiredSessions() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const keys = await cache.keys();
    const now = Date.now();
    const maxAge = 24 * 60 * 60 * 1000; // 24 hours
    
    for (const key of keys) {
      if (key.url.includes(SESSION_ENDPOINT)) {
        const response = await cache.match(key);
        if (response) {
          try {
            const data = await response.json();
            if (data.timestamp && now - data.timestamp > maxAge) {
              await cache.delete(key);
              console.log('[SW] Cleaned up expired session:', key.url);
            }
          } catch (error) {
            // If we can't parse the response, delete it
            await cache.delete(key);
          }
        }
      }
    }
  } catch (error) {
    console.error('[SW] Session cleanup error:', error);
  }
}

// Background sync for session data
self.addEventListener('sync', (event) => {
  if (event.tag === 'session-sync') {
    event.waitUntil(syncSessionData());
  }
});

// Sync session data across contexts
async function syncSessionData() {
  try {
    // Notify all clients to sync their session data
    await notifyClients('sync-request', { timestamp: Date.now() });
  } catch (error) {
    console.error('[SW] Session sync error:', error);
  }
}

console.log('[SW] Service Worker loaded and ready');