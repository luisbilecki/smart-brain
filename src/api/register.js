import axios from './base';

export function registerUser(name, email, password) {
  return axios()
    .post('/register', {
      email,
      password,
      name,
    })
    .then(res => res.data);
}
