import axios from 'axios';

const instance = (token) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  // Only add token if its present
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return axios.create({
    baseURL: 'http://localhost:3000',
    headers: headers,
  });
};


export default instance;
