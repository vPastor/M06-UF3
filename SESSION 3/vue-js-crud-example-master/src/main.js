import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'

Vue.config.productionTip = false

new Vue({
  vSelect,
  router,
  render: h => h(App),
}).$mount('#app')
