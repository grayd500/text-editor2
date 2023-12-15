// client/src-sw.js:
// Import Workbox from CDN for the service worker
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// Set up Workbox with the strategies and routing
// workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// Page cache strategy
const pageCache = new workbox.strategies.CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new workbox.cacheableResponse.CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new workbox.expiration.ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

workbox.routing.registerRoute(({ request }) => request.mode === 'navigate', pageCache);

// Asset caching (CSS, JavaScript, and Images)
workbox.routing.registerRoute(
  ({ request }) => ['style', 'script', 'image'].includes(request.destination),
  new workbox.strategies.CacheFirst({
    cacheName: 'asset-cache',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.ExpirationPlugin({
        maxAgeSeconds: 24 * 60 * 60, // 1 day
      }),
    ],
  })
);


