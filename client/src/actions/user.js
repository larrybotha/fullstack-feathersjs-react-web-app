export const USER_ADD_REQUEST = '@user/ADD_REQUEST';
export const addUser = ({email, password}) => ({
  type: USER_ADD,
  email,
  password,
});

export const USER_ADD_SUCCESS = '@user/ADD_SUCCESS';
export const addUserSuccess = email => ({
  type: USER_ADD_SUCCESS,
  email,
});

export const USER_LOGIN_REQUEST = '@user/LOGIN_REQUEST';
export const login = () => ({
  type: USER_LOGIN_REQUEST,
});

export const USER_LOGIN_SUCCESS = '@user/LOGIN_SUCCESS';
export const loginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user,
});
