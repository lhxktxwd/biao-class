var todoApi = require('./todoApi');
var todoUi= require('./todoUi');//ui模型
var todo = new todoUi('#todoForm','#todoList');//数据模型

todo.init();
