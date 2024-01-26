import axios from "axios";

const state = {
  cartItems: [],
};
const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
};

const actions = {
  getCartItems({ commit }, token) {
    axios.get(`/api/cart?token=${token}`).then((res) => {
      commit("UPDATE_CART_ITEMS", res.data);
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post("/api/cart", cartItem).then((res) => {
      commit("UPDATE_CART_ITEMS", res.data);
    });
  },
  removeCartItem({ commit }, cartItem) {
    axios.post("/api/cart/delete", cartItem).then((res) => {
      commit("UPDATE_CART_ITEMS", res.data);
    });
  },
  removeAllCartItems({ commit }) {
    axios.post("/api/cart/delete/all").then((res) => {
      commit("UPDATE_CART_ITEMS", res.data);
    });
  },
};
const getters = {
  cartItems: (state) => state.cartItems,
  cartTotal: (state) =>
    state.cartItems
      .reduce((acc, item) => acc + item.quantity * item.price, 0)
      .toFixed(2),
  cartQuantity: (state) =>
    state.cartItems.reduce((acc, item) => acc + item.quantity, 0),
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
