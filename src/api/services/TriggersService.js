import axios from '../http';

const TriggersService = {
  fetchTriggers: async (pageNumber) => {
    try {
      const url = `/triggers?offset=${pageNumber - 1}&pagesize=15`;
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  deleteTrigger: async (id) => {
    try {
      const url = `/triggers/${id}`;
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  createTrigger: async (trigger) => {
    try {
      const url = '/triggers';
      const response = await axios.post(url, trigger);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default TriggersService;
