"use strict";var precacheConfig=[["css/app.787f36b4cf19c08f85f508376ecc9c6f.css","f1701cc9c4c058fd62abcdf278dbbb13"],["index.html","10560e5f34ed2eb290093397f891fdf1"],["js/app.5b04784b707eb33c3985.js","9bb8ad23a5823229bfa31bcc186d15ba"],["js/icons.b48ac2f016be1ecc32b4.js","4d8c94c613c18a7d7232a412909ed4aa"],["js/manifest.557d423b63243d2cb280.js","a3c44b822869b3ab720052f49aad7872"],["js/vendor.4a3717bdcdbaf5579845.js","22e1b35f9d134addbc81b6d05f350507"],["service-worker.js","405287eb91055dc1d96d7c613f04495b"],["static/css/app.d80ecef78fca7811637f6fd9161956f3.css","b86a294d66416410fb63987bec5fa340"],["static/js/app.3b347e5ae65a1bdf1ab1.js","9661e76e69242ae441eeb147ffb82d0d"],["static/js/icons.b48ac2f016be1ecc32b4.js","4d8c94c613c18a7d7232a412909ed4aa"],["static/js/manifest.0c1cd46d93b12dcd0191.js","d00c04d18361873062d9c2af01a83ce0"],["static/js/vendor.4a3717bdcdbaf5579845.js","22e1b35f9d134addbc81b6d05f350507"]],cacheName="sw-precache-v3-ori_app-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});