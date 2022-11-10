import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import ProductsListPage from './views/ProductsListPage.vue'
import ProductPage from './views/ProductPage.vue'
import WishlistPage from './views/WishlistPage.vue'
import CartPage from './views/CartPage.vue'

const routes = [
    {
        path:'/',
        component:HomePage
    },
    {
        path:'/products/:slug+',
        component:ProductsListPage
    },
    {
        path:'/product/:id',
        component:ProductPage
    },
    {
        path:'/user/cart',
        component:CartPage
    },
    {
        path:'/user/wishlist',
        component:WishlistPage
    }
]
const router = createRouter({ history: createWebHistory(), routes })
export default router