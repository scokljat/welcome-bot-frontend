import { createStore } from 'vuex';
import formatDate from '../utils/formatDate';
//import format from 'date-fns/format';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  SET_USER,
  SET_PAGINATION,
  INCREMENT_PAGINATION_TOTAL,
  DECREMENT_PAGINATION_TOTAL,
  SET_MESSAGES,
  SET_ALL_MESSAGES,
  SET_SCHEDULES,
  REMOVE_SCHEDULE,
  UPDATE_SCHEDULE,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import SchedulesService from '@/api/services/SchedulesService';
import MessagesService from '@/api/services/MessagesService';

export default createStore({
  state: {
    isModalActive: false,
    token: localStorage.getItem('token') || null,
    messages: [],
    allMessages: [],
    schedules: [],
    pagination: {
      page: 1,
      size: 15,
      total: 100,
    },
    formAction: '',
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
    getPagination: (state) => state.pagination,
    getFormAction: (state) => state.formAction,
    getMessages: (state) => state.messages,
    getAllMessages: (state) => state.allMessages,
    getSchedules: (state) => state.schedules,
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
    [SET_SCHEDULES]: (state, payload) => {
      state.schedules = payload;
    },
    [REMOVE_SCHEDULE]: (state, id) => {
      state.schedules = state.schedules.filter((schedule) => {
        return schedule.scheduleId !== id;
      });
    },
    [UPDATE_SCHEDULE]: (state, { id, updatedSchedule }) => {
      const scheduleId = state.schedules.findIndex((schedule) => {
        return schedule.scheduleId === id;
      });
      state.schedules[scheduleId] = updatedSchedule;
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
      const schedules = response.content;
      schedules.forEach((schedule) => {
        schedule.nextRun = formatDate(schedule.nextRun, 'dd MMM yyyy');
        schedule.active = schedule.active ? 'Active' : 'Inactive';
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
    async createSchedule({ commit }, schedule) {
      await SchedulesService.createSchedule(schedule);
      commit(CLOSE_APP_MODAL);
    },
    fetchSchedule({ state }, id) {
      const schedule = state.schedules.filter((schedule) => {
        return schedule.scheduleId === id;
      });
      return schedule[0];
    },
    async editSchedule({ commit }, { id, schedule }) {
      const response = await SchedulesService.editSchedule(id, schedule);
      response.nextRun = formatDate(response.nextRun, 'dd MMM yyyy');
      schedule.isActive = schedule.isActive ? 'Active' : 'Inactive';
      commit(UPDATE_SCHEDULE, { id, updatedSchedule: response });
      commit(CLOSE_APP_MODAL);
    },
  },
  modules: {},
});
