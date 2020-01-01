import axios from './base';

export function getProfile(userId, token) {
  return axios(token)
    .get(`/profile/${userId}`)
    .then(res => res.data);
}

export function updateProfile(userId, token, data) {
  return axios(token)
    .post(`/profile/${userId}`, {
      formInput: data
    });
}



