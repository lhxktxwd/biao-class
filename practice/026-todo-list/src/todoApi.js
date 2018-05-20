function TodoModel(todoList,maxId){
    this.maxId = maxId || 1;
    this.todoList = todoList || [];
}

//增加数据
TodoModel.prototype.add = function (content){
    this.todoList.push({id:this.maxId,content:content});
    this.maxId++;
}

//删除数据
TodoModel.prototype.remove = function (id){
    var todo_index = this.find_todo_by_id(id);
    if(todo_index == null)return;
    this.todoList.splice(todo_index,1);
}

//修改数据
TodoModel.prototype.update = function(id,content){
    var todo_index = this.find_todo_by_id(id);
    if(todo_index == null)return;
    var todo = this.todoList[todo_index];
    todo.content = content;
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