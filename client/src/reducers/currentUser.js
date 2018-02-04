import * as actions from '../actions/currentUser';

const initialState = {};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_SUCCESS:
      return {...state, ...action.currentUser};

    case actions.USER_LOGOUT_SUCCESS:
      return initialState;

    case actions.USER_ADD_SUCCESS:
    default:
      return state;
  }
};

export default currentUserReducer;
