var pagination = require('../src/plugin/pagination/pagination');

var store = {'currentPage':1,'keyword':null};

var config = {el:'#pagination',range:10,total:20,'on_page_change':on_page_change}

var $searchInput = document.querySelector('#search-input');
var $searchButton = document.querySelector('#search-button');
var $renderList = document.querySelector('#render-list');
var $searchForm = document.querySelector('#search-form');

pagination.init(config);

$searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    store.keyword = $searchInput.value;
    MyAjax(store.keyword,store.currentPage);
});

function on_page_change (currentPage){
    store.currentPage = currentPage;
    MyAjax(store.keyword,currentPage);
}

function MyAjax(keyword,page){
    if(!keyword||!page){
        return;
    }
    var limit = 10;

    var http = new XMLHttpRequest();

    http.open('get', 'https://api.github.com/search/users?q=' + keyword + '&page=' + page + '&per_page=' + limit);

    http.send();

    http.addEventListener('load',function(){
        var json = JSON.parse(http.responseText).items;
        renderGithubList(json);
    });
}

function renderGithubList(json){
    var renderHtml = '';
    console.log(json);
    for(var i=0;i<json.length;i++){
        var obj = json[i];
        var html = 
        `
            <div class="user-box">
                <div class="avatar">
                    <a target="_blank" href="${obj.html_url}"><img src="${obj.avatar_url}"></a>
                </div>
                <div class="user-info">
                    <div class='user-title'>${obj.login}</div>
                </div>
            </div>
        `;
        renderHtml += html;
    }
    $renderList.innerHTML = renderHtml;
    pagination.show();
}