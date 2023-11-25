/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "21c31c1c39fa2cef01f67ffbe77d7fd4"
  },
  {
    "url": "assets/css/0.styles.c9f6dee4.css",
    "revision": "47007e9d5e66f773558a07f44d233ea5"
  },
  {
    "url": "assets/img/app-start.d05ccf97.png",
    "revision": "d05ccf976261c349e8d64082e7b60ff1"
  },
  {
    "url": "assets/img/delete-postman.0f4a2900.png",
    "revision": "0f4a290087f53d4ffb08910c83ac26ec"
  },
  {
    "url": "assets/img/delete-swagger.a9cb5aa4.png",
    "revision": "a9cb5aa426d0f7f254f44e69c06523e9"
  },
  {
    "url": "assets/img/empty-name-exception.f1bba4fa.png",
    "revision": "f1bba4fa2a2964f1fcb223c2f82dd63d"
  },
  {
    "url": "assets/img/get-all-postman.df269e85.png",
    "revision": "df269e851776f498021e05b0149bc585"
  },
  {
    "url": "assets/img/get-all-swagger.ec21665c.png",
    "revision": "ec21665c878d8fef6f913477dfb758d5"
  },
  {
    "url": "assets/img/get-postman.2556cad7.png",
    "revision": "2556cad7900683cb4e95627e0a6ca5a4"
  },
  {
    "url": "assets/img/get-swagger.a339a6cf.png",
    "revision": "a339a6cfe14546799b29f304dcf56600"
  },
  {
    "url": "assets/img/invalid-url-exceptions.f132c6e4.png",
    "revision": "f132c6e46b02482b079d1174de92882c"
  },
  {
    "url": "assets/img/name-not-string-exception.5a262372.png",
    "revision": "5a26237279d664ca9a5b7c613cc65f8d"
  },
  {
    "url": "assets/img/patch-postman.8691928f.png",
    "revision": "8691928fb2af551c24021d742b51866f"
  },
  {
    "url": "assets/img/patch-swagger.7767f3a8.png",
    "revision": "7767f3a83dd69f2064655c5407009184"
  },
  {
    "url": "assets/img/post-postman.35a16352.png",
    "revision": "35a16352f9016cbaa360b7e047c646e7"
  },
  {
    "url": "assets/img/post-swagger.450916f0.png",
    "revision": "450916f0126532b80361f3e657125f96"
  },
  {
    "url": "assets/img/relationalSchema.3a2a4fde.png",
    "revision": "3a2a4fdeff9e9713d6425c71e25a45b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/source-id-exception.fa5f4009.png",
    "revision": "fa5f4009fc2612147419969fe01f20c3"
  },
  {
    "url": "assets/js/10.1510f954.js",
    "revision": "a60000751a55f1c8ee1ca58c547440c7"
  },
  {
    "url": "assets/js/11.a4fcd26c.js",
    "revision": "8e9259f1b15f330dd3dec25c11df2a9a"
  },
  {
    "url": "assets/js/12.621fed86.js",
    "revision": "8e73a32f861333993a050c7a418e06a0"
  },
  {
    "url": "assets/js/13.87eeb0ee.js",
    "revision": "49128fec8111089bbf17fa45c4e1af80"
  },
  {
    "url": "assets/js/14.5429a2c1.js",
    "revision": "51b80f5c6a9131cb25412e50d771f157"
  },
  {
    "url": "assets/js/15.46e77d48.js",
    "revision": "0ea2c5de581d0e582ffaca2ee249f7bc"
  },
  {
    "url": "assets/js/16.dfcc5eb2.js",
    "revision": "fb29bc5d5f6f2bafff6c9215bbfc5013"
  },
  {
    "url": "assets/js/17.8f36a385.js",
    "revision": "1d284cbe76a203aa0579c353f57fb324"
  },
  {
    "url": "assets/js/18.f816cf2d.js",
    "revision": "fd19ad72f325b42fe42e2184fdb8772b"
  },
  {
    "url": "assets/js/19.b2e081d1.js",
    "revision": "9f6c00f2b62f4f165193458f8fa512c2"
  },
  {
    "url": "assets/js/2.ee05ff71.js",
    "revision": "f068e624d20deaecce8b57b864613349"
  },
  {
    "url": "assets/js/20.c4a3a714.js",
    "revision": "b3ccb02691b57b38a72162c607522b08"
  },
  {
    "url": "assets/js/21.82684f75.js",
    "revision": "f56c1165fcce8756ae29673e439dcb28"
  },
  {
    "url": "assets/js/22.1d33bd6e.js",
    "revision": "6bc33f4ee61e2e1ad146744ca3363b11"
  },
  {
    "url": "assets/js/23.c288c08c.js",
    "revision": "b55bb5e11793305d0b358d584d3e0ad7"
  },
  {
    "url": "assets/js/24.46fd4489.js",
    "revision": "a3009278ed92693b3d4b4bc452d5fb1c"
  },
  {
    "url": "assets/js/26.a5d72282.js",
    "revision": "1f699572d420f274ae9ce6327b2f7ecd"
  },
  {
    "url": "assets/js/3.66addd9f.js",
    "revision": "5f98321501357fe7adb3dbfc1fc412ff"
  },
  {
    "url": "assets/js/4.e382508f.js",
    "revision": "0c69e1edab0610967cbdf593fa6b7959"
  },
  {
    "url": "assets/js/5.88bab367.js",
    "revision": "7df8cde7c0269bcce535c5bd45000288"
  },
  {
    "url": "assets/js/6.986b927b.js",
    "revision": "e8adf119945b240789e7bceb9dda793f"
  },
  {
    "url": "assets/js/7.1717a1cd.js",
    "revision": "9b116ac7ca17c2ff56a497f99f3bbfeb"
  },
  {
    "url": "assets/js/8.94226d3e.js",
    "revision": "8a85108a555a93f3ad0394a431dd9598"
  },
  {
    "url": "assets/js/9.7d82ec01.js",
    "revision": "7ecc41bb21fd4478aa336caf36d8f0eb"
  },
  {
    "url": "assets/js/app.f2b291b1.js",
    "revision": "ef7462aba00a057dbbeb5effa4769aec"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f958ddc9aaca6cc7c11aeef7fd2f8b61"
  },
  {
    "url": "design/index.html",
    "revision": "9779a364a989928568ebec57657050b1"
  },
  {
    "url": "index.html",
    "revision": "1fed042a94f23ca8def6046662eeae9f"
  },
  {
    "url": "intro/index.html",
    "revision": "c851a6a940e32a32f944b049e31df6e0"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d9ce6dd4af7c499abcfdc9cbe415ab05"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "fdd82761210463c7cb899c2de8a94afc"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "bc9cab94c2468cbf7c0fed59f4a216f6"
  },
  {
    "url": "software/index.html",
    "revision": "fe01274a9b19b03b731b5c20a20a855f"
  },
  {
    "url": "test/index.html",
    "revision": "e8c57fc6c1adcf7eded6d0d8eec2f413"
  },
  {
    "url": "use cases/index.html",
    "revision": "3f9ab11c567d4d9cbc89e06403263ec7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
