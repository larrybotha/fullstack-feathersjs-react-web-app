module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    // we add a create hook here we instead of relying on the client
    // to send the createdAt date - we handle it on the server.
    // Write the field straight to the data we have received from the
    // client.
    create(context) {
      context.data.createdAt = new Date().getTime();
    },
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
