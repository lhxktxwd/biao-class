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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Route/route.js":
/*!****************************!*\
  !*** ./src/Route/route.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet instance;\r\n\r\nclass Route {\r\n\r\n    constructor() {\r\n        this.current = 'home';\r\n        this.handle_click_event();\r\n        this.handle_change_hash();\r\n        this.go(window.location.hash);\r\n    }\r\n\r\n    go(hash) {\r\n        this.current = this.parse_hash(hash);\r\n        this.render();\r\n    }\r\n\r\n    handle_change_hash() {\r\n        window.addEventListener('hashchange', () => {\r\n            /*如果发生改变就去对应页面*/\r\n            this.go(window.location.hash);\r\n        });\r\n    }\r\n\r\n    handle_click_event() {\r\n        document.addEventListener('click', (e) => {\r\n            let target = e.target;\r\n            switch (target.nodeName) {\r\n                case 'A':\r\n                    //    不是本地路由则不处理\r\n                    if (target.host)\r\n                        return;\r\n                    this.go(target.hash);\r\n                    break;\r\n                default:\r\n                    break;\r\n            }\r\n        })\r\n    }\r\n\r\n    render() {\r\n        let id = this.current;\r\n        let el = document.getElementById(id);\r\n        // 隐藏所有A标签元素\r\n        this.hide_a_labl();\r\n        el.hidden = false;\r\n    }\r\n\r\n    hide_a_labl() {\r\n        let els = document.querySelectorAll('.page');\r\n        els.forEach((el) => {\r\n            el.hidden = true;\r\n        });\r\n    }\r\n\r\n    /**\r\n     * 通过原始hash解析页面名称\r\n     * */\r\n    parse_hash(hash) {\r\n        var hash_arr = hash.split('/');\r\n        return hash_arr[hash_arr.length - 1];\r\n    }\r\n}\r\n\r\n\r\n/*初始化*/\r\nfunction init() {\r\n    if (!instance)\r\n        instance = new Route();\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    init\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUm91dGUvcm91dGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvUm91dGUvcm91dGUuanM/MGVhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaW5zdGFuY2U7XHJcblxyXG5jbGFzcyBSb3V0ZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gJ2hvbWUnO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlX2NsaWNrX2V2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVfY2hhbmdlX2hhc2goKTtcclxuICAgICAgICB0aGlzLmdvKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcclxuICAgIH1cclxuXHJcbiAgICBnbyhoYXNoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5wYXJzZV9oYXNoKGhhc2gpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlX2NoYW5nZV9oYXNoKCkge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvKuWmguaenOWPkeeUn+aUueWPmOWwseWOu+WvueW6lOmhtemdoiovXHJcbiAgICAgICAgICAgIHRoaXMuZ28od2luZG93LmxvY2F0aW9uLmhhc2gpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZV9jbGlja19ldmVudCgpIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgc3dpdGNoICh0YXJnZXQubm9kZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0EnOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIOS4jeaYr+acrOWcsOi3r+eUseWImeS4jeWkhOeQhlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuaG9zdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ28odGFyZ2V0Lmhhc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuY3VycmVudDtcclxuICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICAgICAgLy8g6ZqQ6JeP5omA5pyJQeagh+etvuWFg+e0oFxyXG4gICAgICAgIHRoaXMuaGlkZV9hX2xhYmwoKTtcclxuICAgICAgICBlbC5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRlX2FfbGFibCgpIHtcclxuICAgICAgICBsZXQgZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UnKTtcclxuICAgICAgICBlbHMuZm9yRWFjaCgoZWwpID0+IHtcclxuICAgICAgICAgICAgZWwuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmui/h+WOn+Wni2hhc2jop6PmnpDpobXpnaLlkI3np7BcclxuICAgICAqICovXHJcbiAgICBwYXJzZV9oYXNoKGhhc2gpIHtcclxuICAgICAgICB2YXIgaGFzaF9hcnIgPSBoYXNoLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgcmV0dXJuIGhhc2hfYXJyW2hhc2hfYXJyLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyrliJ3lp4vljJYqL1xyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgaWYgKCFpbnN0YW5jZSlcclxuICAgICAgICBpbnN0YW5jZSA9IG5ldyBSb3V0ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBpbml0XHJcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Route/route.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Route_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Route/route */ \"./src/Route/route.js\");\n// import article from './Api/article';\r\n\r\n_Route_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"].init();\r\n// console.log(article.read());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXJ0aWNsZSBmcm9tICcuL0FwaS9hcnRpY2xlJztcclxuaW1wb3J0IHJvdXRlIGZyb20gXCIuL1JvdXRlL3JvdXRlXCJcclxucm91dGUuaW5pdCgpO1xyXG4vLyBjb25zb2xlLmxvZyhhcnRpY2xlLnJlYWQoKSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });