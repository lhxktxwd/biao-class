var todoLabelApi = require('./todoLabelApi');
var util = require('./getOrSetFromDataUtil');

function todoLabelUi (list_id,add_id,from_id){
    this.el_list = document.querySelector(list_id);
    this.el_add =  document.querySelector(add_id);
    this.el_from =  document.querySelector(from_id);
    this._api = new todoLabelApi();
    this._util = new util(this.el_from);
}

todoLabelUi.prototype.init = init;
todoLabelUi.prototype.detect_from_event = detect_from_event;
todoLabelUi.prototype.detect_add_click = detect_add_click;
todoLabelUi.prototype.show_add_from = show_add_from;
todoLabelUi.prototype.hidden_add_from = hidden_add_from;
todoLabelUi.prototype.render = render;

function init(){
    this.detect_from_event();
    this.detect_add_click();
}

function detect_from_event(){
    var that = this;
    this.el_from.addEventListener('submit',function(e){
        e.preventDefault();
        var target = e.target
        var item = that._util.getFromData(that.el_from); // 拿到表单中的数据
        that._api.add(item);
        that.render();
        that.hidden_add_from();
    });
    this.el_from.addEventListener('click', function (e) {
        var is_cancel_btn = e.target.dataset.action == 'cancel' // 是否为取消按钮
        ;
        if (is_cancel_btn) {
          /*如果是取消按钮就隐藏表单*/
          that.hidden_add_from();
        }
    });
    this.el_list.addEventListener('click',function(e){
        var target = e.target
        , is_delete_btn = target.classList.contains('remove') // 是不是删除按钮
        , is_update_btn = target.classList.contains('update') // 是不是删除按钮
        ,id = target.closest('.label-item').dataset.id // 拿到所在行的id
        if(is_delete_btn){
            that._api.remove(id);
            that.render();
        }
    });
}

function detect_add_click(){
    var that = this;
    this.el_add.addEventListener('click',function(){
        that.show_add_from();
    });
}

function show_add_from(){
    this.el_from.hidden = false;
    this._util.clear();
}

function hidden_add_from(){
    this.el_from.hidden = true;
}

/**
 * 渲染分组列表
 * */
function render() {
    /*先拿到分类列表数据*/
    var labelList = this._api.list;
    var that = this;
    /*清空上次渲染*/
    this.el_list.innerHTML = '';
    /*通过循环分类数据生成每一条分类元素*/
    labelList.forEach(function (row) {
      var el = document.createElement('div'); // 创建元素
      el.classList.add('label-item', 'row'); // 加类
      el.dataset.id = row.id; // 将id存到元素上，方便后面调用
      el.innerHTML = `
      <div class="input">
          <input type="text" value="${row.content}" disabled>
      </div>
      <div class="todo-tool">
        <button class="update">更新</button>
        <button class="remove">删除</button>
      </div>
      `;
  
      that.el_list.appendChild(el); // 追加子元素
    });
  }

module.exports = todoLabelUi;
