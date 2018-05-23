var TodoModelApi = require('./todoApi');
var Util = require('./getOrSetFormDataUtil');

function TodoUi(from_id,list_id) {
    this.el_form = document.querySelector(from_id);
    this.el_list = document.querySelector(list_id);
    this._api = new TodoModelApi();
    this._util = new Util();
    this.data = {};
    this.filter = null;
};

TodoUi.prototype.init = init;
TodoUi.prototype.detect_addOrUpdate = detect_addOrUpdate;
TodoUi.prototype.detect_click = detect_click;
TodoUi.prototype.render = render;
TodoUi.prototype.setfilter = setfilter;
TodoUi.prototype.filtering = filtering;

function init(){
    this.render();
    this.detect_click();
    this.detect_addOrUpdate();
}

//监听添加或修改事件
function detect_addOrUpdate() {
    var that = this;
    var add_data = {};
    this.el_form.addEventListener('submit',function(e){
        e.preventDefault();
        var list = that.el_form.querySelectorAll('[name]');
        list.forEach(input => {
            var key = input.name;
            var value = input.value;
            add_data[key] = value;
        });
        if(add_data['id'] != ''){
            that._api.update(add_data);
        }else{
            that._api.add(add_data);
        }
        that._util.clear(that.el_form);
        that.render();
    });
}

//监听修改和删除事件
function detect_click() {
    var that = this;
    this.el_list.addEventListener('click', function (e) {
        var target = e.target // 点击源
            , todo_item = target.closest('.todo-item') // 被点击的.todo-item，没有这个元素，就拿不到id
            , id = todo_item.dataset.id // 拿到id
            , is_remove_btn = target.classList.contains('remove') // 点击的是否为删除按钮
            , is_update_btn = target.classList.contains('update') // 点击的是否为更新按钮
            ;

        if (is_remove_btn) {
                /*找到按钮所在的.todo-item，因为.todo-item上有当前任务的id*/
                that._api.remove(id);
                that.render();
            } else if (is_update_btn) {
                /*通过id得到相对应的那条数据对象 {id: xxx, title: '吃饭', ... }*/
                var item_data = that._api.read(id);
                /*填充表单*/
                that._util.setFormData(that.el_form,item_data);
            }
    });
}

//渲染数据
function render(){
    var todoList = this._api.todoList;
    var html = '';
    this.el_list.innerHTML = '';
    if(this.filter){
        todoList = todoList.filter(this.filtering.bind(this));
    }
    todoList.forEach(function(item){
        var el = document.createElement('div');
        el.classList.add('row', 'todo-item');
        el.dataset.id = item.id;
        el.innerHTML = `
            <div class="todo-checkbox col">
                <input type="checkbox" ${item.checked||''}>
            </div>
            <div class="todo-title col">${item.content}</div>
            <div class="todo-tool col">
                <button class="update">update</button>
                <button class="remove">delete</button>
            </div>
        `;
        this.el_list.appendChild(el);
    }.bind(this));
}

function setfilter(filter){
    this.filter = filter;
    this.render();
};

function filtering(item){
    var  filter =  this.filter;
    var flag = true;
    for (const key in filter) {
        if(!item[key] || item[key] != filter[key]){
         flag = false;
         return false;
        } 
    }
    return flag;
 }

module.exports = TodoUi;
