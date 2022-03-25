import { createStore } from 'vuex';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  SET_USER,
  SET_MESSAGES,
  SET_PAGINATION,
  REMOVE_MESSAGE,
  SET_FORM_STATE,
  INCREMENT_PAGINATION_TOTAL,
  DECREMENT_PAGINATION_TOTAL,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import MessagesService from '@/api/services/MessagesService';

export default createStore({
  state: {
    isModalActive: false,
    token: localStorage.getItem('token') || null,
    messages: [],
    pagination: {
      page: 1,
      size: 15,
      total: 0,
    },
    isFormSubmitted: false,
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
    getMessages: (state) => {
      return state.messages;
    },
    getPagination: (state) => state.pagination,
    getIsFormSubmitted: (state) => state.isFormSubmitted,
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
    [SET_PAGINATION]: (state, { page, total }) => {
      state.pagination.page = page;
      state.pagination.total = total;
    },
    [SET_MESSAGES]: (state, payload) => {
      state.messages = payload;
    },
    [REMOVE_MESSAGE]: (state, id) => {
      state.messages = state.messages.filter((message) => {
        return message.messageId !== id;
      });
    },
    [SET_FORM_STATE]: (state) => {
      state.isFormSubmitted = true;
    },
    [INCREMENT_PAGINATION_TOTAL]: (state) => {
      state.pagination.total += 1;
    },
    [DECREMENT_PAGINATION_TOTAL]: (state) => {
      state.pagination.total -= 1;
    },
  },
  actions: {
    login({ commit }, token) {
      const response = AuthService.login(token);
      commit(SET_USER, response);
    },
    async fetchMessages({ commit }, pageNumber) {
      const response = await MessagesService.fetchMessages(pageNumber);
      // set pagination
      commit(SET_PAGINATION, {
        page: response.pageable.pageNumber + 1,
        total: response.totalElements,
      });
      commit(SET_MESSAGES, response.content);
    },
    async deleteMessage({ commit }, id) {
      await MessagesService.deleteMessage(id);
      commit(DECREMENT_PAGINATION_TOTAL);
      commit(REMOVE_MESSAGE, id);
    },
    editFormState({ commit }) {
      commit('SET_FORM_STATE');
    },
  },
  modules: {},
});
