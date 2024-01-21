const state = {
  cartItems: [],
};
const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
};
const actions = {};
const getters = {};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
