import axios from "axios";
const state = {
  productItems: [],
};
const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
};
const actions = {
  getProductItems({ commit }) {
    axios.get("/api/products").then((res) => {
      commit("UPDATE_PRODUCT_ITEMS", res.data);
    }); // should commit to unique mutations when asynchronous call fails
  },
};
const getters = {};

const productModule = {
  state,
  mutations,
  actions,
  getters,
};

export default productModule;
