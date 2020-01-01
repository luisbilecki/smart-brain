import axios from './base';

export function signOut(token) {
  return axios(token)
    .delete('/signout')
    .then(res => res.data);
}
