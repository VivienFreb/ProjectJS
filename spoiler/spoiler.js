var button = document.querySelector('.spoiler-container button')
button.addEventListener('click', function(){
    this.nextElementSibling.classList.add('visible')
    button.parentNode.removeChild(this)
})