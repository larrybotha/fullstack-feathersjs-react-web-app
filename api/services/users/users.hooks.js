const authentication = require('@feathersjs/authentication');
const local = require('@feathersjs/authentication-local');

module.exports = {
  before: {
    all: [],
    // this will use jwt to authenticate requests, or something. Don't really know
    // what this is.
    find: [authentication.hooks.authenticate('jwt')],
    get: [],
    // this will hash the password on creation of a user
    create: [local.hooks.hashPassword('jwt')],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    // prevent password being sent back in responses, apparently. Didn't get this
    // to work.
    all: [local.hooks.protect('password')],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
