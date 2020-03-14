var app = new Vue({
    el : "#app",
    data : {
        product : "Socks",
        description : "I am just learning this thing",
        selectedVariant : 0,
        details : ['80% cool', 'not too bad', 'etc'],
        variants : [
            {
                variantId : 2234,
                variantColor : 'green',
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                variantQuantity: 0
            },
            {
                variantId : 2235,
                variantColor : 'blue',
                variantImage : './assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 10 
            }
        ],
        cart : 0
    },
    methods : {
        addToCart : function () {
            this.cart += 1;
        },
        updateProduct(index) {
            this.selectedVariant= index;
        }
    },
    computed : {
        image () {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        }
    }
})