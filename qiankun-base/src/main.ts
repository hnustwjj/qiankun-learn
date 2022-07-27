import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { registerMicroApps, start } from "qiankun";
const apps = [
  {
    name: "reactApp", // 应用的名字
    entry: "//localhost:9999", // 监听的ip
    container: "#react", //容器
    activeRule: "/react", //指定路由，满足时会挂载子应用到该容器上
  },
  {
    name: "vueApp",
    entry: "//localhost:8888",
    container: "#vue",
    activeRule: "/vue",
  },
];
registerMicroApps(apps);
start({
  prefetch: false,
});
createApp(App).use(store).use(router).mount("#app");
