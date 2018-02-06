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
  return users.create({email, password}).then((data, err) => data);
};

// the integration with our server. We receive the data sent via our saga handler
export const login = (app, {email, password}) => {
  // and use app.authenticate, using localstorage to store the returned key,
  // and pass through the details the user entered in the form
  return (
    app
      .authenticate({
        strategy: 'local',
        email,
        password,
      })
      // if it resolves, we return the data from the server
      .then(data => {
        return data;
      })

      // if it is rejected, send back an empty object that we can use to
      // determine if the request was a success or failure
      .catch(err => {
        console.log(err);
        // return the full error here so we can get better feedback on what's going
        // on when the server to log in
        return err;
      })
  );
};

// create the integration for logging a user out
export const logout = app => {
  // all we need to do is return the promise from app.logout
  return app.logout().then(data => data);
};

// authenticate the user only using jwt, as configured in our store
export const authUser = app => {
  return (
    app
      // don't specify any options here - authenticate() without any arguments
      // will auth the user using localStorage if the feathers-jwt token is present
      .authenticate()
      .then(data => data)
      .catch(err => err)
  );
};
