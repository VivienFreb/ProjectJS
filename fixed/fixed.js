(function(){
    var scrollY = function(){
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    var element = document.querySelector('.menu')
    var widthAndPos = element.getBoundingClientRect()

    var top = widthAndPos.top + scrollY()
    var width = widthAndPos.width
    console.log(top);

    var onScroll = function(e){
        var hasFixed = element.classList.contains('fixed')
        if(scrollY() >  top && !hasFixed){
            element.classList.add('fixed')
            element.style.width = width + "px"
        }else if (scrollY() < top && hasFixed){
            element.classList.remove('fixed')
        }
    }

    window.addEventListener('scroll', onScroll)
})()