<template>
  <div class="product-page">
    <div class="image-carousel">
      <img class="product-image" :src="product.imageUrl" alt="product image">
    </div>
    <div class="product-details">
      <h3 class="product-name">{{product.name}}</h3>
      <h4 class="description-title">DESCRIPTION</h4>
      <p class="description-content">{{product.description}}</p>
      <div class="buttons-container">
        <button :disabled="product.wished" @click="wishlistItem(product.id)" class="add-button">
          <span>
            <img v-if="product.wished" class="button-icon" src="../assets/heart-red.png" alt="button-icon">
            <img v-else class="button-icon" src="../assets/heart.png" alt="button-icon">
          </span>
          <span v-if="product.wished">WISHLISTED</span>
          <span v-else>WISHLIST</span>
        </button>
        <a-tooltip placement="bottom">
          <template #title>"Add to Cart" service is under maintenance. Sorry for the inconvience.</template>
          <button class="add-button">
            <span>
              <img class="button-icon" src="../assets/cart.png" alt="button-icon">
            </span>
            <span>ADD TO CART</span>
          </button>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { HeartOutlined } from '@ant-design/icons-vue';
import { notification } from 'ant-design-vue';
import { h } from 'vue';

export default {
  name: 'ProductPage',
  computed:{
    ...mapState(['product'])
  },
  mounted(){
    this.getProductDetails(this.$route.params.id);
  },
  methods:{
    ...mapActions(['getProductDetails','addToWishlist']),
    wishlistItem(val){
      this.addToWishlist(val)
      notification.open({
        message: ':)',
        description: 'Product is successfully added to wishlish',
        style: {
          marginRight: '140px',
        },
        icon: () => h(HeartOutlined, { style: 'color: #a4c0c4' }),
      });
    }
  }
}
</script>

<style scoped>
.product-page{
  min-height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px 20px;
}
.product-image{
  width: 500px;
}
.product-details{
  text-align: left;
  margin-right: 50px;
}
.product-name, .description-content{
  margin: 0;
}
.description-title{
  margin: 50px 0 8px 0;
}
.buttons-container{
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
}
.add-button{
  padding: 10px;
  width: 48%;
  background-color: #a4c0c4;
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add-button:hover:enabled{
  border: 2px solid #808080;
}
.add-button:disabled{
  color: black;
  cursor: not-allowed;
  background-color: rgb(164, 192, 196,0.5);
}
.button-icon{
  height: 30px;
  margin-right: 20px;
}
</style>