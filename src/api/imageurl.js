import axios from './base';

export function processImageInput(token, input) {
  return axios(token)
    .post('/imageurl', {
      input,
    })
    .then(res => res.data);
}

