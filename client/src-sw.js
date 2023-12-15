// client/src-sw.js:
// Import Workbox from CDN for the service worker
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// Use self.__WB_MANIFEST to enable precaching
precacheAndRoute(self.__WB_MANIFEST);

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

// Asset caching with StaleWhileRevalidate
registerRoute(
  ({ request }) => ['style', 'script', 'worker'].includes(request.destination),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'asset-cache',
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  })
);