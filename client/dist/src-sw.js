(()=>{importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js"),precacheAndRoute([{'revision':'cf0f0da73dc402d72927dd73c9611bb2','url':'index.html'},{'revision':'fd401e93b9438ed1ea47c95efe11d3b2','url':'install.bundle.js'},{'revision':'911bb909ec61a85d4d92657cfe01bfee','url':'main.bundle.js'}]);const e=new workbox.strategies.CacheFirst({cacheName:"page-cache",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]}),new workbox.expiration.ExpirationPlugin({maxAgeSeconds:2592e3})]});workbox.routing.registerRoute((({request:e})=>"navigate"===e.mode),e),registerRoute((({request:e})=>["style","script","worker"].includes(e.destination)),new workbox.strategies.StaleWhileRevalidate({cacheName:"asset-cache",plugins:[new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]}))})();