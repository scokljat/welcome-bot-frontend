import axios from '../http';

const TriggersService = {
  fetchTriggers: async (pageNumber) => {
    const url = `/triggers?offset=${pageNumber - 1}&pagesize=15`;
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },
  deleteTrigger: async (id) => {
    const url = `/triggers/${id}`;
    try {
      const { data } = await axios.delete(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },
  createTrigger: async (trigger) => {
    const url = '/triggers';
    try {
      const { data } = await axios.post(url, trigger);

      return { data };
    } catch (error) {
      return { error };
    }
  },
  editTrigger: async (id, trigger) => {
    const url = `/triggers/${id}`;
    try {
      const { data } = await axios.put(url, trigger);

      return { data };
    } catch (error) {
      return { error };
    }
  },
};
export default TriggersService;
