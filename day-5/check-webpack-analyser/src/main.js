import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "vue-easytable/libs/theme-default/index.css"
import VueEasytable from "vue-easytable"
import Notify from 'vue2-notify'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueEasytable)
Vue.use(Notify, {position: 'top-right'})

new Vue({ 
  render: h => h(App),
}).$mount('#app')
