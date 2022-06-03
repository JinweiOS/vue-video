import Vue from 'vue'
import App from './main.vue'

// elementui 引入
import 'element-ui/lib/theme-chalk/index.css';
import elementUI from 'element-ui'
Vue.use(elementUI)

// vant 引入
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

// fullpage 引入
import VueFullPage from 'vue-fullpage.js'
Vue.use(VueFullPage);
// vue-router 引入

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
