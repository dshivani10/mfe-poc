<template>
    <div class="cart-page">
        <h1>{{ cartConstant.title }}</h1>
        <h3>{{ cartConstant.content }}</h3>
        <h1>{{ cartConstant.message }}</h1>
    </div>
</template>

<script>
import AppConstants from '@/config/constants';

export default {
    name: 'CartPage',
    data() {
        return {
            cartConstant: AppConstants.CART
        }
    }
}
</script>