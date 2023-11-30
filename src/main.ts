import { createApp } from "vue";
import App from "./App.vue";
import "@arco-design/web-vue/dist/arco.css";
import router from "./router";
import store from "./store";
import ArcoVue from "@arco-design/web-vue";

createApp(App).use(ArcoVue).use(store).use(router).mount("#app");
