import axios from '../http';
const AuthService = {
  login: async (idToken) => {
    const url = 'auth/login';
    try {
      const response = await axios.post(url, { idToken });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default AuthService;
