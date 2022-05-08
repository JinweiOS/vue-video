import Vue from 'vue'
import App from './main.vue'

// elementui 引入
import './assets/element-25B864/index.css'
import elementUI from 'element-ui'
Vue.use(elementUI)
import Vant from 'vant';
import 'vant/lib/index.css';
// 引入模块后自动生效
Vue.use(Vant);
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);
// vue-router 引入
import routerIns from './router'
import vueRouter from 'vue-router'
Vue.use(vueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: routerIns
}).$mount('#app')
