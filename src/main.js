import Vue from 'vue'
import Home from './pages/Home'

Vue.config.productionTip = false

new Vue({
  render: h => h(Home)
}).$mount('#app')
