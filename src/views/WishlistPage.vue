<template>
    <div class="wishlist-page">
        <h1>{{ wishlistConstants.title }}</h1>
        <div class="products-grid" v-if="wishedlist.length">
            <div v-for="product in wishedlist" :key="product.id">
                <ProductsListItem :productItem="product" />
            </div>
        </div>
        <div v-else>
            <h3>{{ wishlistConstants.content }}</h3>
            <h1>{{ wishlistConstants.message }}</h1>
        </div>
    </div>
</template>

<script>
import ProductsListItem from '@/components/ProductsListItem.vue';
import { mapActions, mapState } from 'vuex';
import AppConstants from '@/config/constants';

export default {
    name: 'WishlistPage',
    components: {
        ProductsListItem,
    },
    data() {
        return {
            wishedlist: [],
            wishlistConstants: AppConstants.WISLIST
        }
    },
    methods: {
        ...mapActions(['getWishlishProducts'])
    },
    computed: {
        ...mapState(['errorMessage'])
    },
    mounted() {
        this.getWishlishProducts().then((res) => {
            if (this.errorMessage.message.length > 0 && this.errorMessage.function === 'getWishlishProducts') {
                // we can redirect to error page if needed
                console.log(this.errorMessage.message)
            }
            this.wishedlist = res
        })
    }
}
</script>