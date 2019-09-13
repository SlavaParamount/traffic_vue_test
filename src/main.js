import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/red' },
  { path: '/yellow' },
  { path: '/green' }
]

const router = new VueRouter({
	routes
})

new Vue({
	router,
  el: '#app',
  render: h => h(App)
})
