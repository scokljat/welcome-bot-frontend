import axios from '../http';

const TriggersService = {
  fetchTriggers: async ({ pageNumber }) => {
    try {
      const response = await axios.get(
        `/triggers?offset=${pageNumber - 1}&pagesize=15`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  deleteTrigger: async (id) => {
    try {
      const response = await axios.delete(`/triggers/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
  createTrigger: async (trigger) => {
    try {
      const response = await axios.post('/triggers', trigger);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default TriggersService;
