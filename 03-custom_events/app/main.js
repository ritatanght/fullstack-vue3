const emitter = mitt();

const inputComponent = {
  data() {
    return {
      input: "",
    };
  },
  props: ["placeholder"],
  // recommended in Vue 3 to always document the events emitted in a component in `emits` property
  emits: ["add-note"],
  template: `<input class="input is-small" 
                    type="text" 
                    :placeholder="placeholder" 
                    v-model="input"
                    @keyup.enter="monitorEnterKey"
                    />`,
  methods: {
    monitorEnterKey() {
      emitter.emit("add-note", {
        note: this.input,
        timestamp: new Date().toLocaleString(),
      });
      this.input = "";
    },
  },
};

const noteCountComponent = {
  template: `<div class="note-count">Note count: <strong>{{ noteCount }}</strong></div>`,
  data() {
    return {
      noteCount: 0,
    };
  },
};

const app = {
  data() {
    return {
      notes: [],
      timestamps: [],
      placeholder: "Enter a note",
    };
  },
  components: {
    "input-component": inputComponent,
    "note-count-component": noteCountComponent,
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    },
  },
  created() {
    emitter.on("add-note", (event) => this.addNote(event));
  },
};

Vue.createApp(app).mount("#app");
