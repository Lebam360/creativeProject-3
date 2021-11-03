import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './MOCK_DATA.js'

let data = {
  movies: mock
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
