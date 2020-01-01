import axios from './base';

export function signInWithEmail(email, password) {
  return axios()
    .post('/signin', {
      email,
      password,
    })
    .then(res => res.data);
}

export function signInWithToken(token) {
  return axios(token)
    .post('/signin')
    .then(res => res.data);
}
