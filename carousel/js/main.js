class Carousel {

    /**
     *
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {Object} options.toScroll  Nbr d'élements à faire défiler
     * @param {Object} options.visible  Nbr de posts visibles
     */
    constructor (element, options = {}){
        console.log("Hello.");
        this.element = element;
        this.options = Object.assign({},{
            toScroll: 0,
            visible: 1
        }, options);
        let children = [].slice.call(element.children);
        this.currentItem = 0;
        this.root = this.createDiv('carousel');
        this.container = this.createDiv('carousel_container');
        this.root.appendChild(this.container);
        this.element.appendChild(this.root);
        this.items = children.map((child) => {
            let item = this.createDiv('carousel_item');
            item.appendChild(child);
            this.container.appendChild(item);
            return item
        });
        this.setStyle();
        this.addNavigation();
    }

    /**
     * Applique les effets de style (dimensions) aux éléments.
     */
    setStyle() {
        let ratio = this.items.length / this.options.visible;
        this.container.style.width = (ratio * 100) + "%";
        this.items.forEach(item => item.style.width = ((100 / this.options.visible) / ratio) + "%");
    }

    /**
     * Permet d'appliquer les flèches au carousel pour la navigation
     */
    addNavigation(){
      let nextBtn = this.createDiv('carousel_next');
      let prevBtn = this.createDiv('carousel_prev');
      this.root.appendChild(nextBtn);
      this.root.appendChild(prevBtn);
      nextBtn.addEventListener('click', this.nextAction.bind(this));
      prevBtn.addEventListener('click', this.prevAction.bind(this));
      // On binde this pour que le this dans nextAction et prevAction fasse référence à la classe
    }

    nextAction(){
        this.goToItem(this.currentItem + this.options.toScroll);
    }

    prevAction(){
        this.goToItem(this.currentItem - this.options.toScroll);
    }

    goToItem(index){
        let translateX = index * (-100 / this.items.length);
        this.container.style.transform = 'translate3d(' + translateX + '%, 0, 0)' // Gère la partie changement d'images
        this.currentItem = index;
    }

    /**
     *
     * @param {string} className
     * @return {HTMLElement}
     */
    createDiv (className){
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div;
    }
}

document.addEventListener('DOMContentLoaded', function(){
    new Carousel(document.querySelector('#carousel0'), {
        toScroll: 1,
        visible: 3
    })
    new Carousel(document.querySelector('#carousel1'), {
        toScroll: 1,
        visible: 3
    })
});
