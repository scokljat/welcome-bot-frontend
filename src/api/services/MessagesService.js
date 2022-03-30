import axios from '../http';

const MessagesService = {
  fetchMessages: async ({ pageNumber }) => {
    const url = `/messages?offset=${pageNumber - 1}&pagesize=15`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
  fetchAllMessages: async () => {
    const url = '/messages';
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
  deleteMessage: async (id) => {
    const url = `/messages/${id}`;
    try {
      const response = await axios.delete(url);
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
  createMessage: async (message) => {
    const url = `/messages`;
    try {
      const response = await axios.post(url, message);
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
  editMessage: async (id, message) => {
    const url = `/messages/${id}`;
    try {
      const response = await axios.put(url, message);
      return response.data;
    } catch (e) {
      console.log(e.message);
    }
  },
};
export default MessagesService;
