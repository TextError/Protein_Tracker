import axios from 'axios';
import URL from './utils/URL';
import { ADMIN } from './types';
import { toastr } from 'react-redux-toastr';

export const updateAdmin = () => dispatch => {
  dispatch({ type: ADMIN.LOADING });
  axios.get(`${URL.admin}/update`)
    .then(({ data }) => {
      dispatch({ type: ADMIN.UPDATE, payload: data });
      dispatch({ type: ADMIN.LOADED });
    })
    .catch(err => {
      dispatch({ type: ADMIN.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: ADMIN.LOADED });
    })
}

export const saveItem = obj => dispatch => {
  dispatch({ type: ADMIN.LOADING });
  dispatch({ type: ADMIN.SAVE_ITEM_REDUX, payload: obj });
  axios.post(`${URL.admin}/save-item`, obj)
    .then(({ data: { items } }) => {
      dispatch({ type: ADMIN.SAVE_ITEM , payload: items});
      dispatch({ type: ADMIN.LOADED });
      toastr.success('Success!', 'Item saved');
    })
    .catch(err => {
      dispatch({ type: ADMIN.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
      dispatch({ type: ADMIN.LOADED });
    })
}

export const deleteItem = obj => dispatch => {
  axios.post(`${URL.admin}/delete-item`, obj)
    .then(({ data: { _id } }) => {
      dispatch({ type: ADMIN.DELETE_ITEM, payload: _id });
      toastr.success('Success!', 'Item deleted');
    })
    .catch(err => {
      dispatch({ type: ADMIN.ERROR, payload: err.response.data })
      toastr.error('Error!', 'Ooops');
    })
}

export const clearAdminErrors = () => {
  return { type: ADMIN.CLEAR_ERRORS }
}