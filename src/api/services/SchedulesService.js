import axios from '../http';
const SchedulesService = {
  fetchSchedules: async (pageNumber) => {
    const url = `/schedules?offset=${pageNumber - 1}&pagesize=15`;
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },
  deleteSchedule: async (id) => {
    const url = `/schedules/${id}`;
    try {
      const { data } = await axios.delete(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },
  createSchedule: async (schedule) => {
    const url = '/schedules';
    try {
      const { data } = await axios.post(url, schedule);

      return { data };
    } catch (error) {
      return { error };
    }
  },
  editSchedule: async (id, schedule) => {
    const url = `/schedules/${id}`;
    try {
      const { data } = await axios.put(url, schedule);

      return { data };
    } catch (error) {
      return { error };
    }
  },
};
export default SchedulesService;
