const InputForm = {
  data() {
    return {
      newItem: "",
    };
  },
  template: `
    <div class="input-form">
      <form @submit="submitForm" class="ui form">
        <div class="field">
          <input v-model="newItem" type="text" placeholder="Add an item!">
        </div>
        <button class="ui button">Submit</button>
      </form>
    </div>`,
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log(this.newItem);
    },
  },
};

Vue.createApp({ components: { InputForm } }).mount("#app");
