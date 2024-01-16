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

// Actions are functions that exist to call mutations
// actions can perform asynchronous calls/logic handling before committing to mutations

/* actions automatically receive context as the first argument
  an optional payload object is passed in as a second argument
  context.state - access the state,
  context.getters - access getters, and
  context.commit - call/commit to mutations
*/
const actions = {
  addNote(context, payload) {
    context.commit("ADD_NOTE", payload);
  },
  addTimestamp(context, payload) {
    context.commit("ADD_TIMESTAMP", payload);
  },
};
