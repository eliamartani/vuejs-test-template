import Vue from 'vue'
import App from './App.vue'
import Api from './api'

Vue.config.productionTip = false

Vue.prototype.$http = Api

new Vue({
  render: h => h(App),
}).$mount('#app')
