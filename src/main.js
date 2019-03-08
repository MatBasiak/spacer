import Vue from 'vue';
import App from './App.vue';


Vue.config.productionTip = true;

new Vue({
  render(h) { return h(App); },
}).$mount('#app');
