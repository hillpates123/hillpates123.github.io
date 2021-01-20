'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "286df8bbafa25f43d9f1ea1f994a8f1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"hillpates123.github.io/.git/config": "3c95cd1165617604d2b0136709f4d60d",
"hillpates123.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"hillpates123.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"hillpates123.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"hillpates123.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"hillpates123.github.io/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"hillpates123.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"hillpates123.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"hillpates123.github.io/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"hillpates123.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"hillpates123.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"hillpates123.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"hillpates123.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"hillpates123.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"hillpates123.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"hillpates123.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"hillpates123.github.io/.git/index": "68abab6d5566a64fbddf2bd0cf3b6c61",
"hillpates123.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"hillpates123.github.io/.git/logs/HEAD": "fdaacc3adfc1b5e457986b797dbfb1ca",
"hillpates123.github.io/.git/logs/refs/heads/main": "fdaacc3adfc1b5e457986b797dbfb1ca",
"hillpates123.github.io/.git/logs/refs/remotes/origin/HEAD": "fdaacc3adfc1b5e457986b797dbfb1ca",
"hillpates123.github.io/.git/objects/pack/pack-4d9adaf03587a6392e2befd1fc88217b6b6834d3.idx": "ca858fa546ef4ce1716daf92fb96f538",
"hillpates123.github.io/.git/objects/pack/pack-4d9adaf03587a6392e2befd1fc88217b6b6834d3.pack": "04a9b6e9208bc9f1fae6a377d915c22c",
"hillpates123.github.io/.git/packed-refs": "703714b53350136d769e3e055a1ab45f",
"hillpates123.github.io/.git/refs/heads/main": "a5f7d901ade48e1e5d2114766e4d2096",
"hillpates123.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"hillpates123.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"hillpates123.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"hillpates123.github.io/assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"hillpates123.github.io/assets/NOTICES": "286df8bbafa25f43d9f1ea1f994a8f1f",
"hillpates123.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"hillpates123.github.io/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"hillpates123.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"hillpates123.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"hillpates123.github.io/index.html": "9766e0d914f80e4a437bb141a5ab32c9",
"/": "79d6e8e5a0bdb6e68dd74e3264941878",
"hillpates123.github.io/main.dart.js": "d0e536a8f67ee21e75ac076418b027a2",
"hillpates123.github.io/manifest.json": "d68b98686de589db62ac8d652b88a5a2",
"hillpates123.github.io/version.json": "4520360c1193ddfe2fb08015c15a7182",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "79d6e8e5a0bdb6e68dd74e3264941878",
"main.dart.js": "927ea58954f9dd65b9219de0129df1c3",
"manifest.json": "d68b98686de589db62ac8d652b88a5a2",
"version.json": "4520360c1193ddfe2fb08015c15a7182"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
