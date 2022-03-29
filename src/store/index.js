import { createStore } from 'vuex';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  SET_USER,
  SET_PAGINATION,
  INCREMENT_PAGINATION_TOTAL,
  DECREMENT_PAGINATION_TOTAL,
  SET_MESSAGES,
  SET_ALL_MESSAGES,
  SET_TRIGGERS,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import MessagesService from '@/api/services/MessagesService';
import TriggersService from '@/api/services/TriggersService';
import formatActive from '@/utils/formatActive';

export default createStore({
  state: {
    isModalActive: false,
    token: localStorage.getItem('token') || null,
    messages: [],
    allMessages: [],
    triggers: [],
    pagination: {
      page: 1,
      size: 15,
      total: 100,
    },
    formAction: '',
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
    getMessages: (state) => state.messages,
    getPagination: (state) => state.pagination,
    getFormAction: (state) => state.formAction,
    getAllMessages: (state) => state.allMessages,
    getTriggers: (state) => state.triggers,
  },
  mutations: {
    [OPEN_APP_MODAL]: (state, payload) => {
      state.isModalActive = true;
      state.formAction = payload;
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
    [INCREMENT_PAGINATION_TOTAL]: (state) => {
      state.pagination.total += 1;
    },
    [DECREMENT_PAGINATION_TOTAL]: (state) => {
      state.pagination.total -= 1;
    },
    [SET_MESSAGES]: (state, payload) => {
      state.messages = payload;
    },
    [SET_ALL_MESSAGES]: (state, payload) => {
      state.allMessages = payload;
    },
    [SET_TRIGGERS]: (state, payload) => {
      state.triggers = payload;
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
    async fetchAllMessages({ commit }) {
      const response = await MessagesService.fetchAllMessages();
      console.log(response);
      commit(SET_ALL_MESSAGES, response);
    },
    async fetchTriggers({ commit }, pageNumber) {
      const response = await TriggersService.fetchTriggers(pageNumber);
      const triggers = response.content;
      console.log(triggers);
      triggers.forEach((trigger) => {
        // console.log(trigger.triggerEvent.toLowerCase());
        switch (trigger.triggerEvent) {
          case 'APP_MENTION_EVENT':
            trigger.triggerEvent = 'On app mention';
            break;
          case 'CHANNEL_JOINED':
            trigger.triggerEvent = 'On channel join';
            break;
          case 'CHANNEL_LEFT':
            trigger.triggerEvent = 'On channel left';
            break;
        }
        trigger.isActive = formatActive(trigger.isActive);
      });
      // set pagination
      commit(SET_PAGINATION, {
        page: response.pageable.pageNumber + 1,
        total: response.totalElements,
      });
      commit(SET_TRIGGERS, triggers);
    },
  },
  modules: {},
});
