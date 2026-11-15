const CACHE='windows-server-course-2026-11-15-6e8bc7f7b0';
const FILES=['./','./index.html','./manual.html','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./WINDOWS_SERVER_RU.md','./sources.json'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('windows-server-course-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)))});
