export const createUser = (app, {username, password}) => {
  const users = app.service('users');

  return users.create({email: username, password}).then((data, err) => data);
};
