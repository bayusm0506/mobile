import axios from 'axios';

import {API_URL} from '../../../config';

export const GetLogin = async data => {
  return await axios
    .post(API_URL + '/register/login', data)
    .then(response => response.data);
};
