// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './fonts.sass'
import VueLazyload from 'vue-lazyload'
// import Tooltip from 'vue-directive-tooltip'
// import Popper from 'vue-popperjs'
// <!-- <popper  trigger="hover" :options="{placement: 'top'}"> -->
// 		<!-- <div @mousemove="onHoverItem" v-tooltip.top="{ html: tooltipId  }"
// 		:class="['programmItem materialSadow', name ? 'programmItem_' + name : null]"> -->
// 	<!-- </popper> -->
import 'vue-popperjs/dist/css/vue-popper.css'
// import 'vue-directive-tooltip/css/index.css'
import VueProgressiveImage from 'vue-progressive-image'


// Vue.use(VueLazyload,  {preLoad: 1.3,
//   attempt: 1
// });
// Vue.use(Tooltip,{
// 	delay: 500,
// 	// placement: 'auto'
// });
Vue.use(VueProgressiveImage, {
  blur: 30,
  delay: 1000
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
