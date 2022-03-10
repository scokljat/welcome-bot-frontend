import { createStore } from 'vuex';

export default createStore({
  state: {
    isModalActive: false,
  },
  getters: {},
  mutations: {
    toggleAppModal: (state) => {
      state.isModalActive = !state.isModalActive;
    },
  },
  actions: {},
  modules: {},
});
