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
  getProductItems({ commit }, token) {
    axios.get(`/api/products?token=${token}`).then((res) => {
      commit("UPDATE_PRODUCT_ITEMS", res.data);
    }); // should commit to unique mutations when asynchronous call fails
  },
};
const getters = {
  productItems: (state) => state.productItems,
  productItemFromId: (state) => (id) =>
    state.productItems.find((productItem) => productItem.id === id),
};

const productModule = {
  state,
  mutations,
  actions,
  getters,
};

export default productModule;
