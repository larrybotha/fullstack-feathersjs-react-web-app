const authentication = require('@feathersjs/authentication');
const local = require('@feathersjs/authentication-local');
const jwt = require('@feathersjs/authentication-jwt');
const hooks = require('feathers-hooks-common');

const permittedFields = ['accessToken', 'user.email', 'user._id'];

const getUserDetails = hook => {
  hook.result = Object.assign({}, hook.result, {user: hook.params.user});
};

module.exports = app => {
  // set the configuration options - the secret is required
  const options = {secret: 'fs-secret'};

  // configure the app with authentication. This has to be done before any serviers
  // are configured. Not sure why - docs don't outline it. What happens if we don't?
  // Does authentication fail completely? Is it a security issue?
  app
    .configure(authentication(options))
    // what does this mean - does this have anything to do with localStorage on the
    // client?
    .configure(local())
    // use JWT for auth
    .configure(jwt());

  // configure hooks for authentication
  app.service('authentication').hooks({
    before: {
      // indicate to the auth service to use jwt and local as authentication
      // strategies
      create: [authentication.hooks.authenticate(['jwt', 'local'])],
      // when we remove an authentication(?) do something with jwt...?
      remove: [authentication.hooks.authenticate('jwt')],
    },
    after: {
      // after authentication, get the user details, and ensure we only return
      // specific fields
      create: [getUserDetails, hooks.keep(...permittedFields)],
    },
  });
};
