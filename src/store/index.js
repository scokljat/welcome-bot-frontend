import { createStore } from 'vuex';
import SchedulesService from '@/api/services/SchedulesService';
import format from 'date-fns/format';
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
      const data = SchedulesService.fetchSchedules();

      data.forEach((schedule) => {
        schedule.nextRun = format(new Date(schedule.nextRun), 'dd MMM yyyy');
      });

      commit(SET_SCHEDULES, data);
    },
  },
  modules: {},
});
