import axios from '../http';

const MessagesService = {
  fetchMessages: async ({ pageNumber }) => {
    const response = await axios.get(
      `/messages?offset=${pageNumber - 1}&pagesize=15`
    );
    return response.data;
  },
  fetchAllMessages: async () => {
    const response = await axios.get('/messages');
    return response.data;
  },
  deleteMessage: async (id) => {
    const response = await axios.delete(`/messages/${id}`);
    return response.data;
  },
};
export default MessagesService;
