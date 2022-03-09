import { createStore } from 'vuex';

export default createStore({
  state: {
    // app_modal
    isModalActive: false,
  },
  getters: {},
  mutations: {
    // app modal
    toggleAppModal: (state) => {
      state.isModalActive = !state.isModalActive;
    },
  },
  actions: {},
  modules: {},
});
