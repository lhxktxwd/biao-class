var span_ist = document.querySelectorAll('span');
span_ist.forEach(function (span, index) {
    span.addEventListener('click', function (e) {
        if (e.target == this) {
            var li = span.closest('li');
            var ul = li.querySelector('ul');
            if (ul) {
                ul.hidden = !ul.hidden;
                var showClass = span.getAttribute('class').indexOf('fa fa-plus-square');
                if (showClass>-1) {
                    span.setAttribute('class', 'fa fa-minus-square')
                } else {
                    span.setAttribute('class', 'fa fa-plus-square')
                }
            }
        }
    });
})