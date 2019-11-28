(function () {
    var scrollY = function () {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    var fixedElements = document.querySelectorAll('[data-fixed]')
    for (var i = 0; i < fixedElements.length; i++) {
        (function (element) {
            var widthAndPos = element.getBoundingClientRect()
            var offset = parseInt(element.getAttribute('data-offset') || 0, 10)
            if (element.getAttribute('data-constraint')) {
                var constraint = document.querySelector(element.getAttribute('data-constraint'))
            } else {
                var constraint = document.body;
            }

            var constraintReact = constraint.getBoundingClientRect()
            var constraintBottom = constraintReact.top + scrollY() + constraintReact.height - offset - widthAndPos.height

            var top = widthAndPos.top + scrollY()
            var width = widthAndPos.width

            var divTop = document.createElement('div')
            divTop.style.width = widthAndPos.width + "px"
            divTop.style.height = widthAndPos.height + "px"


            var onScroll = function () {
                if(scrollY() > constraintBottom && element.style.position !== 'absolute'){
                    element.style.position = 'absolute'
                    element.style.bottom = '0'
                    element.style.top = 'auto'
                } else if (scrollY() > top - offset && scrollY() < constraintBottom &&  element.style.position !== 'fixed') {
                    element.classList.add('fixed')
                    element.style.position = 'fixed'
                    element.style.top = offset + "px"
                    element.style.bottom = 'auto'
                    element.style.width = width + "px"
                    element.parentNode.insertBefore(divTop, element)
                } else if (scrollY() < top - offset && element.style.position !== 'static') {
                    element.classList.remove('fixed')
                    element.style.position = 'static'
                    if(element.parentNode.contains(divTop)){
                        element.parentNode.removeChild(divTop);
                    }
                }
            }

            var onResize = function (e) {
                console.log("resize")
                element.style.width = "auto"
                element.classList.remove('fixed')
                divTop.style.display = "none"

                widthAndPos = element.getBoundingClientRect()
                top = widthAndPos.top + scrollY()
                divTop.style.width = widthAndPos.width + "px"
                divTop.style.height = widthAndPos.height + "px"
                divTop.style.display = "block"
                onScroll()
            }

            window.addEventListener('scroll', onScroll)
            window.addEventListener('resize', onResize)
        })(fixedElements[i])
    }


})()