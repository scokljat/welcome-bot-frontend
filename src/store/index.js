import { createStore } from 'vuex';
import { TOGGLE_APP_MODAL } from './mutation-types';

export default createStore({
  state: {
    isModalActive: false,
  },
  getters: {},
  mutations: {
    [TOGGLE_APP_MODAL]: (state) => {
      state.isModalActive = !state.isModalActive;
    },
  },
  actions: {},
  modules: {},
});
