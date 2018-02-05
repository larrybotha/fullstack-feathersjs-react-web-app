export const USER_AUTH_REQUEST = '@user/AUTH_REQUEST';
export const authUserRequest = () => ({
  type: USER_AUTH_REQUEST,
});

export const USER_AUTH_SUCCESS = '@user/AUTH_SUCCESS';
export const authUserSuccess = () => ({
  type: USER_AUTH_SUCCESS,
});

export const USER_ADD_REQUEST = '@user/ADD_REQUEST';
export const addUser = ({email, password}) => ({
  type: USER_ADD_REQUEST,
  email,
  password,
});

export const USER_ADD_SUCCESS = '@user/ADD_SUCCESS';
export const addUserSuccess = email => ({
  type: USER_ADD_SUCCESS,
  email,
});

// create action for requesting a log in
export const USER_LOGIN_REQUEST = '@user/LOGIN_REQUEST';
// The data passed in here comes from the action dispatched via the form.
// In users saga we subscribe to this action, and fire the request against
// the API from there
export const login = ({email, password}) => ({
  type: USER_LOGIN_REQUEST,
  email,
  password,
});

// If the API request fired from the saga succeeds, we pass the current user
// to our reducer
export const USER_LOGIN_SUCCESS = '@user/LOGIN_SUCCESS';
export const loginSuccess = currentUser => ({
  type: USER_LOGIN_SUCCESS,
  ...currentUser,
});

// otherwise we dispatch the fail action
export const USER_LOGIN_FAIL = '@user/LOGIN_FAIL';
export const loginFailure = () => ({
  type: USER_LOGIN_FAIL,
});

export const USER_LOGOUT_REQUEST = '@user/LOGOUT_REQUEST';
export const logout = () => ({
  type: USER_LOGOUT_REQUEST,
});

export const USER_LOGOUT_SUCCESS = '@user/LOGOUT_SUCCESS';
export const logoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS,
});
