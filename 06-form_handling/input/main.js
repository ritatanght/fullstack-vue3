const InputForm = {
  data() {
    return {
      newItem: "",
      items: [],
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
      <div class="ui segment">
        <h4 class="ui header">Items</h4>
        <ul>
          <li v-for="item in items" class="item">{{ item }}</li>
        </ul>
      </div>

    </div>`,
  methods: {
    submitForm(event) {
      event.preventDefault();
      this.items.push(this.newItem);
      this.newItem = "";
    },
  },
};

Vue.createApp({ components: { InputForm } }).mount("#app");
