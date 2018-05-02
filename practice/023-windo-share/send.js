(function (){
    'use strict'
    window.send = function (method,url,callback) {
        var http = new XMLHttpRequest();
        
        http.open(method,url);
    
        http.addEventListener('load', function () {
            callback(this.responseText);
        });
        
        http.send();
    }
}());