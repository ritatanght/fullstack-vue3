import { createRouter, createWebHistory } from "vue-router";
import CartList from "../components/cart/CartList.vue";
import ProductList from "../components/product/ProductList.vue";
import NotFound from "../components/NotFound.vue";
import ProductItem from "../components/product/ProductItem.vue";
import LoginBox from "../components/login/LoginBox.vue";

const router = createRouter({
  history: createWebHistory(), // in HTML5 history mode, (no hashes in URL)
  routes: [
    {
      path: "/products",
      component: ProductList,
    },
    {
      path: "/products/:id",
      component: ProductItem,
      props: true, // enable props, so we can access id in ProductItem
    },
    { path: "/cart", component: CartList },
    { path: "/", redirect: "/products" },
    { path: "/login", component: LoginBox },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

export default router;
