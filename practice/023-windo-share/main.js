var ElForm = document.querySelector('form');

ElForm.addEventListener('submit',function(e){
    e.preventDefault();
    var ElInput = document.querySelector('input');
    var kwd = ElInput.value;
    
    send('get','https://api.github.com/repositories?q='+kwd,success)
});

function success(data) {
    console.log(data);
}


