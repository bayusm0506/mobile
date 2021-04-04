import axios from 'axios';

import {API_URL} from '../../../config';

export const get = () => {
  return axios
    .get(API_URL + '', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
};
