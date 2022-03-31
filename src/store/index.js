import { createStore } from 'vuex';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  SET_USER,
  SET_MESSAGES,
  SET_PAGINATION,
  REMOVE_MESSAGE,
  INCREMENT_PAGINATION_TOTAL,
  DECREMENT_PAGINATION_TOTAL,
  UPDATE_MESSAGE,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import MessagesService from '@/api/services/MessagesService';
import formatDate from '../utils/formatDate';

const formatMessages = (response) => {
  response.forEach((message) => {
    message.createdAt = formatDate(message.createdAt, 'dd MMM yyyy');
  });
  return response;
};

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
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
    getMessages: (state) => state.messages,
    getPagination: (state) => state.pagination,
  },
  mutations: {
    [OPEN_APP_MODAL]: (state) => {
      state.isModalActive = true;
    },
    [CLOSE_APP_MODAL]: (state) => {
      state.isModalActive = false;
    },
    [SET_USER]: (state, payload) => {
      state.token = payload.token;
      localStorage.setItem('token', payload.token);
    },
    [SET_PAGINATION]: (state, payload) => {
      state.pagination.page = payload.page;
      state.pagination.total = payload.total;
    },
    [SET_MESSAGES]: (state, payload) => {
      state.messages = payload;
    },
    [REMOVE_MESSAGE]: (state, payload) => {
      state.messages = state.messages.filter((message) => {
        return message.messageId !== payload;
      });
    },
    [INCREMENT_PAGINATION_TOTAL]: (state) => {
      state.pagination.total += 1;
    },
    [DECREMENT_PAGINATION_TOTAL]: (state) => {
      state.pagination.total -= 1;
    },
    [UPDATE_MESSAGE]: (state, payload) => {
      const index = state.messages.findIndex((message) => {
        return message.messageId === payload.id;
      });
      state.messages[index] = payload.updatedMessage;
    },
  },
  actions: {
    login({ commit }, token) {
      const response = AuthService.login(token);
      commit(SET_USER, response);
    },
    async fetchMessages({ commit }, pageNumber) {
      const response = await MessagesService.fetchMessages(pageNumber);
      const messages = formatMessages(response.content);
      commit(SET_PAGINATION, {
        page: response.pageable.pageNumber + 1,
        total: response.totalElements,
      });
      commit(SET_MESSAGES, messages);
    },
    async deleteMessage({ commit }, id) {
      await MessagesService.deleteMessage(id);
      commit(DECREMENT_PAGINATION_TOTAL);
      commit(REMOVE_MESSAGE, id);
    },
    async createMessage({ commit }, message) {
      await MessagesService.createMessage(message);
      commit(CLOSE_APP_MODAL);
    },
    async editMessage({ commit }, { id, message }) {
      const updatedMessage = await MessagesService.editMessage(id, message);
      commit(UPDATE_MESSAGE, { id, updatedMessage });
      commit(CLOSE_APP_MODAL);
    },
  },
  modules: {},
});
