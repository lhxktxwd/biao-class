var todoLabelApi = require('./todoLabelApi');
var Util = require('./getOrSetFormDataUtil');

function todoLabelUi (list_id,add_id,from_id){
    this.el_list = document.querySelector(list_id);
    this.el_add =  document.querySelector(add_id);
    this.el_form =  document.querySelector(from_id);
    this._api = new todoLabelApi();
    this._util = new Util();
}

todoLabelUi.prototype.init = init;
todoLabelUi.prototype.detect_from_event = detect_from_event;
todoLabelUi.prototype.detect_add_click = detect_add_click;
todoLabelUi.prototype.show_add_from = show_add_from;
todoLabelUi.prototype.hidden_add_from = hidden_add_from;
todoLabelUi.prototype.render = render;
todoLabelUi.prototype.reset_from_position = reset_from_position;

function init(){
    this.detect_from_event();
    this.detect_add_click();
    this.render();
}

function detect_from_event(){
    var that = this;
    this.el_form.addEventListener('submit',function(e){
        e.preventDefault();
        var target = e.target
        var item = that._util.getFormData(that.el_form); // 拿到表单中的数据
        if(item.id){
            that._api.update(item);
        }else{
            that._api.add(item);
        }
        that.render();
        that.hidden_add_from();
    });

    this.el_form.addEventListener('click', function (e) {
        var is_cancel_btn = e.target.dataset.action == 'cancel'; // 是否为取消按钮
        if (is_cancel_btn) {
          /*如果是取消按钮就隐藏表单*/
          that.hidden_add_from();
          that.reset_from_position();
        }
    });

    this.el_list.addEventListener('click',function(e){
        var target = e.target
        , label_item = target.closest('.label-item')
        , is_delete_btn = target.classList.contains('remove') // 是不是删除按钮
        , is_update_btn = target.classList.contains('update'); // 是不是删除按钮
        if(label_item){
            var id = label_item.dataset.id // 拿到所在行的id
        }else{
            return;
        }
        if(is_delete_btn){
            that._api.remove(id);
            that.hidden_add_from();
            that.render();
        }
        if(is_update_btn){
            that.show_add_from();
            var item = that._api.read(id);
            that._util.setFormData(that.el_form,item);
            label_item.insertAdjacentElement('afterend',that.el_form);
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
    this.el_form.hidden = false;
    this._util.clear(this.el_form);
}

function hidden_add_from(){
    this.el_form.hidden = true;
}

function reset_from_position(){
    this.el_list.insertAdjacentElement('beforeend',this.el_form);
    this._util.clear(this.el_form);
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
    this.reset_from_position();
  }

module.exports = todoLabelUi;
