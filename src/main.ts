import { createApp } from "vue";
import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";
import "./assets/tailwind.css";

import App from "./App.vue";
import router from "./router";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.API_URL;

// axios.defaults.headers.common["Access-Control-Allow-Origin"] =
//   "http://localhost:8080";
// axios.defaults.headers.common["Access-Control-Allow-Methods"] =
//   "GET, OPTIONS, POST, PUT, DELETE";
// axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";
// axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    // if (error.response.status === 401 && !originalRequest._retry) {
    //   originalRequest._retry = true;
    //   localStorage.removeItem("token");
    //   return router.push("/login");
    // }
  }
});

const app = createApp(App);
app.component("default-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);

app.use(router).mount("#app");
