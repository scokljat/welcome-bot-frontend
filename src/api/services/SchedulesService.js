import axios from '../http';
const SchedulesService = {
  fetchSchedules: async ({ pageNumber }) => {
    try {
      const url = `/schedules?offset=${pageNumber - 1}&pagesize=15`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  deleteSchedule: async (id) => {
    try {
      const url = `/schedules/${id}`;
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  createSchedule: async (schedule) => {
    try {
      const url = '/schedules';
      const response = await axios.post(url, schedule);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  editSchedule: async (id, schedule) => {
    try {
      const url = `/schedules/${id}`;
      const response = await axios.put(url, schedule);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default SchedulesService;
