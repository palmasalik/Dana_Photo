/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 207:
/***/ (function() {

var swipers = new Swiper('.swipers', {
  effect: "cards",
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000
  }
});

/***/ }),

/***/ 269:
/***/ (function() {

var swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 1500
  },
  speed: 1500,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 50,
    shadowScale: 0.94
  }
});
var mysw = new Swiper('.mysw', {
  loop: true,
  autoplay: {
    delay: 2000
  },
  speed: 2000,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 50,
    shadowScale: 0.94
  }
});
var myswthree = new Swiper('.myswthree', {
  loop: true,
  autoplay: {
    delay: 3000
  },
  speed: 3000,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 50,
    shadowScale: 0.94
  }
});
var visibilityblock = new Swiper('.visibilityblock', {
  loop: true,
  autoplay: {
    delay: 2000
  },
  speed: 2000,
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 50,
    shadowScale: 0.94
  }
});

/***/ }),

/***/ 761:
/***/ (function() {

var more = document.querySelectorAll('.main_seca4-more');
var firsthidden = document.querySelectorAll('.main_seca4-hidden');
var nova = document.querySelectorAll('.main_seca4-nova');
var hid = document.querySelector('.hiden');

var _loop = function _loop(i) {
  more[i].addEventListener('click', function () {
    firsthidden[i].classList.add('active');
    firsthidden[i].style.zIndex = "5";
    hid.classList.add('active');
  });
  hid.addEventListener('click', function () {
    firsthidden[i].classList.remove('active');
    hid.classList.remove('active');
  });
};

for (var i = 0; i < more.length; i++) {
  _loop(i);
}

var _loop2 = function _loop2(_i) {
  nova[_i].addEventListener('click', function () {
    firsthidden[_i].classList.remove('active');

    hid[_i].classList.remove('active');
  });
};

for (var _i = 0; _i < nova.length; _i++) {
  _loop2(_i);
}

var but = document.querySelector('.activity');
var visiblesh = document.querySelector('.important');
but.addEventListener('click', function () {
  visiblesh.classList.add('active');
  hid.classList.add('active');
});
hid.addEventListener('click', function () {
  visiblesh.classList.remove('active');
  hid.classList.remove('active');
});

/***/ }),

/***/ 203:
/***/ (function() {

var btn = document.querySelector('.header__btn');
list = document.querySelector('.header__nav-list');
bg = document.querySelector('.bg');
btn.addEventListener('click', function () {
  list.classList.add('active');
  bg.classList.add('active');
});
bg.addEventListener('click', function () {
  list.classList.remove('active');
  bg.classList.remove('active');
});

/***/ }),

/***/ 42:
/***/ (function() {

window.onload = function () {
  var pre = document.getElementById('preload');
  var visiblebody = document.querySelector('body');
  setTimeout(function () {
    pre.style.display = 'none';
    visiblebody.style.overflow = 'visible';
  }, 1000);
};

/***/ }),

/***/ 845:
/***/ (function() {

var scrolll = document.querySelector('.arrup');

window.onscroll = function () {
  if (window.scrollY > 750) {
    scrolll.classList.add('arrup_hide');
  } else if (window.scrollY < 750) {
    scrolll.classList.remove('arrup_hide');
  }
};

scrolll.addEventListener('click', function () {
  window.scrollTo(0, 0);
});

/***/ }),

/***/ 688:
/***/ (function() {

var skills = document.querySelector('.text');
var count = document.querySelectorAll('.header__timer-extra');

function scrollCount() {
  var dur = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
  count.forEach(function (item) {
    var number = item.getAttribute('data-num');
    item.innerHTML = 0;
    type(0, item, number);
  });

  function type(i, elem, num) {
    if (i < num) {
      i++;
      elem.innerHTML = i;
      setTimeout(type, dur / num, i, elem, num);
    }
  }
}

window.addEventListener('scroll', function onScroll() {
  if (this.scrollY > skills.offsetTop - this.innerHeight / 1.4) {
    scrollCount(2500);
    count.forEach(function (item) {
      return item.parentElement.classList.add('active');
    });
    this.removeEventListener('scroll', onScroll);
  }
}); // My typing
// My typing
// My typing

function typing(el) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 400;
  var element = el instanceof HTMLElement ? el : document.querySelector(el);
  var text = element.textContent;
  var span = document.createElement('span');
  span.classList.add('span');
  var height = window.getComputedStyle(element).getPropertyValue('font-size');
  span.style.height = height;
  var index = 0;
  var interval;
  element.innerHTML = '';
  element.append(span);

  function type() {
    if (index < text.length) {
      var item = document.createElement('span');
      item.classList.add('anime-text');
      if (text[index] !== ' ') item.innerHTML = text[index];else item.innerHTML = '&nbsp;';
      item.style.animationDuration = duration + 'ms';
      span.insertAdjacentElement('beforebegin', item);
      index++;
      interval = setTimeout(type, duration / 2);
    } else clearTimeout(interval);
  }

  type();
}

typing('.text', 200);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./scripts/components/header.js
var header = __webpack_require__(203);
// EXTERNAL MODULE: ./scripts/components/carusel.js
var carusel = __webpack_require__(269);
// EXTERNAL MODULE: ./scripts/components/click.js
var click = __webpack_require__(761);
// EXTERNAL MODULE: ./scripts/components/card.js
var card = __webpack_require__(207);
// EXTERNAL MODULE: ./scripts/components/scrollTop.js
var scrollTop = __webpack_require__(845);
// EXTERNAL MODULE: ./scripts/components/loading.js
var loading = __webpack_require__(42);
// EXTERNAL MODULE: ./scripts/components/typing.js
var typing = __webpack_require__(688);
;// CONCATENATED MODULE: ./images/ph1.png
var ph1_namespaceObject = __webpack_require__.p + "images/ph1a0e63baaf6f205ac92df.png";
;// CONCATENATED MODULE: ./images/ios.png
var ios_namespaceObject = __webpack_require__.p + "images/ios708c4ad875ef5c04df03.png";
;// CONCATENATED MODULE: ./images/telega.jpg
var telega_namespaceObject = __webpack_require__.p + "images/telega61bfd3546b1e50ad4b10.jpg";
;// CONCATENATED MODULE: ./images/instagram8.png
var instagram8_namespaceObject = __webpack_require__.p + "images/instagram831b7fa7df894358adbda.png";
;// CONCATENATED MODULE: ./images/1.jpg
var _1_namespaceObject = __webpack_require__.p + "images/15df3e2ef1ead2e2a1707.jpg";
;// CONCATENATED MODULE: ./images/2.jpg
var _2_namespaceObject = __webpack_require__.p + "images/277c07a9b3fabba5892ee.jpg";
;// CONCATENATED MODULE: ./images/3.jpg
var _3_namespaceObject = __webpack_require__.p + "images/3fc219e428558c1183ddf.jpg";
;// CONCATENATED MODULE: ./images/4.jpg
var _4_namespaceObject = __webpack_require__.p + "images/4dfbfafc9358cc2284997.jpg";
;// CONCATENATED MODULE: ./images/5.jpg
var _5_namespaceObject = __webpack_require__.p + "images/56c205a035c92eeaf99cc.jpg";
;// CONCATENATED MODULE: ./images/6.jpg
var _6_namespaceObject = __webpack_require__.p + "images/612d85d03c3cf26fb8241.jpg";
;// CONCATENATED MODULE: ./images/7.jpg
var _7_namespaceObject = __webpack_require__.p + "images/712c1dcb08817113abcb3.jpg";
;// CONCATENATED MODULE: ./images/8.jpg
var _8_namespaceObject = __webpack_require__.p + "images/82d1944a4193d34ef0463.jpg";
;// CONCATENATED MODULE: ./images/q1.jpg
var q1_namespaceObject = __webpack_require__.p + "images/q16cfe453ea7b12e05b176.jpg";
;// CONCATENATED MODULE: ./images/l01.jpg
var l01_namespaceObject = __webpack_require__.p + "images/l01ab8d0d2f7c42efaf0ddf.jpg";
;// CONCATENATED MODULE: ./images/q2.jpg
var q2_namespaceObject = __webpack_require__.p + "images/q2d1f238355ac05069eb03.jpg";
;// CONCATENATED MODULE: ./images/l02.jpg
var l02_namespaceObject = __webpack_require__.p + "images/l029461223895066c1e7f56.jpg";
;// CONCATENATED MODULE: ./images/q3.jpg
var q3_namespaceObject = __webpack_require__.p + "images/q37a7b7f6b4dbd27f165ff.jpg";
;// CONCATENATED MODULE: ./images/l03.jpg
var l03_namespaceObject = __webpack_require__.p + "images/l0397775847d16393e72695.jpg";
;// CONCATENATED MODULE: ./images/q4.jpg
var q4_namespaceObject = __webpack_require__.p + "images/q484457c9cb437a2730413.jpg";
;// CONCATENATED MODULE: ./images/l04.jpg
var l04_namespaceObject = __webpack_require__.p + "images/l04013171ae0d6afb9bcc0c.jpg";
;// CONCATENATED MODULE: ./images/q5.jpg
var q5_namespaceObject = __webpack_require__.p + "images/q5c9032094d23ce04bb030.jpg";
;// CONCATENATED MODULE: ./images/l05.jpg
var l05_namespaceObject = __webpack_require__.p + "images/l0531bdfc425be76dc114bf.jpg";
;// CONCATENATED MODULE: ./images/q6.jpg
var q6_namespaceObject = __webpack_require__.p + "images/q6d6e9c9ec02af75ae00f5.jpg";
;// CONCATENATED MODULE: ./images/l06.jpg
var l06_namespaceObject = __webpack_require__.p + "images/l06a6b823dc916cdf7797a2.jpg";
;// CONCATENATED MODULE: ./images/q7.jpg
var q7_namespaceObject = __webpack_require__.p + "images/q7f6365bf611d8b076b4d8.jpg";
;// CONCATENATED MODULE: ./images/l07.jpg
var l07_namespaceObject = __webpack_require__.p + "images/l07d609b974ad39671ac5af.jpg";
;// CONCATENATED MODULE: ./images/last.jpg
var last_namespaceObject = __webpack_require__.p + "images/lastd3d5b1d2818581c1039c.jpg";
;// CONCATENATED MODULE: ./images/lastph.jpg
var lastph_namespaceObject = __webpack_require__.p + "images/lastph925c2366c127864f39f7.jpg";
;// CONCATENATED MODULE: ./video/first.mp4
var first_namespaceObject = __webpack_require__.p + "video/first1e27f49a8698c142e8c7.mp4";
;// CONCATENATED MODULE: ./scripts/index.js





































}();
/******/ })()
;