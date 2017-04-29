var expands = document.querySelectorAll('[data-expand]');
expands.forEach(function (e) {
    var toExpand = document.getElementById(e.getAttribute('data-expand'));
    toExpand.classList.add('expandable');
    e.onclick = function (event) {
        toExpand.classList.add('expanded');
        this.setAttribute('style', 'display: none')
    };
});