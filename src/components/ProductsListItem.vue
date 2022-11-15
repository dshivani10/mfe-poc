<template>
    <div @click="navigate(productItem.id)" class="products-list-item">
        <img class="product-image-list" :src="productItem.imageUrl" alt="product image" />
        <p class="product-tile">{{ productItem.name }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductsListItem',
    props: {
        productItem: Object
    },
    methods: {
        navigate(val) {
            this.$router.push(`/product/${val}`)
        }
    }
}
</script>