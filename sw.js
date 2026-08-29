// Badger Checklist service worker.
//
// This only caches the APP SHELL (the HTML/CSS/JS/icons that make the app
// itself load) so the page can open with no signal. It deliberately never
// touches badge data: Google Sheets CSV fetches, Roblox API lookups, and
// the Google Fonts/PapaParse CDN requests all pass straight through to the
// network untouched. Those already have their own freshness-aware caching
// inside the app (sheetcache-*, the enrichment cache) - a service worker
// caching them too would just be a second, dumber cache fighting the first.
//
// Bump CACHE_VERSION whenever index.html/script.js/style.css change so
// returning visitors pick up the new files instead of a stale shell.
var CACHE_VERSION = 'badger-shell-v5';
var SHELL_FILES = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function(cache){
      return cache.addAll(SHELL_FILES);
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event){
  event.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE_VERSION; }).map(function(k){ return caches.delete(k); }));
    }).then(function(){
      return self.clients.claim();
    })
  );
});

function isShellRequest(url){
  if (url.origin !== self.location.origin) return false;
  return SHELL_FILES.some(function(f){
    var full = new URL(f, self.location.href).href;
    return full === url.href;
  }) || url.pathname === '/' || url.pathname.endsWith('/index.html');
}

self.addEventListener('fetch', function(event){
  var req = event.request;
  if (req.method !== 'GET') return; // never intercept writes

  var url = new URL(req.url);
  if (!isShellRequest(url)) return; // let everything else (sheets, Roblox, fonts) hit the network normally

  event.respondWith(
    caches.match(req).then(function(cached){
      var networkFetch = fetch(req).then(function(res){
        if (res && res.ok){
          var copy = res.clone();
          caches.open(CACHE_VERSION).then(function(cache){ cache.put(req, copy); });
        }
        return res;
      }).catch(function(){ return cached; }); // offline - fall back to cache
      // Cache-first for instant load; network still runs in the background
      // to keep the cached copy fresh for next time.
      return cached || networkFetch;
    })
  );
});
