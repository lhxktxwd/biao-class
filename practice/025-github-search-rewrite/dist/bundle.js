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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pagination = __webpack_require__(/*! ../src/plugin/pagination/pagination */ \"./src/plugin/pagination/pagination.js\");\r\n\r\nvar store = {'currentPage':1,'keyword':null};\r\n\r\nvar config = {el:'#pagination',range:10,total:20,'on_page_change':on_page_change}\r\n\r\nvar $searchInput = document.querySelector('#search-input');\r\nvar $searchButton = document.querySelector('#search-button');\r\nvar $renderList = document.querySelector('#render-list');\r\nvar $searchForm = document.querySelector('#search-form');\r\n\r\npagination.init(config);\r\n\r\n$searchForm.addEventListener('submit',function(e){\r\n    e.preventDefault();\r\n    store.keyword = $searchInput.value;\r\n    MyAjax(store.keyword,store.currentPage);\r\n});\r\n\r\nfunction on_page_change (currentPage){\r\n    store.currentPage = currentPage;\r\n    MyAjax(store.keyword,currentPage);\r\n}\r\n\r\nfunction MyAjax(keyword,page){\r\n    if(!keyword||!page){\r\n        return;\r\n    }\r\n    var limit = 10;\r\n\r\n    var http = new XMLHttpRequest();\r\n\r\n    http.open('get', 'https://api.github.com/search/users?q=' + keyword + '&page=' + page + '&per_page=' + limit);\r\n\r\n    http.send();\r\n\r\n    http.addEventListener('load',function(){\r\n        var json = JSON.parse(http.responseText).items;\r\n        renderGithubList(json);\r\n    });\r\n}\r\n\r\nfunction renderGithubList(json){\r\n    var renderHtml = '';\r\n    console.log(json);\r\n    for(var i=0;i<json.length;i++){\r\n        var obj = json[i];\r\n        var html = \r\n        `\r\n            <div class=\"user-box\">\r\n                <div class=\"avatar\">\r\n                    <a target=\"_blank\" href=\"${obj.html_url}\"><img src=\"${obj.avatar_url}\"></a>\r\n                </div>\r\n                <div class=\"user-info\">\r\n                    <div class='user-title'>${obj.login}</div>\r\n                </div>\r\n            </div>\r\n        `;\r\n        renderHtml += html;\r\n    }\r\n    $renderList.innerHTML = renderHtml;\r\n    pagination.show();\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcGFnaW5hdGlvbiA9IHJlcXVpcmUoJy4uL3NyYy9wbHVnaW4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uJyk7XHJcblxyXG52YXIgc3RvcmUgPSB7J2N1cnJlbnRQYWdlJzoxLCdrZXl3b3JkJzpudWxsfTtcclxuXHJcbnZhciBjb25maWcgPSB7ZWw6JyNwYWdpbmF0aW9uJyxyYW5nZToxMCx0b3RhbDoyMCwnb25fcGFnZV9jaGFuZ2UnOm9uX3BhZ2VfY2hhbmdlfVxyXG5cclxudmFyICRzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtaW5wdXQnKTtcclxudmFyICRzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWJ1dHRvbicpO1xyXG52YXIgJHJlbmRlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVuZGVyLWxpc3QnKTtcclxudmFyICRzZWFyY2hGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1mb3JtJyk7XHJcblxyXG5wYWdpbmF0aW9uLmluaXQoY29uZmlnKTtcclxuXHJcbiRzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzdG9yZS5rZXl3b3JkID0gJHNlYXJjaElucHV0LnZhbHVlO1xyXG4gICAgTXlBamF4KHN0b3JlLmtleXdvcmQsc3RvcmUuY3VycmVudFBhZ2UpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG9uX3BhZ2VfY2hhbmdlIChjdXJyZW50UGFnZSl7XHJcbiAgICBzdG9yZS5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlO1xyXG4gICAgTXlBamF4KHN0b3JlLmtleXdvcmQsY3VycmVudFBhZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBNeUFqYXgoa2V5d29yZCxwYWdlKXtcclxuICAgIGlmKCFrZXl3b3JkfHwhcGFnZSl7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGxpbWl0ID0gMTA7XHJcblxyXG4gICAgdmFyIGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICBodHRwLm9wZW4oJ2dldCcsICdodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPScgKyBrZXl3b3JkICsgJyZwYWdlPScgKyBwYWdlICsgJyZwZXJfcGFnZT0nICsgbGltaXQpO1xyXG5cclxuICAgIGh0dHAuc2VuZCgpO1xyXG5cclxuICAgIGh0dHAuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIganNvbiA9IEpTT04ucGFyc2UoaHR0cC5yZXNwb25zZVRleHQpLml0ZW1zO1xyXG4gICAgICAgIHJlbmRlckdpdGh1Ykxpc3QoanNvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyR2l0aHViTGlzdChqc29uKXtcclxuICAgIHZhciByZW5kZXJIdG1sID0gJyc7XHJcbiAgICBjb25zb2xlLmxvZyhqc29uKTtcclxuICAgIGZvcih2YXIgaT0wO2k8anNvbi5sZW5ndGg7aSsrKXtcclxuICAgICAgICB2YXIgb2JqID0ganNvbltpXTtcclxuICAgICAgICB2YXIgaHRtbCA9IFxyXG4gICAgICAgIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7b2JqLmh0bWxfdXJsfVwiPjxpbWcgc3JjPVwiJHtvYmouYXZhdGFyX3VybH1cIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSd1c2VyLXRpdGxlJz4ke29iai5sb2dpbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJlbmRlckh0bWwgKz0gaHRtbDtcclxuICAgIH1cclxuICAgICRyZW5kZXJMaXN0LmlubmVySFRNTCA9IHJlbmRlckh0bWw7XHJcbiAgICBwYWdpbmF0aW9uLnNob3coKTtcclxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/plugin/pagination/pagination.js":
/*!*********************************************!*\
  !*** ./src/plugin/pagination/pagination.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var config,\r\n    listDom, \r\n    defaultConfig = {\r\n    range:5,\r\n    total:null,\r\n    currentPage:1\r\n}\r\n\r\nvar output = { init,show,hide};\r\n\r\nfunction init(userConfig) {\r\n    if(!userConfig.el){\r\n        throw 'Invalid root element.';\r\n    }\r\n    if(!userConfig.total){\r\n       return;\r\n    }\r\n    listDom = document.querySelector(userConfig.el);\r\n    config = Object.assign({},defaultConfig,userConfig);\r\n    changePage();\r\n    bindClickEvent();\r\n};\r\n\r\nfunction bindClickEvent(){\r\n    listDom.addEventListener('click',function(e){\r\n        var target = e.target;\r\n        config.currentPage =  target.dataset.page;\r\n        changePage();\r\n    });\r\n}\r\n\r\n\r\nfunction calculationPage(){\r\n    var currentPage = Number(config.currentPage);\r\n    var start ,end , \r\n        range = config.range,\r\n        midNumber = Math.ceil(range/2), \r\n        total = config.total;\r\n    if(currentPage <= midNumber){\r\n        start = 1;\r\n        end = range;\r\n    }else if(currentPage >= total - midNumber){\r\n        start = total - midNumber - 1;\r\n        end = total;\r\n    }else {\r\n        start = currentPage - midNumber + 1;\r\n        end = currentPage + midNumber -1;\r\n    }\r\n    return {start,end}\r\n}\r\n\r\nfunction changePage() {\r\n   var obj =  calculationPage();\r\n   if (config.on_page_change)\r\n    config.on_page_change(config.currentPage);\r\n    renderPageList(obj.start,obj.end);\r\n}\r\n\r\n\r\nfunction renderPageList(start,end) {\r\n    var cuurntPage = config.currentPage;\r\n    listDom.innerHTML = '';\r\n    for(var i = start;i <= end; i++){\r\n        var btnDom = document.createElement('button');\r\n        btnDom.innerText = i;\r\n        btnDom.dataset.page = i;\r\n        if(i == cuurntPage){\r\n            btnDom.classList.add('active');\r\n        }\r\n        listDom.appendChild(btnDom);\r\n    }\r\n}\r\n\r\nfunction show(){\r\n    listDom.hidden = false;\r\n}\r\n\r\nfunction hide(){\r\n    listDom.hidden = true;\r\n}\r\n\r\nmodule.exports = output;\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2luL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wbHVnaW4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmpzP2Q1YjAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvbmZpZyxcclxuICAgIGxpc3REb20sIFxyXG4gICAgZGVmYXVsdENvbmZpZyA9IHtcclxuICAgIHJhbmdlOjUsXHJcbiAgICB0b3RhbDpudWxsLFxyXG4gICAgY3VycmVudFBhZ2U6MVxyXG59XHJcblxyXG52YXIgb3V0cHV0ID0geyBpbml0LHNob3csaGlkZX07XHJcblxyXG5mdW5jdGlvbiBpbml0KHVzZXJDb25maWcpIHtcclxuICAgIGlmKCF1c2VyQ29uZmlnLmVsKXtcclxuICAgICAgICB0aHJvdyAnSW52YWxpZCByb290IGVsZW1lbnQuJztcclxuICAgIH1cclxuICAgIGlmKCF1c2VyQ29uZmlnLnRvdGFsKXtcclxuICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxpc3REb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHVzZXJDb25maWcuZWwpO1xyXG4gICAgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSxkZWZhdWx0Q29uZmlnLHVzZXJDb25maWcpO1xyXG4gICAgY2hhbmdlUGFnZSgpO1xyXG4gICAgYmluZENsaWNrRXZlbnQoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGJpbmRDbGlja0V2ZW50KCl7XHJcbiAgICBsaXN0RG9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgY29uZmlnLmN1cnJlbnRQYWdlID0gIHRhcmdldC5kYXRhc2V0LnBhZ2U7XHJcbiAgICAgICAgY2hhbmdlUGFnZSgpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGlvblBhZ2UoKXtcclxuICAgIHZhciBjdXJyZW50UGFnZSA9IE51bWJlcihjb25maWcuY3VycmVudFBhZ2UpO1xyXG4gICAgdmFyIHN0YXJ0ICxlbmQgLCBcclxuICAgICAgICByYW5nZSA9IGNvbmZpZy5yYW5nZSxcclxuICAgICAgICBtaWROdW1iZXIgPSBNYXRoLmNlaWwocmFuZ2UvMiksIFxyXG4gICAgICAgIHRvdGFsID0gY29uZmlnLnRvdGFsO1xyXG4gICAgaWYoY3VycmVudFBhZ2UgPD0gbWlkTnVtYmVyKXtcclxuICAgICAgICBzdGFydCA9IDE7XHJcbiAgICAgICAgZW5kID0gcmFuZ2U7XHJcbiAgICB9ZWxzZSBpZihjdXJyZW50UGFnZSA+PSB0b3RhbCAtIG1pZE51bWJlcil7XHJcbiAgICAgICAgc3RhcnQgPSB0b3RhbCAtIG1pZE51bWJlciAtIDE7XHJcbiAgICAgICAgZW5kID0gdG90YWw7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgc3RhcnQgPSBjdXJyZW50UGFnZSAtIG1pZE51bWJlciArIDE7XHJcbiAgICAgICAgZW5kID0gY3VycmVudFBhZ2UgKyBtaWROdW1iZXIgLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge3N0YXJ0LGVuZH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2hhbmdlUGFnZSgpIHtcclxuICAgdmFyIG9iaiA9ICBjYWxjdWxhdGlvblBhZ2UoKTtcclxuICAgaWYgKGNvbmZpZy5vbl9wYWdlX2NoYW5nZSlcclxuICAgIGNvbmZpZy5vbl9wYWdlX2NoYW5nZShjb25maWcuY3VycmVudFBhZ2UpO1xyXG4gICAgcmVuZGVyUGFnZUxpc3Qob2JqLnN0YXJ0LG9iai5lbmQpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUGFnZUxpc3Qoc3RhcnQsZW5kKSB7XHJcbiAgICB2YXIgY3V1cm50UGFnZSA9IGNvbmZpZy5jdXJyZW50UGFnZTtcclxuICAgIGxpc3REb20uaW5uZXJIVE1MID0gJyc7XHJcbiAgICBmb3IodmFyIGkgPSBzdGFydDtpIDw9IGVuZDsgaSsrKXtcclxuICAgICAgICB2YXIgYnRuRG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuRG9tLmlubmVyVGV4dCA9IGk7XHJcbiAgICAgICAgYnRuRG9tLmRhdGFzZXQucGFnZSA9IGk7XHJcbiAgICAgICAgaWYoaSA9PSBjdXVybnRQYWdlKXtcclxuICAgICAgICAgICAgYnRuRG9tLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaXN0RG9tLmFwcGVuZENoaWxkKGJ0bkRvbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3coKXtcclxuICAgIGxpc3REb20uaGlkZGVuID0gZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGUoKXtcclxuICAgIGxpc3REb20uaGlkZGVuID0gdHJ1ZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBvdXRwdXQ7XHJcblxyXG5cclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugin/pagination/pagination.js\n");

/***/ })

/******/ });