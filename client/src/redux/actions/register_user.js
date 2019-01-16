import axios from 'axios';

import { GET_ERRORS } from './types';

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .get('/api/users/register/', userData)
    .then(res => history.push('/login'))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}