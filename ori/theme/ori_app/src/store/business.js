// import {personalRoomUrl} from '@/constants/conf';



const business = {
  namespaced: true,
  state: {
    openedStep: false
  },
  mutations: {
    swtichOpenedState(state, opened=false) {
      state.openedStep = opened;
    }
  }
};

export default business;