import { createApp } from "vue";
import App from "./App.vue";
import store from "./app/store";
import router from "./app/router";

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
