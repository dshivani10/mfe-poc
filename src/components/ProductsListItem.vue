<template>
    <div @click="navigate(productItem.id)" class="products-list-item">
        <img class="product-image" :src="productItem.imageUrl" alt="product image" />
        <p class="product-tile">{{productItem.name}}</p>
    </div>
</template>

<script>
export default {
  name: 'ProductsListItem',
  props:{
    productItem: Object
  },
  methods:{
    navigate(val){
        this.$router.push(`/product/${val}`)
    }
  }
}
</script>

<style scoped>
.products-list-item{
    margin: 20px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: 2px solid transparent;
}
.products-list-item:hover{
    border: 2px solid #a4c0c4;
    border-radius: 10px;
}
.product-image{
    height: 300px;
}
.product-tile{
    text-align: left;
    font-size: 17px;
    font-weight: 500;
    margin: 10px 0;
}
</style>