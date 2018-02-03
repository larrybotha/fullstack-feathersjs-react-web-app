import * as actions from '../actions/user';

const initialState = {
  currentUser: undefined,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_SUCCESS:
      return {...state, ...action.currentUser};

    case actions.USER_ADD_SUCCESS:
    default:
      return state;
  }
};

export default userReducer;
