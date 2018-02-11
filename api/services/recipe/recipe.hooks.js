// get authentication hooks from feathers authentication
const authHooks = require('@feathersjs/authentication').hooks;

const recipeValidator = require('../../schemas/recipe');

// this function validates data sent to the server using our recipeValidator
const validate = context => {
  const valid = recipeValidator(context.data);

  if (!valid) {
    throw new Error('Invalid JSON');
  }
};

// we populate the created object with additional fields
const populateFields = context => {
  // add the createdAt field
  context.data.createdAt = new Date().getTime();
  // Add the userId to the recipe so that we know who created it
  // The only reason we have 'user' in this context is because we've used
  // authHooks.authenticate('jwt') which is responsible for verifying the token
  // sent with the request, and then adding the user to context after that
  context.data.userId = context.params.user._id;
};

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    // we add a create hook here we instead of relying on the client
    // to send the createdAt date - we handle it on the server.
    // Write the field straight to the data we have received from the
    // client.
    create: [
      // we're using jwt for authentication, so feathers needs us to indicate here
      // what strategy to use to evaluate the request
      // This prevents 'just anyone' from adding a recipe, whether via our ui, or
      // through any other mechanism (using curl etc.)
      authHooks.authenticate('jwt'),
      // we then validate the data sent in the request
      validate,
      // and we add fields to the object in a single function
      populateFields,
    ],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
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
