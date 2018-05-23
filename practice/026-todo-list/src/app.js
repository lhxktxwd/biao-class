var todoApi = require('./todoApi');
var todoUi= require('./todoUi');//ui模型
var labelUi = require('./todoLabelUi');
var todo = new todoUi('#todoForm','#todoList');//数据模型
var label = new labelUi('#labelList','#labelAdd','#labelFrom')
todo.init();
label.init(todo.setfilter.bind(todo));
