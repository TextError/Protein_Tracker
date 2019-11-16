import { USER } from '../actions/types';

const INITIAL_STATE = {
  user: {},
  isAuth: false,
  errors: {},
  isLoading: false
}

const user = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case USER.LOADING:
      return { ...state, isLoading: true };
    case USER.LOADED:
      return { ...state, isLoading: false };
    case USER.ERROR:
      return { ...state, errors: payload };
    case USER.CLEAR_ERRORS:
      return { ...state, errors: {} };
    default:
      return state;
  }
};

export default user;