// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './fonts.sass'
import VueLazyload from 'vue-lazyload'
import Tooltip from 'vue-directive-tooltip'
import 'vue-directive-tooltip/css/index.css'

Vue.use(Tooltip);

Vue.use(VueLazyload,  {preLoad: 1.3,
  attempt: 1
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
