import axios from 'axios';
import { DELETE_ITEM, GET_ERRORS } from './types';

// Delete item
export const deleteItem = data => dispatch => {
  axios
    .delete(`/api/items/${data}`)
    .then(res => dispatch({
      type: DELETE_ITEM,
      payload: data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }))
};