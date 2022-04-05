import axios from '../http';

const MessagesService = {
  fetchMessages: async (pageNumber) => {
    const url = `/messages?offset=${pageNumber - 1}&pagesize=15`;
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },
  fetchAllMessages: async () => {
    const url = '/messages';
    try {
      const { data } = await axios.get(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },
  deleteMessage: async (id) => {
    const url = `/messages/${id}`;
    try {
      const { data } = await axios.delete(url);

      return { data };
    } catch (error) {
      return { error };
    }
  },
  createMessage: async (message) => {
    const url = `/message`;
    try {
      const { data } = await axios.post(url, message);

      return { data };
    } catch (error) {
      return { error };
    }
  },
  editMessage: async (id, message) => {
    const url = `/messages/${id}`;
    try {
      const { data } = await axios.put(url, message);

      return { data };
    } catch (error) {
      return { error };
    }
  },
};
export default MessagesService;
