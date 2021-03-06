import { USER, TARGET, ADMIN, MEAL } from '../actions/types';

const INITIAL_STATE = {
  user: {
    error: {}
  },
  target: {
    error: {}
  },
  meal: {
    error: {}
  },
  admin: {
    error: {}
  }
}

const error = ( state=INITIAL_STATE, action ) => {
  const { payload } = action;
  switch(action.type) {
    case USER.ERROR:
      return { ...state, user: { ...state.user, error: payload } }
    case USER.CLEAR_ERRORS:
      return { ...state, user: { ...state.user, error: {} } }

    case TARGET.ERROR:
      return { ...state, target: { ...state.target, error: payload } }
    case TARGET.CLEAR_ERRORS:
      return { ...state, target: { ...state.target, error: {} } }

    case MEAL.ERROR:
      return { ...state, meal: { ...state.meal, error: payload } }
    case MEAL.CLEAR_ERRORS:
      return { ...state, meal: { ...state.meal, error: {} } }

    case ADMIN.ERROR:
      return { ...state, admin: { ...state.admin, error: payload } }
    case ADMIN.CLEAR_ERRORS:
      return { ...state, admin: { ...state.admin, error: {} } }
    default:
      return state;
  }
};

export default error;