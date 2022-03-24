import { createStore } from 'vuex';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  SET_USER,
  SET_CURRENT_PAGE,
  SET_MESSAGES,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import MessagesService from '@/api/services/MessagesService';

export default createStore({
  state: {
    isModalActive: false,
    token: localStorage.getItem('token') || null,
    currentPage: 1,
    messages: [],
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
    getCurrentPage: (state) => state.currentPage,
    getMessages: (state) => {
      return state.messages;
    },
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
    [SET_MESSAGES]: (state, payload) => {
      state.messages = payload;
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
    async fetchMessages({ commit }, pageNumber) {
      const messages = await MessagesService.fetchMessages(pageNumber);
      console.log(messages);
      commit(SET_MESSAGES, messages.content);
    },
  },
  modules: {},
});
