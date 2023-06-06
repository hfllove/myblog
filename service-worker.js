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
    "revision": "40020ec784d41941b82e2fd5d3502df8"
  },
  {
    "url": "about/about1.html",
    "revision": "2d234a4be01615ab590263d83ed194d6"
  },
  {
    "url": "about/forChrome.html",
    "revision": "3596d6f131e281d010af13d21acc85f5"
  },
  {
    "url": "about/forVSCode.html",
    "revision": "a2eb05c30a2ede87854a3f9e3735ca53"
  },
  {
    "url": "about/index.html",
    "revision": "4550e874c786eddf9e58958f72271e0c"
  },
  {
    "url": "about/vuepress自定义组件.html",
    "revision": "021aa19eea1c12315f4218c37d1eebbe"
  },
  {
    "url": "assets/css/0.styles.29cb8c28.css",
    "revision": "a6312b9c42c005a0cbb0193bc61aa453"
  },
  {
    "url": "assets/img/logo1.png",
    "revision": "a682f56fab42cbf34526fa8ada7b7c5e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7f443100.js",
    "revision": "cb093bf25100cd067fc9b95ab4984c4d"
  },
  {
    "url": "assets/js/11.244f671c.js",
    "revision": "6f62bf6f589dd3ce83e990d5d8ba3a8e"
  },
  {
    "url": "assets/js/12.739ee9fb.js",
    "revision": "85426e75e8eaca39d8405809045e72d3"
  },
  {
    "url": "assets/js/13.54e2846f.js",
    "revision": "52a01c726e3a8491a0b28e27f7d661eb"
  },
  {
    "url": "assets/js/14.665812fc.js",
    "revision": "d01d56facdb066f7832cb6f7dbfaa067"
  },
  {
    "url": "assets/js/15.4e36c729.js",
    "revision": "a4ab2245e5805e01ec3691d859dbd936"
  },
  {
    "url": "assets/js/16.06b016df.js",
    "revision": "b3ee7fff4e911fc20a3911a526e2d47f"
  },
  {
    "url": "assets/js/17.d365bb57.js",
    "revision": "835904e6d492f83c91223c576be70016"
  },
  {
    "url": "assets/js/18.825a108e.js",
    "revision": "2b6569b0e82cee1fffa251cef044bf15"
  },
  {
    "url": "assets/js/19.390d2aae.js",
    "revision": "8c8276a484f6030ec14254efff5ebf0c"
  },
  {
    "url": "assets/js/2.aa4b61ff.js",
    "revision": "d052d9f279ca147ff463705978c2fb12"
  },
  {
    "url": "assets/js/20.c4a0de94.js",
    "revision": "199d8d768c634192e3531ba49a78405c"
  },
  {
    "url": "assets/js/21.8aa91d04.js",
    "revision": "2c7d308949cc7320e989359f0202415f"
  },
  {
    "url": "assets/js/22.9d965bd7.js",
    "revision": "6dc23ce2ef75f671144519685adf9bd5"
  },
  {
    "url": "assets/js/23.dbc2d44c.js",
    "revision": "d50312f3ab293861f099a2ef501f5891"
  },
  {
    "url": "assets/js/24.7f3a4d2e.js",
    "revision": "b15a04a3418c8874802666364c426f43"
  },
  {
    "url": "assets/js/25.39d6ed1c.js",
    "revision": "2d02cc6faaf14330cb8123b09b9fd089"
  },
  {
    "url": "assets/js/26.3c8d81bd.js",
    "revision": "a6c00a490c5200c216651b11e1c70710"
  },
  {
    "url": "assets/js/27.12a8976c.js",
    "revision": "6be97a6ab51b2374897fa24f90868ebc"
  },
  {
    "url": "assets/js/28.4532d259.js",
    "revision": "c3683a78088c3be0e3ad91a9c4f7de21"
  },
  {
    "url": "assets/js/29.149c7569.js",
    "revision": "c66972b413818cb12b11f20f545b0d8c"
  },
  {
    "url": "assets/js/3.99489e02.js",
    "revision": "428bf5358a0797051283b2ab94abec3e"
  },
  {
    "url": "assets/js/30.8862f05e.js",
    "revision": "d9668fc9128336fe0613d7ee1eccdede"
  },
  {
    "url": "assets/js/31.fb1b7dd2.js",
    "revision": "5e4b11821136ae392d7b09d56cd01c91"
  },
  {
    "url": "assets/js/32.31babc0e.js",
    "revision": "e138b789677a206bc91e9288d64a8b50"
  },
  {
    "url": "assets/js/33.b64f78d4.js",
    "revision": "f6ebeafad85c9b91ac5990aced6c85e2"
  },
  {
    "url": "assets/js/34.ace47da7.js",
    "revision": "69cf3fa771a671ce085915ff37aa0be7"
  },
  {
    "url": "assets/js/35.3d277cd3.js",
    "revision": "4761192192e1f8d8b8fba18b59b2bc78"
  },
  {
    "url": "assets/js/36.4d0bf5a1.js",
    "revision": "edf8a252eaa79e4956392be1d6c7e4dc"
  },
  {
    "url": "assets/js/37.35800f9c.js",
    "revision": "5a8171263cd276b19f8c3e6781fba3dc"
  },
  {
    "url": "assets/js/38.f0cc1ef5.js",
    "revision": "f4da6519c690100114ff8fe214ebab61"
  },
  {
    "url": "assets/js/39.bd436905.js",
    "revision": "eff6ad6758b63951cd2f11424cec2cf8"
  },
  {
    "url": "assets/js/4.59889697.js",
    "revision": "b6422dc393cd8c02eae0c51e755d5611"
  },
  {
    "url": "assets/js/40.6612d88e.js",
    "revision": "d2c61e2b6cd4a67f5bc7fc6d2efaff5b"
  },
  {
    "url": "assets/js/5.c4823801.js",
    "revision": "781c34ff033597afe6af4cc0cbc0934b"
  },
  {
    "url": "assets/js/6.e7a8c6bc.js",
    "revision": "3ac7a9f81b7ca9f7108cabf7709512d6"
  },
  {
    "url": "assets/js/7.1ee9069d.js",
    "revision": "cfddded2c7e6d2b76ee00e8779fc8910"
  },
  {
    "url": "assets/js/8.c3aad4b9.js",
    "revision": "cb6b1ad152f83320dcdb8df00df4d812"
  },
  {
    "url": "assets/js/9.a7b8548c.js",
    "revision": "35a4ff47b154503e535fba2c0f0f5549"
  },
  {
    "url": "assets/js/app.97b218c8.js",
    "revision": "642dc20840a898bb270f516008f83161"
  },
  {
    "url": "changeFixed.png",
    "revision": "41491d53143aa2894e425dc1bbf4a0b0"
  },
  {
    "url": "guide/index.html",
    "revision": "891120339a9fbaf35fc01824af5d3bd4"
  },
  {
    "url": "guide/知识链接.html",
    "revision": "e9d14cd806f12b6c15a4de04d3752e11"
  },
  {
    "url": "hero.jpg",
    "revision": "129bfd643d5182e642f8f2f46584f662"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "fcc38ae94d786ce37b28e5c6bd1f6e8e"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "90df648fdf0bbcaaa1f9bb75153687ca"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "6f7b3fc26710d73e791650990ef1a0a7"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "0125794a4ce15209c467055750636972"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "6f91bfd04944b8fde8fd80135b8eb6d5"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "2cd79b2ab12133492fa36e8ea904a193"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "db3b7b871c87adbdf90ef4fe908d05bb"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "6023b24b5274290e3df1efef7e529fa0"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "db7c2d42ce3ea814b9d8b1a0d01143ea"
  },
  {
    "url": "images/1.png",
    "revision": "60d8385491536d28a7256cab807a0b57"
  },
  {
    "url": "images/2.png",
    "revision": "3e2a54a0c564ec3be41dbcdf3fd47752"
  },
  {
    "url": "images/22.png",
    "revision": "3ef89959accdc6b6e85280fcb616f150"
  },
  {
    "url": "images/carbon.png",
    "revision": "9eb22f42c1e1a9fdb2d17e9195491136"
  },
  {
    "url": "index.html",
    "revision": "c9a6864923c8c9d63a6c815503783706"
  },
  {
    "url": "job/vue/index.html",
    "revision": "60771352c8468a2ac14b614e28bf2ba8"
  },
  {
    "url": "job/vue/项目介绍.html",
    "revision": "d0335c9b2b9c945ee7cf4a3653531e60"
  },
  {
    "url": "logo.png",
    "revision": "7bae485d26f89adf79c6d2306623d6e9"
  },
  {
    "url": "project/前台项目/index.html",
    "revision": "a704c6221f9b6e1d89586975af560456"
  },
  {
    "url": "project/后台项目/elementUI组件.html",
    "revision": "cf69574a79a467b040e88dc2e4856fb4"
  },
  {
    "url": "project/后台项目/index.html",
    "revision": "8aea3955134b69ec6319579fe7dd7813"
  },
  {
    "url": "project/后台项目/interview.html",
    "revision": "f33e04485cd48e8d16a4da7bafb0a75e"
  },
  {
    "url": "project/小程序/index.html",
    "revision": "a39645c8f60ab5d1d20174e97678db32"
  },
  {
    "url": "project/小程序/小程序宿主环境之API.html",
    "revision": "63e56c6774f7adb777f1d236a04a3acb"
  },
  {
    "url": "project/小程序/小程序模板与配置.html",
    "revision": "2307a87400729623a7349ca6861aa012"
  },
  {
    "url": "project/项目功能/index.html",
    "revision": "4de9cada43fb9c320cda77a728836728"
  },
  {
    "url": "reduce01.png",
    "revision": "60cb1de4a5c6de6a183474776e35a294"
  },
  {
    "url": "resize01.png",
    "revision": "712321b43efa4e0aa6d61a5901265777"
  },
  {
    "url": "web/css/css布局/index.html",
    "revision": "cbe17c3ac22036e7b6746441d0b71ecc"
  },
  {
    "url": "web/css/css样式/css--清除浮动.html",
    "revision": "5ad6ad677179c32dc69393c780afd393"
  },
  {
    "url": "web/css/css样式/index.html",
    "revision": "a6b9d0030fa04d0a5bba91330a2a89c5"
  },
  {
    "url": "web/javaScript/dom事件/index.html",
    "revision": "c0615a5f35117992f01d9c6857a11b90"
  },
  {
    "url": "web/javaScript/es6/index.html",
    "revision": "1519da3ceb41f0eb1973a1079f77ab8c"
  },
  {
    "url": "web/javaScript/es6/函数的扩展.html",
    "revision": "83d5fffc48622d3bbf465dd67cb2304d"
  },
  {
    "url": "web/javaScript/es6/解构赋值.html",
    "revision": "8079db56e0b5ca0b92375fabb81783d6"
  },
  {
    "url": "web/javaScript/基础/index.html",
    "revision": "4097722a426ae5dbda97c5b0e547d693"
  },
  {
    "url": "web/javaScript/基础/javascript 事件循环.html",
    "revision": "ed5461ac756069e01f650623b99ba1ef"
  },
  {
    "url": "web/javaScript/基础/javascript深入.html",
    "revision": "2fc01cd480e351d865e115ea35d910e8"
  },
  {
    "url": "web/javaScript/基础/网道javascript笔记.html",
    "revision": "ba387bc51a94105afd51893c58964186"
  },
  {
    "url": "web/javaScript/对象方法/index.html",
    "revision": "46d742f206807b2714cccad9b1046847"
  },
  {
    "url": "web/jquery/jquery实例/index.html",
    "revision": "eb58675c15c7b318249fb831b64d7680"
  },
  {
    "url": "web/jquery/jquery练习/index.html",
    "revision": "ffc6f182eb587bb2d025b2649dcce972"
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
