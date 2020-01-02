import axios from 'axios';

const rankUrl = process.env.REACT_APP_RANK_LAMBDA_URL;

export function generateEmoji(entries) {
  return axios.get(`${rankUrl}?entries=${entries}`)
    .then(res => res.data);
}
