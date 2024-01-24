const state = {
  fields: {
    newItem: "",
    email: "",
    urgency: "",
    termsAndConditions: false,
  },
  items: [],
};

const mutations = {
  UPDATE_NEW_ITEM(state, payload) {
    state.fields.newItem = payload;
  },
  UPDATE_EMAIL(state, payload) {
    state.fields.email = payload;
  },
  UPDATE_URGENCY(state, payload) {
    state.fields.urgency = payload;
  },
  UPDATE_TERMS_AND_CONDITIONS(state, payload) {
    state.fields.termsAndConditions = payload;
  },
  UPDATE_ITEMS(state, payload) {
    state.items = payload;
  },
  CLEAR_FIELDS() {
    state.fields.newItem = "";
    state.fields.email = "";
    state.fields.urgency = "";
    state.fields.termsAndConditions = false;
  },
};

const actions = {
  loadItems({ commit }, payload) {
    apiClient.loadItems().then((items) => {
      commit("UPDATE_ITEMS", items);
    });
  },
  saveItems({ commit }, payload) {
    apiClient.saveItems(payload).then(() => {
      commit("UPDATE_ITEMS", payload);
      commit("CLEAR_FIELDS");
    });
  },
};

const getters = {
  newItem: (state) => state.fields.newItem,
  newItemLength: (state) => state.fields.newItem.length,
  isNewItemInputLimitExceeded: (state) => state.fields.newItem.length >= 20,
  email: (state) => state.fields.email,
  urgency: (state) => state.fields.urgency,
  isNotUrgent: (state) => state.fields.urgency === "Nonessential",
  termsAndConditions: (state) => state.fields.termsAndConditions,
  items: (state) => state.items,
};

// globalize the store with window.store for it to be accessed elsewhere
window.store = Vuex.createStore({
  state,
  mutations,
  actions,
  getters,
});

let apiClient = {
  count: 1,
  loadItems: () => {
    return {
      then: (cb) => {
        setTimeout(() => {
          cb(JSON.parse(localStorage.items || "[]"));
        }, 1000);
      },
    };
  },
  saveItems: function (items) {
    const success = !!(this.count++ % 2);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!success) return reject({ success });

        localStorage.items = JSON.stringify(items);
        return resolve({ success });
      }, 1000);
    });
  },
};
