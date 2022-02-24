import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import router from "./router/index.js";

const app = createApp(App);
app.use(Quasar, {
  plugins: {},
});
app.use(router);
app.mount("#app");
