import axios from 'axios';

const setAuthToken = (token, type) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
    localStorage.setItem(type, token);
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
    localStorage.removeItem(type);
  }
};

export default setAuthToken;