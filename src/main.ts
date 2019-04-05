import Vue from 'vue';
import { router, store } from './libs';
import App from './App.vue';
import './assets/sass/index.sass';

export default new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});
