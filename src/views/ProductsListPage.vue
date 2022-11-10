<template>
    <div class="products-list-page">
      <div v-for="product in products_list" :key="product.id">
        <ProductsListItem :productItem="product" />
      </div>
    </div>
</template>

<script>
import ProductsListItem from '@/components/ProductsListItem.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'ProductsListPage',
  components:{
    ProductsListItem,
  },
  computed:{
    ...mapState(['products_list'])
  },
  methods:{
    ...mapActions(['getProductsList'])
  },
  mounted(){
    this.getProductsList(this.$route.params.slug)
  },
  updated(){
    this.getProductsList(this.$route.params.slug)
  }
}
</script>

<style scoped>
.products-list-page{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 40px;
  min-height: 90vh;
}
</style>