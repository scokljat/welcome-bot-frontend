import axios from '../http';

const TriggersService = {
  fetchTriggers: async (pageNumber) => {
    const url = `/triggers?offset=${pageNumber - 1}&pagesize=15`;
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  deleteTrigger: async (id) => {
    const url = `/triggers/${id}`;
    try {
      const response = await axios.delete(url);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  createTrigger: async (trigger) => {
    const url = '/triggers';
    try {
      const response = await axios.post(url, trigger);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  editTrigger: async (id, trigger) => {
    const url = `/triggers/${id}`;
    try {
      const response = await axios.put(url, trigger);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default TriggersService;
