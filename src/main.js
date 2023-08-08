import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import router from "./router/index.js";
// import AppNavbar from "./AppNavbar.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
