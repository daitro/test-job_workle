import Vue from "vue";
import App from "./App.vue";
import "../src/assets/styles/reset.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
