(function () {
    var showTab = function (a) {
        var li = a.parentNode;
        var div = a.parentNode.parentNode.parentNode

        if (li.classList.contains('active')) {
            return false
        }

        div.querySelector('.tabs .active').classList.remove('active')
        li.classList.add('active')

        div.querySelector('.tab-content.active').classList.remove('active')
        div.querySelector(a.getAttribute('href')).classList.add('active')
    }

    var tabs = document.querySelectorAll('.tabs a')
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener('click', function (e) {
            showTab(this)
        })
    }

// Permet de récupérer l'ancre qui est présente dans l'url pour lui appliquer directement la classe active.
    var hash = window.location.hash
    var a = document.querySelector('a[href="' + hash + '"]')
// Si l'ancre dans l'url correspond bien a quelque chose (!== null) et qu'elle ne possède pas la classe active, alors on
// effectue l'action permettant de lui attribuer cette classe
    if (a !== null && !a.parentNode.classList.contains('active')) {
        showTab(a)
    }
})()