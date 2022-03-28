import axios from '../http';
const SchedulesService = {
  fetchSchedules: async ({ pageNumber }) => {
    try {
      const response = await axios.get(
        `/schedules?offset=${pageNumber - 1}&pagesize=15`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  deleteSchedule: async (id) => {
    try {
      const response = await axios.delete(`/schedules/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  createSchedule: async (schedule) => {
    try {
      const response = await axios.post('/schedules', schedule);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  editSchedule: async (id, schedule) => {
    try {
      const response = await axios.put(`/schedules/${id}`, schedule);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default SchedulesService;
