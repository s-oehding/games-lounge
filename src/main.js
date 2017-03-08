// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import {ClientTable} from 'vue-tables-2'
Vue.use(ClientTable, {}, false)

import App from './App'
Vue.component('app', App)

/**
 * App Components
 */
import './components'

/**
 * App Routes
 */
Vue.use(VueRouter)
import routes from './routes.js'

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router
})

