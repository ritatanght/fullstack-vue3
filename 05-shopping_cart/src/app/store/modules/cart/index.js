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
  getCartItems({ commit }) {
    axios.get("/api/cart").then((res) => {
      commit("UPDATE_CART_ITEMS", res.data);
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post("/api/cart", cartItem).then((res) => {
      commit("UPDATE_CART_ITEMS", res.data);
    });
  },
  removeCardItem({ commit }, cartItem) {
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
const getters = {};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
