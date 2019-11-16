import axios from 'axios';
import URL from './utils/URL';
import { USER } from './types';
import { toastr } from 'react-redux-toastr';

export const register = ({ data, history }) => dispatch => {
  dispatch({ type: USER.LOADING });
  axios.post(`${URL.account}/register`, data)
    .then(() => {
      dispatch({ type: USER.REGISTER });
      dispatch({ type: USER.LOADED });
      toastr.success('Success!', 'Registered successfully');
      history.push('/login');
    })
    .catch(err => {
      dispatch({ type: USER.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: USER.LOADED });
    })
};

export const signIn = obj => dispatch => {
  dispatch({ type: USER.LOADING });
  axios.post(`${URL.account}/sign-in`, obj)
    .then(user => console.log(user))
    .catch(err => {
      dispatch({ type: USER.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: USER.LOADED });
    })
}

export const clearUserErrors = () => {
  return { type: USER.CLEAR_ERRORS, payload: {} }
}