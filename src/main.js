import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { URL_API } from "./configs/api";
import axios from "axios";
import "./assets/main.css";

axios.defaults.baseURL = URL_API;

const app = createApp(App);

app.use(router);

app.mount("#app");
