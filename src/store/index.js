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
  SET_SCHEDULES,
  REMOVE_SCHEDULE,
  UPDATE_SCHEDULE,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import SchedulesService from '@/api/services/SchedulesService';
import MessagesService from '@/api/services/MessagesService';
import FormatUtils from '@/utils/FormatUtils';

function formatSchedules(response) {
  console.log(response);
  if (response.length > 0) {
    response.forEach((schedule) => {
      schedule.nextRun = FormatUtils.formatDate(
        schedule.nextRun,
        'dd MMM yyyy'
      );
      schedule.activeLabel = schedule.active ? 'Active' : 'Inactive';
    });
  } else {
    response.nextRun = FormatUtils.formatDate(response.nextRun, 'dd MMM yyyy');
    response.activeLabel = response.active ? 'Active' : 'Inactive';
  }
  return response;
}

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
      total: 0,
    },
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
    getPagination: (state) => state.pagination,
    getMessages: (state) => state.messages,
    getAllMessages: (state) => state.allMessages,
    getSchedules: (state) => state.schedules,
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
      const index = state.schedules.findIndex((schedule) => {
        return schedule.scheduleId === id;
      });
      state.schedules[index] = updatedSchedule;
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
      const response = await MessagesService.fetchAllMessages();
      commit(SET_ALL_MESSAGES, response);
    },
    async fetchSchedules({ commit }, pageNumber) {
      const response = await SchedulesService.fetchSchedules(pageNumber);
      const schedules = formatSchedules(response.content);
      commit(SET_PAGINATION, {
        page: response.pageable.pageNumber + 1,
        total: response.totalElements,
      });
      commit(SET_SCHEDULES, schedules);
    },
    async deleteSchedule({ commit }, id) {
      await SchedulesService.deleteSchedule(id);
      commit(DECREMENT_PAGINATION_TOTAL);
      commit(REMOVE_SCHEDULE, id);
    },
    async createSchedule({ commit }, schedule) {
      await SchedulesService.createSchedule(schedule);
      commit(CLOSE_APP_MODAL);
    },
    async editSchedule({ commit }, { id, schedule }) {
      const response = await SchedulesService.editSchedule(id, schedule);
      const updatedSchedule = formatSchedules(response);
      commit(UPDATE_SCHEDULE, { id, updatedSchedule });
      commit(CLOSE_APP_MODAL);
    },
  },
  modules: {},
});
