import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import reset from '../src/assets/css/reset.css';
import global from '../src/assets/css/global.css';

import firework from '../src/assets/js/firework';
import changeTheme from '../src/assets/js/changeTheme';
import watchPage from './assets/js/watchPage';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

import Highlight from "./utils/highlight";
Vue.use(Highlight)

// import fontawesome from '@fortawesome/fontawesome'
// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import solid from '@fortawesome/fontawesome-free-solid'
// import regular from '@fortawesome/fontawesome-free-regular'
// import brands from '@fortawesome/fontawesome-free-brands'
// fontawesome.library.add(solid)
// fontawesome.library.add(regular)
// fontawesome.library.add(brands)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

import lottie from 'vue-lottie';
Vue.component('lottie', lottie)

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

