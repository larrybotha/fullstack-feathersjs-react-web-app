export const USER_ADD = '@user/ADD';
export const addUser = ({username, password}) => ({
  type: USER_ADD,
  username,
  password,
});

export const USER_ADD_SUCCESS = '@user/ADD_SUCCESS';
export const addUserSuccess = username => ({
  type: USER_ADD_SUCCESS,
  username,
});
