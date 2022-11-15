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
  components: {
    ProductsListItem,
  },
  computed: {
    ...mapState(['products_list'])
  },
  methods: {
    ...mapActions(['getProductsList'])
  },
  watch: {
    $route(newRoute) {
      this.getProductsList(newRoute.params.slug)
    }
  },
  mounted() {
    this.getProductsList(this.$route.params.slug)
  },
}
</script>