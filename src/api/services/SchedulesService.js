import axios from '../http';
const SchedulesService = {
  fetchSchedules: async (pageNumber) => {
    const response = await axios.get(
      `/schedules?offset=${pageNumber - 1}&pagesize=15`
    );
    return response.data;
  },
};
export default SchedulesService;
