// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'
import router from './router'
import './fonts.sass'
import VueLazyload from 'vue-lazyload'
import 'vue-popperjs/dist/css/vue-popper.css'
import VueProgressiveImage from 'vue-progressive-image'
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    rootElement: document.documentElement || document.body,
    isNavigationTabActive: true,
    isPageScrolled: false,
    baseOffsetForTransform: 80,
    baseMobileOffsetForTransform: 188,
    currentScrollPosition: 0
  },
  mutations: {
    switchActiveNavigationTabState(state, isActive) {
      state.isNavigationTabActive = isActive;
    },
    switchScrollPageState(state, isScrolled) {
      state.isPageScrolled = isScrolled;
    },
    switchTransformedNavigationTabState(state, isTransformed) {
      state.isNavigationTabTransformed = isActive;
    },
    setCurrentScrollPosition(state, scrollPosition) {
      state.currentScrollPosition = scrollPosition;
    }
  }
});
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
