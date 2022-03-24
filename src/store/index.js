import { createStore } from 'vuex';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  SET_USER,
  SET_CURRENT_PAGE,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';

export default createStore({
  state: {
    isModalActive: false,
    token: localStorage.getItem('token') || null,
    currentPage: 1,
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
    getCurrentPage: (state) => state.currentPage,
  },
  mutations: {
    [OPEN_APP_MODAL]: (state) => {
      state.isModalActive = true;
    },
    [CLOSE_APP_MODAL]: (state) => {
      state.isModalActive = false;
    },
    [SET_USER]: (state, { token }) => {
      state.token = token;
      localStorage.setItem('token', token);
    },
    [SET_CURRENT_PAGE]: (state, page) => {
      state.currentPage = page;
    },
  },
  actions: {
    login({ commit }, token) {
      const response = AuthService.login(token);
      commit(SET_USER, response);
    },
    editCurrentPage({ commit }, page) {
      commit(SET_CURRENT_PAGE, page);
    },
  },
  modules: {},
});
