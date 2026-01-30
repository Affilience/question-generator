/**
 * Empty Service Worker that immediately unregisters itself
 * This replaces the cached Service Worker and stops all caching
 */

console.log('[SW] Empty Service Worker loaded - unregistering immediately');

// Immediately unregister this service worker
self.registration.unregister().then(() => {
  console.log('[SW] Service Worker unregistered successfully');
}).catch(error => {
  console.error('[SW] Service Worker unregistration failed:', error);
});

// Skip waiting to activate immediately
self.skipWaiting();

// Claim all clients immediately
self.addEventListener('activate', (event) => {
  console.log('[SW] Empty Service Worker activated - claiming clients');
  event.waitUntil(self.clients.claim());
});

// Pass through all fetch requests without caching
self.addEventListener('fetch', (event) => {
  // Just pass through to the network - no caching
  event.respondWith(fetch(event.request));
});