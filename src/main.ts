import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.config.globalProperties.apiUrl =
  <string>process.env.VUE_APP_API_URL || "http://loacalhost:5000/";

app.use(store).use(router).mount("#app");
