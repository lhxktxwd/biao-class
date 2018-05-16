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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var todoModel = __webpack_require__(/*! ./todoModel */ \"./src/todoModel.js\");\r\n\r\nvar todo = new todoModel();\r\n\r\n// todo.add('test');\r\n// todo.update(1,'test2');\r\n// todo.remove(1);\r\n// console.log(todo.read(1));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB0b2RvTW9kZWwgPSByZXF1aXJlKCcuL3RvZG9Nb2RlbCcpO1xyXG5cclxudmFyIHRvZG8gPSBuZXcgdG9kb01vZGVsKCk7XHJcblxyXG4vLyB0b2RvLmFkZCgndGVzdCcpO1xyXG4vLyB0b2RvLnVwZGF0ZSgxLCd0ZXN0MicpO1xyXG4vLyB0b2RvLnJlbW92ZSgxKTtcclxuLy8gY29uc29sZS5sb2codG9kby5yZWFkKDEpKTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/todoModel.js":
/*!**************************!*\
  !*** ./src/todoModel.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function todoModel(maxId,todoList){\r\n    this.maxId = maxId || 1;\r\n    this.todoList = todoList || [];\r\n}\r\n\r\ntodoModel.prototype.add = function (content){\r\n    this.todoList.push({id:this.maxId,content:content});\r\n    this.maxId++;\r\n}\r\n\r\ntodoModel.prototype.remove = function (id){\r\n    var todo_index = this.find_todo_by_id(id);\r\n    if(todo_index == null)return;\r\n    this.todoList.splice(todo_index,1);\r\n}\r\n\r\ntodoModel.prototype.update = function(id,content){\r\n    var todo_index = this.find_todo_by_id(id);\r\n    if(todo_index == null)return;\r\n    var todo = this.todoList[todo_index];\r\n    todo.content = content;\r\n}\r\ntodoModel.prototype.read = function(id){\r\n    var todo_index = this.find_todo_by_id(id);\r\n    if(todo_index == null)return;\r\n    var todo = this.todoList[todo_index];\r\n    return todo;\r\n}\r\n\r\ntodoModel.prototype.find_todo_by_id = function (id){\r\n    var result;\r\n    this.todoList.forEach(function(todo,index){\r\n        if(todo.id = id){\r\n            result = index;\r\n            return;\r\n        }\r\n    });\r\n    return result;\r\n}\r\n\r\nmodule.exports = todoModel;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kb01vZGVsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9Nb2RlbC5qcz82OTVhIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHRvZG9Nb2RlbChtYXhJZCx0b2RvTGlzdCl7XHJcbiAgICB0aGlzLm1heElkID0gbWF4SWQgfHwgMTtcclxuICAgIHRoaXMudG9kb0xpc3QgPSB0b2RvTGlzdCB8fCBbXTtcclxufVxyXG5cclxudG9kb01vZGVsLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoY29udGVudCl7XHJcbiAgICB0aGlzLnRvZG9MaXN0LnB1c2goe2lkOnRoaXMubWF4SWQsY29udGVudDpjb250ZW50fSk7XHJcbiAgICB0aGlzLm1heElkKys7XHJcbn1cclxuXHJcbnRvZG9Nb2RlbC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGlkKXtcclxuICAgIHZhciB0b2RvX2luZGV4ID0gdGhpcy5maW5kX3RvZG9fYnlfaWQoaWQpO1xyXG4gICAgaWYodG9kb19pbmRleCA9PSBudWxsKXJldHVybjtcclxuICAgIHRoaXMudG9kb0xpc3Quc3BsaWNlKHRvZG9faW5kZXgsMSk7XHJcbn1cclxuXHJcbnRvZG9Nb2RlbC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oaWQsY29udGVudCl7XHJcbiAgICB2YXIgdG9kb19pbmRleCA9IHRoaXMuZmluZF90b2RvX2J5X2lkKGlkKTtcclxuICAgIGlmKHRvZG9faW5kZXggPT0gbnVsbClyZXR1cm47XHJcbiAgICB2YXIgdG9kbyA9IHRoaXMudG9kb0xpc3RbdG9kb19pbmRleF07XHJcbiAgICB0b2RvLmNvbnRlbnQgPSBjb250ZW50O1xyXG59XHJcbnRvZG9Nb2RlbC5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uKGlkKXtcclxuICAgIHZhciB0b2RvX2luZGV4ID0gdGhpcy5maW5kX3RvZG9fYnlfaWQoaWQpO1xyXG4gICAgaWYodG9kb19pbmRleCA9PSBudWxsKXJldHVybjtcclxuICAgIHZhciB0b2RvID0gdGhpcy50b2RvTGlzdFt0b2RvX2luZGV4XTtcclxuICAgIHJldHVybiB0b2RvO1xyXG59XHJcblxyXG50b2RvTW9kZWwucHJvdG90eXBlLmZpbmRfdG9kb19ieV9pZCA9IGZ1bmN0aW9uIChpZCl7XHJcbiAgICB2YXIgcmVzdWx0O1xyXG4gICAgdGhpcy50b2RvTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKHRvZG8saW5kZXgpe1xyXG4gICAgICAgIGlmKHRvZG8uaWQgPSBpZCl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRvZG9Nb2RlbDsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/todoModel.js\n");

/***/ })

/******/ });