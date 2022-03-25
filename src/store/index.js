import { createStore } from 'vuex';
import format from 'date-fns/format';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  SET_USER,
  SET_MESSAGES,
  SET_ALL_MESSAGES,
  SET_PAGINATION,
  SET_SCHEDULES,
  REMOVE_SCHEDULE,
  INCREMENT_PAGINATION_TOTAL,
  DECREMENT_PAGINATION_TOTAL,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import SchedulesService from '@/api/services/SchedulesService';
import MessagesService from '@/api/services/MessagesService';

export default createStore({
  state: {
    isModalActive: false,
    token: localStorage.getItem('token') || null,
    schedules: [],
    messages: [],
    allMessages: [],
    pagination: {
      page: 1,
      size: 15,
      total: 100,
    },
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
    getMessages: (state) => {
      return state.messages;
    },
    getPagination: (state) => state.pagination,
    getSchedules: (state) => state.schedules,
    getAllMessages: (state) => state.allMessages,
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
    [SET_ALL_MESSAGES]: (state, payload) => {
      state.allMessages = payload;
    },
    [SET_SCHEDULES]: (state, payload) => {
      state.schedules = payload;
    },
    [REMOVE_SCHEDULE]: (state, id) => {
      state.schedules = state.schedules.filter((schedule) => {
        return schedule.scheduleId !== id;
      });
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
    async fetchAllMessages({ commit }) {
      const response = await MessagesService.fetchAllMessages();
      commit(SET_ALL_MESSAGES, response);
    },
    async fetchSchedules({ commit }, pageNumber) {
      const response = await SchedulesService.fetchSchedules(pageNumber);
      console.log(response.content);
      const schedules = response.content;
      schedules.forEach((schedule) => {
        schedule.nextRun = format(new Date(schedule.nextRun), 'dd MMM yyyy');
        if (schedule.active) schedule.active = 'Active';
        else schedule.active = 'Inactive';
      });
      // set pagination
      commit(SET_PAGINATION, {
        page: response.pageable.pageNumber + 1,
        total: response.totalElements,
      });
      commit(SET_SCHEDULES, schedules);
    },
    async deleteSchedule({ commit }, id) {
      await SchedulesService.deleteSchedule(id);

      // set pagination
      commit(DECREMENT_PAGINATION_TOTAL);
      commit(REMOVE_SCHEDULE, id);
    },
  },
  modules: {},
});
