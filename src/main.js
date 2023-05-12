import { createApp } from "vue";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";
import { createPinia } from "pinia";

import "./style.css";

const pinia = createPinia();

createApp(App).use(pinia).use(MotionPlugin).mount("#app");
