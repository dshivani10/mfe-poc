import {createStore} from "vuex";
import productsData from './db/productsData.json';

export default createStore({
  state: {
    title:"Pottery Barn",
    product:{},
    products_list:[],
    wishlist_count:0,
    cart_count:0,
    wishlist:[]
  },
  mutations: {
    ASSIGN_PRODUCT(state,payload){
      state.product = payload
    },
    ASSIGN_LIST(state,payload){
      state.products_list = payload
    },
    ADD_TO_WISHLIST(state,payload){
      state.wishlist = [...state.wishlist,payload]
      state.wishlist_count++
      state.product.wished = true
    }
  },
  actions: {
    getProductDetails({state,commit},payload){
      let products = productsData.data;
      let productItem = products.find((product) => {
        return product.id === payload
      })
      if(productItem){
        if(state.wishlist.indexOf(payload)<0){
          commit('ASSIGN_PRODUCT',{...productItem,wished:false})
        }
        else{
          commit('ASSIGN_PRODUCT',{...productItem,wished:true})
        }
      }
    },
    getProductsList({commit},payload){
      let [slug, cat_slug='', sub_cat_slug=''] = payload;
      let products = productsData.data;
      let filteredList = []
      if(slug.length && cat_slug.length && sub_cat_slug.length){
        filteredList = products.filter((product) => {
          return product.slug === slug && product.cat_slug === cat_slug && product.sub_cat_slug === sub_cat_slug
        })
      } else if(slug.length && cat_slug.length){
        filteredList = products.filter((product) => {
          return product.slug === slug && product.cat_slug === cat_slug
        })
      } else if(slug.length){
        filteredList = products.filter((product) => {
          return product.slug === slug
        })
      } else{
        filteredList = products
      }
      if(filteredList){
        commit('ASSIGN_LIST',filteredList)
      }
    },
    addToWishlist({state,commit},payload){
      if(state.wishlist.indexOf(payload)<0){
        commit('ADD_TO_WISHLIST',payload)
      }
    },
    getWishlishProducts({state}){
      let filteredList = []
      let products = productsData.data;
      filteredList = products.filter((product) => {
        return (state.wishlist.indexOf(product.id)>=0)
      })
      return filteredList
    }
  },
  getters: {
  },
});