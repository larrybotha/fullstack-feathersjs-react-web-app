import * as actions from '../actions/user';

const initialState = {
  currentUser: undefined,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_ADD_SUCCESS:
    // return {...state, currentUser: action.email};

    default:
      return state;
  }
};

export default userReducer;
