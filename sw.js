const V='igrice-v6',F=['./','index.html','watersort.html','queens.html','zip.html','sudoku.html','tango.html','patches.html','rushhour.html','mastermind.html','nonogram.html','skocko.html','sokoban.html','futoshiki.html','slide.html','memory.html','simon.html','tangram.html','manifest.webmanifest','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.allSettled(F.map(f=>c.add(f)))));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!=V).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!='GET')return;
  e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(V).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
