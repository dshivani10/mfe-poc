<template>
    <div class="wishlist-page">
        <h1>Your wishlist</h1>
        <div class="products-grid" v-if="wishedlist.length">
            <div v-for="product in wishedlist" :key="product.id">
                <ProductsListItem :productItem="product" />
            </div>
        </div>
        <div v-else>
            <h3>Not yet wishlisted any product. Please add products you like to your wishlish.</h3>
            <h1>Enjoy Shopping !!</h1>
        </div>
    </div>
</template>

<script>
import ProductsListItem from '@/components/ProductsListItem.vue';
import { mapActions } from 'vuex';

export default{
    name:'WishlistPage',
    components:{
        ProductsListItem,
    },
    data(){
        return{
            wishedlist:[]
        }
    },
    methods:{
        ...mapActions(['getWishlishProducts'])
    },
    mounted(){
        this.getWishlishProducts().then((res) => {
            this.wishedlist = res
        })
    }
}
</script>

<style scoped>
.wishlist-page{
    margin-top: 40px;
    min-height: 90vh;
}
.products-grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>