import axios from "axios";

const state = {
  token: null,
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
};

const actions = {
  login({ commit }) {
    axios.post("/api/login").then((res) => {
      localStorage.setItem("token", res.data.token);
      commit("SET_TOKEN", res.data.token);
    });
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      localStorage.removeItem("token");
      commit("SET_TOKEN", null);
      resolve();
    });
  },
};

const getters = {
  token: (state) => state.token,
};

const loginModule = {
  state,
  mutations,
  actions,
  getters,
};

export default loginModule;
