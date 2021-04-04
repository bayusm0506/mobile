import axios from 'axios';

import {API_URL} from '../../../config';

export const GetLogin = async data => {
  return await axios({
    url: API_URL + '/register/login',
    data: data,
    method: 'POST',
  })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
    });
};
