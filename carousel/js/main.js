class Carousel {

    /**
     *
     * @param {HTMLElement} element
     * @param {Object} options
     * @param {Object} options.ToScroll  Nbr d'élements à faire défiler
     * @param {Object} options.Visible  Nbr de posts visibles
     */
    constructor (element, options = {}){
        console.log("Hello.");
        this.element = element;
        this.options = Object.assign({},{
            toScroll: 0,
            visible: 1
        }, options);
        let children = [].slice.call(element.children);
        let root = this.createDiv('carousel');
        this.container = this.createDiv('carousel__container');
        root.appendChild(this.container);
        this.element.appendChild(root);
        this.items = children.map((child) => {
            let item = this.createDiv('carousel__item');
            item.appendChild(child);
            this.container.appendChild(item);
            return item
        });
        this.setStyle();
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
        toScroll: 3,
        visible: 3
    })
});
