var list = ['a1', 'a2', ['b1', 'b2', ['c1', 'c2', 'c3'], 'b3'], 'a3'];
var tmp = [];

while (tmp.length<3) {
    var html = '';
    var length = list.length;
    for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if(Object.prototype.toString.call(element).indexOf('Array')==-1){
            html = html + element;
            if(index == length-1){
                tmp[tmp.length] = html;
            }
            list.shift(1);
        }
    }
}

console.log(tmp)