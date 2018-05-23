function getOrSetFormDataUtil(){
    this.getFormData = getFormData;
    this.setFormData = setFormData;
    this.clear = clear;
}

//获取from数据-- 用于添加事件
function getFormData(el_form) {
    var data = {};
    var list = el_form.querySelectorAll('[name]');
    list.forEach(input => {
        var key = input.name;
        var value = input.value;
        data[key] = value;
    });
    return data;
}

//填充from数据-- 用于修改事件
function setFormData(el_form,data) {
    for (var key in data) {
        var value = data[key];
        var el_input = el_form.querySelector(`[name=${key}]`);
        if(!el_input)continue;
        if(typeof value == 'boolean'){
            el_input.checked = value;
        }else{
            el_input.value = value;
        }
    }
}

//清除输入框内容
function clear(el_form){
    var list = el_form.querySelectorAll('[name]');
    list.forEach(input => {
        input.value = '';
    });
}

module.exports = getOrSetFormDataUtil;