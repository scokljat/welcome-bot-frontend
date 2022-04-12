import axios from '../http';
const AuthService = {
  login: async (token) => {
    const url = 'auth/login';
    try {
      const { data } = await axios.post(url, { accessToken: token });

      return { data };
    } catch (error) {
      return { error };
    }
  },
};
export default AuthService;
