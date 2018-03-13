import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rootElement: document.documentElement || document.body,
    isPageScrolled: false,
    baseOffsetForTransform: 90,
    baseMobileOffsetForTransform: 188,
    currentScrollPosition: 0,
    menuWasTransformed: false,
    user_led_number: "",
    animations: {

    },
    // registration: {
    //   full_name: "",
    //   birthday: "",
    //   passport_data: "",
    //   email: "",
    //   phone_number: "",
    //   city: "",
    //   region: "",
    //   street: "",
    //   num_apartment: "",
    // },
    // callback: {
    //   full_name: "",
    //   phone: ""
    // }
  },
  mutations: {
    async switchScrollPageState(state, isScrolled) {
      state.isPageScrolled = isScrolled;
    },
    async switchTransfromedMenuState(state, isTransfromed) {
      state.menuWasTransformed = isTransfromed;
    },
    async setCurrentScrollPosition(state, scrollPosition) {
      state.currentScrollPosition = scrollPosition;
    },
    async setGlobalAnimations(state, animations) {
      if (Array.isArray(animations)) {
        animations.forEach(animation => {
          state.animations[animation.name] = animation.callback;
        });
      } else {
        state.animations[animations.name] = animations.callback;
      }
    }
  }
});

