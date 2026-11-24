const scope = new URL(self.registration.scope);
const cachePrefix = `western-philosophy-atlas:${scope.pathname}:`;
const cacheName = cachePrefix + "v1";
const shellUrl = new URL("./index.html", scope).href;
const appAssets = new Set([
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png"
].map(path => new URL(path, scope).href));

self.addEventListener("install", event => {
  const requests = [shellUrl, ...appAssets].map(url => new Request(url, { cache: "reload" }));
  event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(requests)));
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith(cachePrefix) && key !== cacheName)
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== scope.origin) return;

  if (request.mode === "navigate" &&
      (url.pathname === scope.pathname || url.pathname === new URL(shellUrl).pathname)) {
    event.respondWith(fetch(request).catch(async () => {
      const cache = await caches.open(cacheName);
      return (await cache.match(shellUrl)) || Response.error();
    }));
    return;
  }

  if (appAssets.has(url.href)) {
    event.respondWith((async () => {
      const cache = await caches.open(cacheName);
      return (await cache.match(request)) || fetch(request);
    })());
  }
});
