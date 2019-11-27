// // Première version simpliste, qui demande de faire plusieurs balises en html
// var button = document.querySelector('.spoiler-container button')
// button.addEventListener('click', function(){
//     this.nextElementSibling.classList.add('visible')
//     button.parentNode.removeChild(this)
// })

// Cette version permet de simplement donner une classe "spoiler" a un element pour le cacher.
(function(){
    var createSpoilerButton = function(element){
        var button = document.createElement('button')
        var spoilerContent = document.createElement('span')

        spoilerContent.className = 'spoiler-content'
        spoilerContent.innerHTML = element.innerHTML

        button.textContent = 'Afficher le spoiler'
        element.innerHTML = ''

        element.appendChild(button)
        element.appendChild(spoilerContent)

        button.addEventListener('click', function(){
            this.nextElementSibling.classList.add('visible')
            button.parentNode.removeChild(this)
        })

    }

    var spoilers = document.querySelectorAll('.spoiler')
    for (var i = 0; i < spoilers.length; i++){
        createSpoilerButton(spoilers[i])
    }
})()


