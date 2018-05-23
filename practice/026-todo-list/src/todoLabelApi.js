function todoLabelApi(max_id,list){
    this.max_id = max_id || 2;
    this.list = list || [{id:1,content:'嘿嘿'},{id:2,content:'hahas'}];
}

todoLabelApi.prototype.add = add;
todoLabelApi.prototype.remove = remove;
todoLabelApi.prototype.update = update;
todoLabelApi.prototype.read = read;
todoLabelApi.prototype.findIndex = findIndex;


function add(item) {
    var max_id = this.max_id;
    item.id = ++max_id;
    this.list.push(item);
    this.max_id = max_id;
}
function remove(id) {
    var index = this.list.splice(this.findIndex(id),1);
}
function update(item) {
    var index = this.findIndex(item.id);
    var list = this.list;
    list[index] = item;
}
function read(id) {
    if(!id)
        return;
    return  this.list[this.findIndex(id)];
}

function findIndex(id){
   return this.list.findIndex(function(item,index){
        return item.id == id 
    });
}

module.exports = todoLabelApi;