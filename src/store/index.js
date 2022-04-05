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
  REMOVE_MESSAGE,
  UPDATE_MESSAGE,
  SET_SCHEDULES,
  REMOVE_SCHEDULE,
  UPDATE_SCHEDULE,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import SchedulesService from '@/api/services/SchedulesService';
import MessagesService from '@/api/services/MessagesService';
import FormatUtils from '@/utils/FormatUtils';

const formatMessages = (messages) => {
  messages.forEach((message) => {
    message.createdAt = FormatUtils.formatDate(
      message.createdAt,
      'dd MMM yyyy'
    );
  });
  return messages;
};

function formatSchedules(schedules) {
  schedules.forEach((schedule) => {
    schedule.nextRun = FormatUtils.formatDate(schedule.nextRun, 'dd MMM yyyy');
    schedule.activeLabel = schedule.active ? 'Active' : 'Inactive';
  });
  return schedules;
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
    [SET_USER]: (state, payload) => {
      state.token = payload.idToken;
      localStorage.setItem('token', payload.idToken);
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
    [SET_MESSAGES]: (state, messages) => {
      state.messages = messages;
    },
    [SET_ALL_MESSAGES]: (state, allMessages) => {
      state.allMessages = allMessages;
    },
    [REMOVE_MESSAGE]: (state, id) => {
      state.messages = state.messages.filter((message) => {
        return message.messageId !== id;
      });
    },
    [UPDATE_MESSAGE]: (state, { id, updatedMessage }) => {
      const index = state.messages.findIndex((message) => {
        return message.messageId === id;
      });
      state.messages[index] = updatedMessage;
    },
    [SET_SCHEDULES]: (state, schedules) => {
      state.schedules = schedules;
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
    async login({ commit }, { token }) {
      const user = await AuthService.login(token);

      commit(SET_USER, user);
    },
    async fetchMessages({ commit }, pageNumber) {
      const data = await MessagesService.fetchMessages(pageNumber);
      const messages = formatMessages(data.content);

      commit(SET_PAGINATION, {
        page: data.pageable.pageNumber + 1,
        total: data.totalElements,
      });
      commit(SET_MESSAGES, messages);
    },
    async fetchAllMessages({ commit }) {
      const allMessages = await MessagesService.fetchAllMessages();

      commit(SET_ALL_MESSAGES, allMessages);
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
      const data = await MessagesService.editMessage(id, message);
      const updatedMessage = formatMessages([data])[0];

      commit(UPDATE_MESSAGE, { id, updatedMessage });
      commit(CLOSE_APP_MODAL);
    },
    async fetchSchedules({ commit }, pageNumber) {
      const data = await SchedulesService.fetchSchedules(pageNumber);
      const schedules = formatSchedules(data.content);

      commit(SET_PAGINATION, {
        page: data.pageable.pageNumber + 1,
        total: data.totalElements,
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
      const data = await SchedulesService.editSchedule(id, schedule);
      const updatedSchedule = formatSchedules([data])[0];

      commit(UPDATE_SCHEDULE, { id, updatedSchedule });
      commit(CLOSE_APP_MODAL);
    },
  },
  modules: {},
});
