!function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){var n,r,a={range:5,total:null,currentPage:1},o={init:function(t){if(!t.el)throw"Invalid root element.";if(!t.total)return;r=document.querySelector(t.el),n=Object.assign({},a,t);var e=u();i(e.start,e.end),r.addEventListener("click",function(t){var e,r=t.target;n.currentPage=r.dataset.page,i((e=u()).start,e.end)})}};function u(){var t,e,r=Number(n.currentPage),a=n.range,o=Math.ceil(a/2),u=n.total;return r<=o?(t=1,e=a):r>=u-o?(t=u-o-1,e=u):(t=r-o+1,e=r+o-1),{start:t,end:e}}function i(t,e){r.innerHTML="";for(var n=t;n<=e;n++){var a=document.createElement("button");a.innerText=n,a.dataset.page=n,r.appendChild(a)}}t.exports=o},function(t,e,n){n(0).init({el:"#DIV_LIST",total:20})}]);