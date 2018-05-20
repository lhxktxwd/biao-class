var TodoModelApi = require('./todoApi');

function TodoUi(from_id,list_id) {
    this.el_from = document.querySelector(from_id);
    this.el_list = document.querySelector(list_id);
    this._api = new TodoModelApi();
    this.data = {};
};

TodoUi.prototype.init = init;
TodoUi.prototype.getFromData = getFromData;
TodoUi.prototype.setFromData = setFromData;
TodoUi.prototype.detect_add = detect_add;
TodoUi.prototype.detect_click = detect_click;
TodoUi.prototype.render = render;
TodoUi.prototype.clear = clear;

function init(){
    this.detect_add();
    this.render();
    this.detect_click();
}

//监听添加事件
function detect_add() {
    var that = this;
    var add_data = {};
    this.el_from.addEventListener('submit',function(e){
        e.preventDefault();
        var list = that.el_from.querySelectorAll('[name]');
        list.forEach(input => {
            var key = input.name;
            var value = input.value;
            add_data[key] = value;
        });
        if(add_data['id'] != ''){
            that._api.update(add_data['id'],add_data['content']);
        }else{
            that._api.add(add_data['content']);
        }
        that.clear();
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
                that.setFromData(item_data);
            }
    });
}

//清除输入框内容
function clear(){
    var list = this.el_from.querySelectorAll('[name]');
    list.forEach(input => {
        input.value = '';
    });
}

//获取from数据-- 用于添加事件
function getFromData() {
    var data = {};
    e.preventDefault();
    var list = el_from.querySelectorAll('[name]');
    list.forEach(input => {
        var key = input.name;
        var value = input.value;
        data[key] = value;
    });
    return data;
}

//填充from数据-- 用于修改事件
function setFromData(data) {
    for (var key in data) {
        var value = data[key];
        var el = this.el_from.querySelector(`[name=${key}]`);
        if(!el)continue;
        if(typeof value == 'boolean'){
            el.checked = value;
        }else{
            el.value = value;
        }
    }
}

//渲染数据
function render(){
    var todoList = this._api.todoList;
    var html = '';
    this.el_list.innerHTML = '';
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

module.exports = TodoUi;
