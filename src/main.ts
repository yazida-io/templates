import { createApp } from "vue";
import router from "./router";
import Layout from "./layouts/DefaultLayout.vue";
import "./assets/styles/tailwind.css";

const app = createApp(Layout);

app.use(router);

app.mount("#app");
