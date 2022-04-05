import axios from '../http';
const AuthService = {
  login: async (token) => {
    const url = 'auth/login';
    try {
      const response = await axios.post(url, { idToken: token });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
export default AuthService;
