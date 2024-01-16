const state = {
  notes: [],
  timestamps: [],
};

// A mutation consists of a string type and a handler
// mutations always have access to state as the first argument,
// and may or may not pass a payload to the mutation
const mutations = {
  /* mutations have to be synchronous */
  ADD_NOTE(state, payload) {
    state.notes.push(payload);
  },
  ADD_TIMESTAMP(state, payload) {
    state.timestamps.push(payload);
  },
};
