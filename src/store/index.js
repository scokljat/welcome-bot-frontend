import { createStore } from 'vuex';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  LOGIN,
  LOGOUT,
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
  SET_TRIGGERS,
  REMOVE_TRIGGER,
  UPDATE_TRIGGER,
  SET_ALERT,
  SET_ALERT_VISIBILITY,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import SchedulesService from '@/api/services/SchedulesService';
import MessagesService from '@/api/services/MessagesService';
import TriggersService from '@/api/services/TriggersService';
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

function formatTriggers(triggers) {
  triggers.forEach((trigger) => {
    trigger.activeLabel = trigger.isActive ? 'Active' : 'Inactive';
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
  return triggers;
}

export default createStore({
  state: {
    isModalActive: false,
    token: localStorage.getItem('token') || null,
    messages: [],
    allMessages: [],
    schedules: [],
    triggers: [],
    pagination: {
      page: 1,
      size: 15,
      total: 0,
    },
    alert: {
      active: false,
      success: false,
      message: '',
    },
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
    getPagination: (state) => state.pagination,
    getMessages: (state) => state.messages,
    parsedMessages: (state) => {
      return state.allMessages.map((message) => {
        return {
          id: message.messageId,
          value: message.messageId,
          label: message.title,
        };
      });
    },
    getSchedules: (state) => state.schedules,
    getTriggers: (state) => state.triggers,
    getAlert: (state) => state.alert,
  },
  mutations: {
    [OPEN_APP_MODAL]: (state) => {
      state.isModalActive = true;
    },
    [CLOSE_APP_MODAL]: (state) => {
      state.isModalActive = false;
    },
    [LOGIN]: (state, accessToken) => {
      state.token = accessToken;
      localStorage.setItem('token', accessToken);
    },
    [LOGOUT]: (state) => {
      state.token = null;
      localStorage.removeItem('token');
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
    [SET_TRIGGERS]: (state, payload) => {
      state.triggers = payload;
    },
    [REMOVE_TRIGGER]: (state, payload) => {
      state.triggers = state.triggers.filter((trigger) => {
        return trigger.triggerId !== payload;
      });
    },
    [UPDATE_TRIGGER]: (state, { id, updatedTrigger }) => {
      const index = state.triggers.findIndex((trigger) => {
        return trigger.triggerId === id;
      });
      state.triggers[index] = updatedTrigger;
    },
    [SET_ALERT_VISIBILITY]: (state, active) => {
      state.alert.active = active;
    },
    [SET_ALERT]: (state, { success, message }) => {
      state.alert.active = true;
      state.alert.success = success;
      state.alert.message = message;
    },
  },
  actions: {
    async login({ commit }, { token }) {
      const { data, error } = await AuthService.login(token);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'You are not authorized to access this website',
        });
        return;
      }

      commit(LOGIN, data.accessToken);
      commit(SET_ALERT, {
        success: true,
        message: 'You are successfully logged in',
      });
    },
    logout({ commit }) {
      commit(LOGOUT);
    },
    async fetchMessages({ commit }, pageNumber) {
      const { data, error } = await MessagesService.fetchMessages(pageNumber);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while fetching messages',
        });
        return;
      }
      const messages = formatMessages(data.content);

      commit(SET_PAGINATION, {
        page: data.pageable.pageNumber + 1,
        total: data.totalElements,
      });
      commit(SET_MESSAGES, messages);
    },
    async fetchAllMessages({ commit }) {
      const { data, error } = await MessagesService.fetchAllMessages();

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while fetching all messages',
        });
        return;
      }

      commit(SET_ALL_MESSAGES, data);
    },
    async deleteMessage({ commit }, id) {
      const { error } = await MessagesService.deleteMessage(id);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while deleting the message',
        });
        return;
      }

      commit(DECREMENT_PAGINATION_TOTAL);
      commit(REMOVE_MESSAGE, id);
      commit(SET_ALERT, {
        success: true,
        message: 'Message has been successfully deleted',
      });
    },
    async createMessage({ commit }, message) {
      const { error } = await MessagesService.createMessage(message);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while creating the message',
        });
        return;
      }

      commit(CLOSE_APP_MODAL);
      commit(SET_ALERT, {
        success: true,
        message: 'Message has been successfully created',
      });
    },
    async editMessage({ commit }, { id, message }) {
      const { data, error } = await MessagesService.editMessage(id, message);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while editing the message',
        });
        return;
      }

      const updatedMessage = formatMessages([data])[0];

      commit(UPDATE_MESSAGE, { id, updatedMessage });
      commit(CLOSE_APP_MODAL);
      commit(SET_ALERT, {
        success: true,
        message: 'Message has been successfully edited',
      });
    },
    async fetchSchedules({ commit }, pageNumber) {
      const { data, error } = await SchedulesService.fetchSchedules(pageNumber);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while fetching schedules',
        });
        return;
      }

      const schedules = formatSchedules(data.content);

      commit(SET_PAGINATION, {
        page: data.pageable.pageNumber + 1,
        total: data.totalElements,
      });
      commit(SET_SCHEDULES, schedules);
    },
    async deleteSchedule({ commit }, id) {
      const { error } = await SchedulesService.deleteSchedule(id);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while deleting the schedule',
        });
        return;
      }

      commit(DECREMENT_PAGINATION_TOTAL);
      commit(REMOVE_SCHEDULE, id);
      commit(SET_ALERT, {
        success: true,
        message: 'Schedule has been successfully deleted',
      });
    },
    async createSchedule({ commit }, schedule) {
      const { error } = await SchedulesService.createSchedule(schedule);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while creating the schedule',
        });
        return;
      }

      commit(CLOSE_APP_MODAL);
      commit(SET_ALERT, {
        success: true,
        message: 'Schedule has been successfully created',
      });
    },
    async editSchedule({ commit }, { id, schedule }) {
      const { data, error } = await SchedulesService.editSchedule(id, schedule);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while editing the schedule',
        });
        return;
      }
      const updatedSchedule = formatSchedules([data])[0];

      commit(UPDATE_SCHEDULE, { id, updatedSchedule });
      commit(CLOSE_APP_MODAL);
      commit(SET_ALERT, {
        success: true,
        message: 'Schedule has been successfully edited',
      });
    },
    async fetchTriggers({ commit }, pageNumber) {
      const { data, error } = await TriggersService.fetchTriggers(pageNumber);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while fetching triggers',
        });
        return;
      }

      const triggers = formatTriggers(data.content);

      commit(SET_PAGINATION, {
        page: data.pageable.pageNumber + 1,
        total: data.totalElements,
      });
      commit(SET_TRIGGERS, triggers);
    },
    async deleteTrigger({ commit }, id) {
      const { error } = await TriggersService.deleteTrigger(id);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while deleting the schedules',
        });
        return;
      }

      commit(DECREMENT_PAGINATION_TOTAL);
      commit(REMOVE_TRIGGER, id);
      commit(SET_ALERT, {
        success: true,
        message: 'Trigger has been successfully deleted',
      });
    },
    async createTrigger({ commit }, trigger) {
      const { error } = await TriggersService.createTrigger(trigger);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while creating the trigger',
        });
        return;
      }

      commit(CLOSE_APP_MODAL);
      commit(SET_ALERT, {
        success: true,
        message: 'Trigger has been successfully created',
      });
    },
    async editTrigger({ commit }, { id, trigger }) {
      const { data, error } = await TriggersService.editTrigger(id, trigger);

      if (error) {
        commit(SET_ALERT, {
          success: false,
          message: 'Error occurred while editing the trigger',
        });
        return;
      }

      const updatedTrigger = formatTriggers([data])[0];

      commit(UPDATE_TRIGGER, { id, updatedTrigger });
      commit(CLOSE_APP_MODAL);
      commit(SET_ALERT, {
        success: true,
        message: 'Trigger has been successfully edited',
      });
    },
    hideAlert({ commit }) {
      commit(SET_ALERT_VISIBILITY, false);
    },
    showAlert({ commit }) {
      commit(SET_ALERT, {
        success: false,
        message: 'Something went wrong.Try again!',
      });
    },
  },
  modules: {},
});
