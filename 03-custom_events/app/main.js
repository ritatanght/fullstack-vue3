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
      this.$emit("add-note", {
        note: this.input,
        timestamp: new Date().toLocaleString(),
      });
      this.input = "";
    },
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
  },
  methods: {
    addNote(event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    },
  },
};

Vue.createApp(app).mount("#app");
