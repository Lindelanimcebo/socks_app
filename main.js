var app = new Vue({
    el : "#app",
    data : {
        product : "Socks",
        description : "I am just learning this thing",
        image : "./assets/vmSocks-green-onWhite.jpg",
        inStock : false,
        details : ['80% cool', 'not too bad', 'etc'],
        variants : [
            {
                variantId : 2234,
                variantColor : 'green',
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId : 2235,
                variantColor : 'blue',
                variantImage : './assets/vmSocks-blue-onWhite.jpg'
            }
        ],
        cart : 0
    },
    methods : {
        addToCart : function () {
            this.cart += 1;
        },
        updateProduct(variantImage) {
            this.image = variantImage;
        }
    }
})