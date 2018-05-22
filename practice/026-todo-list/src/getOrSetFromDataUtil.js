function getOrSetFromDataUtil(el_from){
    this.el_from = el_from;
    this.getFromData = getFromData;
    this.setFromData = setFromData;
    this.clear = clear;
}

//获取from数据-- 用于添加事件
function getFromData() {
    var data = {};
    var list = this.el_from.querySelectorAll('[name]');
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

//清除输入框内容
function clear(){
    var list = this.el_from.querySelectorAll('[name]');
    list.forEach(input => {
        input.value = '';
    });
}

module.exports = getOrSetFromDataUtil;