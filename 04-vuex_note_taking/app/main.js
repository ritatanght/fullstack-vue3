const inputComponent = {
  data() {
    return {
      input: "",
    };
  },
  template: `<input class="input is-small" 
                    type="text" 
                    placeholder="Enter a note" 
                    v-model="input"
                    @keyup.enter="monitorEnterKey"
                    />`,
  methods: {
    monitorEnterKey() {
      this.$store.dispatch("addNote", this.input);
      this.$store.dispatch("addTimestamp", new Date().toLocaleString());
      this.input = "";
    },
  },
};

const noteCountComponent = {
  template: `<div class="note-count">
              Note count: <strong>{{ noteCount }}</strong>
              </div>`,
  computed: {
    noteCount() {
      return this.$store.getters.getNoteCount;
    },
  },
};

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

//  Getters are used to derive computed information from store state.
// getter fy=unctions reeive state as their first argyment
const getters = {
  getNotes: (state) => state.notes,
  getTimestamps: (state) => state.timestamps,
  getNoteCount: (state) => state.notes.length,
};

const store = Vuex.createStore({
  state,
  mutations,
  actions,
  getters,
});

const app = Vue.createApp({
  components: {
    "input-component": inputComponent,
    "note-count-component": noteCountComponent,
  },
});

app.use(store);
app.mount("#app");
