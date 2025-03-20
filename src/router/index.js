import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductPage from '../views/ProductPage.vue';
import CartPage from '../views/CartPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductPage },
  { path: '/cart', component: CartPage } // 👈 Nueva ruta para la página del carrito
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
