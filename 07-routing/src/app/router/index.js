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
      beforeEnter: (to, from, next) => {
        const id = to.params.id;
        if (![1, 2, 3, 4].includes(Number(id))) next("/not-found");
        else next();
      },
    },
    { path: "/cart", component: CartList },
    { path: "/", redirect: "/products" },
    {
      path: "/login",
      component: LoginBox,
      beforeEnter: (to, from, next) => {
        const token = localStorage.getItem("token");
        if (token) next("/products");
        else next();
      },
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

/* global route guard
1. to - the target route object.
2. from - the current route object.
3. next() - the function that must be invoked to complete routing the user */
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  // forces the user to the /login route.
  if (!token && to.path !== "/login") next("/login");
  else next();
});

export default router;
