import Vue from "vue";
import App from "./App.vue";
import "ress";
import "@/assets/webfonts.css";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.prototype.$breakPoint = 1024;

Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

Vue.directive("resize", {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener("resize", f);
      }
    };
    window.addEventListener("resize", f);
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
