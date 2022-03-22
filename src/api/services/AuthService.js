const AuthService = {
  login: ({ token }) => {
    //when we use real request
    //  const response=await axios.post('/login',{token})
    //  return {response.data}
    return { token };
  },
};
export default AuthService;
