// our createUser service which is called by our addUser saga handler, and which
// passes through the email and password that the server will use to create a
// user for us.
export const createUser = (app, {email, password}) => {
  // get the users service
  const users = app.service('users');

  // send the request to create the user
  // We return the data in the success response - this is what 'response' is
  // assigned to in our addUser handler.
  // What happens if the promise fails?
  // Do we catch that in the saga?
  // Surely we don't handle that here
  return users.create({email: email, password}).then((data, err) => data);
};
