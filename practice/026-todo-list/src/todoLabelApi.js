function todoLabelApi(max_id,list){
    this.max_id = max_id || 1;
    this.list = list || [];
}

todoLabelApi.prototype.add = add;
todoLabelApi.prototype.remove = remove;
todoLabelApi.prototype.update = update;
todoLabelApi.prototype.read = read;
todoLabelApi.prototype.findIndex = findIndex;


function add(item) {
    var max_id = this.max_id;
    item.id = max_id++;
    this.list.push(item);
    this.max_id = max_id;
}
function remove(id) {
    var index = this.list.splice(this.findIndex(id),1);
}
function update(id,content) {
    var index = this.findIndex(id);
    var list = this.list;
    list[index] = content;
}
function read(id) {
    if(!id)
        return;
    return  this.list[this.findIndex(id)];
}

function findIndex(id){
   return this.list.forEach(function(item,index){
        if(item.id = id ){
            return index;
        }
    });
}

module.exports = todoLabelApi;