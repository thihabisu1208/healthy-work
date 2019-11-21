import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import VueAxios from 'vue-axios'
import "chart.js"
import "hchs-vue-charts"
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faArrowLeft,
  faBalanceScale,
  faUtensils,
  faCalendarAlt,
  faCog,
  faNotesMedical,
  faAddressCard,
  faUserCircle,
  faTimes,
  faPlusCircle,
  faMinusCircle
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import router from './router'
import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/themes/vue-tabs.css'

library.add(faArrowLeft, faBalanceScale, faUtensils, faCalendarAlt, faCog, faNotesMedical,
  faAddressCard,
  faUserCircle, faTimes, faPlusCircle, faMinusCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCharts, VueAxios, axios, VueTabs)
Vue.prototype.$http = axios

Vue.config.productionTip = false

// const token = localStorage.getItem('token')
// if (token) {
//   axios.defaults.headers.common['Authorization'] = token
// }

const user = localStorage.getItem('user')

new Vue({
  store,
  router,
  created() {
    //redirect if user not logged in
    if (user == '') {
      this.$router.push("/login");
    }
  },
  render: h => h(App)
}).$mount('#app')