const ButtonRow = {
  template: `
    <div>
      <button @click="onHoodieClick" class="ui button">Hoodie</button>
      <button @click="onTeeClick" class="ui button">Tee</button>
      <button @click="onFittedCapClick" class="ui button">Fitted Cap</button>
      <button @click="onJacketClick" class="ui button">Jacket</button>
    </div>`,
  methods: {
    onHoodieClick(e) {
      console.log("The user clicked button-hoodie", e);
    },
    onTeeClick(e) {
      console.log("The user clicked button-tee", e);
    },
    onFittedCapClick(e) {
      console.log("The user clicked button-fitted-cap", e);
    },
    onJacketClick(e) {
      console.log("The user clicked button-jacket", e);
    },
  },
};

const app = {
  components: { ButtonRow },
};

Vue.createApp(app).mount("#app");
