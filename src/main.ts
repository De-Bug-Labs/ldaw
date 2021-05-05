import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.config.globalProperties.apiUrl =
  <string>process.env.VUE_APP_API_URL || "loacalhost:5000/";
console.log(process.env.VUE_APP_API_URL);
console.log(app.config.globalProperties.apiUrl);

app.use(store).use(router).mount("#app");
