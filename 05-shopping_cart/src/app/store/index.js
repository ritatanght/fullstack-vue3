import { createStore } from "vuex";
import product from "./modules/product"
import cart from "./modules/cart";

// multiple module objects can be introduced to the store’s modules property
export default createStore({
  modules: {
    product,
    cart,
  },
});
