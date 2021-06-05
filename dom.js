class Dom {
    constructor() {
    }

    find(selector) {
        return document.querySelectorAll(selector)
    }

    style(node, property, value) {
        node.style[property] = value
    }

    each(nodeList, fn) {
        nodeList.forEach(node => {
            fn(node)
        })
    }
}

window.dom = new Dom()
