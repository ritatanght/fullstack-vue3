import { createStore } from "vuex";
import product from "./module/product";
import cart from "./module/cart";

// multiple module objects can be introduced to the store’s modules property
export default createStore({
  modules: {
    product,
    cart,
  },
});
