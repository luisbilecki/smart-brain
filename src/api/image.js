import axios from './base';

export function updateEntries(userId, token) {
  return axios(token)
    .put('/image', {
      id: userId,
    })
    .then(res => res.data);
}
