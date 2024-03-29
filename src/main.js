import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(VueSweetalert2);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
