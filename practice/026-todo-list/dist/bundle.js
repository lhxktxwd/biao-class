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

eval("var todoApi = __webpack_require__(/*! ./todoApi */ \"./src/todoApi.js\");\r\nvar todoUi= __webpack_require__(/*! ./todoUi */ \"./src/todoUi.js\");//ui模型\r\nvar todo = new todoUi('#todoForm','#todoList');//数据模型\r\n\r\ntodo.init();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB0b2RvQXBpID0gcmVxdWlyZSgnLi90b2RvQXBpJyk7XHJcbnZhciB0b2RvVWk9IHJlcXVpcmUoJy4vdG9kb1VpJyk7Ly91aeaooeWei1xyXG52YXIgdG9kbyA9IG5ldyB0b2RvVWkoJyN0b2RvRm9ybScsJyN0b2RvTGlzdCcpOy8v5pWw5o2u5qih5Z6LXHJcblxyXG50b2RvLmluaXQoKTtcclxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ }),

/***/ "./src/todoApi.js":
/*!************************!*\
  !*** ./src/todoApi.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function TodoModel(todoList,maxId){\r\n    this.maxId = maxId || 1;\r\n    this.todoList = todoList || [];\r\n}\r\n\r\n//增加数据\r\nTodoModel.prototype.add = function (content){\r\n    this.todoList.push({id:this.maxId,content:content});\r\n    this.maxId++;\r\n}\r\n\r\n//删除数据\r\nTodoModel.prototype.remove = function (id){\r\n    var todo_index = this.find_todo_by_id(id);\r\n    if(todo_index == null)return;\r\n    this.todoList.splice(todo_index,1);\r\n}\r\n\r\n//修改数据\r\nTodoModel.prototype.update = function(id,content){\r\n    var todo_index = this.find_todo_by_id(id);\r\n    if(todo_index == null)return;\r\n    var todo = this.todoList[todo_index];\r\n    todo.content = content;\r\n}\r\n\r\n//读取数据\r\nTodoModel.prototype.read = function(id){\r\n    var todo_index = this.find_todo_by_id(id);\r\n    if(todo_index == null)return;\r\n    var todo = this.todoList[todo_index];\r\n    return todo;\r\n}\r\n\r\n//获取数据在list中的位置\r\nTodoModel.prototype.find_todo_by_id = function (id){\r\n    var result;\r\n    this.todoList.forEach(function(todo,index){\r\n        if(todo.id == id){\r\n            result = index;\r\n            return;\r\n        }\r\n    });\r\n    return result;\r\n}\r\n\r\nmodule.exports = TodoModel;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kb0FwaS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90b2RvQXBpLmpzPzQ4ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVG9kb01vZGVsKHRvZG9MaXN0LG1heElkKXtcclxuICAgIHRoaXMubWF4SWQgPSBtYXhJZCB8fCAxO1xyXG4gICAgdGhpcy50b2RvTGlzdCA9IHRvZG9MaXN0IHx8IFtdO1xyXG59XHJcblxyXG4vL+WinuWKoOaVsOaNrlxyXG5Ub2RvTW9kZWwucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChjb250ZW50KXtcclxuICAgIHRoaXMudG9kb0xpc3QucHVzaCh7aWQ6dGhpcy5tYXhJZCxjb250ZW50OmNvbnRlbnR9KTtcclxuICAgIHRoaXMubWF4SWQrKztcclxufVxyXG5cclxuLy/liKDpmaTmlbDmja5cclxuVG9kb01vZGVsLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoaWQpe1xyXG4gICAgdmFyIHRvZG9faW5kZXggPSB0aGlzLmZpbmRfdG9kb19ieV9pZChpZCk7XHJcbiAgICBpZih0b2RvX2luZGV4ID09IG51bGwpcmV0dXJuO1xyXG4gICAgdGhpcy50b2RvTGlzdC5zcGxpY2UodG9kb19pbmRleCwxKTtcclxufVxyXG5cclxuLy/kv67mlLnmlbDmja5cclxuVG9kb01vZGVsLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihpZCxjb250ZW50KXtcclxuICAgIHZhciB0b2RvX2luZGV4ID0gdGhpcy5maW5kX3RvZG9fYnlfaWQoaWQpO1xyXG4gICAgaWYodG9kb19pbmRleCA9PSBudWxsKXJldHVybjtcclxuICAgIHZhciB0b2RvID0gdGhpcy50b2RvTGlzdFt0b2RvX2luZGV4XTtcclxuICAgIHRvZG8uY29udGVudCA9IGNvbnRlbnQ7XHJcbn1cclxuXHJcbi8v6K+75Y+W5pWw5o2uXHJcblRvZG9Nb2RlbC5wcm90b3R5cGUucmVhZCA9IGZ1bmN0aW9uKGlkKXtcclxuICAgIHZhciB0b2RvX2luZGV4ID0gdGhpcy5maW5kX3RvZG9fYnlfaWQoaWQpO1xyXG4gICAgaWYodG9kb19pbmRleCA9PSBudWxsKXJldHVybjtcclxuICAgIHZhciB0b2RvID0gdGhpcy50b2RvTGlzdFt0b2RvX2luZGV4XTtcclxuICAgIHJldHVybiB0b2RvO1xyXG59XHJcblxyXG4vL+iOt+WPluaVsOaNruWcqGxpc3TkuK3nmoTkvY3nva5cclxuVG9kb01vZGVsLnByb3RvdHlwZS5maW5kX3RvZG9fYnlfaWQgPSBmdW5jdGlvbiAoaWQpe1xyXG4gICAgdmFyIHJlc3VsdDtcclxuICAgIHRoaXMudG9kb0xpc3QuZm9yRWFjaChmdW5jdGlvbih0b2RvLGluZGV4KXtcclxuICAgICAgICBpZih0b2RvLmlkID09IGlkKXtcclxuICAgICAgICAgICAgcmVzdWx0ID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9kb01vZGVsOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/todoApi.js\n");

/***/ }),

/***/ "./src/todoUi.js":
/*!***********************!*\
  !*** ./src/todoUi.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var TodoModelApi = __webpack_require__(/*! ./todoApi */ \"./src/todoApi.js\");\r\n\r\nfunction TodoUi(from_id,list_id) {\r\n    this.el_from = document.querySelector(from_id);\r\n    this.el_list = document.querySelector(list_id);\r\n    this._api = new TodoModelApi();\r\n    this.data = {};\r\n};\r\n\r\nTodoUi.prototype.init = init;\r\nTodoUi.prototype.getFromData = getFromData;\r\nTodoUi.prototype.setFromData = setFromData;\r\nTodoUi.prototype.detect_add = detect_add;\r\nTodoUi.prototype.detect_click = detect_click;\r\nTodoUi.prototype.render = render;\r\nTodoUi.prototype.clear = clear;\r\n\r\nfunction init(){\r\n    this.detect_add();\r\n    this.render();\r\n    this.detect_click();\r\n}\r\n\r\n//监听添加事件\r\nfunction detect_add() {\r\n    var that = this;\r\n    var add_data = {};\r\n    this.el_from.addEventListener('submit',function(e){\r\n        e.preventDefault();\r\n        var list = that.el_from.querySelectorAll('[name]');\r\n        list.forEach(input => {\r\n            var key = input.name;\r\n            var value = input.value;\r\n            add_data[key] = value;\r\n        });\r\n        if(add_data['id'] != ''){\r\n            that._api.update(add_data['id'],add_data['content']);\r\n        }else{\r\n            that._api.add(add_data['content']);\r\n        }\r\n        that.clear();\r\n        that.render();\r\n    });\r\n}\r\n\r\n//监听修改和删除事件\r\nfunction detect_click() {\r\n    var that = this;\r\n    this.el_list.addEventListener('click', function (e) {\r\n        var target = e.target // 点击源\r\n            , todo_item = target.closest('.todo-item') // 被点击的.todo-item，没有这个元素，就拿不到id\r\n            , id = todo_item.dataset.id // 拿到id\r\n            , is_remove_btn = target.classList.contains('remove') // 点击的是否为删除按钮\r\n            , is_update_btn = target.classList.contains('update') // 点击的是否为更新按钮\r\n            ;\r\n\r\n        if (is_remove_btn) {\r\n                /*找到按钮所在的.todo-item，因为.todo-item上有当前任务的id*/\r\n                that._api.remove(id);\r\n                that.render();\r\n            } else if (is_update_btn) {\r\n                /*通过id得到相对应的那条数据对象 {id: xxx, title: '吃饭', ... }*/\r\n                var item_data = that._api.read(id);\r\n                /*填充表单*/\r\n                that.setFromData(item_data);\r\n            }\r\n    });\r\n}\r\n\r\n//清除输入框内容\r\nfunction clear(){\r\n    var list = this.el_from.querySelectorAll('[name]');\r\n    list.forEach(input => {\r\n        input.value = '';\r\n    });\r\n}\r\n\r\n//获取from数据-- 用于添加事件\r\nfunction getFromData() {\r\n    var data = {};\r\n    e.preventDefault();\r\n    var list = el_from.querySelectorAll('[name]');\r\n    list.forEach(input => {\r\n        var key = input.name;\r\n        var value = input.value;\r\n        data[key] = value;\r\n    });\r\n    return data;\r\n}\r\n\r\n//填充from数据-- 用于修改事件\r\nfunction setFromData(data) {\r\n    for (var key in data) {\r\n        var value = data[key];\r\n        var el = this.el_from.querySelector(`[name=${key}]`);\r\n        if(!el)continue;\r\n        if(typeof value == 'boolean'){\r\n            el.checked = value;\r\n        }else{\r\n            el.value = value;\r\n        }\r\n    }\r\n}\r\n\r\n//渲染数据\r\nfunction render(){\r\n    var todoList = this._api.todoList;\r\n    var html = '';\r\n    this.el_list.innerHTML = '';\r\n    todoList.forEach(function(item){\r\n        var el = document.createElement('div');\r\n        el.classList.add('row', 'todo-item');\r\n        el.dataset.id = item.id;\r\n        el.innerHTML = `\r\n            <div class=\"todo-checkbox col\">\r\n                <input type=\"checkbox\" ${item.checked||''}>\r\n            </div>\r\n            <div class=\"todo-title col\">${item.content}</div>\r\n            <div class=\"todo-tool col\">\r\n                <button class=\"update\">update</button>\r\n                <button class=\"remove\">delete</button>\r\n            </div>\r\n        `;\r\n        this.el_list.appendChild(el);\r\n    }.bind(this));\r\n}\r\n\r\nmodule.exports = TodoUi;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kb1VpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3RvZG9VaS5qcz9mMDRhIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBUb2RvTW9kZWxBcGkgPSByZXF1aXJlKCcuL3RvZG9BcGknKTtcclxuXHJcbmZ1bmN0aW9uIFRvZG9VaShmcm9tX2lkLGxpc3RfaWQpIHtcclxuICAgIHRoaXMuZWxfZnJvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZnJvbV9pZCk7XHJcbiAgICB0aGlzLmVsX2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGxpc3RfaWQpO1xyXG4gICAgdGhpcy5fYXBpID0gbmV3IFRvZG9Nb2RlbEFwaSgpO1xyXG4gICAgdGhpcy5kYXRhID0ge307XHJcbn07XHJcblxyXG5Ub2RvVWkucHJvdG90eXBlLmluaXQgPSBpbml0O1xyXG5Ub2RvVWkucHJvdG90eXBlLmdldEZyb21EYXRhID0gZ2V0RnJvbURhdGE7XHJcblRvZG9VaS5wcm90b3R5cGUuc2V0RnJvbURhdGEgPSBzZXRGcm9tRGF0YTtcclxuVG9kb1VpLnByb3RvdHlwZS5kZXRlY3RfYWRkID0gZGV0ZWN0X2FkZDtcclxuVG9kb1VpLnByb3RvdHlwZS5kZXRlY3RfY2xpY2sgPSBkZXRlY3RfY2xpY2s7XHJcblRvZG9VaS5wcm90b3R5cGUucmVuZGVyID0gcmVuZGVyO1xyXG5Ub2RvVWkucHJvdG90eXBlLmNsZWFyID0gY2xlYXI7XHJcblxyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgICB0aGlzLmRldGVjdF9hZGQoKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB0aGlzLmRldGVjdF9jbGljaygpO1xyXG59XHJcblxyXG4vL+ebkeWQrOa3u+WKoOS6i+S7tlxyXG5mdW5jdGlvbiBkZXRlY3RfYWRkKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgdmFyIGFkZF9kYXRhID0ge307XHJcbiAgICB0aGlzLmVsX2Zyb20uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JyxmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGxpc3QgPSB0aGF0LmVsX2Zyb20ucXVlcnlTZWxlY3RvckFsbCgnW25hbWVdJyk7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IGlucHV0Lm5hbWU7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBhZGRfZGF0YVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoYWRkX2RhdGFbJ2lkJ10gIT0gJycpe1xyXG4gICAgICAgICAgICB0aGF0Ll9hcGkudXBkYXRlKGFkZF9kYXRhWydpZCddLGFkZF9kYXRhWydjb250ZW50J10pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGF0Ll9hcGkuYWRkKGFkZF9kYXRhWydjb250ZW50J10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LmNsZWFyKCk7XHJcbiAgICAgICAgdGhhdC5yZW5kZXIoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+ebkeWQrOS/ruaUueWSjOWIoOmZpOS6i+S7tlxyXG5mdW5jdGlvbiBkZXRlY3RfY2xpY2soKSB7XHJcbiAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLmVsX2xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldCAvLyDngrnlh7vmupBcclxuICAgICAgICAgICAgLCB0b2RvX2l0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLnRvZG8taXRlbScpIC8vIOiiq+eCueWHu+eahC50b2RvLWl0ZW3vvIzmsqHmnInov5nkuKrlhYPntKDvvIzlsLHmi7/kuI3liLBpZFxyXG4gICAgICAgICAgICAsIGlkID0gdG9kb19pdGVtLmRhdGFzZXQuaWQgLy8g5ou/5YiwaWRcclxuICAgICAgICAgICAgLCBpc19yZW1vdmVfYnRuID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVtb3ZlJykgLy8g54K55Ye755qE5piv5ZCm5Li65Yig6Zmk5oyJ6ZKuXHJcbiAgICAgICAgICAgICwgaXNfdXBkYXRlX2J0biA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3VwZGF0ZScpIC8vIOeCueWHu+eahOaYr+WQpuS4uuabtOaWsOaMiemSrlxyXG4gICAgICAgICAgICA7XHJcblxyXG4gICAgICAgIGlmIChpc19yZW1vdmVfYnRuKSB7XHJcbiAgICAgICAgICAgICAgICAvKuaJvuWIsOaMiemSruaJgOWcqOeahC50b2RvLWl0ZW3vvIzlm6DkuLoudG9kby1pdGVt5LiK5pyJ5b2T5YmN5Lu75Yqh55qEaWQqL1xyXG4gICAgICAgICAgICAgICAgdGhhdC5fYXBpLnJlbW92ZShpZCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzX3VwZGF0ZV9idG4pIHtcclxuICAgICAgICAgICAgICAgIC8q6YCa6L+HaWTlvpfliLDnm7jlr7nlupTnmoTpgqPmnaHmlbDmja7lr7nosaEge2lkOiB4eHgsIHRpdGxlOiAn5ZCD6aWtJywgLi4uIH0qL1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW1fZGF0YSA9IHRoYXQuX2FwaS5yZWFkKGlkKTtcclxuICAgICAgICAgICAgICAgIC8q5aGr5YWF6KGo5Y2VKi9cclxuICAgICAgICAgICAgICAgIHRoYXQuc2V0RnJvbURhdGEoaXRlbV9kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8v5riF6Zmk6L6T5YWl5qGG5YaF5a65XHJcbmZ1bmN0aW9uIGNsZWFyKCl7XHJcbiAgICB2YXIgbGlzdCA9IHRoaXMuZWxfZnJvbS5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZV0nKTtcclxuICAgIGxpc3QuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIH0pO1xyXG59XHJcblxyXG4vL+iOt+WPlmZyb23mlbDmja4tLSDnlKjkuo7mt7vliqDkuovku7ZcclxuZnVuY3Rpb24gZ2V0RnJvbURhdGEoKSB7XHJcbiAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdmFyIGxpc3QgPSBlbF9mcm9tLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lXScpO1xyXG4gICAgbGlzdC5mb3JFYWNoKGlucHV0ID0+IHtcclxuICAgICAgICB2YXIga2V5ID0gaW5wdXQubmFtZTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBkYXRhW2tleV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn1cclxuXHJcbi8v5aGr5YWFZnJvbeaVsOaNri0tIOeUqOS6juS/ruaUueS6i+S7tlxyXG5mdW5jdGlvbiBzZXRGcm9tRGF0YShkYXRhKSB7XHJcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGRhdGFba2V5XTtcclxuICAgICAgICB2YXIgZWwgPSB0aGlzLmVsX2Zyb20ucXVlcnlTZWxlY3RvcihgW25hbWU9JHtrZXl9XWApO1xyXG4gICAgICAgIGlmKCFlbCljb250aW51ZTtcclxuICAgICAgICBpZih0eXBlb2YgdmFsdWUgPT0gJ2Jvb2xlYW4nKXtcclxuICAgICAgICAgICAgZWwuY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBlbC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy/muLLmn5PmlbDmja5cclxuZnVuY3Rpb24gcmVuZGVyKCl7XHJcbiAgICB2YXIgdG9kb0xpc3QgPSB0aGlzLl9hcGkudG9kb0xpc3Q7XHJcbiAgICB2YXIgaHRtbCA9ICcnO1xyXG4gICAgdGhpcy5lbF9saXN0LmlubmVySFRNTCA9ICcnO1xyXG4gICAgdG9kb0xpc3QuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdyb3cnLCAndG9kby1pdGVtJyk7XHJcbiAgICAgICAgZWwuZGF0YXNldC5pZCA9IGl0ZW0uaWQ7XHJcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1jaGVja2JveCBjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAke2l0ZW0uY2hlY2tlZHx8Jyd9PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tdGl0bGUgY29sXCI+JHtpdGVtLmNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLXRvb2wgY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwidXBkYXRlXCI+dXBkYXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVtb3ZlXCI+ZGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgdGhpcy5lbF9saXN0LmFwcGVuZENoaWxkKGVsKTtcclxuICAgIH0uYmluZCh0aGlzKSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVG9kb1VpO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/todoUi.js\n");

/***/ })

/******/ });