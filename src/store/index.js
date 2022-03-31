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
  REMOVE_TRIGGER,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import MessagesService from '@/api/services/MessagesService';
import TriggersService from '@/api/services/TriggersService';

function formatTriggers(response) {
  response.forEach((trigger) => {
    trigger.activeLabel = trigger.active ? 'Active' : 'Inactive';
    switch (trigger.triggerEvent) {
      case 'APP_MENTION_EVENT':
        trigger.event = 'On app mention';
        break;
      case 'CHANNEL_JOINED':
        trigger.event = 'On channel join';
        break;
      case 'CHANNEL_LEFT':
        trigger.event = 'On channel left';
        break;
    }
  });
  return response;
}
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
      total: 0,
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
    [REMOVE_TRIGGER]: (state, payload) => {
      state.triggers = state.triggers.filter((trigger) => {
        return trigger.triggerId !== payload;
      });
    },
  },
  actions: {
    login({ commit }, token) {
      const response = AuthService.login(token);
      commit(SET_USER, response);
    },
    async fetchMessages({ commit }, pageNumber) {
      const response = await MessagesService.fetchMessages(pageNumber);
      commit(SET_PAGINATION, {
        page: response.pageable.pageNumber + 1,
        total: response.totalElements,
      });
      commit(SET_MESSAGES, response.content);
    },
    async fetchAllMessages({ commit }) {
      const allmessages = await MessagesService.fetchAllMessages();
      commit(SET_ALL_MESSAGES, allmessages);
    },
    async fetchTriggers({ commit }, pageNumber) {
      const response = await TriggersService.fetchTriggers(pageNumber);
      const triggers = formatTriggers(response.content);
      commit(SET_PAGINATION, {
        page: response.pageable.pageNumber + 1,
        total: response.totalElements,
      });
      commit(SET_TRIGGERS, triggers);
    },
    async deleteTrigger({ commit }, id) {
      await TriggersService.deleteTrigger(id);
      commit(DECREMENT_PAGINATION_TOTAL);
      commit(REMOVE_TRIGGER, id);
    },
    async createTrigger({ commit }, trigger) {
      await TriggersService.createTrigger(trigger);
      commit(CLOSE_APP_MODAL);
    },
  },
  modules: {},
});
