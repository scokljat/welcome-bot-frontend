import axios from '../http';
const SchedulesService = {
  fetchSchedules: async (pageNumber) => {
    const url = `/schedules?offset=${pageNumber - 1}&pagesize=15`;
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  deleteSchedule: async (id) => {
    const url = `/schedules/${id}`;
    try {
      const response = await axios.delete(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  createSchedule: async (schedule) => {
    const url = '/schedules';
    try {
      const response = await axios.post(url, schedule);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  editSchedule: async (id, schedule) => {
    const url = `/schedules/${id}`;
    try {
      const response = await axios.put(url, schedule);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default SchedulesService;
