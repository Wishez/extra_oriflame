// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue';
import router from './router'
import './fonts.sass'
import VueLazyload from 'vue-lazyload'
import 'vue-popperjs/dist/css/vue-popper.css'
import VueProgressiveImage from 'vue-progressive-image'
import store from './store';
Vue.use(VueProgressiveImage, {
  blur: 30,
  delay: 1000
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
