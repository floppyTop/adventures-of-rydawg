/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_toon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/toon.js */ "./src/js/modules/toon.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



(function () {
  var game = {};
  game.toon = {}; // Main Loop

  function main(tFrame) {
    if (Object(_modules_toon_js__WEBPACK_IMPORTED_MODULE_0__["isToonSet"])(game.toon.name)) {
      var _ref, _ref2;

      game.stopMain = window.requestAnimationFrame(main);
      (_ref = typeof int === "undefined" ? "undefined" : _typeof(int), _ref2 = _slicedToArray(_ref, 2), nextTick = _ref2[0], numTicks = _ref2[1], _ref), typeof int === "undefined" ? "undefined" : _typeof(int);
      queueUpdates(numTicks);

      if (tFrame > nextTick) {
        var nextTick = game.lastTick + game.tickLength,
            numTicks = 0;
        var timeSinceTick = tFrame - game.lastTick,
            numTicks = math.floor(timeSinceTick / game.tickLength);
      }

      renderClock(tFrame);
      game.lastRender = tFrame;
      console.log(tFrame / 1000);
      console.log(game.toon.name);
    }
  }

  function queueUpdates(numTicks) {
    for (var i = 0; i < numTicks; i++) {
      game.lastTick = game.lastTick + game.tickLength;
      update(game.lastTick);
    }
  } // If the game.tickLength > 0, set the time var to the current millisecond count, changed to seconds.
  // Then, adjust the innerHTML of the target to the new time, on every tick.
  // TODO: Only update every 1000th tick, rather than every tick.


  function renderClock(tFrame) {
    if (game.tickLength > 0) {
      var time = (tFrame / 1000).toFixed(0),
          clock = "<span>".concat(time, "</span>"),
          clockTarget = document.getElementById('clock');
      clockTarget.innerHTML = clock;
    }
  }

  ;
  game.lastTick = performance.now();
  game.lastRender = game.lastTick;
  game.tickLength = 50;
  game.toon.name = Object(_modules_toon_js__WEBPACK_IMPORTED_MODULE_0__["createToon"])();
  main(performance.now());
})();

/***/ }),

/***/ "./src/js/modules/toon.js":
/*!********************************!*\
  !*** ./src/js/modules/toon.js ***!
  \********************************/
/*! exports provided: createToon, isToonSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createToon", function() { return createToon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToonSet", function() { return isToonSet; });
function createToon(toon) {
  var name = prompt('What\'s your name?');
  return name;
}
function isToonSet(name) {
  if (name.length > 0) {
    return true;
  } else {
    return false;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=app.js.map