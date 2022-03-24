import { createStore } from 'vuex';
import format from 'date-fns/format';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  SET_USER,
  SET_SCHEDULES,
  REMOVE_SCHEDULE,
} from './mutation-types';
import AuthService from '@/api/services/AuthService';
import SchedulesService from '@/api/services/SchedulesService';

export default createStore({
  state: {
    isModalActive: false,
    token: localStorage.getItem('token') || null,
    schedules: [],
  },
  getters: {
    isLoggedIn: (state) => Boolean(state.token),
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
    [SET_SCHEDULES]: (state, payload) => {
      state.schedules = payload;
    },
    [REMOVE_SCHEDULE]: (state, id) => {
      state.schedules = state.schedules.filter((schedule) => {
        return schedule.scheduleId !== id;
      });
    },
  },
  actions: {
    login({ commit }, token) {
      const response = AuthService.login(token);
      commit(SET_USER, response);
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
      commit(SET_SCHEDULES, schedules);
    },
    async deleteSchedule({ commit }, id) {
      await SchedulesService.deleteSchedule(id);
      commit(REMOVE_SCHEDULE, id);
    },
  },
  modules: {},
});
