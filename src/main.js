// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vuex from 'vuex'
import store from './vuex/store'
import vueTap from 'v-tap'
import api from '@/assets/js/api.js'
import '../static/swiper/swiper.min.css'
import '@/assets/js/rem'

Vue.use(vuex)
Vue.use(vueTap);
Vue.use(api);

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})

document.querySelector('body').addEventListener('touchmove', function (ev) {
	event.preventDefault();
});

