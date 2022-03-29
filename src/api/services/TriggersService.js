import axios from '../http';

const TriggersService = {
  fetchTriggers: async ({ pageNumber }) => {
    const response = await axios.get(
      `/triggers?offset=${pageNumber - 1}&pagesize=15`
    );
    return response.data;
  },
};
export default TriggersService;
