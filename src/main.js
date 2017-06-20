// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueTap from 'v-tap'
import '@/assets/js/rem'
import api from '@/assets/js/api.js'

import '../static/swiper/swiper.min.css'

Vue.use(vueTap);
Vue.use(api);


Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})

