const inputComponent = {
  template: `<input class="input is-small" type="text"/>`,
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
