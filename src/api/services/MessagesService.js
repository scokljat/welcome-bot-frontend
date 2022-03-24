import axios from '../http';

const MessagesService = {
  fetchMessages: async ({ pageNumber }) => {
    const response = await axios.get(
      `/messages?offset=${pageNumber - 1}&pagesize=15`
    );
    return response.data;
  },
};
export default MessagesService;
