// import {personalRoomUrl} from '@/constants/conf';
const business = {
    namespaced: true,
    state: {
        openedStep: false,
        touched: false,
    },
    mutations: {
        changeToucheState(state, touched = false) {
        	state.touched = touched;
        },
        swtichOpenedState(state, opened = false) {
            state.openedStep = opened;
        }
    }
};
export default business;