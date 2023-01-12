import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "popper.js";
import "bootstrap";
import "./assets/app.scss";
createApp(App).use(store).use(router).mount("#app");
