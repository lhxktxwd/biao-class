var config,
    listDom, 
    defaultConfig = {
    range:5,
    total:null,
    currentPage:1
}

var output = { init,show,hide};

function init(userConfig) {
    if(!userConfig.el){
        throw 'Invalid root element.';
    }
    if(!userConfig.total){
       return;
    }
    listDom = document.querySelector(userConfig.el);
    config = Object.assign({},defaultConfig,userConfig);
    changePage();
    bindClickEvent();
};

function bindClickEvent(){
    listDom.addEventListener('click',function(e){
        var target = e.target;
        config.currentPage =  target.dataset.page;
        changePage();
    });
}


function calculationPage(){
    var currentPage = Number(config.currentPage);
    var start ,end , 
        range = config.range,
        midNumber = Math.ceil(range/2), 
        total = config.total;
    if(currentPage <= midNumber){
        start = 1;
        end = range;
    }else if(currentPage >= total - midNumber){
        start = total - midNumber - 1;
        end = total;
    }else {
        start = currentPage - midNumber + 1;
        end = currentPage + midNumber -1;
    }
    return {start,end}
}

function changePage() {
   var obj =  calculationPage();
   if (config.on_page_change)
    config.on_page_change(config.currentPage);
    renderPageList(obj.start,obj.end);
}


function renderPageList(start,end) {
    var cuurntPage = config.currentPage;
    listDom.innerHTML = '';
    for(var i = start;i <= end; i++){
        var btnDom = document.createElement('button');
        btnDom.innerText = i;
        btnDom.dataset.page = i;
        if(i == cuurntPage){
            btnDom.classList.add('active');
        }
        listDom.appendChild(btnDom);
    }
}

function show(){
    listDom.hidden = false;
}

function hide(){
    listDom.hidden = true;
}

module.exports = output;


