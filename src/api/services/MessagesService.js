import axios from '../http';

const MessagesService = {
  fetchMessages: async ({ pageNumber }) => {
    try {
      const response = await axios.get(
        `/messages?offset=${pageNumber - 1}&pagesize=15`
      );
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
  fetchAllMessages: async () => {
    try {
      const response = await axios.get('/messages');
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
  deleteMessage: async (id) => {
    try {
      const response = await axios.delete(`/messages/${id}`);
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
  createMessage: async (message) => {
    try {
      const response = await axios.post(`/messages`, message);
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
};
export default MessagesService;
