import * as actions from '../actions/currentUser';

const initialState = {
  recipes: [],
};

const currentUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_AUTH_SUCCESS:
    case actions.USER_LOGIN_SUCCESS:
      return {...state, ...action.currentUser};

    case actions.USER_RECIPES_SUCCESS:
      return {...state, recipes: action.recipes};
    case actions.USER_LOGOUT_SUCCESS:
      return initialState;

    case actions.USER_ADD_SUCCESS:
    default:
      return state;
  }
};

export default currentUserReducer;
