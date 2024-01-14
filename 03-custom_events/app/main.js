const inputComponent = {
  data() {
    return {
      input: "",
    };
  },
  props: ["placeholder"],
  template: `<input class="input is-small" type="text" :placeholder="placeholder" v-model="input"/>`,
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
};

Vue.createApp(app).mount("#app");
