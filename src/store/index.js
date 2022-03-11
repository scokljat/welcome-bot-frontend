import { createStore } from 'vuex';
import { OPEN_APP_MODAL, CLOSE_APP_MODAL } from './mutation-types';

export default createStore({
  state: {
    isModalActive: false,
  },
  getters: {},
  mutations: {
    [OPEN_APP_MODAL]: (state) => {
      state.isModalActive = true;
    },
    [CLOSE_APP_MODAL]: (state) => {
      state.isModalActive = false;
    },
  },
  actions: {},
  modules: {},
});
