const InputForm = {
  template: `
    <div class="input-form">
      <form @submit="submitForm" class="ui form">
        <div class="field">
          <input ref="newItem" type="text" placeholder="Add an item!">
        </div>
        <button class="ui button">Submit</button>
      </form>
    </div>`,
  methods: {
    submitForm(event) {
      event.preventDefault();
      console.log(this.$refs.newItem.value);
    },
  },
};

Vue.createApp({ components: { InputForm } }).mount("#app");
