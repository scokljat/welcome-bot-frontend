import { createStore } from 'vuex';
import { OPEN_APP_MODAL, CLOSE_APP_MODAL, SET_USER } from './mutation-types';
import AuthService from '@/api/services/LogInService';

export default createStore({
  state: {
    isModalActive: false,
    token: localStorage.getItem('token') || null,
  },
  getters: { isLoggedIn: (state) => Boolean(state.token) },
  mutations: {
    [OPEN_APP_MODAL]: (state) => {
      state.isModalActive = true;
    },
    [CLOSE_APP_MODAL]: (state) => {
      state.isModalActive = false;
    },
    [SET_USER]: (state, { token }) => {
      state.isLoggedIn = true;
      state.token = { token };
      localStorage.setItem('token', token);
    },
  },
  actions: {
    login({ commit }, { token }) {
      const response = AuthService.login({ token });
      commit(SET_USER, response);
    },
  },
  modules: {},
});
