// import {personalRoomUrl} from '@/constants/conf';
const business = {
  namespaced: true,
  state: {
    openedStep: false,
    touched: false
  },
  mutations: {
    changeToucheState(state, touched = false) {
      state.touched = touched;
    },
    swtichOpenedState(state, opened = false) {
      state.openedStep = opened;
    }
  },
  actions: {
    preventScrollPage({ commit }, { navigationStyles, rootStyles, isMobile }) {
      // console.log(this);
      commit("changeToucheState", true);

      if (!isMobile) {
        rootStyles.overflowY = "hidden";
        rootStyles.paddingRight = "13.5px";
        navigationStyles.marginRight = "13.5px";
      }
    },
    allowScrollPage({ commit }, { navigationStyles, rootStyles, isMobile }) {
      commit("changeToucheState");

      if (!isMobile) {
        rootStyles.overflowY = "auto";
        rootStyles.paddingRight = 0;
        navigationStyles.marginRight = 0;
      }
    }
  }
};
export default business;
