import Vue from "vue";
import App from "./App.vue";
import "./output.css";
import "tw-elements";
Vue.config.productionTip = false;
import VueKakaoSdk from "vue-kakao-sdk";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
Vue.use(VueKakaoSdk, "6e80bd86c0efb7065fd1b9a35a906ed7");
