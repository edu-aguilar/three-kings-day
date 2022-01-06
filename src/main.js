import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import VueConfetti from "vue-confetti";
import VueFriendlyIframe from "vue-friendly-iframe";

import "buefy/dist/buefy.css";
import "@/assets/shared.css";

Vue.config.productionTip = false;

Vue.use(VueConfetti);
Vue.use(Buefy);
Vue.use(VueFriendlyIframe);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
