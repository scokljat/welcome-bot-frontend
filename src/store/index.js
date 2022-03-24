import { createStore } from 'vuex';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  SET_USER,
  SET_MESSAGES,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import MessagesService from '@/api/services/MessagesService';

export default createStore({
  state: {
    isModalActive: false,
    token: localStorage.getItem('token') || null,
    messages: [],
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
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
    [SET_MESSAGES]: (state, payload) => {
      state.messages = payload;
    },
  },
  actions: {
    login({ commit }, token) {
      const response = AuthService.login(token);
      commit(SET_USER, response);
    },
    async fetchMessages({ commit }, pageNumber) {
      const messages = await MessagesService.fetchMessages(pageNumber);
      console.log(messages);
      commit(SET_MESSAGES, messages.content);
    },
  },
  modules: {},
});
