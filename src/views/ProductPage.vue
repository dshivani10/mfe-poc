<template>
  <div class="product-page">
    <div class="image-carousel">
      <img class="product-image" :src="product.imageUrl" alt="product image">
    </div>
    <div class="product-details">
      <h3 class="product-name">{{ product.name }}</h3>
      <h4 class="description-title">DESCRIPTION</h4>
      <p class="description-content">{{ product.description }}</p>
      <div class="buttons-container">
        <button :disabled="product.wished" @click="wishlistItem(product.id)" class="add-button">
          <span>
            <img v-if="product.wished" class="button-icon" src="../assets/heart-red.png" alt="button-icon">
            <img v-else class="button-icon" src="../assets/heart.png" alt="button-icon">
          </span>
          <span v-if="product.wished">{{ wishlistConstants.buttonTextDisbaled }}</span>
          <span v-else>{{ wishlistConstants.buttonTextEnabled }}</span>
        </button>
        <a-tooltip placement="bottom">
          <template #title>{{ cartConstants.tooltip }}</template>
          <button class="add-button">
            <span>
              <img class="button-icon" src="../assets/cart.png" alt="button-icon">
            </span>
            <span>{{ cartConstants.buttonTextEnabled }}</span>
          </button>
        </a-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons-vue';
import { notification } from 'ant-design-vue';
import { h } from 'vue';
import AppConstants from '@/config/constants';

export default {
  name: 'ProductPage',
  computed: {
    ...mapState(['product', 'errorMessage'])
  },
  data() {
    return {
      wishlistConstants: AppConstants.WISLIST.addTo,
      cartConstants: AppConstants.CART.addTo
    }
  },
  mounted() {
    this.getProductDetails(this.$route.params.id).then(() => {
      if (this.errorMessage.message.length > 0 && this.errorMessage.function === 'getProductDetails') {
        // we can redirect to error message if needed
        console.log(this.errorMessage.message);
      }
    })
  },
  methods: {
    ...mapActions(['getProductDetails', 'addToWishlist']),
    wishlistItem(val) {
      this.addToWishlist(val)
      if (this.errorMessage.message.length > 0 && this.errorMessage.function === 'addToWishlist') {
        notification.open({
          message: this.wishlistConstants.fail.title,
          description: this.wishlistConstants.fail.message,
          style: {
            marginRight: '140px',
          },
          icon: () => h(DislikeOutlined, { style: 'color: red' }),
        });
      } else {
        notification.open({
          message: this.wishlistConstants.success.title,
          description: this.wishlistConstants.success.message,
          style: {
            marginRight: '140px',
          },
          icon: () => h(LikeOutlined, { style: 'color: #a4c0c4' }),
        });
      }
    }
  }
}
</script>