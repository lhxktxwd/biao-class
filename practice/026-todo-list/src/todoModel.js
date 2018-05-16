function todoModel(maxId,todoList){
    this.maxId = maxId || 1;
    this.todoList = todoList || [];
}

todoModel.prototype.add = function (content){
    this.todoList.push({id:this.maxId,content:content});
    this.maxId++;
}

todoModel.prototype.remove = function (id){
    var todo_index = this.find_todo_by_id(id);
    if(todo_index == null)return;
    this.todoList.splice(todo_index,1);
}

todoModel.prototype.update = function(id,content){
    var todo_index = this.find_todo_by_id(id);
    if(todo_index == null)return;
    var todo = this.todoList[todo_index];
    todo.content = content;
}
todoModel.prototype.read = function(id){
    var todo_index = this.find_todo_by_id(id);
    if(todo_index == null)return;
    var todo = this.todoList[todo_index];
    return todo;
}

todoModel.prototype.find_todo_by_id = function (id){
    var result;
    this.todoList.forEach(function(todo,index){
        if(todo.id = id){
            result = index;
            return;
        }
    });
    return result;
}

module.exports = todoModel;