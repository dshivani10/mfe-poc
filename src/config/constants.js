const AppConstants = {
    HEADER_TITLE: 'Pottery Barn',
    WISLIST: {
        title: 'Your Wishlist',
        content: 'Not yet wishlisted any product. Please add products you like to your wishlish.',
        message: 'Enjoy Shopping !!',
        addTo: {
            buttonTextEnabled: 'WISHLIST',
            buttonTextDisbaled: 'WISHLISTED',
            success: {
                title: ':)',
                message: 'Product is successfully added to wishlish'
            },
            fail: {
                title: ':(',
                message: 'Failed to add product to wishlish'
            },
            tooltip: ''
        }
    },
    CART: {
        title: 'Your Cart',
        content: 'Your cart is empty. Please add products to your cart.',
        message: 'Enjoy Shopping !!',
        addTo: {
            buttonTextEnabled: 'ADD TO CART',
            success: {
                title: ':)',
                message: 'Product is successfully added to cart'
            },
            fail: {
                title: ':(',
                message: 'Failed to add product to cart'
            },
            tooltip: '"Add to Cart" service is under maintenance. Sorry for the inconvience.'
        }
    }
}

export default AppConstants;