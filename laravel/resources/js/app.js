// import './bootstrap'
import Vue from 'vue'
import router from './router.js'
import store from './store'

// import VueScrollTo from 'vue-scrollto'
// Vue.use(VueScrollTo)
//
// import VueObserveVisibility from 'vue-observe-visibility'
// Vue.use(VueObserveVisibility)

import App from './App.vue'

const createApp = () => {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App />',
  })
}

createApp()

console.log(process.env.NODE_ENV)
