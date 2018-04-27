import Vue from 'vue';
import Vuex from 'vuex';
import idbKeyval from 'idb-keyval';
import shares from './shares';
import personalRoom from './personalRoom'
import business from './business'

Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    shares,
    personalRoom,
    business
  },
  state: {
    rootElement: document.documentElement || document.body,
    isPageScrolled: false,
    baseOffsetForTransform: 188,
    baseMobileOffsetForTransform: 188,
    currentScrollPosition: 0,
    menuWasTransformed: false,
    user_led_number: "",
    animations: {},
    isUserFromMobileOrientation: window.innerWidth < 769,

  },
  mutations: {
    switchMobileDisplayState(state, isMobile) {
        state.isUserFromMobileOrientation = isMobile;

    },
    switchScrollPageState(state, isScrolled) {
      state.isPageScrolled = isScrolled;
    },
    switchTransfromedMenuState(state, isTransfromed) {
      state.menuWasTransformed = isTransfromed;
    },
    setCurrentScrollPosition(state, scrollPosition) {
      state.currentScrollPosition = scrollPosition;
    },
    setGlobalAnimations(state, animations) {
      if (Array.isArray(animations)) {
        animations.forEach(animation => {
          state.animations[animation.name] = animation.callback;
        });
      } else {
        state.animations[animations.name] = animations.callback;
      }
    }    
  },
  actions: {
    dump(context, {key, value, callback=false}) {
      // Return Promise if there is no 'callback'.
      if (!callback) {
        return idbKeyval.set(key, value);
      }

      idbKeyval
        .set(key, value)
        .then(() => {
          callback();
        })
        .catch(error => {
          console.log(error);
        });
    },
    load(context, {key, callback=false}) {
      // Return Promise if there is no 'callback'.
      if (!callback) {        
        return idbKeyval.get(key);
      }

      idbKeyval
        .get(key)
        .then(value => {
          callback(value);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

});

