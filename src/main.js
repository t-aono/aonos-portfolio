import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  duration: 500,
  easing: "ease",
  offset: -100,
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  VueScrollTo,
  render: h => h(App)
}).$mount('#app')
