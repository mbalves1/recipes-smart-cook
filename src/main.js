import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vueCarousel from 'vue-carousel';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vueCarousel,
  render: h => h(App)
}).$mount('#app')
