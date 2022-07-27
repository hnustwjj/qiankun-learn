import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

function render(props?: any) {
  app.mount("#vueApp");
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  // 不依赖于父应用独立运行时
  render();
} else {
  __webpack_public_path__ = (window as any).__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap() {
  // 做其他事情
  console.log("[vue] vue app bootstraped");
}
export async function mount(props: any) {
  // 挂载时调用的方法，可以通过传入一些参数达到父子应用的通信
  render(props);
}
export async function unmount() {
  // 卸载时调用的方法
  app.unmount();
}
