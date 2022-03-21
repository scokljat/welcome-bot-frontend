import SchedulesService from '@/api/services/SchedulesService';
import { createStore } from 'vuex';
import {
  OPEN_APP_MODAL,
  CLOSE_APP_MODAL,
  SET_SCHEDULES,
} from './mutation-types';

export default createStore({
  state: {
    isModalActive: false,
    schedules: [],
  },
  getters: { getSchedules: (state) => state.schedules },
  mutations: {
    [OPEN_APP_MODAL]: (state) => {
      state.isModalActive = true;
    },
    [CLOSE_APP_MODAL]: (state) => {
      state.isModalActive = false;
    },
    [SET_SCHEDULES]: (state, payload) => {
      state.schedules = payload;
    },
  },
  actions: {
    fetchSchedules({ commit }) {
      const response = SchedulesService.fetchSchedules();
      commit(SET_SCHEDULES, response);
    },
  },
  modules: {},
});
