function TodoModel(todoList,maxId){
    this.maxId = maxId || 0;
    this.todoList = todoList || [{id:1,content:'嘿嘿',label:1},{id:2,content:'嘿嘿222',label:2}];
}

//增加数据
TodoModel.prototype.add = function (item){
    this.todoList.push({id:++this.maxId,content:item.content});
}

//删除数据
TodoModel.prototype.remove = function (id){
    var todo_index = this.find_todo_by_id(id);
    if(todo_index == null)return;
    this.todoList.splice(todo_index,1);
}

//修改数据
TodoModel.prototype.update = function(item){
    var todo_index = this.find_todo_by_id(item.id);
    if(todo_index == null)return;
    this.todoList[todo_index] = item;
}

//读取数据
TodoModel.prototype.read = function(id){
    var todo_index = this.find_todo_by_id(id);
    if(todo_index == null)return;
    var todo = this.todoList[todo_index];
    return todo;
}

//获取数据在list中的位置
TodoModel.prototype.find_todo_by_id = function (id){
    var result;
    this.todoList.forEach(function(todo,index){
        if(todo.id == id){
            result = index;
            return;
        }
    });
    return result;
}

module.exports = TodoModel;