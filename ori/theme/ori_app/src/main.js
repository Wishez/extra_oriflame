// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import App from './App'
import Vue from 'vue';
import router from './router'
import './fonts.sass'
import VueLazyload from 'vue-lazyload'
import 'vue-popperjs/dist/css/vue-popper.css'
import VueProgressiveImage from 'vue-progressive-image'
import store from './store';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

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
